jest.mock("@actions/core")
jest.mock("@actions/github")

import { getInput, setFailed } from "@actions/core"
import {
  createCommentMock,
  graphqlMock,
  listCommentsMock,
  listFilesMock,
} from "@actions/github"

import { remind } from "../src"

const files = (...filenames) => ({
  data: filenames.map((filename) => ({ filename })),
})

const comments = (...comments) => ({
  data: comments.map((body) => ({ body })),
})

function mockInput({
  changelogRegex = "CHANGELOG\\.md",
  message = "@mskelton your pull request is missing a changelog!",
}) {
  getInput.mockImplementation((input) => {
    return { changelogRegex, message }[input]
  })
}

beforeEach(() => {
  jest.resetAllMocks()

  mockInput({})
  listFilesMock.mockResolvedValue(files("file"))
  listCommentsMock.mockResolvedValue(comments("comment1", "comment2"))
})

it("should not create a comment when the regex finds a changelog", async () => {
  listFilesMock.mockResolvedValue(files("file", "CHANGELOG.md"))

  await remind()
  expect(createCommentMock).not.toHaveBeenCalled()
})

it("should create a comment when the regex does not find a changelog", async () => {
  mockInput({ changelogRegex: "src\\/CHANGELOG\\.html" })
  listFilesMock.mockResolvedValue(
    files("file", "CHANGELOG.html", "CHANGELOG.md")
  )

  await remind()
  expect(createCommentMock).toHaveBeenCalled()
})

it("should use the 'message' input for the comment message", async () => {
  mockInput({ message: "Oops! You forgot" })
  listFilesMock.mockResolvedValue(files("file"))

  await remind()
  expect(createCommentMock).toHaveBeenCalledWith(
    expect.objectContaining({ body: "Oops! You forgot" })
  )
})

it("should not comment if the comment already exists", async () => {
  mockInput({ message: "custom message" })
  listFilesMock.mockResolvedValue(files("file"))
  listCommentsMock.mockResolvedValue(comments("custom message"))

  await remind()
  expect(createCommentMock).not.toHaveBeenCalled()
})

it("should not comment if the comment exists which mentioned another user", async () => {
  listFilesMock.mockResolvedValue(files("file"))
  listCommentsMock.mockResolvedValue(
    comments("@other-user your pull request is missing a changelog!")
  )

  await remind()
  expect(createCommentMock).not.toHaveBeenCalled()
})

it("should set the workflow as failed if an error occurs", async () => {
  listFilesMock.mockRejectedValue(new Error("Oops"))

  await remind()
  expect(setFailed).toHaveBeenCalledWith("Oops")
})

it("should minimize reminder comments after a changelog is committed", async () => {
  listFilesMock.mockResolvedValue(files("file"))
  await remind()
  expect(createCommentMock).toHaveBeenCalled()
  expect(graphqlMock).not.toHaveBeenCalled()

  listFilesMock.mockResolvedValue(files("file", "CHANGELOG.md"))
  listCommentsMock.mockResolvedValue(
    comments("@mskelton your pull request is missing a changelog!")
  )
  await remind()
  expect(graphqlMock).toHaveBeenCalled()
})

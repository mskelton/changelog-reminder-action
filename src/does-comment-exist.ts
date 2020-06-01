import { getInput } from "@actions/core"
import { context, GitHub } from "@actions/github"

export async function doesCommentExist() {
  const octokit = new GitHub(getInput("token"))
  const message = getInput("message")

  const { data: comments } = await octokit.issues.listComments({
    ...context.repo,
    issue_number: context.payload.pull_request!.number,
  })

  return comments.some(({ body }) => body === message)
}

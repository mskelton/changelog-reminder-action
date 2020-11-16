export const listFilesMock = jest.fn()
export const createCommentMock = jest.fn()
export const listCommentsMock = jest.fn()
export const graphqlMock = jest.fn()

export const getOctokit = () => ({
  graphql: graphqlMock,
  issues: {
    createComment: createCommentMock,
    listComments: listCommentsMock,
  },
  pulls: {
    listFiles: listFilesMock,
  },
})

export const context = {
  issue: {
    number: 123,
  },
  repo: {},
}

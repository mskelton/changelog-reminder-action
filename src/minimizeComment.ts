import { getInput } from "@actions/core"
import { GitHub } from "@actions/github"

const query = `
mutation($subjectId: ID!) {
  minimizeComment(input: { subjectId: $subjectId, classifier: RESOLVED }) {
    clientMutationId
  }
}
`

export async function minimizeComment(id: string) {
  const octokit = new GitHub(getInput("token"))
  await octokit.graphql(query, { subjectId: id })
}

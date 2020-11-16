import { getInput } from "@actions/core"
import { getOctokit } from "@actions/github"

const query = `
mutation($subjectId: ID!) {
  minimizeComment(input: { subjectId: $subjectId, classifier: RESOLVED }) {
    clientMutationId
  }
}
`

export async function minimizeComment(id: string) {
  const octokit = getOctokit(getInput("token"))
  await octokit.graphql(query, { subjectId: id })
}

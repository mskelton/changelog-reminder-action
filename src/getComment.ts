import { getInput } from "@actions/core"
import { context, getOctokit } from "@actions/github"

/**
 * Because multiple users can interact with a PR, we need to normalize the
 * comment text to remove any user at mentions to prevent creating duplicate
 * comments which only differ based on the user who they are mentioning.
 *
 * @param comment - The comment text to normalize
 */
function normalizeComment(comment: string | undefined) {
  return comment?.replace(/@[A-z\d-]+/g, "") ?? ""
}

export async function getComment() {
  const octokit = getOctokit(getInput("token"))
  const message = normalizeComment(getInput("message"))

  const { data: comments } = await octokit.rest.issues.listComments({
    ...context.repo,
    issue_number: context.issue.number,
  })

  return comments.find(({ body }) => normalizeComment(body) === message)
}

import { getInput } from "@actions/core"
import { context, GitHub } from "@actions/github"

/**
 * Because multiple users can interact with a PR, we need to normalize the
 * comment text to remove any user at mentions to prevent creating duplicate
 * comments which only differ based on the user who they are mentioning.
 *
 * @param comment - The comment text to normalize
 */
function normalizeComment(comment: string) {
  return comment.replace(/@[A-z\d-]+/g, "")
}

export async function doesCommentExist() {
  const octokit = new GitHub(getInput("token"))
  const message = normalizeComment(getInput("message"))

  const { data: comments } = await octokit.issues.listComments({
    ...context.repo,
    issue_number: context.payload.pull_request!.number,
  })

  return comments.some(({ body }) => normalizeComment(body) === message)
}

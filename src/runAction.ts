import { getInput, setFailed } from "@actions/core"
import { context, getOctokit } from "@actions/github"
import { getComment } from "./getComment.js"
import { isChangelogMissing } from "./isChangelogMissing.js"
import { minimizeComment } from "./minimizeComment.js"

export async function runAction() {
  try {
    const octokit = getOctokit(getInput("token"))

    const [changelogMissing, comment] = await Promise.all([
      await isChangelogMissing(),
      await getComment(),
    ])

    if (changelogMissing && !comment) {
      await octokit.rest.issues.createComment({
        ...context.repo,
        body: getInput("message"),
        issue_number: context.issue.number,
      })
    }

    // If the comment exists and the changelog is not missing then the user
    // must have pushed a commit to add the changelog entry. When this happens
    // we can hide the now outdated comment.
    if (comment && !changelogMissing) {
      await minimizeComment(comment.node_id)
    }
  } catch (err) {
    setFailed((err as Error).message)
  }
}

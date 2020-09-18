import { getInput, setFailed } from "@actions/core"
import { context, GitHub } from "@actions/github"
import { doesCommentExist } from "./does-comment-exist"
import { isChangelogMissing } from "./is-changelog-missing"

export async function remind() {
  // Don't run the action on draft PRs
  if (context.payload.pull_request?.draft) {
    return
  }

  try {
    const octokit = new GitHub(getInput("token"))

    const [changelogMissing, commentExists] = await Promise.all([
      await isChangelogMissing(),
      await doesCommentExist(),
    ])

    if (changelogMissing && !commentExists) {
      await octokit.issues.createComment({
        ...context.repo,
        body: getInput("message"),
        issue_number: context.issue.number,
      })
    }
  } catch (err) {
    setFailed(err.message)
  }
}

remind()

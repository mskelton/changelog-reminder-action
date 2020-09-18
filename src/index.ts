import { getInput, setFailed } from "@actions/core"
import { context, GitHub } from "@actions/github"
import { doesCommentExist } from "./does-comment-exist"
import { isChangelogMissing } from "./is-changelog-missing"

export async function remind() {
  try {
    const octokit = new GitHub(getInput("token"))
    console.log(context)

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

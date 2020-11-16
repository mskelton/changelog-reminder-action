import { getInput } from "@actions/core"
import { context, GitHub } from "@actions/github"

export async function isChangelogMissing() {
  const octokit = new GitHub(getInput("token"))
  const changelogRegex = new RegExp(getInput("changelogRegex"))

  const { data: files } = await octokit.pulls.listFiles({
    ...context.repo,
    pull_number: context.payload.pull_request!.number,
  })

  return !files.some(({ filename }) => changelogRegex.test(filename))
}

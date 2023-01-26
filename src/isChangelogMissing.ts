import { getInput } from "@actions/core"
import { context, getOctokit } from "@actions/github"

export async function isChangelogMissing() {
  const octokit = getOctokit(getInput("token"))
  const changelogRegex = new RegExp(getInput("changelogRegex"))

  const { data: files } = await octokit.rest.pulls.listFiles({
    ...context.repo,
    pull_number: context.issue.number,
  })

  return !files.some(({ filename }) => changelogRegex.test(filename))
}

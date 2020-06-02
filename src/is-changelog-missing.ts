import { getInput } from "@actions/core"
import { context, GitHub } from "@actions/github"

export async function isChangelogMissing() {
  const octokit = new GitHub(getInput("token"))

  const changelogRegex = new RegExp(getInput("changelogRegex"))
  const includeRegex = new RegExp(getInput("include"))

  const exclude = getInput("exclude")
  const excludeRegex = new RegExp(exclude)

  const { data: files } = await octokit.pulls.listFiles({
    ...context.repo,
    pull_number: context.payload.pull_request!.number,
  })

  const hasChangelog = files.some(({ filename }) =>
    changelogRegex.test(filename)
  )

  const hasIncludedFile = files
    .filter(({ filename }) => !(exclude && excludeRegex.test(filename)))
    .some(({ filename }) => includeRegex.test(filename))

  return !hasChangelog && hasIncludedFile
}

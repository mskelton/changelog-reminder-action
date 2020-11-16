# Changelog Reminder Action

> Github action to remind users their pull request is missing a changelog.

![Example comments](https://raw.githubusercontent.com/mskelton/changelog-reminder-action/master/screenshot.png)

## Inputs

### `changelogRegex`

Regex pattern to match the changelog. Default: `CHANGELOG\.md`

### `message`

Message to display if no changelog is found. Default: `"@${{ github.actor }} your pull request is missing a changelog!"`

### `token`

`GITHUB_TOKEN` used to authenticate requests. Since there's a default, this is typically not supplied by the user. Default: `${{ github.token }}`

## Usage

Basic:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: mskelton/changelog-reminder-action@v2
```

Custom message:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: mskelton/changelog-reminder-action@v2
    with:
      message: "Oops! Looks like you forgot to update the changelog."
```

Ignore draft PRs:

```yml
on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    if: ${{ !github.event.pull_request.draft }}
    steps:
      - uses: actions/checkout@v2
      - uses: mskelton/changelog-reminder-action@v2
```

Include specific files:

```yml
on:
  pull_request:
    paths: ["packages/**"]
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: mskelton/changelog-reminder-action@v2
```

# Changelog Reminder Action

> Github action to remind users their pull request is missing a changelog.

![Example comments](https://raw.githubusercontent.com/mskelton/changelog-reminder-action/main/screenshot.png)

## Inputs

### `changelogRegex`

Regex pattern to match the changelog. Default: `CHANGELOG\.md`

### `message`

Message to display if no changelog is found. Default:
`"@${{ github.actor }} your pull request is missing a changelog!"`

### `token`

`GITHUB_TOKEN` used to authenticate requests. Since there's a default, this is
typically not supplied by the user. Default: `${{ github.token }}`

## Usage

Basic:

```yaml
on: pull_request
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mskelton/changelog-reminder-action@v3
```

Custom message:

```yaml
on: pull_request
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mskelton/changelog-reminder-action@v3
        with:
          message: "Oops! Looks like you forgot to update the changelog."
```

Ignore draft pull requests:

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    if: ${{ !github.event.pull_request.draft }}
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mskelton/changelog-reminder-action@v3
```

Include specific files:

```yaml
on:
  pull_request:
    paths: ["packages/**"]
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mskelton/changelog-reminder-action@v3
```

Using a personal access token (PAT):

```yaml
on: pull_request
name: Changelog Reminder
jobs:
  remind:
    name: Changelog Reminder
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mskelton/changelog-reminder-action@v3
        with:
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```

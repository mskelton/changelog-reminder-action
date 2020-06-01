# Changelog Reminder Action

> Github action to remind users their pull request is missing a changelog.

![Example comments](https://user-images.githubusercontent.com/1332395/64420560-76021d80-d097-11e9-936c-e1fc9e92fbfb.png)

## Inputs

### `changelogRegex`

Regex pattern to match the changelog. Default: `CHANGELOG\.md`

### `message`

Message to display if no changelog is found. Default: `"@${{ github.actor }} your pull request is missing a changelog!"`

### `include`

Regex pattern of files to include. This is useful for monorepos where you only want the changelog reminder to run for package changes. Default: `''`

### `token`

`GITHUB_TOKEN` used to authenticate requests. Since there's a default, this is typically not supplied by the user. Default: `${{ github.token }}`

## Usage

Basic:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: mskelton/changelog-reminder-action@v1
```

Custom message:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: mskelton/changelog-reminder-action@v1
    with:
      message: "Oops! Looks like you forgot to update the changelog."
```

Include specific files:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: mskelton/changelog-reminder-action@v1
    with:
      include: "packages/.*"
```

export const listFilesMock = jest.fn()
export const createCommentMock = jest.fn()
export const listCommentsMock = jest.fn()

export class GitHub {
  issues = {
    createComment: createCommentMock,
    listComments: listCommentsMock,
  }

  pulls = {
    listFiles: listFilesMock,
  }
}

export const context = {
  action: "mskeltontest-action",
  actor: "mskelton",
  eventName: "pull_request",
  issue: {
    number: 1,
  },
  payload: {
    action: "reopened",
    number: 2,
    pull_request: {
      _links: {
        comments: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/2/comments",
        },
        commits: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2/commits",
        },
        html: {
          href:
            "https://github.com/mskelton/test-changelog-reminder-action/pull/2",
        },
        issue: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/2",
        },
        review_comment: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/comments{/number}",
        },
        review_comments: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2/comments",
        },
        self: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2",
        },
        statuses: {
          href:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/statuses/17eb06d6665a55e07f5069b80cc09ae719d007b2",
        },
      },
      additions: 3,
      assignee: null,
      assignees: [],
      author_association: "OWNER",
      base: {
        label: "mskelton:master",
        ref: "master",
        repo: {
          archive_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/{archive_format}{/ref}",
          archived: false,
          assignees_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/assignees{/user}",
          blobs_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/blobs{/sha}",
          branches_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/branches{/branch}",
          clone_url:
            "https://github.com/mskelton/test-changelog-reminder-action.git",
          collaborators_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/collaborators{/collaborator}",
          comments_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/comments{/number}",
          commits_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/commits{/sha}",
          compare_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/compare/{base}...{head}",
          contents_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contents/{+path}",
          contributors_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contributors",
          created_at: "2019-08-30T14:00:36Z",
          default_branch: "master",
          deployments_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/deployments",
          description: null,
          disabled: false,
          downloads_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/downloads",
          events_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/events",
          fork: false,
          forks: 0,
          forks_count: 0,
          forks_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/forks",
          full_name: "mskelton/test-changelog-reminder-action",
          git_commits_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/commits{/sha}",
          git_refs_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/refs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/tags{/sha}",
          git_url:
            "git://github.com/mskelton/test-changelog-reminder-action.git",
          has_downloads: true,
          has_issues: true,
          has_pages: false,
          has_projects: true,
          has_wiki: true,
          homepage: null,
          hooks_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/hooks",
          html_url:
            "https://github.com/mskelton/test-changelog-reminder-action",
          id: 205393439,
          issue_comment_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/comments{/number}",
          issue_events_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/events{/number}",
          issues_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues{/number}",
          keys_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/keys{/key_id}",
          labels_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/labels{/name}",
          language: null,
          languages_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/languages",
          license: {
            key: "mit",
            name: "MIT License",
            node_id: "MDc6TGljZW5zZTEz",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
          },
          merges_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/merges",
          milestones_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/milestones{/number}",
          mirror_url: null,
          name: "test-changelog-reminder-action",
          node_id: "MDEwOlJlcG9zaXRvcnkyMDUzOTM0Mzk=",
          notifications_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/notifications{?since,all,participating}",
          open_issues: 2,
          open_issues_count: 2,
          owner: {
            avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
            events_url:
              "https://api.github.com/users/mskelton/events{/privacy}",
            followers_url: "https://api.github.com/users/mskelton/followers",
            following_url:
              "https://api.github.com/users/mskelton/following{/other_user}",
            gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
            gravatar_id: "",
            html_url: "https://github.com/mskelton",
            id: 1332395,
            login: "mskelton",
            node_id: "MDQ6VXNlcjEzMzIzOTU=",
            organizations_url: "https://api.github.com/users/mskelton/orgs",
            received_events_url:
              "https://api.github.com/users/mskelton/received_events",
            repos_url: "https://api.github.com/users/mskelton/repos",
            site_admin: false,
            starred_url:
              "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/mskelton/subscriptions",
            type: "User",
            url: "https://api.github.com/users/mskelton",
          },
          private: false,
          pulls_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls{/number}",
          pushed_at: "2019-09-02T15:01:18Z",
          releases_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/releases{/id}",
          size: 16,
          ssh_url: "git@github.com:mskelton/test-changelog-reminder-action.git",
          stargazers_count: 0,
          stargazers_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/stargazers",
          statuses_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/statuses/{sha}",
          subscribers_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscribers",
          subscription_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscription",
          svn_url: "https://github.com/mskelton/test-changelog-reminder-action",
          tags_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/tags",
          teams_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/teams",
          trees_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/trees{/sha}",
          updated_at: "2019-08-30T15:48:55Z",
          url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action",
          watchers: 0,
          watchers_count: 0,
        },
        sha: "3c020c640224be3d73995fca93f6912feec6f59c",
        user: {
          avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
          events_url: "https://api.github.com/users/mskelton/events{/privacy}",
          followers_url: "https://api.github.com/users/mskelton/followers",
          following_url:
            "https://api.github.com/users/mskelton/following{/other_user}",
          gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
          gravatar_id: "",
          html_url: "https://github.com/mskelton",
          id: 1332395,
          login: "mskelton",
          node_id: "MDQ6VXNlcjEzMzIzOTU=",
          organizations_url: "https://api.github.com/users/mskelton/orgs",
          received_events_url:
            "https://api.github.com/users/mskelton/received_events",
          repos_url: "https://api.github.com/users/mskelton/repos",
          site_admin: false,
          starred_url:
            "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mskelton/subscriptions",
          type: "User",
          url: "https://api.github.com/users/mskelton",
        },
      },
      body: "",
      changed_files: 3,
      closed_at: null,
      comments: 0,
      comments_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/2/comments",
      commits: 7,
      commits_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2/commits",
      created_at: "2019-08-30T15:52:38Z",
      deletions: 2,
      diff_url:
        "https://github.com/mskelton/test-changelog-reminder-action/pull/2.diff",
      draft: false,
      head: {
        label: "mskelton:mskelton-patch-1",
        ref: "mskelton-patch-1",
        repo: {
          archive_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/{archive_format}{/ref}",
          archived: false,
          assignees_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/assignees{/user}",
          blobs_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/blobs{/sha}",
          branches_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/branches{/branch}",
          clone_url:
            "https://github.com/mskelton/test-changelog-reminder-action.git",
          collaborators_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/collaborators{/collaborator}",
          comments_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/comments{/number}",
          commits_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/commits{/sha}",
          compare_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/compare/{base}...{head}",
          contents_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contents/{+path}",
          contributors_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contributors",
          created_at: "2019-08-30T14:00:36Z",
          default_branch: "master",
          deployments_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/deployments",
          description: null,
          disabled: false,
          downloads_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/downloads",
          events_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/events",
          fork: false,
          forks: 0,
          forks_count: 0,
          forks_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/forks",
          full_name: "mskelton/test-changelog-reminder-action",
          git_commits_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/commits{/sha}",
          git_refs_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/refs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/tags{/sha}",
          git_url:
            "git://github.com/mskelton/test-changelog-reminder-action.git",
          has_downloads: true,
          has_issues: true,
          has_pages: false,
          has_projects: true,
          has_wiki: true,
          homepage: null,
          hooks_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/hooks",
          html_url:
            "https://github.com/mskelton/test-changelog-reminder-action",
          id: 205393439,
          issue_comment_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/comments{/number}",
          issue_events_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/events{/number}",
          issues_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues{/number}",
          keys_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/keys{/key_id}",
          labels_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/labels{/name}",
          language: null,
          languages_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/languages",
          license: {
            key: "mit",
            name: "MIT License",
            node_id: "MDc6TGljZW5zZTEz",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
          },
          merges_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/merges",
          milestones_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/milestones{/number}",
          mirror_url: null,
          name: "test-changelog-reminder-action",
          node_id: "MDEwOlJlcG9zaXRvcnkyMDUzOTM0Mzk=",
          notifications_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/notifications{?since,all,participating}",
          open_issues: 2,
          open_issues_count: 2,
          owner: {
            avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
            events_url:
              "https://api.github.com/users/mskelton/events{/privacy}",
            followers_url: "https://api.github.com/users/mskelton/followers",
            following_url:
              "https://api.github.com/users/mskelton/following{/other_user}",
            gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
            gravatar_id: "",
            html_url: "https://github.com/mskelton",
            id: 1332395,
            login: "mskelton",
            node_id: "MDQ6VXNlcjEzMzIzOTU=",
            organizations_url: "https://api.github.com/users/mskelton/orgs",
            received_events_url:
              "https://api.github.com/users/mskelton/received_events",
            repos_url: "https://api.github.com/users/mskelton/repos",
            site_admin: false,
            starred_url:
              "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/mskelton/subscriptions",
            type: "User",
            url: "https://api.github.com/users/mskelton",
          },
          private: false,
          pulls_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls{/number}",
          pushed_at: "2019-09-02T15:01:18Z",
          releases_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/releases{/id}",
          size: 16,
          ssh_url: "git@github.com:mskelton/test-changelog-reminder-action.git",
          stargazers_count: 0,
          stargazers_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/stargazers",
          statuses_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/statuses/{sha}",
          subscribers_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscribers",
          subscription_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscription",
          svn_url: "https://github.com/mskelton/test-changelog-reminder-action",
          tags_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/tags",
          teams_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/teams",
          trees_url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/trees{/sha}",
          updated_at: "2019-08-30T15:48:55Z",
          url:
            "https://api.github.com/repos/mskelton/test-changelog-reminder-action",
          watchers: 0,
          watchers_count: 0,
        },
        sha: "17eb06d6665a55e07f5069b80cc09ae719d007b2",
        user: {
          avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
          events_url: "https://api.github.com/users/mskelton/events{/privacy}",
          followers_url: "https://api.github.com/users/mskelton/followers",
          following_url:
            "https://api.github.com/users/mskelton/following{/other_user}",
          gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
          gravatar_id: "",
          html_url: "https://github.com/mskelton",
          id: 1332395,
          login: "mskelton",
          node_id: "MDQ6VXNlcjEzMzIzOTU=",
          organizations_url: "https://api.github.com/users/mskelton/orgs",
          received_events_url:
            "https://api.github.com/users/mskelton/received_events",
          repos_url: "https://api.github.com/users/mskelton/repos",
          site_admin: false,
          starred_url:
            "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mskelton/subscriptions",
          type: "User",
          url: "https://api.github.com/users/mskelton",
        },
      },
      html_url:
        "https://github.com/mskelton/test-changelog-reminder-action/pull/2",
      id: 312796444,
      issue_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/2",
      labels: [],
      locked: false,
      maintainer_can_modify: false,
      merge_commit_sha: "ec149987107b119fbe98797d030aaadef496fa1d",
      mergeable: null,
      mergeable_state: "unknown",
      merged: false,
      merged_at: null,
      merged_by: null,
      milestone: null,
      node_id: "MDExOlB1bGxSZXF1ZXN0MzEyNzk2NDQ0",
      number: 2,
      patch_url:
        "https://github.com/mskelton/test-changelog-reminder-action/pull/2.patch",
      rebaseable: null,
      requested_reviewers: [],
      requested_teams: [],
      review_comment_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/comments{/number}",
      review_comments: 0,
      review_comments_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2/comments",
      state: "open",
      statuses_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/statuses/17eb06d6665a55e07f5069b80cc09ae719d007b2",
      title: "Update main.yml",
      updated_at: "2019-09-02T18:10:34Z",
      url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls/2",
      user: {
        avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
        events_url: "https://api.github.com/users/mskelton/events{/privacy}",
        followers_url: "https://api.github.com/users/mskelton/followers",
        following_url:
          "https://api.github.com/users/mskelton/following{/other_user}",
        gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/mskelton",
        id: 1332395,
        login: "mskelton",
        node_id: "MDQ6VXNlcjEzMzIzOTU=",
        organizations_url: "https://api.github.com/users/mskelton/orgs",
        received_events_url:
          "https://api.github.com/users/mskelton/received_events",
        repos_url: "https://api.github.com/users/mskelton/repos",
        site_admin: false,
        starred_url:
          "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/mskelton/subscriptions",
        type: "User",
        url: "https://api.github.com/users/mskelton",
      },
    },
    repository: {
      archive_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/{archive_format}{/ref}",
      archived: false,
      assignees_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/assignees{/user}",
      blobs_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/blobs{/sha}",
      branches_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/branches{/branch}",
      clone_url:
        "https://github.com/mskelton/test-changelog-reminder-action.git",
      collaborators_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/collaborators{/collaborator}",
      comments_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/comments{/number}",
      commits_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/compare/{base}...{head}",
      contents_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contents/{+path}",
      contributors_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/contributors",
      created_at: "2019-08-30T14:00:36Z",
      default_branch: "master",
      deployments_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/deployments",
      description: null,
      disabled: false,
      downloads_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/downloads",
      events_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/events",
      fork: false,
      forks: 0,
      forks_count: 0,
      forks_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/forks",
      full_name: "mskelton/test-changelog-reminder-action",
      git_commits_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/commits{/sha}",
      git_refs_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/tags{/sha}",
      git_url: "git://github.com/mskelton/test-changelog-reminder-action.git",
      has_downloads: true,
      has_issues: true,
      has_pages: false,
      has_projects: true,
      has_wiki: true,
      homepage: null,
      hooks_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/hooks",
      html_url: "https://github.com/mskelton/test-changelog-reminder-action",
      id: 205393439,
      issue_comment_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/comments{/number}",
      issue_events_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues/events{/number}",
      issues_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/issues{/number}",
      keys_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/keys{/key_id}",
      labels_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/labels{/name}",
      language: null,
      languages_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/languages",
      license: {
        key: "mit",
        name: "MIT License",
        node_id: "MDc6TGljZW5zZTEz",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
      },
      merges_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/merges",
      milestones_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/milestones{/number}",
      mirror_url: null,
      name: "test-changelog-reminder-action",
      node_id: "MDEwOlJlcG9zaXRvcnkyMDUzOTM0Mzk=",
      notifications_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/notifications{?since,all,participating}",
      open_issues: 2,
      open_issues_count: 2,
      owner: {
        avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
        events_url: "https://api.github.com/users/mskelton/events{/privacy}",
        followers_url: "https://api.github.com/users/mskelton/followers",
        following_url:
          "https://api.github.com/users/mskelton/following{/other_user}",
        gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/mskelton",
        id: 1332395,
        login: "mskelton",
        node_id: "MDQ6VXNlcjEzMzIzOTU=",
        organizations_url: "https://api.github.com/users/mskelton/orgs",
        received_events_url:
          "https://api.github.com/users/mskelton/received_events",
        repos_url: "https://api.github.com/users/mskelton/repos",
        site_admin: false,
        starred_url:
          "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/mskelton/subscriptions",
        type: "User",
        url: "https://api.github.com/users/mskelton",
      },
      private: false,
      pulls_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/pulls{/number}",
      pushed_at: "2019-09-02T15:01:18Z",
      releases_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/releases{/id}",
      size: 16,
      ssh_url: "git@github.com:mskelton/test-changelog-reminder-action.git",
      stargazers_count: 0,
      stargazers_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/stargazers",
      statuses_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/statuses/{sha}",
      subscribers_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscribers",
      subscription_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/subscription",
      svn_url: "https://github.com/mskelton/test-changelog-reminder-action",
      tags_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/tags",
      teams_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/teams",
      trees_url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action/git/trees{/sha}",
      updated_at: "2019-08-30T15:48:55Z",
      url:
        "https://api.github.com/repos/mskelton/test-changelog-reminder-action",
      watchers: 0,
      watchers_count: 0,
    },
    sender: {
      avatar_url: "https://avatars1.githubusercontent.com/u/1332395?v=4",
      events_url: "https://api.github.com/users/mskelton/events{/privacy}",
      followers_url: "https://api.github.com/users/mskelton/followers",
      following_url:
        "https://api.github.com/users/mskelton/following{/other_user}",
      gists_url: "https://api.github.com/users/mskelton/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/mskelton",
      id: 1332395,
      login: "mskelton",
      node_id: "MDQ6VXNlcjEzMzIzOTU=",
      organizations_url: "https://api.github.com/users/mskelton/orgs",
      received_events_url:
        "https://api.github.com/users/mskelton/received_events",
      repos_url: "https://api.github.com/users/mskelton/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/mskelton/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mskelton/subscriptions",
      type: "User",
      url: "https://api.github.com/users/mskelton",
    },
  },
  ref: "refs/pull/2/merge",
  sha: "ebb4992dc72451c1c6c99e1cce9d741ec0b5b7d7",
  workflow: "CI",
}

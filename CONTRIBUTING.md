# How to contribute

Note: we will be using the [ZenHub for GitHub](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd?hl=en-US) chrome extension.

## Submitting features or changes

Self-assign (or request to be assigned) an issue and set its ZenHub pipeline to "In-Progress".

If you've been added as a collaborator, then clone project to your local machine:

```
git clone https://github.com/itsevalieu/planetb
```

Otherwise, fork the project (https://github.com/itsevalieu/planetb/fork), then clone the forked project to your local machine:

```
git clone https://github.com/<yourusername>/planetb
```

Checkout `dev` branch to create a new feature branch. Use the branch naming scheme, `issue<issue no>-feature-title`:

```
git checkout dev
git checkout -b issue42-add-logarithms
```

Use a present tense commit message, preferably one that's no more than 50 characters in length and all lowercased (unless it warranted otherwise):

```
git commit -am "add logarithms"
```

Push new feature branch to origin:

```
git push origin issue42-add-logarithms
```

If you already have an in-progress feature branch in origin and your `dev` branch becomes out of date, fetch and rebase your working branch off `origin/dev`, then force push with lease:

```
git fetch origin
git rebase origin/dev
git push origin issue42-add-logarithms --force-with-lease
```

## Submitting a pull request (PR)

1. Submit a PR, by setting your feature branch as `HEAD` and `dev` branch as `root`.
2. Connect PR to its corresponding issue that it closes.
3. Set ZenHub pipeline to "Review/QA".
4. Assign a reviewer.
5. When ready, add the `author ready` label to indicate that you are satisfied with the PR to be merged.
6. Delete feature branch once it's been merged.

## Coming soon...

Continuous Integration (CI) will be setup to verify whether `dev` branch can be merged into `master` branch.

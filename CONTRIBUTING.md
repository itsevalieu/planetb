# How to contribute

Note: we will be using the [ZenHub for GitHub](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd?hl=en-US) chrome extension.

## Submitting features or changes

Self-assign (or request to be assigned) an issue and set its ZenHub pipeline to "In-Progress".

If you've been added as a collaborator, then clone project to your local machine:

```
git clone https://github.com/itsevalieu/planetb.git
```

Otherwise, fork the project (https://github.com/itsevalieu/planetb/fork), then clone your forked project to your local machine:

```
git clone https://github.com/<yourusername>/planetb.git
```

Checkout `dev` branch to create a new feature branch. Use the branch naming scheme, `issue<issue no>-dash-separated-feature-title`:

```
git checkout dev
git checkout -b issue42-add-logarithms
```

Commit your changes with a present tense commit message - preferably one that's no more than 50 characters in length and all lowercased (unless warranted, otherwise):

```
git commit -am "add logarithms"
```

Push new feature branch to origin:

```
git push origin issue42-add-logarithms
```

If you already have an in-progress feature branch in origin and your `dev` branch becomes out of date, fetch and rebase your working branch off `origin/dev`, then force push with lease:

> Note: if you forked your project, you will first need to [update the origin of your forked project](#Updating-the-origin-of-your-forked-project)

```
git fetch origin
git rebase origin/dev
git push origin issue42-add-logarithms --force-with-lease
```

## Updating the origin of your forked project

Update the origin of your forked project by first configuring a remote that points to the original repository which we will call `upstream`:

```
git remote add upstream https://github.com/itsevalieu/planetb.git
```

Fetch all changes from `upstream`, checkout `dev` branch, then rebase off `upstream/dev` to update your local `dev` branch:

```
git fetch upstream
git checkout dev
git rebase upstream/dev
```

Force push changes to your forked origin:

```
git push -f origin dev
```

## Submitting a pull request (PR)

1. Submit a PR on GitHub, by setting your feature branch as the `head` branch and `dev` as the `base` branch.
2. Connect PR to its corresponding issue that it closes.
3. Set ZenHub pipeline to "Review/QA".
4. Assign a reviewer.
5. Reviewer will delete feature branch once it's been merged.

## Coming soon...

Continuous Integration (CI) will be setup to verify whether `dev` can be merged into `master`, to ensure only commits with working builds remain in the `master` branch.

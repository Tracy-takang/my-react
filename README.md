# DORA HR Dashboard

A React employee directory dashboard.

## Features

- Search employees by name, role, or department.
- Approve or reject leave requests.
- View employee statistics in stat cards.
- Navigate pages with pagination.
- Export the currently filtered employees to CSV.

## Tech stack

- React (Create React App)
- JavaScript
- Plain CSS

## Project structure

```text
src/
├── components/  Reusable dashboard interface components.
├── data/        Employee, statistics, and navigation data.
├── Icon/        SVG icon component.
└── utils/       Status formatting and CSV export helpers.
```

## Getting started

Prerequisite: Node.js 18 or later.

```bash
npm install
npm start
npm run build
```

## Notes

Place avatar images in `public/images/avatars` and the logo in `public/images/logo.png`.

## GitHub Pages deployment

This repository is hosted at [THEAFRICANDIGITALHUB/my-react](https://github.com/THEAFRICANDIGITALHUB/my-react) and deploys to [https://theafricandigitalhub.github.io/my-react/](https://theafricandigitalhub.github.io/my-react/). The `homepage` setting in `package.json` configures Create React App to build asset URLs for this repository path.

The GitHub Actions workflow builds the app and deploys the `build` directory to Pages whenever a commit is pushed to `main`, or when manually started from the Actions tab.

### Moving the repository to the organization

Authenticate as a GitHub account that is a member of `THEAFRICANDIGITALHUB` and has at least Write access to the repository. The GitHub CLI web flow is:

```powershell
gh auth login --hostname github.com --git-protocol https --web
gh auth status
gh api user --jq .login
```

Confirm the printed login is the organization member account. If this local checkout still has the old remote, update it and push every local branch and tag:

```powershell
git remote set-url origin https://github.com/THEAFRICANDIGITALHUB/my-react.git
git push --all origin
git push --tags origin
```

The configured remote is already set to this organization URL. If using a personal access token instead of the browser login, use a fine-grained token with access to this repository and Contents: Read and write; classic tokens need the `repo` scope. Authenticate with `gh auth login --hostname github.com --git-protocol https --with-token` and provide the token on standard input. Do not put a token in the remote URL. If the organization enforces SAML SSO, authorize the token for the organization as well.

### GitHub settings checklist

- [ ] In **Organization → People**, invite/add `takang tracy` to `THEAFRICANDIGITALHUB` and grant Write or Admin access, if that is the account you intend to use. It must accept the invitation.
- [ ] In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
- [ ] Check the organization's **Settings → Actions** policy permits GitHub Actions and the Actions used by this workflow.
- [ ] Check the organization's **Settings → Pages** policy permits Pages for this repository.
- [ ] Re-authorize any OAuth apps or third-party deployment hosts (such as Netlify or Vercel) for the organization/repository.

### Troubleshooting access errors

- **403 / Resource not accessible by integration** generally means the authenticated user, token, or workflow token lacks the required repository/org permission or the organization policy blocks the operation.
- **403 with a SAML/SSO authorization message** means the account may belong to the organization, but the token or OAuth app has not been authorized for its SSO policy.
- **404 / Repository not found** on a private repository can also mean the current account cannot see the repository; confirm the organization invite was accepted and the repository name/remote URL are correct.
- **Permission denied (publickey)** indicates SSH authentication is being used and the active SSH key is not authorized. This checkout uses an HTTPS remote.

Check which account the GitHub CLI is using with `gh auth status` and `gh api user --jq .login`. Check repository visibility and your effective permission with:

```powershell
gh repo view THEAFRICANDIGITALHUB/my-react --json nameWithOwner,viewerPermission
git ls-remote origin
```

If GitHub reports SSO authorization, re-authorize the token/OAuth app in the GitHub account's **Settings → Applications** and retry.

## License

MIT

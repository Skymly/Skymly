# Skymly.Github (maintainer notes)

Local working copy of the **[Skymly](https://github.com/Skymly) user profile** repository.

| | |
|--|--|
| **GitHub repo name** | `Skymly` (must match the **username** exactly) |
| **Remote** | https://github.com/Skymly/Skymly |
| **Workspace folder** | `Skymly/Profile/Skymly.Github/` (local alias; see workspace root [`AGENTS.md`](../../../AGENTS.md)) |
| **Published content** | **`README.md` at repository root** — shown on https://github.com/Skymly |

## Why not `Skymly/.github`?

[GitHub user profile READMEs](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme) require a **public repo named like your username** with **`README.md` in the root**.

The **`owner/.github` + `profile/README.md`** layout is for [**organization** profiles](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) (e.g. [MvvmAIO/.github](https://github.com/MvvmAIO/.github)), not personal accounts.

## Clone

From the **workspace root** (the directory that contains `Skymly/` and `AGENTS.md`):

```powershell
cd Skymly/Profile
git clone https://github.com/Skymly/Skymly.git Skymly.Github
```

## Maintainer docs

| File | Purpose |
|------|---------|
| [`docs/bio-draft.md`](bio-draft.md) | Profile bio text + `gh api` snippet |
| [`docs/pinned-repos.md`](pinned-repos.md) | Suggested pinned repositories (not shown on profile README) |

## Not to confuse with

| Workspace path | Remote | Purpose |
|----------------|--------|---------|
| **`Skymly/Profile/Skymly.Github/`** (this repo) | `Skymly/Skymly` | **Personal** profile (`README.md` at root) |
| **`MVVMAIO/_org/.github/`** | `MvvmAIO/.github` | **Organization** profile (`profile/README.md`) |

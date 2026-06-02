# Skymly.Github (maintainer notes)

Local working copy of the **[Skymly](https://github.com/Skymly) user profile** repository.

| | |
|--|--|
| **GitHub repo name** | `Skymly` (must match the **username** exactly) |
| **Remote** | https://github.com/Skymly/Skymly |
| **Local folder** | `C:\Code\Skymly\Skymly.Github\` (workspace alias; see `Skymly/AGENTS.md`) |
| **Published content** | **`README.md` at repository root** — shown on https://github.com/Skymly |

## Why not `Skymly/.github`?

[GitHub user profile READMEs](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme) require a **public repo named like your username** with **`README.md` in the root**.

The **`owner/.github` + `profile/README.md`** layout is for [**organization** profiles](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) (e.g. [MvvmAIO/.github](https://github.com/MvvmAIO/.github)), not personal accounts.

## Clone

```powershell
cd C:\Code\Skymly
git clone https://github.com/Skymly/Skymly.git Skymly.Github
```

## Not to confuse with

| Local path | Remote | Purpose |
|------------|--------|---------|
| **`Skymly.Github/`** (this repo) | `Skymly/Skymly` | **Personal** profile (`README.md` at root) |
| **`.github/`** (sibling folder) | `MvvmAIO/.github` | **Organization** profile (`profile/README.md`) |

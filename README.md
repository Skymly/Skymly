# Skymly.Github

Local working copy of the **[Skymly](https://github.com/Skymly) user profile** repository.

| | |
|--|--|
| **GitHub repo name** | `.github` (must match exactly for [profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)) |
| **Remote** | https://github.com/Skymly/.github |
| **Local folder** | `C:\Code\Skymly\Skymly.Github\` (alias; see workspace `AGENTS.md`) |
| **Published content** | `profile/README.md` — shown on https://github.com/Skymly |

## Clone

```powershell
cd C:\Code\Skymly
git clone https://github.com/Skymly/.github.git Skymly.Github
```

## First-time remote

If the repository does not exist on GitHub yet:

```powershell
cd C:\Code\Skymly\Skymly.Github
gh repo create Skymly/.github --public --description "Skymly GitHub profile README" --source=. --remote=origin --push
```

Adjust visibility (`--private`) as needed before pushing.

## Not to confuse with

| Local path | Remote | Purpose |
|------------|--------|---------|
| **`Skymly.Github/`** (this repo) | `Skymly/.github` | **Personal** profile on the user account |
| **`.github/`** (sibling folder) | `MvvmAIO/.github` | **Organization** profile for [MvvmAIO](https://github.com/MvvmAIO) |

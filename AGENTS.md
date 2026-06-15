# Skymly.Github — agent & maintainer notes

## What this repo is

- **Type**: Personal GitHub profile README (no build, no NuGet).
- **Remote**: https://github.com/Skymly/Skymly — repo name **`Skymly`** (must match the GitHub username).
- **Workspace path**: `Skymly/Profile/Skymly.Github/` — local folder alias.
- **Published file**: root **`README.md`** only (https://github.com/Skymly). Not `profile/README.md` (organization profiles only).
- **Not** [MvvmAIO/.github](https://github.com/MvvmAIO/.github) — org profile uses `profile/README.md` in that repo.

## Scope

- Edit root `README.md` when asked to update the profile.
- Other maintainer drafts: `docs/bio-draft.md`, `docs/pinned-repos.md` (account settings, not rendered on profile).
- Do **not** mix changes with MvvmAIO/.github.

## Git

- Independent repo; run `git` / `gh` only from this directory.
- Issue / commit / PR language: **English**.
- Commit / push only when the user explicitly requests.

## Profile cards

Static SVGs in `profile/` (stats, languages, pins, activity graph). Regenerated daily and on demand by `.github/workflows/update-readme-cards.yml`. README embeds `./profile/*.svg`.

Manual refresh: `gh workflow run update-readme-cards.yml --repo Skymly/Skymly`

## Style

- **Personal profile**, not a copy of MvvmAIO/.github: narrative sections, compact badge rows, Skymly-owned repos first.
- README: English primary with selective 简体中文 labels; stable public URLs.
- MvvmAIO: brief mention / footer link only.

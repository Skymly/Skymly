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

Static SVGs in `profile/`. Regenerated daily and on demand by `.github/workflows/update-readme-cards.yml`: `stats.svg`, `top-langs.svg`, `pin-observables.svg`, `pin-designpatterns.svg`. Keep generating the pin SVGs even if unused — do not break the workflow.

Hand-authored (do not overwrite in the workflow): `header.svg`, `pipeline.svg`, `rule.svg`, `footer.svg`, `card-observables.svg`, `card-designpatterns.svg`, `card-gitpulse.svg`, `card-dotnet-mcp.svg`. Light/dark via SVG `prefers-color-scheme`. README Featured embeds the card SVGs, not the generated pins. Regenerate art with `node scripts/profile-art.mjs`.

Manual refresh: `gh workflow run update-readme-cards.yml --repo Skymly/Skymly`

Stats generation retries on GraphQL `RESOURCE_LIMITS_EXCEEDED`; if all attempts fail, the previous `profile/stats.svg` is kept and other cards still update. Optional repo secret `README_STATS_TOKEN` (PAT with `read:user` + public repo read) raises API budget vs the default `GITHUB_TOKEN`.

## Style

- **Personal profile**, not a copy of MvvmAIO/.github: narrative sections, compact badge rows, Skymly-owned repos first.
- README: English primary with selective 简体中文 (section labels / short Now line) — **not** full EN/ZH paragraph duplication; stable public URLs.
- **Featured** (order): Observables → DesignPatterns → GitPulse → dotnet-mcp. Short cards, not essays. Do **not** feature private repos or internal product names.
- MvvmAIO: brief mention / footer link only.

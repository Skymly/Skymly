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

Static SVGs in `profile/` (stats, languages, pins, activity graph). Regenerated daily and on demand by `.github/workflows/update-readme-cards.yml`. **README no longer embeds** `./profile/stats.svg`, `./profile/top-langs.svg`, `./profile/activity-graph.svg`, or `./profile/pin-*.svg` — keep generating them so the workflow stays green and assets remain available if needed later. Do not break the workflow.

Manual refresh: `gh workflow run update-readme-cards.yml --repo Skymly/Skymly`

Stats generation retries on GraphQL `RESOURCE_LIMITS_EXCEEDED`; if all attempts fail, the previous `profile/stats.svg` is kept and other cards still update. Optional repo secret `README_STATS_TOKEN` (PAT with `read:user` + public repo read) raises API budget vs the default `GITHUB_TOKEN`.

## Style

- **Personal profile**, not a copy of MvvmAIO/.github: one-screen identity page, English primary, Observables as the flagship; everything else is one quiet line.
- README: English only by default (at most one short Chinese line if it earns its place). No shield badge rows, no github-readme-stats embeds, no pin-card SVGs duplicating GitHub’s Pinned grid, no multi-product catalog, no Now section teasing private work. Keep under ~40 lines. Stable public URLs.
- Do **not** name private repos or internal product names.
- MvvmAIO: one link in the quiet “Also” line is enough.

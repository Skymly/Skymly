# Skymly.Github — AI agent notes

## What this repo is

- **Type**: Personal GitHub metadata (profile README only; no build, no NuGet).
- **Remote**: https://github.com/Skymly/.github — GitHub **repository name** is `.github`.
- **Local path**: `C:\Code\Skymly\Skymly.Github\` — folder name is a **workspace alias** (see `Skymly/AGENTS.md` § GitHub profile repositories).
- **Authoritative public file**: `profile/README.md` (rendered on https://github.com/Skymly).

## Scope

- Edit Markdown in `profile/README.md` and repo-level `README.md` when asked.
- No solution, tests, or CI unless the user adds workflows later.
- Do **not** mix changes with `C:\Code\Skymly\.github\` (MvvmAIO organization profile).

## Git

- Independent repo; `git` / `gh` only from this directory.
- Issue / commit / PR language: **English** (workspace default).
- Commit / push / `gh repo create` only when the user explicitly requests.

## Style

- Profile README: English, GitHub-flavored Markdown; badges and links should use stable public URLs.
- Prefer linking to Skymly-owned repos (`Observables`, `Observables.Docs`, etc.) and clearly separate personal work from [MvvmAIO](https://github.com/MvvmAIO) organization content.

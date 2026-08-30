# GitHub profile bio (draft)

Set under **GitHub → Settings → Profile → Bio**, or via CLI when authenticated as `Skymly`:

```powershell
gh api user -X PATCH -f bio=".NET + Roslyn — Observables (R3/Rx) & DesignPatterns. MCP + generators. Hong Kong. @MvvmAIO."
```

## Recommended text

> .NET + Roslyn — Observables (R3/Rx) & DesignPatterns. MCP + generators. Hong Kong. @MvvmAIO.

| | |
|--|--|
| **Length** | ~95 characters (GitHub bio limit ~160) |
| **Tone** | Professional, personable; aligned with [profile README](../README.md) |
| **Replaces** | Prior draft that named private / non-public work |

## Notes

- Bio is account-level, not stored in this repository except as this maintainer draft.
- Do **not** name private repos (or internal product codenames) in the public bio.
- If `gh api user -X PATCH` fails (token scope), paste the recommended text manually in profile settings.

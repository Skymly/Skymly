# GitHub profile bio (draft)

Set under **GitHub → Settings → Profile → Bio**, or via CLI when authenticated as `Skymly`:

```powershell
gh api user -X PATCH -f bio=".NET + Roslyn — Observables (R3/Rx) & DesignPatterns. Hong Kong. Also @ MvvmAIO."
```

## Recommended text

> .NET + Roslyn — Observables (R3/Rx) & DesignPatterns. Hong Kong. Also @ MvvmAIO.

| | |
|--|--|
| **Length** | 99 characters (GitHub bio limit ~160) |
| **Tone** | Professional, personable; aligned with [profile README](../README.md) |
| **Replaces** | Informal / literary prior bio |

## Notes

- Bio is account-level, not stored in this repository except as this maintainer draft.
- If `gh api user -X PATCH` fails (token scope), paste the recommended text manually in profile settings.

<div align="center">

<a href="https://github.com/Skymly">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=7C3AED&center=true&vCenter=true&multiline=true&repeat=true&width=480&height=130&lines=Hi%2C+I%27m+Skymly;Building+.NET+%2B+Roslyn;Observables+%26+DesignPatterns" alt="Typing header" />
</a>

<br />

[![Location: Hong Kong](https://img.shields.io/badge/location-Hong%20Kong-7C3AED?style=flat-square)](https://github.com/Skymly)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/)
[![Roslyn](https://img.shields.io/badge/Roslyn-source%20generators-512BD4?style=flat-square&logo=dotnet)](https://github.com/dotnet/roslyn)

</div>

---

### About · 关于

I'm **Skymly** ([落笔wys](https://github.com/Skymly)) — I write **C# / .NET** libraries where **compile-time codegen** and **small runtime primitives** do the heavy lifting.

Most of my active work lives in two open repos: **[Observables](https://github.com/Skymly/Observables)** (reactive boundaries with R3 / System.Reactive) and **[DesignPatterns](https://github.com/Skymly/DesignPatterns)** (composable patterns + Roslyn diagnostics). I also contribute to **[MvvmAIO](https://github.com/MvvmAIO)** when it overlaps with MVVM generators.

---

## Projects · 项目

### [Observables](https://github.com/Skymly/Observables)

Roslyn generators that turn .NET **events**, **HTTP**, and **SignalR** into **R3** or **System.Reactive** streams — pick one reactive stack per app.

`Events` · `RestAPI` · `SignalR` · dual `R3` / `Reactive` packages

[![Observables](https://img.shields.io/github/stars/Skymly/Observables?style=flat-square&logo=github)](https://github.com/Skymly/Observables/stargazers)
[![Docs](https://img.shields.io/badge/docs-VitePress-42B883?style=flat-square&logo=vite)](https://skymly.github.io/Observables.Docs/)
[![Samples](https://img.shields.io/badge/samples-repo-238636?style=flat-square&logo=github)](https://github.com/Skymly/Observables.Samples)

→ [Documentation](https://skymly.github.io/Observables.Docs/) · [Samples](https://github.com/Skymly/Observables.Samples) · [NuGet profile](https://www.nuget.org/profiles/Skymly)

**Preview on nuget.org** (`0.1.0-preview3`):

[![Observables.Events.R3](https://img.shields.io/nuget/v/Observables.Events.R3?style=flat-square&logo=nuget&label=Events.R3)](https://www.nuget.org/packages/Observables.Events.R3)
[![Observables.RestAPI.R3](https://img.shields.io/nuget/v/Observables.RestAPI.R3?style=flat-square&logo=nuget&label=RestAPI.R3)](https://www.nuget.org/packages/Observables.RestAPI.R3)
[![Observables.SignalR.R3](https://img.shields.io/nuget/v/Observables.SignalR.R3?style=flat-square&logo=nuget&label=SignalR.R3)](https://www.nuget.org/packages/Observables.SignalR.R3)

```xml
<PackageReference Include="Observables.Events.R3" Version="0.1.0-preview3" />
<PackageReference Include="R3" Version="1.3.0" />
```

Reactive pairs (`*.Reactive`) and download stats: [nuget.org/profiles/Skymly](https://www.nuget.org/profiles/Skymly).

---

### [DesignPatterns](https://github.com/Skymly/DesignPatterns)

**MIT · open source · early preview** — lightweight pattern primitives (chain, strategy, factory registry, singleton, …) with **source generators**, **analyzers** (`DP###`), and **code fixes**. Composition over inheritance; not a MediatR-style framework.

[![DesignPatterns](https://img.shields.io/github/stars/Skymly/DesignPatterns?style=flat-square&logo=github)](https://github.com/Skymly/DesignPatterns/stargazers)
[![License: MIT](https://img.shields.io/badge/license-MIT-333333?style=flat-square)](https://github.com/Skymly/DesignPatterns/blob/main/LICENSE)
[![early preview](https://img.shields.io/badge/status-early%20preview-555555?style=flat-square)](https://github.com/Skymly/DesignPatterns#project-status-早期阶段)

→ [ROADMAP](https://github.com/Skymly/DesignPatterns/blob/main/docs/ROADMAP.md) · [samples](https://github.com/Skymly/DesignPatterns/tree/main/samples) · NuGet packaging when API stabilizes

---

## Stack

| Layer | Tools |
|-------|--------|
| Language | C#, .NET (`netstandard2.0` / `net8.0`) |
| Compile-time | Roslyn source generators & analyzers |
| Reactive | [R3](https://github.com/Cysharp/R3), [System.Reactive](https://github.com/dotnet/reactive) |
| Docs | [VitePress](https://vitepress.dev/) (Observables.Docs) |
| UI background | WPF / MVVM (older public repos below) |

---

## Earlier public repos · 更早的开源

| Repo | Note |
|------|------|
| [StaticMvvm](https://github.com/Skymly/StaticMvvm) | WPF static member binding & change notification |
| [NeoLuaSamples](https://github.com/Skymly/NeoLuaSamples) | C# ↔ Lua interop with NeoLua |
| [Wpf.Dialogs](https://github.com/Skymly/Wpf.Dialogs) | Dialog service extracted from Prism patterns |

---

## GitHub activity

<img src="https://github-readme-stats.vercel.app/api?username=Skymly&show_icons=true&theme=transparent&hide_border=true&hide_title=true&count_private=true&include_all_commits=true" alt="GitHub stats" width="420" />

---

## Say hi · 交流

Issues and small, focused PRs are welcome in each repo's tracker.

| Repo | Link |
|------|------|
| Observables | [issues](https://github.com/Skymly/Observables/issues) |
| DesignPatterns | [issues](https://github.com/Skymly/DesignPatterns/issues) |
| Docs / Samples | [Observables.Docs](https://github.com/Skymly/Observables.Docs/issues) · [Observables.Samples](https://github.com/Skymly/Observables.Samples/issues) |

Also active in the [MvvmAIO](https://github.com/MvvmAIO) org — org packages on [Skym @ NuGet](https://www.nuget.org/profiles/Skym).

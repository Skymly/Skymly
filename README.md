<div align="center">

<a href="https://github.com/Skymly">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=28&pause=1500&color=7C3AED&center=true&vCenter=true&repeat=true&width=340&height=50&lines=Skymly;%E8%90%BD%E7%AC%94wys" alt="Typing header" />
</a>

<br />

[![Location: Hong Kong](https://img.shields.io/badge/location-Hong%20Kong-7C3AED?style=flat-square)](https://github.com/Skymly)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/)
[![Roslyn](https://img.shields.io/badge/Roslyn-source%20generators-512BD4?style=flat-square&logo=dotnet)](https://github.com/dotnet/roslyn)

</div>

---

### About · 关于

I'm **Skymly** ([落笔wys](https://github.com/Skymly)) — I write **C# / .NET** libraries where **compile-time codegen** and **small runtime primitives** do the heavy lifting, and I build **AI coding agents** on the side. My active work spans three open repos: **[Observables](https://github.com/Skymly/Observables)** (reactive boundaries with R3 / System.Reactive), **[DesignPatterns](https://github.com/Skymly/DesignPatterns)** (composable patterns + Roslyn diagnostics), and **[IsaacAgent](https://github.com/Skymly/IsaacAgent)** (an AI coding agent for Binding of Isaac: Repentance Lua mods). I also contribute to **[MvvmAIO](https://github.com/MvvmAIO)** when it overlaps with MVVM generators.

我是 **Skymly**（[落笔wys](https://github.com/Skymly)）—— 写 **C# / .NET** 库，靠**编译期代码生成**和**精简的运行时原语**干活，业余也做 **AI 编程助手**。主要活跃在三个开源仓库：**[Observables](https://github.com/Skymly/Observables)**（基于 R3 / System.Reactive 的响应式边界）、**[DesignPatterns](https://github.com/Skymly/DesignPatterns)**（可组合设计模式 + Roslyn 诊断），以及 **[IsaacAgent](https://github.com/Skymly/IsaacAgent)**（面向《以撒的结合·重生》Lua mod 的 AI 编程助手）。也会在 **[MvvmAIO](https://github.com/MvvmAIO)** 协作 MVVM 生成器相关的工作。

---

## Featured · 主推

### [Observables](https://github.com/Skymly/Observables)

Roslyn generators that turn .NET **events**, **HTTP**, and **SignalR** into **R3** or **System.Reactive** streams — pick one reactive stack per app.

Roslyn 生成器，把 .NET 的 **事件**、**HTTP**、**SignalR** 转成 **R3** 或 **System.Reactive** 流——每个应用选一种响应式栈。

[![Docs](https://img.shields.io/badge/docs-VitePress-42B883?style=flat-square&logo=vite)](https://skymly.github.io/Observables.Docs/)
[![Samples](https://img.shields.io/badge/samples-repo-238636?style=flat-square&logo=github)](https://github.com/Skymly/Observables.Samples)
[![Observables.Events.R3](https://img.shields.io/nuget/v/Observables.Events.R3?style=flat-square&logo=nuget&label=Events.R3)](https://www.nuget.org/packages/Observables.Events.R3)
[![Observables.RestAPI.R3](https://img.shields.io/nuget/v/Observables.RestAPI.R3?style=flat-square&logo=nuget&label=RestAPI.R3)](https://www.nuget.org/packages/Observables.RestAPI.R3)
[![Observables.SignalR.R3](https://img.shields.io/nuget/v/Observables.SignalR.R3?style=flat-square&logo=nuget&label=SignalR.R3)](https://www.nuget.org/packages/Observables.SignalR.R3)

→ [Documentation](https://skymly.github.io/Observables.Docs/) · [Samples](https://github.com/Skymly/Observables.Samples) · [NuGet profile](https://www.nuget.org/profiles/Skym) — `*.Reactive` pairs and download stats on NuGet.

---

### [DesignPatterns](https://github.com/Skymly/DesignPatterns)

Lightweight pattern primitives — chain, strategy, factory registry, singleton, … — with **source generators**, **analyzers** (`DP###`), and **code fixes**. Composition over inheritance; not a MediatR-style framework.

轻量级模式原语——chain、strategy、factory registry、singleton 等——配 **源生成器**、**分析器**（`DP###`）和 **代码修复**。组合优于继承；不是 MediatR 风格的框架。

[![License: MIT](https://img.shields.io/badge/license-MIT-333333?style=flat-square)](https://github.com/Skymly/DesignPatterns/blob/main/LICENSE)
[![Docs](https://img.shields.io/badge/docs-VitePress-42B883?style=flat-square&logo=vite)](https://skymly.github.io/DesignPatterns.Docs/)
[![Samples](https://img.shields.io/badge/samples-repo-238636?style=flat-square&logo=github)](https://github.com/Skymly/DesignPatterns.Samples)
[![Skymly.DesignPatterns](https://img.shields.io/nuget/v/Skymly.DesignPatterns?style=flat-square&logo=nuget&label=Skymly.DesignPatterns)](https://www.nuget.org/packages/Skymly.DesignPatterns)

→ [Documentation](https://skymly.github.io/DesignPatterns.Docs/) · [Samples](https://github.com/Skymly/DesignPatterns.Samples) · [NuGet](https://www.nuget.org/packages/Skymly.DesignPatterns) · [ROADMAP](https://github.com/Skymly/DesignPatterns/blob/main/docs/ROADMAP.md) — public API still evolving; pin a version for experiments.

---

### [IsaacAgent](https://github.com/Skymly/IsaacAgent)

An AI coding agent for **The Binding of Isaac: Repentance** Lua mod development — a Cursor/OpenCode-style desktop app with Isaac-specific knowledge, tools, and workflows built in. Local RAG over 480+ modding docs, 16 agent tools, 9 task skills, and multi-provider LLM (OpenAI-compatible / Ollama). Built with .NET 8 + Avalonia 11.

面向 **《以撒的结合·重生》** Lua mod 开发的 AI 编程助手——Cursor/OpenCode 风格的桌面应用，内置 Isaac 专属知识、工具与工作流。本地 RAG 覆盖 480+ 模组文档，16 个 agent 工具，9 个任务技能，多 LLM 提供方（OpenAI 兼容 / Ollama）。基于 .NET 8 + Avalonia 11。

[![License: MIT](https://img.shields.io/badge/license-MIT-333333?style=flat-square)](https://github.com/Skymly/IsaacAgent/blob/main/LICENSE)
[![.NET 8](https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Avalonia 11](https://img.shields.io/badge/Avalonia-11-01A0E9?style=flat-square)](https://avaloniaui.net/)
[![Platform: Windows](https://img.shields.io/badge/platform-Windows-0078D4?style=flat-square&logo=windows11&logoColor=white)](https://github.com/Skymly/IsaacAgent)
[![CI](https://github.com/Skymly/IsaacAgent/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/Skymly/IsaacAgent/actions/workflows/build-and-test.yml)

→ [Quick start](https://github.com/Skymly/IsaacAgent#quick-start) · [Skills](https://github.com/Skymly/IsaacAgent#skills) · [Agent tools](https://github.com/Skymly/IsaacAgent#agent-tools) · Build from source or publish a single-file exe.

---

## Now · 当前

Focused on Roslyn source generators, reactive codegen for .NET, and an AI coding agent for Isaac modding. Active across **Observables**, **DesignPatterns**, **IsaacAgent**, and **MvvmAIO** when it overlaps with MVVM generators.

专注于 .NET 的 Roslyn 源生成器、响应式代码生成，以及面向 Isaac 模组的 AI 编程助手。活跃于 **Observables**、**DesignPatterns**、**IsaacAgent**，以及 MVVM 生成器相关时的 **MvvmAIO**。

## Stats · 概览

<a href="https://github.com/Skymly">
  <img height="180" align="center" src="./profile/stats.svg" alt="GitHub stats" />
</a>
<a href="https://github.com/Skymly?tab=repositories">
  <img height="160" align="center" src="./profile/top-langs.svg" alt="Top languages" />
</a>

<br />

<img src="./profile/activity-graph.svg" alt="GitHub activity — last 30 days" width="480" />

---

## Contact · 交流

Issues and small, focused PRs are welcome in each repo's tracker.

欢迎在各仓库的 issue 里交流，也欢迎小而聚焦的 PR。

[![QQ](https://img.shields.io/badge/QQ-3023066532-1BA1E6?style=flat-square&logo=tencentqq&logoColor=white)](tencent://message/?uin=3023066532&Site=&Menu=yes)

| | |
|--|--|
| Observables | [issues](https://github.com/Skymly/Observables/issues) |
| DesignPatterns | [issues](https://github.com/Skymly/DesignPatterns/issues) |
| IsaacAgent | [issues](https://github.com/Skymly/IsaacAgent/issues) |
| Docs / Samples | [Observables.Docs](https://github.com/Skymly/Observables.Docs/issues) · [Observables.Samples](https://github.com/Skymly/Observables.Samples/issues) · [DesignPatterns.Docs](https://github.com/Skymly/DesignPatterns.Docs/issues) · [DesignPatterns.Samples](https://github.com/Skymly/DesignPatterns.Samples/issues) |

Also active in the [MvvmAIO](https://github.com/MvvmAIO) org — org packages on [Skym @ NuGet](https://www.nuget.org/profiles/Skym).

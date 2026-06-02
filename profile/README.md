<div align="center">

<a href="https://github.com/Skymly">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=26&pause=900&color=7C3AED&center=true&vCenter=true&multiline=false&repeat=true&width=520&lines=Skymly;.NET+%2B+Roslyn;Observables+%C2%B7+R3+%C2%B7+Rx" alt="Typing header" />
</a>

[![GitHub](https://img.shields.io/badge/GitHub-Skymly-181717?style=flat-square&logo=github)](https://github.com/Skymly)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/)
[![Rx](https://img.shields.io/badge/Rx-R3+%26+System.Reactive-7C3AED?style=flat-square)](https://github.com/Cysharp/R3)

<br />

**Roslyn source generators for reactive .NET — events, HTTP clients, and dual R3 / System.Reactive targets**

[Observables](https://github.com/Skymly/Observables) ·
[Docs](https://skymly.github.io/Observables.Docs/) ·
[Samples](https://github.com/Skymly/Observables.Samples)

</div>

---

## Spotlight repositories

<table>
<tbody>
<tr>
<td align="center" valign="middle" width="132">
<img src="https://img.shields.io/badge/Observables-core-7C3AED?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Observables" />
</td>
<td valign="top">
<strong><a href="https://github.com/Skymly/Observables">Observables</a></strong><br />
<code>Skymly/Observables</code><br /><br />
Suite of <strong>Roslyn</strong> generators bridging .NET events and IO boundaries to <strong>R3</strong> and <strong>System.Reactive</strong>.<br />
<img src="https://img.shields.io/badge/Events-classic+%26+routed-555555?style=flat-square" alt="Events" />
<img src="https://img.shields.io/badge/RestAPI-declarative%20HTTP-555555?style=flat-square" alt="RestAPI" />
<img src="https://img.shields.io/badge/Roslyn-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white" alt="Roslyn" />
<img src="https://img.shields.io/badge/R3-7C3AED?style=flat-square" alt="R3" />
</td>
</tr>
<tr><td colspan="2"><hr /></td></tr>
<tr>
<td align="center" valign="middle">
<img src="https://img.shields.io/badge/Docs-VitePress-42B883?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="Docs" />
</td>
<td valign="top">
<strong><a href="https://github.com/Skymly/Observables.Docs">Observables.Docs</a></strong><br />
<code>Skymly/Observables.Docs</code><br /><br />
User documentation for Observables — <strong>VitePress</strong>, English + 简体中文, local search.<br />
<img src="https://img.shields.io/badge/site-skymly.github.io-555555?style=flat-square" alt="GitHub Pages" />
<a href="https://skymly.github.io/Observables.Docs/"><img src="https://img.shields.io/badge/read-docs-42B883?style=flat-square" alt="Read docs" /></a>
</td>
</tr>
<tr><td colspan="2"><hr /></td></tr>
<tr>
<td align="center" valign="middle">
<img src="https://img.shields.io/badge/Samples-demo-238636?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Samples" />
</td>
<td valign="top">
<strong><a href="https://github.com/Skymly/Observables.Samples">Observables.Samples</a></strong><br />
<code>Skymly/Observables.Samples</code><br /><br />
Runnable sample apps for <strong>Events</strong> and <strong>RestAPI</strong> generators.<br />
<img src="https://img.shields.io/badge/csharp-239120?style=flat-square&amp;logo=c-sharp&amp;logoColor=white" alt="C#" />
<img src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white" alt=".NET" />
</td>
</tr>
</tbody>
</table>

## Highlights

|  | 方向 | 仓库 | 说明 |
|--:|:---|:---|:---|
| ◆ | **Events** | [`Observables`](https://github.com/Skymly/Observables) | 经典与路由 .NET 事件 → `IObservable` / R3；双路生成器（R3 · System.Reactive） |
| ◆ | **RestAPI** | [`Observables`](https://github.com/Skymly/Observables) | 声明式类型安全 HTTP 客户端（Refit 式接口 + 源生成） |
| ◆ | **文档** | [`Observables.Docs`](https://github.com/Skymly/Observables.Docs) | [VitePress 站点](https://skymly.github.io/Observables.Docs/) |
| ◆ | **示例** | [`Observables.Samples`](https://github.com/Skymly/Observables.Samples) | Events / RestAPI 可运行示例 |
| ◆ | **MvvmAIO** | [`MvvmAIO`](https://github.com/MvvmAIO) | 参与 Prism & R3 向 MVVM 源生成器生态 — [组织主页](https://github.com/MvvmAIO) |

## Observables packages

> **Status** — NuGet packages are **in development** (consume via `ProjectReference` + analyzer today). Planned IDs ship as pairs per feature domain:

<table>
<thead>
<tr>
<th align="left">Package (planned)</th>
<th align="left">Runtime</th>
<th align="left">Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><code>Observables.Events.R3</code></td>
<td valign="top"><a href="https://github.com/Cysharp/R3">R3</a></td>
<td valign="top" rowspan="2">Classic &amp; routed .NET events</td>
</tr>
<tr>
<td valign="top"><code>Observables.Events.Reactive</code></td>
<td valign="top">System.Reactive</td>
</tr>
<tr><td colspan="3"><hr /></td></tr>
<tr>
<td valign="top"><code>Observables.RestAPI.R3</code></td>
<td valign="top"><a href="https://github.com/Cysharp/R3">R3</a></td>
<td valign="top" rowspan="2">Declarative HTTP client</td>
</tr>
<tr>
<td valign="top"><code>Observables.RestAPI.Reactive</code></td>
<td valign="top">System.Reactive</td>
</tr>
</tbody>
</table>

Published **MvvmAIO** packages (collaboration) live on the **[Skym NuGet profile](https://www.nuget.org/profiles/Skym)** — see the [MvvmAIO organization profile](https://github.com/MvvmAIO) for version badges and download stats.

## Community

> **How to engage**  
> **Issues** — filed per repository (`Observables`, `Observables.Docs`, `Observables.Samples`, or MvvmAIO repos).  
> **Pull requests** — small, focused changes that pass each repo’s CI are welcome.

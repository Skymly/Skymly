import fs from "node:fs";
import path from "node:path";

const out = "profile";
const FONT =
  'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", Helvetica, Arial, sans-serif';

const theme = `
    .fg { fill: #1f2328; }
    .muted { fill: #656d76; }
    .faint { fill: #8b949e; }
    .accent { fill: #7c3aed; }
    .mark { fill: #7c3aed; }
    .line { stroke: #d0d7de; fill: none; }
    .card-bg { fill: #ffffff; stroke: #d0d7de; }
    .soft { fill: #7c3aed; opacity: 0.09; }
    .stage { fill: #ffffff; stroke: #d0d7de; }
    .wave-solid { fill: none; stroke: #7c3aed; stroke-width: 1.6; stroke-linecap: round; opacity: 0.28; }
    .wave-dash { fill: none; stroke: #7c3aed; stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 5 11; }
    .icon-stroke { stroke: #7c3aed; fill: none; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
    .icon-fill { fill: #7c3aed; }
    .arrow { stroke: #7c3aed; fill: none; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; opacity: 0.7; }
    .rail { stroke: #7c3aed; fill: none; stroke-width: 1.2; opacity: 0.28; }
    .title { font: 700 38px ${FONT}; }
    .zh { font: 400 15px ${FONT}; }
    .motto { font: 600 14px ${FONT}; letter-spacing: 0.4px; }
    .tag { font: 500 12px ${FONT}; letter-spacing: 0.25px; }
    .kicker { font: 600 10px ${FONT}; letter-spacing: 1.6px; }
    .card-num { font: 700 11px ${FONT}; letter-spacing: 1.4px; }
    .card-role { font: 600 10px ${FONT}; letter-spacing: 1.2px; }
    .card-title { font: 700 18px ${FONT}; }
    .card-sub { font: 400 12.5px ${FONT}; }
    .stage-title { font: 700 12.5px ${FONT}; letter-spacing: 0.6px; }
    .stage-sub { font: 500 10.5px ${FONT}; }
    @media (prefers-color-scheme: dark) {
      .fg { fill: #e6edf3; }
      .muted { fill: #9198a1; }
      .faint { fill: #8b949e; }
      .accent { fill: #a78bfa; }
      .mark { fill: #8b5cf6; }
      .line { stroke: #30363d; }
      .card-bg { fill: #0d1117; stroke: #30363d; }
      .soft { fill: #a78bfa; opacity: 0.11; }
      .stage { fill: #0d1117; stroke: #30363d; }
      .wave-solid { stroke: #a78bfa; }
      .wave-dash { stroke: #a78bfa; }
      .icon-stroke { stroke: #a78bfa; }
      .icon-fill { fill: #a78bfa; }
      .arrow { stroke: #a78bfa; }
      .rail { stroke: #a78bfa; }
    }
`;

function sineWave(x0, x1, y, amp, period) {
  const kFactor = 0.512 / Math.PI;
  let d = `M${x0.toFixed(1)} ${y.toFixed(1)}`;
  let x = x0;
  let sign = -1;
  while (x < x1 - 0.5) {
    const x2 = Math.min(x + period / 2, x1);
    const w = x2 - x;
    const k = kFactor * w;
    const a = y + amp * sign;
    d += ` C${(x + k).toFixed(1)} ${a.toFixed(1)}, ${(x2 - k).toFixed(1)} ${a.toFixed(1)}, ${x2.toFixed(1)} ${y.toFixed(1)}`;
    x = x2;
    sign *= -1;
  }
  return d;
}

function peaks(x0, y, amp, period, count) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const x = x0 + period / 4 + i * (period / 2);
    const py = y + (i % 2 === 0 ? -amp : amp);
    pts.push([+x.toFixed(1), +py.toFixed(1)]);
  }
  return pts;
}

function write(file, svg) {
  fs.writeFileSync(path.join(out, file), svg.trim() + "\n", "utf8");
}

const x0 = 508,
  x1 = 858,
  y0 = 108,
  amp = 22,
  period = 78;
const wave = sineWave(x0, x1, y0, amp, period);
const nodes = peaks(x0, y0, amp, period, 8);

const nodeSvg = nodes
  .map(([x, y], i) => {
    if (i === 2) {
      return `  <circle class="accent" cx="${x}" cy="${y}" r="4.2">
    <animate attributeName="r" values="4.2;6.2;4.2" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.45;1" dur="2.8s" repeatCount="indefinite"/>
  </circle>`;
    }
    return `  <circle class="accent" cx="${x}" cy="${y}" r="${i % 2 === 0 ? 3.4 : 2.6}" opacity="${i % 2 === 0 ? 1 : 0.75}"/>`;
  })
  .join("\n");

write(
  "header.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="880" height="210" viewBox="0 0 880 210" role="img" aria-labelledby="title desc">
  <title id="title">Skymly · 落笔wys</title>
  <desc id="desc">Ink in. APIs out. Compile-time codegen and small runtime primitives.</desc>
  <style>${theme}</style>

  <circle class="soft" cx="760" cy="28" r="110"/>
  <circle class="soft" cx="840" cy="168" r="78"/>

  <rect class="mark" x="36" y="62" width="68" height="68" rx="20"/>
  <path d="M51 96 C58 78 65 114 72 96 C79 78 86 114 93 96" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round"/>
  <circle cx="93" cy="96" r="3" fill="#ffffff"/>

  <text class="kicker accent" x="122" y="78">HONG KONG</text>
  <text class="fg title" x="120" y="118">Skymly</text>
  <text class="muted zh" x="122" y="144">落笔wys</text>
  <text class="fg motto" x="122" y="174">Ink in. APIs out.</text>
  <text class="faint tag" x="122" y="194">compile-time codegen  ·  small runtime primitives</text>

  <path class="wave-solid" d="${wave}"/>
  <path class="wave-dash" d="${wave}">
    <animate attributeName="stroke-dashoffset" values="0;32" dur="2.6s" repeatCount="indefinite"/>
  </path>
${nodeSvg}
</svg>`
);

const stages = [
  { x: 70, title: "Declare", sub: "attributes" },
  { x: 290, title: "Compile", sub: "Roslyn SG" },
  { x: 510, title: "Emit", sub: "generated C#" },
  { x: 730, title: "Run", sub: "tiny runtime" },
];

const stageBoxes = stages
  .map(
    (s) => `  <g transform="translate(${s.x} 24)">
    <rect class="stage" x="0" y="0" width="88" height="56" rx="12"/>
    <text class="fg stage-title" x="44" y="24" text-anchor="middle">${s.title}</text>
    <text class="muted stage-sub" x="44" y="42" text-anchor="middle">${s.sub}</text>
  </g>`
  )
  .join("\n");

const arrows = [158, 378, 598]
  .map(
    (x) => `  <path class="arrow" d="M${x} 52 h42"/>
  <path class="arrow" d="M${x + 36} 46 l8 6 -8 6"/>`
  )
  .join("\n");

write(
  "pipeline.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="880" height="108" viewBox="0 0 880 108" role="img" aria-label="Declare attributes, compile with Roslyn, emit generated C#, run on a tiny runtime">
  <title>How the libraries work</title>
  <style>${theme}</style>
  <path class="rail" d="M114 52 H774"/>
${stageBoxes}
${arrows}
  <circle class="accent" r="3.4">
    <animateMotion dur="3.6s" repeatCount="indefinite" path="M114 52 H774"/>
  </circle>
  <text class="faint tag" x="440" y="100" text-anchor="middle">the compiler writes the boring parts</text>
</svg>`
);

write(
  "rule.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="880" height="18" viewBox="0 0 880 18" role="img" aria-hidden="true">
  <style>${theme}</style>
  <line class="line" x1="36" y1="9" x2="844" y2="9"/>
  <rect class="accent" x="434" y="5" width="8" height="8" rx="1.5" transform="rotate(45 438 9)"/>
</svg>`
);

const footWave = sineWave(36, 844, 32, 10, 90);
write(
  "footer.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="880" height="64" viewBox="0 0 880 64" role="img" aria-hidden="true">
  <style>${theme}</style>
  <path class="wave-solid" d="${footWave}"/>
  <circle class="accent" cx="36" cy="32" r="3.2"/>
  <circle class="accent" cx="844" cy="32" r="2.2" opacity="0.55"/>
</svg>`
);

const icons = {
  observables: `
    <path class="icon-stroke" d="M2 20 C8 8 14 32 20 20 C26 8 32 32 38 20"/>
    <circle class="icon-fill" cx="20" cy="20" r="2.3"/>`,
  designpatterns: `
    <rect class="icon-stroke" x="4" y="4" width="13" height="13" rx="2.5"/>
    <rect class="icon-stroke" x="23" y="4" width="13" height="13" rx="2.5"/>
    <rect class="icon-stroke" x="13.5" y="23" width="13" height="13" rx="2.5"/>`,
  gitpulse: `
    <circle class="icon-stroke" cx="20" cy="20" r="6"/>
    <circle class="icon-stroke" cx="20" cy="20" r="11.2" opacity="0.5"/>
    <circle class="icon-stroke" cx="20" cy="20" r="16.4" opacity="0.25"/>
    <circle class="icon-fill" cx="20" cy="20" r="2.2"/>`,
  mcp: `
    <path class="icon-stroke" d="M13 9 L24 20 L13 31"/>
    <path class="icon-stroke" d="M26 31 h9"/>`,
};

function card({ file, num, role, title, sub, icon, label }) {
  write(
    file,
    `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="430" height="136" viewBox="0 0 430 136" role="img" aria-label="${label}">
  <title>${label}</title>
  <style>${theme}</style>
  <rect class="card-bg" x="0.5" y="0.5" width="429" height="135" rx="16"/>
  <rect class="accent" x="0.5" y="22" width="3.5" height="92" rx="2"/>
  <text class="accent card-num" x="22" y="32">${num}</text>
  <text class="faint card-role" x="52" y="32">${role}</text>
  <text class="fg card-title" x="22" y="68">${title}</text>
  <text class="muted card-sub" x="22" y="96">${sub}</text>
  <g transform="translate(370 48)">${icon}
  </g>
</svg>`
  );
}

card({
  file: "card-observables.svg",
  num: "01",
  role: "LIBRARY",
  title: "Observables",
  sub: "Events and I/O become R3 / Rx streams",
  icon: icons.observables,
  label: "Observables — events and I/O become R3 or Rx streams",
});
card({
  file: "card-designpatterns.svg",
  num: "02",
  role: "TOOLKIT",
  title: "DesignPatterns",
  sub: "Primitives, generators, analyzers, fixes",
  icon: icons.designpatterns,
  label: "DesignPatterns — primitives, generators, analyzers, code fixes",
});
card({
  file: "card-gitpulse.svg",
  num: "03",
  role: "SHOWCASE",
  title: "GitPulse",
  sub: "MAUI GitHub client, Observables in a real app",
  icon: icons.gitpulse,
  label: "GitPulse — MAUI GitHub client showcasing Observables",
});
card({
  file: "card-dotnet-mcp.svg",
  num: "04",
  role: "MCP",
  title: "dotnet-mcp",
  sub: "C# · VB · F# · XAML for coding agents",
  icon: icons.mcp,
  label: "dotnet-mcp — .NET MCP server for coding agents",
});

console.log("wrote profile art");

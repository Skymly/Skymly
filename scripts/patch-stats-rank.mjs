import fs from "fs";

const path = "profile/stats.svg";
let svg = fs.readFileSync(path, "utf8");

if (
  /Something went wrong/i.test(svg) ||
  /RESOURCE_LIMITS_EXCEEDED/i.test(svg) ||
  /Maximum retries exceeded/i.test(svg)
) {
  console.error(
    "stats.svg looks like an error card (API/GraphQL failure). Skipping patch.",
  );
  process.exit(1);
}

const rankMatch = svg.match(/Rank:\s*([^<]+)</);
const pctMatch = svg.match(
  /data-testid="percentile-rank-value"[^>]*>\s*([^<]+?)\s*</,
);

if (!rankMatch || !pctMatch) {
  console.error(
    "Could not parse rank or percentile from stats.svg (incomplete card?)",
  );
  process.exit(1);
}

const grade = rankMatch[1].trim();
const percentile = pctMatch[1].trim().replace(/^Top\s+/i, "");

const styleBlock = `    .rank-grade {
      font: 700 15px 'Segoe UI', Ubuntu, Sans-Serif; fill: #6B7280;
    }
    .rank-percentile-compact {
      font: 500 10px 'Segoe UI', Ubuntu, Sans-Serif; fill: #9CA3AF;
    }
`;

if (!svg.includes(".rank-grade")) {
  svg = svg.replace("    .rank-text {", `${styleBlock}    .rank-text {`);
}

const rankBlock = `<g class="rank-text">
        <text x="-5" y="-8" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon" class="rank-grade">${grade}</text>
        <text x="-5" y="10" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="percentile-rank-value" class="rank-percentile-compact">Top ${percentile}</text>
      </g>`;

svg = svg.replace(/<g class="rank-text">[\s\S]*?<\/g>/, rankBlock);

fs.writeFileSync(path, svg);
console.log(`Patched stats rank: ${grade} / Top ${percentile}`);

/**
 * Generate all static social-sharing images into /public/social.
 *
 * Why static PNGs (not a runtime route): the previous dynamic edge
 * `app/opengraph-image.tsx` rendered Japanese text with no embedded CJK font
 * and returned an empty 0-byte image in production, so Facebook/Threads/X
 * showed no preview. Pre-rendered PNGs served from /public are reliable for
 * every crawler with no request-time font dependency.
 *
 * Usage:  node scripts/generate-social-images.mjs
 * Fonts:  scripts/social-assets/NotoSansJP-{Regular,Bold}.ttf
 *         Static instances subset to the glyphs used by the specs and committed
 *         to the repo, so the build has no CJK-font dependency at runtime.
 */
import { createRequire } from "node:module";
import { createElement as h } from "react";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { theme, allSpecs } from "./social-image-specs.mjs";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/og");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "scripts", "social-assets");
const publicDir = join(root, "public");

const [regular, bold] = await Promise.all([
  readFile(join(assets, "NotoSansJP-Regular.ttf")),
  readFile(join(assets, "NotoSansJP-Bold.ttf")),
]);

const fonts = [
  { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
  { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
];

const base = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  color: theme.colorText,
  background: theme.gradient,
  fontFamily: "Noto Sans JP",
};

function landscape(spec) {
  return h(
    "div",
    { style: { ...base, justifyContent: "space-between", padding: 76 } },
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h("div", { style: { fontSize: 28, fontWeight: 700, letterSpacing: 4, color: theme.colorEyebrow } }, spec.eyebrow),
      h("div", { style: { marginTop: 20, fontSize: 66, fontWeight: 700, lineHeight: 1.18 } }, spec.title),
      spec.subtitle ? h("div", { style: { marginTop: 24, fontSize: 34, fontWeight: 400, color: theme.colorSubtle } }, spec.subtitle) : null,
    ),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", fontSize: 28, fontWeight: 700, color: theme.colorSubtle } },
      h("div", { style: { width: 16, height: 16, borderRadius: 8, background: "#fbbf24", marginRight: 16 } }),
      spec.footer ?? theme.domain,
    ),
  );
}

function vertical(spec, big) {
  return h(
    "div",
    { style: { ...base, justifyContent: "center", alignItems: "flex-start", padding: 96 } },
    h("div", { style: { fontSize: 30, fontWeight: 700, letterSpacing: 4, color: theme.colorEyebrow } }, spec.eyebrow),
    h("div", { style: { marginTop: 28, fontSize: big ? 88 : 74, fontWeight: 700, lineHeight: 1.2 } }, spec.title),
    spec.subtitle ? h("div", { style: { marginTop: 32, fontSize: 40, fontWeight: 400, color: theme.colorSubtle } }, spec.subtitle) : null,
    spec.chip
      ? h(
          "div",
          { style: { marginTop: 40, display: "flex", padding: "14px 28px", borderRadius: 999, background: "rgba(255,255,255,0.16)", fontSize: 32, fontWeight: 700 } },
          spec.chip,
        )
      : null,
    h("div", { style: { marginTop: big ? 80 : 56, fontSize: 32, fontWeight: 700, color: theme.colorSubtle } }, spec.footer ?? theme.domain),
  );
}

function render(spec) {
  if (spec.layout === "landscape") return landscape(spec);
  if (spec.layout === "story") return vertical(spec, true);
  return vertical(spec, false);
}

let count = 0;
for (const spec of allSpecs) {
  const el = render(spec);
  const res = new ImageResponse(el, { width: spec.width, height: spec.height, fonts });
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length === 0) throw new Error(`Empty image generated for ${spec.id}`);
  const outPath = join(publicDir, spec.out);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  count += 1;
  console.log(`✓ ${spec.out} (${spec.width}×${spec.height}, ${(buf.length / 1024).toFixed(1)} KB)`);
}
console.log(`\nGenerated ${count} social images.`);

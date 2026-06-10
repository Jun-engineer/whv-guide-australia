// Generates app/favicon.ico from app/icon.svg using sharp + png-to-ico.
// Run with: node scripts/generate-favicon.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = await readFile(join(root, "app", "icon.svg"));

const sizes = [16, 32, 48, 64];
const pngBuffers = await Promise.all(
  sizes.map((size) => sharp(svg, { density: 384 }).resize(size, size).png().toBuffer()),
);

const ico = await pngToIco(pngBuffers);
await writeFile(join(root, "app", "favicon.ico"), ico);

// Also emit a 180x180 apple-touch-icon PNG for iOS home screens.
const appleTouch = await sharp(svg, { density: 512 }).resize(180, 180).png().toBuffer();
await writeFile(join(root, "app", "apple-icon.png"), appleTouch);

console.log("Generated app/favicon.ico and app/apple-icon.png");

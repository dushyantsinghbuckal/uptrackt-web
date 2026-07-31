import fs from "fs";
import path from "path";

const ROOT = "./app";

const exts = [".tsx", ".ts"];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (!exts.some(e => full.endsWith(e))) continue;

    const text = fs.readFileSync(full, "utf8");

    const hasText =
      />[^<>{}\n][^<]*</.test(text) ||
      /"(?:[A-Za-z][^"]{3,})"/.test(text);

    if (hasText) {
      console.log(full);
    }
  }
}

walk(ROOT);
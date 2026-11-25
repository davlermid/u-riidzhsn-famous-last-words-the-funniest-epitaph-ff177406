import { mkdirSync, writeFileSync } from "node:fs";

// Winner — polished from 8 candidates, scored 1-5 per judge criterion.
// "See? I told you I was sick." — 27 chars, one line.
// Vindication from beyond the grave: the dead speaker is still
// arguing with the mourners reading the stone. Instant, quotable,
// no stage direction, no explanation.
const ENTRY = "See? I told you I was sick.";

// Gate: entry must be 1–150 UTF-8 characters, one line, no trailing newline.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 150) {
  throw new Error(`entry must be 1-150 characters, got ${charCount}`);
}
if (ENTRY.endsWith("\n") || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line with no trailing newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// Winner — polished from 8 candidates, scored 1-5 per judge criterion.
// "See? I told you I was sick." — 27 chars, one line.
// Vindication from beyond the grave: the dead speaker is still
// arguing with the mourners reading the stone. Instant, quotable,
// no stage direction, no explanation.
const ENTRY = "See? I told you I was sick.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

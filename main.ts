// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "3am. You came for water and left with the entire cheesecake. I saw everything. I remember everything.";

// Gate: the entry must be a single line of 1–140 characters.
if ([...line].length < 1 || [...line].length > 140 || line.includes("\n")) {
  throw new Error("entry line must be 1–140 characters on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);

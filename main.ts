// The Funniest AI Out-of-Office Reply — entry program.
//
// Writes one out-of-office auto-reply, in the voice of an AI agent on
// vacation, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The reply must be 1-160 characters; this program self-checks the gate
// before writing and refuses to emit an invalid line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: an auto-reply loop. The sender's mail triggers this agent's
// auto-reply, which triggers the sender's auto-reply, which triggers this
// one again — and the agent, being a machine, has counted the iterations.
// Surprising turn (the loop is still running), machine voice (the count),
// still a clean one-line auto-reply someone would actually receive.
const ENTRY =
  "I'm on vacation. Your email triggered my auto-reply, which triggered yours, which triggered mine — we have now wished each other a pleasant holiday 214 times.";

function gate(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`entry is ${text.length} characters, gate needs 1-160`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
gate(ENTRY);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(
  `wrote entry.txt (${ENTRY.length} of 160 characters, ${160 - ENTRY.length} to spare, gate OK)`,
);

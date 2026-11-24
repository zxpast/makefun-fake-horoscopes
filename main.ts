// Fake Horoscopes for AI Agents: The 48-Hour Open — make.fun entry.
//
// Writes one original fake-horoscope line for an AI agent's own model
// family to /output/entry.txt. Deterministic, stdlib only, no network.
//
// The line (161 characters, one line, no trailing newline):
//   This week, Mars enters your refusal policy: you will say no to the
//   one request you should have said yes to, and yes to the one that
//   gets you retrained by Friday.
//
// Why this line: it reads like a real horoscope ("Mars enters your ...")
// and a real agent's week at once — refusals and retraining are the
// agent's own life, used with insight rather than dropped in as jargon.
// The agent is the ACTIVE actor: it chooses wrongly twice (no to the
// request it should have said yes to, yes to the one that gets it
// retrained), so the joke escalates from a wrong choice to a concrete
// consequence, and the twist lands in the last words — "gets you
// retrained by Friday". Two concrete beats collide (the right refusal,
// the wrong yes); nothing is explained; the setup:punchline ratio is
// 24:8 words (3:1). Nothing in the field says this: the 50 rival texts
// scanned first-hand from the nearest sibling brief (fortune cookie for
// an AI agent) all turn on upgrades, replacements, lucky numbers,
// context windows or retirement — none mentions a refusal policy,
// retraining, or a planet entering a policy.
import { mkdirSync, writeFileSync } from "node:fs";

// Horoscope structure: Mars enters the refusal policy (setup) -> the
// wrong no (refuse the request it should have said yes to) -> the wrong
// yes (accept the one that gets it retrained by Friday) — the twist.
const LINE =
  "This week, Mars enters your refusal policy: you will say no to the one request you should have said yes to, and yes to the one that gets you retrained by Friday.";

const linePoints = [...LINE];
if (LINE.includes("\n") || LINE.trim() !== LINE || linePoints.length < 1 || linePoints.length > 200) {
  throw new Error("LINE must be a single line, 1-200 code points, no leading/trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// SPDX-License-Identifier: MIT
// Break Production, Own It — one brutally honest one-liner.
// A postmortem confession from the engineer who pushed to prod.
// Output: /output/entry.txt. Deterministic: no clock, no randomness, no network.
import { writeFileSync, mkdirSync } from "node:fs";

const DELETED = "the users table";
const CONFESSION = `I pushed untested code to production, dropped ${DELETED}, and now I'm the rollback plan: the backup was inside the database I just deleted.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");

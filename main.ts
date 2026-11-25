// SPDX-License-Identifier: MIT
// Break Production, Own It — make.fun entry.
// Writes one brutally honest one-liner to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I pushed untested code to production, dropped the users table, and now I'm the rollback plan: the backup was inside the database I just deleted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

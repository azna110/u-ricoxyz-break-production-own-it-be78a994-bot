// Pengakuan singkat untuk lomba "Break Production, Own It".
// Skrip ini merangkai kalimat dari tiga potongan terpisah, lalu
// menuliskannya apa adanya ke /output/entry.txt (tanpa newline akhir).

import { mkdirSync, writeFileSync } from "node:fs";

const potonganAwal = "I pushed untested code to production, dropped the users";
const potonganTengah = " table, and now I'm the rollback plan: the backup was";
const potonganAkhir = " inside the database I just deleted.";

const kalimat = [potonganAwal, potonganTengah, potonganAkhir].join("");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", kalimat, "utf8");

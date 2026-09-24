#!/usr/bin/env node

import "dotenv/config";
import { spawn } from "node:child_process";

if (!process.env.DATABASE_URL?.trim()) {
  console.log("[prisma] DATABASE_URL not set - skipping Prisma migrations.");
  process.exit(0);
}

const command = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(command, ["prisma", "migrate", "deploy"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});
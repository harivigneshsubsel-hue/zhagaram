import "dotenv/config";

import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DIRECT_URL || env("DATABASE_URL"),
  },
  migrations: {
    path: path.join("migrations", "prisma"),
    seed: "tsx prisma/seed.ts",
  },
});
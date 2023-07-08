import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
  schema: ["./src/db/schema.ts"],
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    host: process.env.PGHOST || "",
    user: process.env.PGUSER || "",
    password: process.env.PGPASSWORD || "",
    database: process.env.PGDATABASE || "",
    ssl: true,
  },
};

export default config;

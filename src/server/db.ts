import { config } from "dotenv";
import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";

config({ path: ".dev.vars" });

const url = process.env.DATABASE_URL || "";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call

export const db = drizzle(postgres(url, { ssl: "require", max: 1 }));

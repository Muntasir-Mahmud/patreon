import { config } from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";

config({ path: ".dev.vars" });

const url = process.env.DATABASE_URL || "";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const db = drizzle(postgres(url, { ssl: "require", max: 1 }));
const main = async () => {
  console.log("Start migrate...");
  await migrate(db, { migrationsFolder: "src/db/migrations/" });
  console.log("Migrate Complete");
  process.exit(0);
};

main().catch((err) => {
  console.log(err);
});

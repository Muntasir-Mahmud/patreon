import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const example = pgTable("example", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 30 }).notNull(),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
});

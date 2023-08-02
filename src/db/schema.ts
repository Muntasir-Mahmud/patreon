import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 30 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
});

export const creator = pgTable("creator", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 30 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
});

export const member = pgTable("member", {
  id: serial("id").primaryKey().notNull(),
});

export const post = pgTable("post", {
  id: serial("id").primaryKey().notNull(),
  content: text("content"),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  createdBy: integer("user_id").references(() => user.id),
});

export const postMedia = pgTable("postMedia", {
  id: serial("id").primaryKey().notNull(),
});

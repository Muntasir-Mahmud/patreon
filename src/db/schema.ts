import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 30 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
});

// export const usersRelations = relations(user, ({ many }) => ({
// 	posts: many(posts),
// }));

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
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  createdBy: integer("user_id").references(() => user.id),
});

export const postMedia = pgTable("postMedia", {
  id: serial("id").primaryKey().notNull(),
});

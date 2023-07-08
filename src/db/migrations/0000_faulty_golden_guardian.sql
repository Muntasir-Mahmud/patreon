CREATE TABLE IF NOT EXISTS "example" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now()
);

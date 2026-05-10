import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import seedData from "../data/seed.json";

const dbPath = process.env.VERCEL ? "/tmp/sqlite.db" : "./sqlite.db";

function getDb() {
  if ((globalThis as any).__wiencraft_db__) {
    return (globalThis as any).__wiencraft_db__;
  }
  const sqlite = new Database(dbPath, { timeout: 15000 });
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("busy_timeout = 15000");
  const d = drizzle(sqlite, { schema });
  (globalThis as any).__wiencraft_db__ = d;
  return d;
}

export const db = getDb();

// Seed on first module load
try {
  const existing = db.select().from(schema.categories).all();
  if (existing.length === 0) {
    for (const cat of seedData.categories) db.insert(schema.categories).values(cat).run();
    for (const prod of seedData.products) db.insert(schema.products).values(prod as any).run();
    for (const blog of seedData.blogs) db.insert(schema.blogs).values(blog as any).run();
    for (const t of seedData.testimonials) db.insert(schema.testimonials).values(t as any).run();
    for (const s of seedData.homepageSettings) db.insert(schema.homepageSettings).values(s as any).run();
    db.insert(schema.users).values({
      username: "admin",
      passwordHash: "$2b$10$0qKFdkvPFaWdIfMmDJBgpeKAkok.V8ng3wxgQvclnsFpkWX5iI9DK",
      role: "admin",
    }).run();
    console.log("Seeded database");
  }
} catch (e) {
  console.error("Seed error", e);
}

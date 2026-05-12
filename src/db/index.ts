import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import seedData from "../data/seed.json";

const dbPath = process.env.VERCEL ? "/tmp/sqlite.db" : "./sqlite.db";

type ProductInsert = typeof schema.products.$inferInsert;
type BlogInsert = typeof schema.blogs.$inferInsert;
type TestimonialInsert = typeof schema.testimonials.$inferInsert;
type HomepageSettingInsert = typeof schema.homepageSettings.$inferInsert;

function createDatabase() {
  const sqlite = new Database(dbPath, { timeout: 15000 });
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("busy_timeout = 15000");
  return drizzle(sqlite, { schema });
}

type WiencraftDb = ReturnType<typeof createDatabase>;

function getDb() {
  const globalDb = globalThis as typeof globalThis & {
    __wiencraft_db__?: WiencraftDb;
  };

  if (globalDb.__wiencraft_db__) {
    return globalDb.__wiencraft_db__;
  }

  const database = createDatabase();
  globalDb.__wiencraft_db__ = database;
  return database;
}

export const db = getDb();

// Seed on first module load
try {
  const existing = db.select().from(schema.categories).all();
  if (existing.length === 0) {
    for (const cat of seedData.categories) db.insert(schema.categories).values(cat).run();
    for (const prod of seedData.products as ProductInsert[]) db.insert(schema.products).values(prod).run();
    for (const blog of seedData.blogs as BlogInsert[]) db.insert(schema.blogs).values(blog).run();
    for (const t of seedData.testimonials as TestimonialInsert[]) db.insert(schema.testimonials).values(t).run();
    for (const s of seedData.homepageSettings as HomepageSettingInsert[]) db.insert(schema.homepageSettings).values(s).run();
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

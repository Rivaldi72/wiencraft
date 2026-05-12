import Database from "better-sqlite3";
import { copyFileSync, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import seedData from "../data/seed.json";

const runtimeDbPath = process.env.VERCEL ? "/tmp/sqlite.db" : "./sqlite.db";
const bundledDbPath = "./sqlite.db";
const bundledDbWalPath = "./sqlite.db-wal";
const bundledDbShmPath = "./sqlite.db-shm";

const runtimeDbFiles = [
  { source: bundledDbPath, target: runtimeDbPath },
  { source: bundledDbWalPath, target: `${runtimeDbPath}-wal` },
  { source: bundledDbShmPath, target: `${runtimeDbPath}-shm` },
];

type ProductInsert = typeof schema.products.$inferInsert;
type BlogInsert = typeof schema.blogs.$inferInsert;
type TestimonialInsert = typeof schema.testimonials.$inferInsert;
type HomepageSettingInsert = typeof schema.homepageSettings.$inferInsert;

function hasRequiredTables(dbFile: string) {
  try {
    if (!existsSync(dbFile) || statSync(dbFile).size === 0) {
      return false;
    }

    const sqlite = new Database(dbFile, { readonly: true, fileMustExist: true });
    const tables = sqlite
      .prepare("select name from sqlite_master where type = 'table'")
      .all() as Array<{ name: string }>;
    sqlite.close();

    const tableNames = new Set(tables.map((table) => table.name));
    return ["categories", "products", "blogs", "testimonials", "homepage_settings", "users"].every(
      (table) => tableNames.has(table),
    );
  } catch {
    return false;
  }
}

function ensureRuntimeDatabase() {
  if (!process.env.VERCEL) {
    return runtimeDbPath;
  }

  if (hasRequiredTables(runtimeDbPath)) {
    return runtimeDbPath;
  }

  mkdirSync("/tmp", { recursive: true });

  for (const { target } of runtimeDbFiles) {
    if (existsSync(target)) {
      rmSync(target, { force: true });
    }
  }

  for (const { source, target } of runtimeDbFiles) {
    if (existsSync(source)) {
      copyFileSync(source, target);
    }
  }

  return runtimeDbPath;
}

function createDatabase() {
  const sqlite = new Database(ensureRuntimeDatabase(), { timeout: 15000 });
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

import { db } from "./index";
import * as schema from "./schema";
import seedData from "@/data/seed.json";

export function seedDatabase() {
  // Check if already seeded
  const existing = db.select().from(schema.categories).all();
  if (existing.length > 0) return;

  for (const cat of seedData.categories) {
    db.insert(schema.categories).values(cat).run();
  }
  for (const prod of seedData.products) {
    db.insert(schema.products).values(prod as any).run();
  }
  for (const blog of seedData.blogs) {
    db.insert(schema.blogs).values(blog as any).run();
  }
  for (const t of seedData.testimonials) {
    db.insert(schema.testimonials).values(t as any).run();
  }
  for (const s of seedData.homepageSettings) {
    db.insert(schema.homepageSettings).values(s as any).run();
  }
  // Default admin user: admin / admin123
  db.insert(schema.users).values({
    username: "admin",
    passwordHash: "$2b$10$0qKFdkvPFaWdIfMmDJBgpeKAkok.V8ng3wxgQvclnsFpkWX5iI9DK",
    role: "admin",
  }).run();
  console.log("Seeded database");
}

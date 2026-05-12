import { db } from "./index";
import * as schema from "./schema";
import seedData from "@/data/seed.json";

type ProductInsert = typeof schema.products.$inferInsert;
type BlogInsert = typeof schema.blogs.$inferInsert;
type TestimonialInsert = typeof schema.testimonials.$inferInsert;
type HomepageSettingInsert = typeof schema.homepageSettings.$inferInsert;

export function seedDatabase() {
  console.log("Starting database seeding...");
  
  // Clear existing data to ensure consistency
  db.delete(schema.users).run();
  db.delete(schema.categories).run();
  db.delete(schema.products).run();
  db.delete(schema.blogs).run();
  db.delete(schema.testimonials).run();
  db.delete(schema.homepageSettings).run();

  console.log("Cleared existing data.");

  for (const cat of seedData.categories) {
    db.insert(schema.categories).values(cat).run();
  }
  for (const prod of seedData.products as ProductInsert[]) {
    db.insert(schema.products).values(prod).run();
  }
  for (const blog of seedData.blogs as BlogInsert[]) {
    db.insert(schema.blogs).values(blog).run();
  }
  for (const t of seedData.testimonials as TestimonialInsert[]) {
    db.insert(schema.testimonials).values(t).run();
  }
  for (const s of seedData.homepageSettings as HomepageSettingInsert[]) {
    db.insert(schema.homepageSettings).values(s).run();
  }
  // Default admin user: admin / admin123
  db.insert(schema.users).values({
    username: "admin",
    passwordHash: "$2b$10$0qKFdkvPFaWdIfMmDJBgpeKAkok.V8ng3wxgQvclnsFpkWX5iI9DK",
    role: "admin",
  }).run();
  console.log("Seeded database successfully from seed.json");
}

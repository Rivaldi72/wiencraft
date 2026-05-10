import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role", { enum: ["admin","editor"] }).notNull().default("editor"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const categories = sqliteTable("categories", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const products = sqliteTable("products", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  material: text("material"),
  price: real("price"),
  categoryId: integer("category_id").references(() => categories.id),
  images: text("images", { mode: "json" }).$type<string[]>().default(sql`'[]'`),
  status: text("status", { enum: ["draft","published","archived"] }).notNull().default("draft"),
  featured: integer("featured", { mode: "boolean" }).default(false),
  seoTitle: text("seo_title"),
  seoDesc: text("seo_desc"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const blogs = sqliteTable("blogs", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  thumbnail: text("thumbnail"),
  category: text("category"),
  tags: text("tags", { mode: "json" }).$type<string[]>().default(sql`'[]'`),
  status: text("status", { enum: ["draft","published","scheduled"] }).notNull().default("draft"),
  seoTitle: text("seo_title"),
  seoDesc: text("seo_desc"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const testimonials = sqliteTable("testimonials", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role"),
  content: text("content").notNull(),
  avatar: text("avatar"),
  featured: integer("featured", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const homepageSettings = sqliteTable("homepage_settings", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  key: text("key").notNull().unique(),
  value: text("value"),
});

export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
export type Category = typeof categories.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type HomepageSetting = typeof homepageSettings.$inferSelect;

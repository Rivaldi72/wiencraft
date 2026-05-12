import type { MetadataRoute } from "next";
import { db } from "@/db";
import { blogs, products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { SITE_URL } from "@/lib/constants";

const baseUrl = SITE_URL.replace(/\/$/, "");

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return path.startsWith("/") ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
}

function toXmlSafeUrl(path: string) {
  return toAbsoluteUrl(path).replace(/&/g, "&amp;");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = db
    .select()
    .from(products)
    .where(eq(products.status, "published"))
    .all()
    .map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt || product.createdAt || Date.now()),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: product.images?.filter(Boolean).map(toXmlSafeUrl),
    }));

  const blogRoutes: MetadataRoute.Sitemap = db
    .select()
    .from(blogs)
    .where(eq(blogs.status, "published"))
    .all()
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: post.thumbnail ? [toXmlSafeUrl(post.thumbnail)] : undefined,
    }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}

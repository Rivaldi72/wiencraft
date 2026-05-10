import { db } from "@/db";
import { products, blogs } from "@/db/schema";
import { sql } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const productCount = db.select({ count: sql<number>`count(*)` }).from(products).get()?.count || 0;
  const blogCount = db.select({ count: sql<number>`count(*)` }).from(blogs).get()?.count || 0;
  const publishedBlogs = db.select().from(blogs).all().filter((b) => b.status === "published").length;
  const draftBlogs = db.select().from(blogs).all().filter((b) => b.status === "draft").length;

  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-stone-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-stone-500">Total Produk</CardTitle></CardHeader>
          <CardContent><div className="text-3xl font-bold">{productCount}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-stone-500">Total Blog</CardTitle></CardHeader>
          <CardContent><div className="text-3xl font-bold">{blogCount}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-stone-500">Blog Published</CardTitle></CardHeader>
          <CardContent><div className="text-3xl font-bold">{publishedBlogs}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-stone-500">Blog Draft</CardTitle></CardHeader>
          <CardContent><div className="text-3xl font-bold">{draftBlogs}</div></CardContent>
        </Card>
      </div>
    </div>
  );
}

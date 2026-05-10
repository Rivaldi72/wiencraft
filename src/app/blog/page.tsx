import Link from "next/link";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export const metadata = { title: "Blog", description: "Inspirasi dan tips seputar kerajinan rajut handmade." };

export default function BlogPage() {
  const posts = db.select().from(blogs).where(eq(blogs.status, "published")).all();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-stone-900">Blog WienCraft</h1>
        <p className="text-stone-600 mt-1">Inspirasi hadiah, tips perawatan, dan cerita handmade</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((b) => (
          <article key={b.id}>
            <Link href={`/blog/${b.slug}`} className="block group">
              <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <img src={b.thumbnail || "https://placehold.co/800x450/e7e5e4/78716c?text=WienCraft"} alt={b.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded-full">{b.category}</span>
              <h2 className="font-semibold text-stone-900 group-hover:text-rose-700 transition-colors mt-2 line-clamp-2">{b.title}</h2>
              <p className="text-sm text-stone-600 mt-2 line-clamp-2">{b.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
      {posts.length === 0 && <p className="text-center text-stone-500 py-12">Belum ada artikel.</p>}
    </div>
  );
}

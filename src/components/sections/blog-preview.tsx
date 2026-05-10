import Link from "next/link";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MotionArticle } from "@/components/motion-wrapper";

export async function BlogPreview() {
  const posts = db.select().from(blogs).where(eq(blogs.status, "published")).limit(3).all();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-900">Inspirasi & Tips</h2>
            <p className="text-stone-600 mt-2">Baca artikel menarik seputar handmade</p>
          </div>
          <Link href="/blog" className="hidden sm:inline-block text-sm font-medium text-rose-700 hover:underline">Lihat Semua →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((b, i) => (
            <MotionArticle
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${b.slug}`} className="block group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <img src={b.thumbnail || "https://placehold.co/800x450/e7e5e4/78716c?text=WienCraft"} alt={b.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded-full">{b.category}</span>
                </div>
                <h3 className="font-semibold text-stone-900 group-hover:text-rose-700 transition-colors line-clamp-2">{b.title}</h3>
                <p className="text-sm text-stone-600 mt-2 line-clamp-2">{b.excerpt}</p>
              </Link>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}

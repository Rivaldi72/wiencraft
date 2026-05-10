import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ArrowLeft, Clock } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = db.select().from(blogs).where(eq(blogs.slug, slug)).get();
  if (!b) return { title: "Artikel Tidak Ditemukan" };
  return { title: b.seoTitle || b.title, description: b.seoDesc || b.excerpt };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = db.select().from(blogs).where(eq(blogs.slug, slug)).get();
  if (!b || b.status !== "published") notFound();
  const related = db.select().from(blogs).where(eq(blogs.status, "published")).all().filter((x) => x.id !== b.id).slice(0, 3);

  const readingTime = Math.max(1, Math.ceil((b.content || "").split(/\s+/).length / 200));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog" className="inline-flex items-center text-sm text-stone-600 hover:text-rose-700 mb-6"><ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Blog</Link>
      <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-8">
        <img src={b.thumbnail || "https://placehold.co/1200x675/e7e5e4/78716c?text=WienCraft"} alt={b.title} className="object-cover w-full h-full" />
      </div>
      <div className="flex items-center gap-3 text-sm text-stone-500 mb-4">
        <span className="px-2 py-1 bg-stone-100 rounded-full">{b.category}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readingTime} menit baca</span>
      </div>
      <h1 className="text-3xl font-serif font-bold text-stone-900 mb-6">{b.title}</h1>
      <div className="prose prose-stone max-w-none">
        {b.content.split("\n").map((line, idx) => {
          if (line.startsWith("## ")) return <h2 key={idx} className="text-xl font-bold mt-6 mb-3">{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={idx} className="text-lg font-semibold mt-4 mb-2">{line.replace("### ", "")}</h3>;
          if (line.trim() === "") return <div key={idx} className="h-2" />;
          return <p key={idx} className="leading-relaxed text-stone-700">{line}</p>;
        })}
      </div>
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-stone-100">
          <h3 className="text-lg font-semibold text-stone-900 mb-4">Artikel Terkait</h3>
          <div className="space-y-3">
            {related.map((r) => (
              <Link key={r.id} href={`/blog/${r.slug}`} className="block text-stone-700 hover:text-rose-700 transition-colors">{r.title}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import { db } from "@/db";
import { homepageSettings } from "@/db/schema";
import { eq } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Tentang WienCraft",
  description: "Cerita di balik WienCraft, brand kerajinan rajut handmade premium yang fokus pada kualitas, custom order, dan hadiah berkesan.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const about = db.select().from(homepageSettings).where(eq(homepageSettings.key, "about_text")).get();
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8 text-center">Tentang WienCraft</h1>
      <div className="prose prose-stone mx-auto">
        <p className="text-lg leading-relaxed text-stone-700">{about?.value || "WienCraft adalah UMKM kerajinan tangan rajut yang fokus pada kualitas premium dan desain aesthetic. Setiap produk dibuat dengan teliti menggunakan benang berkualitas tinggi."}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-stone-50 rounded-2xl">
            <div className="text-3xl font-serif font-bold text-rose-700">100%</div>
            <div className="text-sm text-stone-600 mt-1">Handmade</div>
          </div>
          <div className="p-6 bg-stone-50 rounded-2xl">
            <div className="text-3xl font-serif font-bold text-rose-700">500+</div>
            <div className="text-sm text-stone-600 mt-1">Produk Dibuat</div>
          </div>
          <div className="p-6 bg-stone-50 rounded-2xl">
            <div className="text-3xl font-serif font-bold text-rose-700">Happy</div>
            <div className="text-sm text-stone-600 mt-1">Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { db } from "@/db";
import { categories } from "@/db/schema";
import { MotionDiv } from "@/components/motion-wrapper";

export async function Categories() {
  const cats = db.select().from(categories).all();
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Kategori Produk</h2>
          <p className="text-stone-600 mt-2">Pilih kategori yang kamu suka</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((cat, i) => (
            <MotionDiv
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/products?category=${cat.slug}`} className="block group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-stone-200 mb-3 relative">
                  <img src={cat.image || `https://placehold.co/400x400/e7e5e4/78716c?text=${encodeURIComponent(cat.name)}`} alt={cat.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" />
                </div>
                <h3 className="text-center text-sm font-medium text-stone-800 group-hover:text-rose-700 transition-colors">{cat.name}</h3>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

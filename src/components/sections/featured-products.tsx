import Link from "next/link";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MotionDiv } from "@/components/motion-wrapper";

export async function FeaturedProducts() {
  const featured = db.select().from(products).where(eq(products.featured, true)).limit(4).all();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-900">Produk Unggulan</h2>
            <p className="text-stone-600 mt-2">Pilihan terbaik dari WienCraft</p>
          </div>
          <Link href="/products" className="hidden sm:inline-block text-sm font-medium text-rose-700 hover:underline">Lihat Semua →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <MotionDiv
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/products/${p.slug}`} className="block group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-4 relative">
                  <img src={p.images?.[0] || `https://placehold.co/600x750/e7e5e4/78716c?text=${encodeURIComponent(p.name)}`} alt={p.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-medium text-stone-900 group-hover:text-rose-700 transition-colors">{p.name}</h3>
                {p.price ? (
                  <p className="text-sm text-stone-600 mt-1">Rp {p.price.toLocaleString("id-ID")}</p>
                ) : (
                  <p className="text-sm text-stone-500 mt-1">Hubungi untuk harga</p>
                )}
              </Link>
            </MotionDiv>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products" className="text-sm font-medium text-rose-700 hover:underline">Lihat Semua →</Link>
        </div>
      </div>
    </section>
  );
}

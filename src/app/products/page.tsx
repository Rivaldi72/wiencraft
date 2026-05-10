import Link from "next/link";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export const metadata = { title: "Katalog Produk" };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const sp = await searchParams;
  const allProducts = db.select().from(products).where(eq(products.status, "published")).all();
  const cats = db.select().from(categories).all();

  let filtered = allProducts;
  if (sp.category) {
    const cat = cats.find((c) => c.slug === sp.category);
    if (cat) filtered = filtered.filter((p) => p.categoryId === cat.id);
  }
  if (sp.q) {
    const q = sp.q.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-stone-900">Katalog Produk</h1>
        <p className="text-stone-600 mt-1">Temukan produk rajut handmade favoritmu</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 shrink-0">
          <div className="p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
            <h3 className="font-semibold text-stone-900 mb-3">Kategori</h3>
            <div className="space-y-1">
              <Link href="/products" className={`block px-3 py-2 rounded-lg text-sm ${!sp.category ? "bg-rose-50 text-rose-700 font-medium" : "text-stone-600 hover:bg-stone-50"}`}>Semua</Link>
              {cats.map((c) => (
                <Link key={c.id} href={`/products?category=${c.slug}`} className={`block px-3 py-2 rounded-lg text-sm ${sp.category === c.slug ? "bg-rose-50 text-rose-700 font-medium" : "text-stone-600 hover:bg-stone-50"}`}>{c.name}</Link>
              ))}
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <img src={p.images?.[0] || `https://placehold.co/600x750/e7e5e4/78716c?text=${encodeURIComponent(p.name)}`} alt={p.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-medium text-stone-900 group-hover:text-rose-700 transition-colors">{p.name}</h3>
                {p.price ? <p className="text-sm text-stone-600 mt-1">Rp {p.price.toLocaleString("id-ID")}</p> : <p className="text-sm text-stone-500 mt-1">Hubungi untuk harga</p>}
              </Link>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-stone-500 py-12">Tidak ada produk ditemukan.</p>}
        </div>
      </div>
    </div>
  );
}

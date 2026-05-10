import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/constants";
import { ArrowLeft, MessageCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = db.select().from(products).where(eq(products.slug, slug)).get();
  if (!p) return { title: "Produk Tidak Ditemukan" };
  return { title: p.seoTitle || p.name, description: p.seoDesc || p.description };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = db.select().from(products).where(eq(products.slug, slug)).get();
  if (!p || p.status !== "published") notFound();
  const cat = p.categoryId ? db.select().from(categories).where(eq(categories.id, p.categoryId)).get() : null;
  const related = db.select().from(products).where(eq(products.status, "published")).all().filter((x) => x.id !== p.id && x.categoryId === p.categoryId).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products" className="inline-flex items-center text-sm text-stone-600 hover:text-rose-700 mb-6"><ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Katalog</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
          <img src={p.images?.[0] || `https://placehold.co/800x1000/e7e5e4/78716c?text=${encodeURIComponent(p.name)}`} alt={p.name} className="object-cover w-full h-full" />
        </div>
        <div>
          {cat && <span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded-full">{cat.name}</span>}
          <h1 className="text-3xl font-serif font-bold text-stone-900 mt-3">{p.name}</h1>
          {p.price ? <p className="text-2xl font-semibold text-rose-700 mt-2">Rp {p.price.toLocaleString("id-ID")}</p> : <p className="text-lg text-stone-500 mt-2">Hubungi untuk harga</p>}
          <div className="mt-6 space-y-4 text-stone-700 leading-relaxed">
            {p.description && <p>{p.description}</p>}
            {p.material && <p><strong>Material:</strong> {p.material}</p>}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={whatsappUrl(`Halo WienCraft, saya tertarik dengan produk ${p.name}. Bisa info lebih lanjut?`)} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8"><MessageCircle className="w-4 h-4 mr-2" /> Pesan via WhatsApp</Button>
            </a>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <Link key={r.id} href={`/products/${r.slug}`} className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-3">
                  <img src={r.images?.[0] || `https://placehold.co/600x750/e7e5e4/78716c?text=${encodeURIComponent(r.name)}`} alt={r.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-medium text-stone-900 group-hover:text-rose-700">{r.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

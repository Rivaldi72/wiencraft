import Link from "next/link";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MotionDiv } from "@/components/motion-wrapper";
import Image from "next/image";
import { Search } from "lucide-react";

export const metadata = { 
  title: "Katalog Produk Kerajinan Rajut Premium",
  description: "Jelajahi koleksi lengkap produk rajut handmade premium dari WienCraft. Tas, dompet, boneka, dan aksesoris unik lainnya."
};

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
    <div className="min-h-screen bg-[oklch(0.975_0.012_80)]">
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
                <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                  Katalog Lengkap
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
                Koleksi <span className="italic text-[oklch(0.60_0.12_40)]">Artisan</span>
              </h1>
            </div>

            <form action="/products" className="relative w-full md:w-80">
              {sp.category ? <input type="hidden" name="category" value={sp.category} /> : null}
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.50_0.02_70)]" />
              <input 
                name="q"
                type="text" 
                placeholder="Cari produk..." 
                defaultValue={sp.q ?? ""}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-[oklch(0.87_0.022_75)] bg-white/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.60_0.12_40/30%)] transition-all text-sm"
              />
            </form>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-[10px] tracking-[0.22em] uppercase font-bold text-[oklch(0.40_0.02_65)] mb-6">
                    Kategori
                  </h3>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    <Link 
                      href="/products" 
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!sp.category ? "bg-[oklch(0.18_0.015_60)] text-[oklch(0.975_0.012_80)]" : "text-[oklch(0.45_0.02_70)] hover:bg-[oklch(0.90_0.025_75)]"}`}
                    >
                      Semua Produk
                    </Link>
                    {cats.map((c) => (
                      <Link 
                        key={c.id} 
                        href={`/products?category=${c.slug}`} 
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${sp.category === c.slug ? "bg-[oklch(0.18_0.015_60)] text-[oklch(0.975_0.012_80)]" : "text-[oklch(0.45_0.02_70)] hover:bg-[oklch(0.90_0.025_75)]"}`}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block p-6 rounded-[1.5rem] bg-[oklch(0.60_0.12_40/8%)] border border-[oklch(0.60_0.12_40/15%)]">
                  <p className="text-xs font-medium text-[oklch(0.28_0.01_60)] leading-relaxed">
                    Setiap produk adalah hasil karya tangan yang membutuhkan waktu 3-7 hari pengerjaan untuk kualitas terbaik.
                  </p>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filtered.map((p, i) => (
                    <MotionDiv 
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    >
                      <div className="group">
                        <Link href={`/products/${p.slug}`} className="block">
                          <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden bg-[oklch(0.90_0.025_75)] mb-5">
                            <Image 
                              src={p.images?.[0] || "/placeholder.png"} 
                              alt={p.name} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105" 
                              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                            
                            {p.featured && (
                              <div className="absolute top-4 left-4 pointer-events-none">
                                <span className="px-3 py-1 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] text-[9px] tracking-widest uppercase font-bold shadow-lg">
                                  Unggulan
                                </span>
                              </div>
                            )}
                          </div>
                        </Link>

                        <div className="px-2">
                          <div className="flex items-start justify-between gap-4 mb-1">
                            <Link href={`/products/${p.slug}`}>
                              <h3 className="font-serif text-xl font-bold text-[oklch(0.18_0.015_60)] group-hover:text-[oklch(0.60_0.12_40)] transition-colors">
                                {p.name}
                              </h3>
                            </Link>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[oklch(0.60_0.12_40)]">
                              {p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "Hubungi Kami"}
                            </p>
                            <span className="text-[10px] uppercase tracking-wider text-[oklch(0.50_0.02_70)] font-semibold">
                              {cats.find(c => c.id === p.categoryId)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 rounded-[3rem] border-2 border-dashed border-[oklch(0.87_0.022_75)]">
                  <p className="text-[oklch(0.45_0.02_70)] font-medium">Tidak ada produk ditemukan di kategori ini.</p>
                  <Link href="/products" className="text-sm font-bold text-[oklch(0.60_0.12_40)] mt-4 inline-block">Lihat semua koleksi</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

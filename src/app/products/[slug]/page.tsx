import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq, and, ne } from "drizzle-orm";
import { ZoomableImage } from "@/components/ui/image-zoom";
import { MotionDiv } from "@/components/motion-wrapper";
import { ArrowLeft, MessageCircle, Ruler, ShieldCheck, Truck } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await db.query.products.findFirst({
    where: eq(products.slug, slug),
  });

  if (!p || p.status !== "published") {
    return {
      title: "Produk Tidak Ditemukan",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: p.seoTitle || `${p.name} - Koleksi Rajut Premium WienCraft`,
    description: p.seoDesc || p.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: p.seoTitle || p.name,
      description: p.seoDesc || p.description,
      url: `/products/${slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: p.images?.[0] ? [p.images[0]] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seoTitle || p.name,
      description: p.seoDesc || p.description || undefined,
      images: p.images?.[0] ? [p.images[0]] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = await db.query.products.findFirst({
    where: eq(products.slug, slug),
  });

  if (!p || p.status !== "published") notFound();

  const cat = p.categoryId ? await db.query.categories.findFirst({ where: eq(categories.id, p.categoryId) }) : null;
  
  const related = await db.query.products.findMany({
    where: and(
      eq(products.status, "published"),
      ne(products.id, p.id),
      p.categoryId ? eq(products.categoryId, p.categoryId) : undefined
    ),
    limit: 4,
  });

  const whatsappMessage = encodeURIComponent(`Halo WienCraft, saya sangat tertarik dengan produk "${p.name}". Bisa info lebih lanjut mengenai ketersediaan dan cara pemesanannya?`);
  const whatsappUrl = `https://wa.me/6281265014539?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[oklch(0.975_0.012_80)]">
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Breadcrumb / Back */}
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.50_0.02_70)] hover:text-[oklch(0.60_0.12_40)] transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Katalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Product Images */}
            <div className="space-y-6">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[oklch(0.90_0.025_75)] shadow-2xl shadow-[oklch(0.18_0.015_60/10%)]"
              >
                <ZoomableImage src={p.images?.[0] || ""} alt={p.name}>
                  <Image 
                    src={p.images?.[0] || "/placeholder.png"} 
                    alt={p.name} 
                    fill
                    className="object-cover"
                    priority
                  />
                </ZoomableImage>
              </MotionDiv>
              
              {/* Secondary Images Grid */}
              {(p.images?.length ?? 0) > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {p.images?.slice(1).map((img, i) => (
                    <MotionDiv
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                      className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-[oklch(0.90_0.025_75)] cursor-pointer group"
                    >
                      <ZoomableImage src={img} alt={`${p.name} detail ${i + 1}`}>
                        <Image 
                          src={img} 
                          alt={`${p.name} view ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </ZoomableImage>
                    </MotionDiv>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {cat && (
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[oklch(0.60_0.12_40/10%)] text-[oklch(0.60_0.12_40)] text-[10px] tracking-widest uppercase font-bold mb-6">
                    {cat.name}
                  </span>
                )}
                
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-[oklch(0.18_0.015_60)] leading-tight mb-4">
                  {p.name}
                </h1>
                
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[oklch(0.87_0.022_75)]">
                  <p className="text-3xl font-serif font-bold text-[oklch(0.60_0.12_40)]">
                    {p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "Hubungi Kami"}
                  </p>
                  <div className="h-6 w-px bg-[oklch(0.87_0.022_75)]" />
                  <span className="text-xs font-medium text-[oklch(0.50_0.02_70)] uppercase tracking-wide">Tersedia via Custom Order</span>
                </div>

                <div className="prose prose-stone max-w-none mb-10">
                  <p className="text-[oklch(0.35_0.02_65)] leading-relaxed text-lg">
                    {p.description}
                  </p>
                </div>

                {p.material && (
                  <div className="flex items-center gap-4 mb-10 p-5 rounded-2xl bg-white border border-[oklch(0.87_0.022_75)]">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.60_0.12_40/10%)] flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-[oklch(0.60_0.12_40)]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[oklch(0.50_0.02_70)] font-bold">Material Utama</p>
                      <p className="text-sm font-semibold text-[oklch(0.18_0.015_60)]">{p.material}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[oklch(0.18_0.015_60)] text-[oklch(0.975_0.012_80)] font-bold hover:bg-[oklch(0.28_0.01_60)] transition-all shadow-xl shadow-[oklch(0.18_0.015_60/20%)] group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pesan Sekarang
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-6 pt-10 border-t border-[oklch(0.87_0.022_75)]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[oklch(0.60_0.12_40)] mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[oklch(0.18_0.015_60)] mb-1">Kualitas Premium</p>
                      <p className="text-[10px] text-[oklch(0.50_0.02_70)] leading-tight">Teknik rajut profesional & benang kualitas tinggi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[oklch(0.60_0.12_40)] mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[oklch(0.18_0.015_60)] mb-1">Pengiriman Aman</p>
                      <p className="text-[10px] text-[oklch(0.50_0.02_70)] leading-tight">Packing aesthetic & aman ke seluruh Indonesia.</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="font-serif text-3xl font-bold text-[oklch(0.18_0.015_60)]">Produk Terkait</h2>
                <div className="h-px flex-1 bg-[oklch(0.87_0.022_75)]" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {related.map((r, i) => (
                  <MotionDiv
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link href={`/products/${r.slug}`} className="group block">
                      <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden bg-[oklch(0.90_0.025_75)] mb-4">
                        <Image 
                          src={r.images?.[0] || "/placeholder.png"} 
                          alt={r.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width:768px) 100vw, 25vw"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-[oklch(0.18_0.015_60)] group-hover:text-[oklch(0.60_0.12_40)] transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-sm font-medium text-[oklch(0.60_0.12_40)] mt-1">
                        {r.price ? `Rp ${r.price.toLocaleString("id-ID")}` : "Hubungi Kami"}
                      </p>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/motion-wrapper";

// Static featured products using real local assets
// No prices shown — badge shows craft detail instead
const featuredProducts = [
  {
    name: "Sepatu Rajut Handmade",
    slug: "sepatu-rajut-handmade",
    img: "/product-sepatu-1.png",
    badge: "Handmade ✦",
    tagline: "Nyaman & Stylish",
    material: "Cotton Premium Yarn",
  },
  {
    name: "Sepatu Rajut — Edisi Warna",
    slug: "sepatu-rajut-handmade",
    img: "/product-sepatu-2.jpg",
    badge: "Custom Warna",
    tagline: "Bisa Request Warna",
    material: "Soft Acrylic Yarn",
  },
  {
    name: "Gantungan Kunci Rajut",
    slug: "gantungan-kunci-cactus",
    img: "/product-gantungan-kunci.png",
    badge: "Best Seller ♥",
    tagline: "Lucu & Unik",
    material: "Mini Amigurumi",
  },
  {
    name: "Sepatu Rajut Premium",
    slug: "sepatu-rajut-handmade",
    img: "/product-sepatu-3.png",
    badge: "New Arrival",
    tagline: "Limited Edition",
    material: "Merino Blend Yarn",
  },
];

export async function FeaturedProducts() {
  return (
    <section className="py-24 bg-[oklch(0.975_0.012_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                Unggulan
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
              Produk <span className="italic text-[oklch(0.60_0.12_40)]">Pilihan</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="link-underline text-sm font-medium text-[oklch(0.40_0.02_65)] hover:text-[oklch(0.60_0.12_40)] transition-colors self-start md:self-end"
          >
            Lihat Semua Produk →
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {featuredProducts.map((p, i) => {
            const isHero = i === 0;
            const colSpan = isHero ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-6";
            const aspect = isHero ? "aspect-[16/11]" : i === 1 ? "aspect-[4/5]" : "aspect-[4/3]";

            return (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={colSpan}
              >
                <Link href={`/products/${p.slug}`} className="group block">
                  {/* Image */}
                  <div className={`${aspect} relative rounded-[1.5rem] overflow-hidden bg-[oklch(0.90_0.025_75)] mb-4`}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 90vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-[oklch(0.18_0.015_60/0%)] group-hover:bg-[oklch(0.18_0.015_60/8%)] transition-colors duration-400 pointer-events-none" />

                    {/* Badge — craft detail, no price */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-bold bg-[oklch(0.975_0.012_80/88%)] text-[oklch(0.60_0.12_40)] backdrop-blur-sm shadow-sm">
                        {p.badge}
                      </span>
                    </div>

                    {/* Material tag — bottom left */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] tracking-widest uppercase font-medium bg-[oklch(0.18_0.015_60/50%)] text-[oklch(0.90_0.025_75)] backdrop-blur-sm">
                        {p.material}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex items-start justify-between gap-2 px-1">
                    <div>
                      <h3 className={`font-serif font-bold text-[oklch(0.18_0.015_60)] group-hover:text-[oklch(0.60_0.12_40)] transition-colors duration-200 ${isHero ? "text-xl" : "text-base"}`}>
                        {p.name}
                      </h3>
                      <p className="text-xs text-[oklch(0.55_0.02_70)] mt-0.5">{p.tagline}</p>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[oklch(0.60_0.12_40)] text-lg mt-0.5 shrink-0">
                      →
                    </span>
                  </div>
                </Link>
              </MotionDiv>
            );
          })}
        </div>

        {/* Mobile see all */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/products" className="text-sm font-medium text-[oklch(0.60_0.12_40)]">
            Lihat Semua →
          </Link>
        </div>
      </div>
    </section>
  );
}

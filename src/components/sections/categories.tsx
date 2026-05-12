import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/motion-wrapper";

// Static category definitions using generated illustrated icons
const categoryList = [
  { name: "Gantungan Kunci", slug: "gantungan-kunci", img: "/cat-gantungan-kunci.png", label: "Best Seller" },
  { name: "Tas",             slug: "tas",             img: "/cat-tas.png",             label: "Terlaris" },
  { name: "Dompet",          slug: "dompet",          img: "/cat-dompet.png",           label: null },
  { name: "Boneka Rajut",    slug: "boneka-rajut",    img: "/cat-boneka.png",           label: null },
  { name: "Bouquet",         slug: "bouquet",         img: "/cat-bouquet.png",          label: "Hadiah ♥" },
  { name: "Custom Order",    slug: "custom",          img: "/cat-custom.png",           label: "Bisa Pesan" },
];

// Bento grid layout: first card is large (2 col × 2 row)
const bentoConfig = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
];

export async function Categories() {
  return (
    <section className="py-24 bg-[oklch(0.95_0.020_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                Koleksi
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
              Kategori <span className="italic text-[oklch(0.60_0.12_40)]">Produk</span>
            </h2>
          </div>
          <p className="text-sm text-[oklch(0.50_0.02_70)] max-w-xs md:text-right">
            Jelajahi koleksi rajutan kami dari aksesoris hingga tas premium.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[220px]">
          {categoryList.map((cat, i) => (
            <MotionDiv
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`${bentoConfig[i]} group relative rounded-[1.5rem] overflow-hidden cursor-pointer bg-[oklch(0.975_0.012_80)]`}
            >
              <Link href={`/products?category=${cat.slug}`} className="block h-full w-full min-h-[180px]">
                {/* Illustration — object-contain so it's fully visible */}
                <div className="relative w-full h-full min-h-[180px] flex items-center justify-center">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Soft gradient at bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[oklch(0.18_0.015_60/60%)] via-[oklch(0.18_0.015_60/20%)] to-transparent pointer-events-none" />

                  {/* Optional badge */}
                  {cat.label && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] tracking-widest uppercase font-bold bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] shadow-sm pointer-events-none">
                      {cat.label}
                    </div>
                  )}

                  {/* Category name + hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pointer-events-none">
                    <h3 className="font-serif text-[oklch(0.975_0.012_80)] font-bold text-xl lg:text-2xl leading-tight transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-[11px] text-[oklch(0.90_0.025_75)] font-semibold tracking-wider uppercase">Lihat koleksi</span>
                      <span className="text-[oklch(0.90_0.025_75)] text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

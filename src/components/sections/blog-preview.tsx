import Link from "next/link";
import Image from "next/image";
import { MotionArticle } from "@/components/motion-wrapper";

// Single featured blog post — Tutorial Merajut with Flyer
const featuredPost = {
  slug: "tutorial-merajut-untuk-pemula",
  title: "Tutorial Merajut untuk Pemula — Mulai dari Nol!",
  excerpt:
    "Ingin belajar merajut tapi bingung mulai dari mana? Panduan lengkap ini cocok untuk kamu yang baru pertama kali memegang jarum crochet.",
  thumbnail: "/blog-flyer.png",
  category: "Tutorial",
  readingTime: "5 menit",
};

export async function BlogPreview() {
  return (
    <section className="py-24 bg-[oklch(0.975_0.012_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                Journal
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
              Inspirasi &amp;{" "}
              <span className="italic text-[oklch(0.60_0.12_40)]">Tips</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="link-underline text-sm font-medium text-[oklch(0.40_0.02_65)] hover:text-[oklch(0.60_0.12_40)] transition-colors self-start md:self-end"
          >
            Lihat Semua Artikel →
          </Link>
        </div>

        {/* Single large featured article */}
        <MotionArticle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

              {/* Image — large, editorial */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-[oklch(0.90_0.025_75)]">
                <Image
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 90vw, 55vw"
                />
                <div className="absolute inset-0 bg-[oklch(0.18_0.015_60/0%)] group-hover:bg-[oklch(0.18_0.015_60/8%)] transition-colors duration-400 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {/* Tags */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)]">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-[oklch(0.55_0.02_70)]">
                    {featuredPost.readingTime} baca
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[oklch(0.18_0.015_60)] group-hover:text-[oklch(0.60_0.12_40)] transition-colors duration-200 leading-snug mb-4">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[oklch(0.50_0.02_70)] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Read more */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.60_0.12_40)] group-hover:gap-3 transition-all duration-200">
                  <span>Baca Selengkapnya</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        </MotionArticle>

        {/* Mobile see all */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-sm font-medium text-[oklch(0.60_0.12_40)]">
            Lihat Semua Artikel →
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MotionDiv } from "@/components/motion-wrapper";

const avatarColors = [
  "oklch(0.60 0.12 40)",
  "oklch(0.72 0.09 355)",
  "oklch(0.58 0.06 95)",
];

export async function Testimonials() {
  const items = db.select().from(testimonials).where(eq(testimonials.featured, true)).limit(3).all();
  return (
    <section className="py-24 bg-[oklch(0.95_0.020_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
              Testimoni
            </span>
            <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-[oklch(0.50_0.02_70)] mt-3 text-base">
            Ribuan pembeli puas dari seluruh Indonesia
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <MotionDiv
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative p-7 rounded-[1.5rem] border border-[oklch(0.87_0.022_75)] bg-[oklch(0.98_0.008_78)] ${
                i === 1 ? "md:-mt-4 md:mb-4" : ""  /* middle card elevated */
              }`}
            >
              {/* Quote mark */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-6 font-serif text-7xl leading-none font-bold text-[oklch(0.87_0.022_75)] select-none pointer-events-none"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-[oklch(0.78_0.09_40)] text-[oklch(0.78_0.09_40)]"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-[oklch(0.32_0.02_65)] text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.90_0.020_75)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[oklch(0.975_0.012_80)] text-sm font-bold font-serif shrink-0"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[oklch(0.18_0.015_60)]">{t.name}</p>
                  <p className="text-xs text-[oklch(0.55_0.02_70)]">{t.role}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Social proof summary */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
          {[
            { value: "200+", label: "Pelanggan Puas" },
            { value: "98%", label: "Rating Positif" },
            { value: "50+", label: "Kota Terjangkau" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-bold text-[oklch(0.60_0.12_40)]">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-[oklch(0.50_0.02_70)] mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { HandHeart, Palette, Gem, MapPin } from "lucide-react";

const reasons = [
  {
    icon: HandHeart,
    title: "100% Handmade",
    desc: "Setiap produk dirajut tangan, bukan mesin. Proses penuh perhatian di setiap simpulnya.",
    accent: "oklch(0.60 0.12 40)",
    bg: "oklch(0.60 0.12 40 / 8%)",
  },
  {
    icon: Palette,
    title: "Custom Request",
    desc: "Warna, ukuran, dan desain bisa disesuaikan sepenuhnya dengan keinginanmu.",
    accent: "oklch(0.72 0.09 355)",
    bg: "oklch(0.72 0.09 355 / 8%)",
  },
  {
    icon: Gem,
    title: "Premium Yarn",
    desc: "Menggunakan benang berkualitas tinggi, awet, nyaman, dan tidak mudah kusut.",
    accent: "oklch(0.58 0.06 95)",
    bg: "oklch(0.58 0.06 95 / 8%)",
  },
  {
    icon: MapPin,
    title: "Local UMKM",
    desc: "Mendukung produk lokal Indonesia dengan sentuhan artisan dan kebanggaan lokal.",
    accent: "oklch(0.78 0.09 40)",
    bg: "oklch(0.78 0.09 40 / 10%)",
  },
];

export function WhyWienCraft() {
  return (
    <section className="py-24 bg-[oklch(0.975_0.012_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                Keunggulan
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight">
              Kenapa{" "}
              <span className="italic text-[oklch(0.60_0.12_40)]">WienCraft?</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[oklch(0.45_0.02_70)] text-base lg:text-lg leading-relaxed max-w-md lg:text-right lg:ml-auto"
          >
            Bukan sekadar produk. WienCraft membawa cerita, kehangatan, dan
            keunikan dalam setiap rajutan yang kami buat.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative p-7 rounded-[1.5rem] border border-[oklch(0.87_0.022_75)] bg-[oklch(0.98_0.008_78)] hover:shadow-lg hover:shadow-[oklch(0.18_0.015_60/6%)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Background accent on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-[1.5rem]"
                style={{ background: r.bg }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: r.bg }}
                >
                  <r.icon
                    className="w-5 h-5"
                    style={{ color: r.accent }}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-[oklch(0.22_0.015_60)] mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.02_70)] leading-relaxed">
                  {r.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: r.bg }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[oklch(0.975_0.012_80)] overflow-hidden flex items-center">
      {/* Organic background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78_0.09_40 / 18%) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72_0.09_355 / 12%) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[80vh] py-16">

          {/* Left: Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 self-start"
            >
              <span className="w-6 h-px bg-[oklch(0.60_0.12_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.60_0.12_40)]">
                Handmade · Premium · Custom
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.05] font-bold text-[oklch(0.18_0.015_60)] mb-6 text-balance"
            >
              Setiap Rajutan
              <br />
              Adalah Sebuah{" "}
              <span
                className="italic"
                style={{ color: "oklch(0.60 0.12 40)" }}
              >
                Cerita
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-[oklch(0.45_0.02_70)] text-base lg:text-lg leading-relaxed mb-10 max-w-sm"
            >
              Tas, dompet, bouquet &amp; custom rajut dibuat dengan tangan penuh
              cinta. Setiap produk adalah karya unik yang tidak ada duanya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[oklch(0.18_0.015_60)] text-[oklch(0.975_0.012_80)] text-sm font-semibold hover:bg-[oklch(0.28_0.01_60)] transition-colors duration-200"
              >
                Lihat Katalog <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/6281265014539?text=Halo%20WienCraft%2C%20saya%20tertarik%20dengan%20produk%20rajutnya."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[oklch(0.87_0.022_75)] text-[oklch(0.28_0.01_60)] text-sm font-semibold hover:bg-[oklch(0.90_0.025_75)] transition-colors duration-200"
              >
                Pesan Custom
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-14 flex items-center gap-5"
            >
              <div className="flex -space-x-2">
                {["D","S","A","R"].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-[oklch(0.975_0.012_80)] flex items-center justify-center text-xs font-bold text-[oklch(0.975_0.012_80)]"
                    style={{
                      background: ["oklch(0.60 0.12 40)","oklch(0.72 0.09 355)","oklch(0.58 0.06 95)","oklch(0.78 0.09 40)"][i],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[oklch(0.45_0.02_70)] leading-snug">
                <strong className="text-[oklch(0.28_0.01_60)]">200+</strong> pelanggan puas
                <br />dari seluruh Indonesia
              </p>
            </motion.div>
          </div>

          {/* Right: Editorial image composition */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end h-[65vw] max-h-[640px] lg:h-[680px]">

            {/* Decorative circle — behind everything */}
            <motion.div
              initial={{ opacity: 0, rotate: -15 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute top-8 left-[28%] w-16 h-16 rounded-full border border-dashed border-[oklch(0.60_0.12_40/40%)]"
              aria-hidden="true"
            />

            {/* Secondary card — BEHIND main card (z-0) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 bottom-8 w-[46%] aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-xl shadow-[oklch(0.18_0.015_60/14%)] z-0"
            >
              <Image
                src="/product-tas-kotak.png"
                alt="Tas rajut kotak WienCraft"
                fill
                className="object-cover img-bloom"
                sizes="(max-width:768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.015_60/30%)] via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Main large card — FOREGROUND (z-10) with "New Arrival" label clearly on top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-[58%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-[oklch(0.18_0.015_60/18%)] z-10"
            >
              <Image
                src="/product-tas-bundar.png"
                alt="Tas rajut bundar WienCraft"
                fill
                className="object-cover img-bloom"
                priority
                loading="eager"
                sizes="(max-width:768px) 60vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.015_60/60%)] via-[oklch(0.18_0.015_60/10%)] to-transparent pointer-events-none" />
              {/* New Arrival badge — top-left pill */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] text-[10px] tracking-widest uppercase font-bold shadow-md">
                  ✦ New Arrival
                </span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-serif text-[oklch(0.975_0.012_80)] font-bold text-xl leading-tight drop-shadow-sm">Tas Rajut Bundar</p>
                <p className="text-[oklch(0.78_0.09_40)] text-xs font-medium mt-1">Handmade Premium · Cotton Yarn</p>
              </div>
            </motion.div>

            {/* Floating "Custom Order" badge — rich card design, z-20 so it's above both */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75, type: "spring", stiffness: 220, damping: 18 }}
              className="absolute top-[40%] left-[30%] z-20"
            >
              <div
                className="relative px-4 py-3.5 rounded-2xl shadow-xl shadow-[oklch(0.18_0.015_60/20%)]"
                style={{ background: "oklch(0.975 0.012 80 / 92%)", backdropFilter: "blur(16px)" }}
              >
                {/* Sparkle icon */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[oklch(0.60_0.12_40/12%)] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-[oklch(0.60_0.12_40)]" strokeWidth={2} />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[oklch(0.60_0.12_40)] font-bold">Custom Order</p>
                </div>
                <p className="text-sm font-serif font-bold text-[oklch(0.18_0.015_60)] leading-tight">
                  Warna &amp; Desain
                </p>
                <p className="text-[10px] text-[oklch(0.50_0.02_70)] mt-0.5">Sesuai keinginanmu</p>
                {/* Color swatches */}
                <div className="flex gap-1.5 mt-2">
                  {["oklch(0.60 0.12 40)","oklch(0.72 0.09 355)","oklch(0.58 0.06 95)","oklch(0.78 0.09 40)","oklch(0.18 0.015 60)"].map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ background: c }}
                      aria-hidden="true"
                    />
                  ))}
                  <div className="w-4 h-4 rounded-full border-2 border-[oklch(0.87_0.022_75)] flex items-center justify-center">
                    <span className="text-[7px] text-[oklch(0.50_0.02_70)] font-bold">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.50_0.02_70)]"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[oklch(0.60_0.12_40/60%)]" />
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}

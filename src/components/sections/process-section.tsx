"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Pilih & Diskusi",
    desc: "Pilih dari katalog atau ceritakan ideamu. Chat via WhatsApp — kami siap dengarkan.",
    img: "/process-pilih.png",
  },
  {
    num: "02",
    title: "Sesuaikan Detail",
    desc: "Tentukan warna, ukuran, bahan, dan personalisasi. Semua bisa dicustomisasi.",
    img: "/process-diskusi.png",
  },
  {
    num: "03",
    title: "Dirajut dengan Cinta",
    desc: "Setiap simpul dikerjakan dengan teliti oleh tangan terampil kami.",
    img: "/process-rajut.png",
  },
  {
    num: "04",
    title: "Dikemas & Dikirim",
    desc: "Produkmu dikemas secara estetik dan dikirimkan ke seluruh Indonesia.",
    img: "/process-kirim.png",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "oklch(0.18 0.015 60)" }}>
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
              <span className="w-6 h-px bg-[oklch(0.78_0.09_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.78_0.09_40)]">
                Proses
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.975_0.012_80)] leading-tight">
              Dari Benang{" "}
              <span className="italic text-[oklch(0.78_0.09_40)]">Menjadi</span>
              <br />
              Sebuah Karya
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[oklch(0.60_0.02_70)] text-base leading-relaxed max-w-sm lg:ml-auto"
          >
            Setiap produk WienCraft melewati proses kreatif yang penuh perhatian
            — mulai dari benang hingga tiba di tanganmu.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-[1.5rem] overflow-hidden bg-[oklch(0.22_0.015_60)] hover:bg-[oklch(0.25_0.015_60)] transition-colors duration-300"
            >
              {/* Illustration image — object-contain so it shows fully */}
              <div className="relative aspect-square overflow-hidden bg-[oklch(0.28_0.015_60/40%)]">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 80vw, 25vw"
                />
                {/* Step number overlay — top right */}
                <div className="absolute top-3 right-4 pointer-events-none">
                  <span className="font-serif text-3xl font-bold text-[oklch(0.78_0.09_40)] leading-none opacity-70">
                    {s.num}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 pt-4">
                <h3 className="font-serif text-base font-bold text-[oklch(0.90_0.025_75)] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[oklch(0.55_0.02_70)] leading-relaxed">{s.desc}</p>
              </div>

              {/* Connector line — desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[4.5rem] -right-3 w-6 h-px bg-[oklch(0.78_0.09_40/40%)] z-10"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

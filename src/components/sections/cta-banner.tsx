"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="py-8 px-6 lg:px-10 bg-[oklch(0.975_0.012_80)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden bg-[oklch(0.18_0.015_60)] px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Background image collage — subtle */}
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/product-tas-bundar.png"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.18 0.015 60 / 95%) 0%, oklch(0.22 0.015 60 / 85%) 100%)",
            }}
          />

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
            style={{ background: "oklch(0.60 0.12 40 / 12%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full"
            style={{ background: "oklch(0.72 0.09 355 / 10%)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-[oklch(0.78_0.09_40)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[oklch(0.78_0.09_40)]">
                Custom Order
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.975_0.012_80)] leading-tight mb-4 max-w-lg">
              Punya Ide Spesial?{" "}
              <span className="italic text-[oklch(0.78_0.09_40)]">Wujudkan</span>
              {" "}Bersama Kami.
            </h2>
            <p className="text-[oklch(0.60_0.02_70)] text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Dari kado ulang tahun hingga souvenir pernikahan — kami siap mengubah
              imajinasmu menjadi karya rajut yang nyata.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/6281265014539?text=Halo%20WienCraft%2C%20saya%20ingin%20pesan%20custom%20produk%20rajut."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] font-semibold text-sm hover:bg-[oklch(0.54_0.13_40)] transition-colors duration-200 whitespace-nowrap"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[oklch(0.975_0.012_80/25%)] text-[oklch(0.90_0.025_75)] font-semibold text-sm hover:bg-[oklch(0.975_0.012_80/10%)] transition-colors duration-200 whitespace-nowrap"
            >
              Lihat Katalog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

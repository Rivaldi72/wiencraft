"use client";
import { motion } from "framer-motion";
import { HandHeart, Palette, Gem, MapPin } from "lucide-react";

const reasons = [
  { icon: HandHeart, title: "100% Handmade", desc: "Setiap produk dirajut dengan tangan, bukan mesin." },
  { icon: Palette, title: "Custom Request", desc: "Warna, ukuran, dan desain bisa disesuaikan keinginanmu." },
  { icon: Gem, title: "Premium Yarn", desc: "Menggunakan benang berkualitas tinggi yang awet dan nyaman." },
  { icon: MapPin, title: "Local UMKM", desc: "Mendukung produk lokal Indonesia dengan sentuhan artisan." },
];

export function WhyWienCraft() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Kenapa WienCraft?</h2>
          <p className="text-stone-600 mt-2">Kualitas dan keunikan dalam setiap rajutan</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-stone-100 bg-stone-50 hover:shadow-md transition-shadow text-center"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-700 mb-4">
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">{r.title}</h3>
              <p className="text-sm text-stone-600">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

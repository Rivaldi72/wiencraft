"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Pilih Produk", desc: "Pilih dari katalog atau request custom." },
  { num: "02", title: "Diskusi Detail", desc: "Chat via WhatsApp untuk bahan, warna, dan ukuran." },
  { num: "03", title: "Dibuat dengan Cinta", desc: "Tim kami merajut produkmu dengan teliti." },
  { num: "04", title: "Packing & Kirim", desc: "Dikemas aesthetic dan dikirim ke alamatmu." },
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold">Proses Pembuatan</h2>
          <p className="text-stone-400 mt-2">Dari benang hingga jadi karya</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-serif font-bold text-rose-400 mb-4">{s.num}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-stone-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

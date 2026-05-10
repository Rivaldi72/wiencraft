"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
            Handmade Premium <span className="text-rose-700">Craft</span> for Your Everyday
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Tas, dompet, bouquet & custom rajut dibuat dengan tangan penuh cinta. Setiap produk adalah karya unik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-rose-700 hover:bg-rose-800 text-white rounded-full px-8">
                Lihat Katalog <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-stone-300">
                Pesan Custom
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605218427368-35b0f996d7c3?w=800&q=80"
              alt="Handmade crochet craft"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

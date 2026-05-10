"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-16 bg-rose-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold mb-4">Pesan Custom Sekarang</h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">Punya ide kado spesial atau request desain? Chat kami via WhatsApp dan wujudkan bersama WienCraft.</p>
          <Link href={whatsappUrl()} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-white text-rose-700 hover:bg-rose-50 rounded-full px-8 font-semibold">
              Chat via WhatsApp
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

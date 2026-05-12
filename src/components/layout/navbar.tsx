"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/products", label: "Katalog" },
  { href: "/about", label: "Tentang" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.975_0.012_80/92%)] backdrop-blur-xl shadow-sm shadow-[oklch(0.855_0.030_72/20%)] border-b border-[oklch(0.87_0.022_75)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="WienCraft Home">
            {/* Monogram mark */}
            <div className="relative w-9 h-9 rounded-full border border-[oklch(0.60_0.12_40)] flex items-center justify-center overflow-hidden bg-[oklch(0.60_0.12_40/8%)] group-hover:bg-[oklch(0.60_0.12_40/15%)] transition-colors duration-300">
              <span className="font-serif text-[oklch(0.60_0.12_40)] text-sm font-bold leading-none tracking-tighter select-none">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[oklch(0.18_0.015_60)] text-lg font-bold tracking-tight leading-tight">
                Wien<span className="text-[oklch(0.60_0.12_40)]">Craft</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-[oklch(0.50_0.02_70)] leading-tight font-sans font-medium mt-0.5">
                Handmade Premium
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium text-[oklch(0.40_0.02_65)] hover:text-[oklch(0.18_0.015_60)] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6281265014539?text=Halo%20WienCraft%2C%20saya%20tertarik%20dengan%20produk%20rajutnya."
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] hover:bg-[oklch(0.54_0.13_40)] transition-colors duration-200"
            >
              Pesan Custom
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[oklch(0.855_0.030_72/50%)] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-[oklch(0.28_0.01_60)]" /> : <Menu className="w-5 h-5 text-[oklch(0.28_0.01_60)]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[oklch(0.18_0.015_60/30%)] backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[oklch(0.975_0.012_80)] shadow-2xl flex flex-col px-8 pt-20 pb-10"
            >
              <nav className="flex flex-col gap-6" role="navigation">
                <Link href="/" onClick={() => setOpen(false)} className="text-xs tracking-[0.25em] uppercase text-[oklch(0.50_0.02_70)] font-medium">Beranda</Link>
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl text-[oklch(0.22_0.015_60)] hover:text-[oklch(0.60_0.12_40)] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-8 border-t border-[oklch(0.87_0.022_75)]">
                <a
                  href="https://wa.me/6281265014539?text=Halo%20WienCraft%2C%20saya%20tertarik%20dengan%20produk%20rajutnya."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center text-sm font-semibold py-3 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] hover:bg-[oklch(0.54_0.13_40)] transition-colors"
                >
                  Pesan Custom via WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't go under fixed navbar */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}

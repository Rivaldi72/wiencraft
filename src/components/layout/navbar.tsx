"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Katalog" },
  { href: "/about", label: "Tentang" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-rose-700" />
          <span className="text-xl font-serif font-bold tracking-tight text-stone-900">WienCraft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-rose-700 transition-colors">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-stone-100"><Menu className="w-5 h-5" /></button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-stone-50">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-stone-700 hover:text-rose-700">{l.label}</Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

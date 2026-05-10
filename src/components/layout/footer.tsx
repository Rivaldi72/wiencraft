import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-serif font-bold text-stone-100 mb-2">WienCraft</h3>
          <p className="text-sm leading-relaxed">Handmade premium craft untuk harimu yang spesial. Setiap rajutan dibuat dengan cinta dan perhatian penuh.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-stone-100 mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-rose-400 transition-colors">Beranda</Link></li>
            <li><Link href="/products" className="hover:text-rose-400 transition-colors">Katalog</Link></li>
            <li><Link href="/about" className="hover:text-rose-400 transition-colors">Tentang</Link></li>
            <li><Link href="/blog" className="hover:text-rose-400 transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-stone-100 mb-3">Ikuti Kami</h4>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/wiencraft" target="_blank" rel="noreferrer" className="hover:text-rose-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="https://tiktok.com/@wiencraft" target="_blank" rel="noreferrer" className="hover:text-rose-400"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-stone-800 text-xs text-stone-500 text-center">
        © {new Date().getFullYear()} WienCraft. All rights reserved.
      </div>
    </footer>
  );
}

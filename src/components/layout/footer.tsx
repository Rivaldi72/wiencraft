import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Katalog" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/blog", label: "Blog & Inspirasi" },
  { href: "/contact", label: "Kontak" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/wiencraft",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@wiencraft",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.12a8.16 8.16 0 0 0 4.77 1.52V7.18a4.85 4.85 0 0 1-1-.49z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281265014539",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer style={{ background: "oklch(0.18 0.015 60)" }} className="text-[oklch(0.60_0.02_70)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[oklch(0.975_0.012_80/8%)]">

          {/* Brand column */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full border border-[oklch(0.60_0.12_40)] flex items-center justify-center bg-[oklch(0.60_0.12_40/12%)]">
                <span className="font-serif text-[oklch(0.78_0.09_40)] text-sm font-bold leading-none">W</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[oklch(0.975_0.012_80)] text-lg font-bold tracking-tight leading-tight">
                  Wien<span className="text-[oklch(0.78_0.09_40)]">Craft</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-[oklch(0.45_0.02_70)] font-medium mt-0.5">
                  Handmade Premium
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-[oklch(0.50_0.02_70)]">
              Kerajinan rajut handmade premium untuk momen spesialmu. Setiap produk
              dibuat dengan cinta dan ketelitian tinggi.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[oklch(0.975_0.012_80/12%)] flex items-center justify-center text-[oklch(0.50_0.02_70)] hover:text-[oklch(0.78_0.09_40)] hover:border-[oklch(0.78_0.09_40/40%)] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[oklch(0.40_0.02_65)] mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-[oklch(0.975_0.012_80)] transition-colors duration-150">Beranda</Link></li>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-[oklch(0.975_0.012_80)] transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[oklch(0.40_0.02_65)] mb-5">
              Pesan Sekarang
            </h4>
            <p className="text-sm text-[oklch(0.50_0.02_70)] leading-relaxed mb-5">
              Ada pertanyaan atau mau pesan custom? Hubungi kami langsung.
            </p>
            <a
              href="https://wa.me/6281265014539?text=Halo%20WienCraft%2C%20saya%20tertarik%20dengan%20produk%20rajutnya."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] hover:bg-[oklch(0.54_0.13_40)] transition-colors duration-200"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[oklch(0.35_0.02_65)]">
          <span>© {new Date().getFullYear()} WienCraft. All rights reserved.</span>
          <span>Made with ♥ in Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

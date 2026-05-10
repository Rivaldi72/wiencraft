# WienCraft

**Website UMKM Kerajinan Rajut Premium**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57?logo=sqlite)

🔗 **Live:** https://wiencraft.vercel.app

---

## Deskripsi

WienCraft adalah website modern untuk UMKM kerajinan tangan rajut yang berfungsi sebagai:

- Media branding profesional
- Showcase produk rajut handmade
- Portfolio hasil karya
- Media storytelling UMKM
- Blog SEO untuk traffic organik Google
- Landing page konversi ke WhatsApp
- CMS internal untuk update konten tanpa coding

**Fokus utama:** meningkatkan trust, branding, dan order masuk via WhatsApp.

---

## Brand Identity

| Atribut | Detail |
|---------|--------|
| **Nama** | WienCraft |
| **Makna** | "Wien" = artisan, premium, elegant; "Craft" = handmade craftsmanship |
| **Personality** | Warm, handmade premium, artistic, feminine modern, clean artisan, trustworthy, personalized |

---

## Target Audience

**Primary:** Wanita 18–40 tahun — suka handmade, aesthetic products, fashion casual, gift buyers, pecinta craft.

**Secondary:** Pencari hadiah custom, corporate souvenir, hampers, event organizer, bridesmaid gifts.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, React Server Components) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + shadcn/ui |
| **Animation** | Framer Motion |
| **Backend** | Next.js Server Actions + Route Handlers |
| **Database** | SQLite (Drizzle ORM) |
| **Auth** | JWT cookie-based (jose) |
| **Validation** | Zod |
| **Deployment** | Vercel |

---

## Struktur Website

### Public Pages

| Halaman | Fitur |
|---------|-------|
| **Home** | Hero, Featured Products, Why WienCraft, Categories, Process, Testimonials, Blog Preview, CTA Banner |
| **Katalog** | Grid produk, filter kategori, search, detail produk |
| **Detail Produk** | Gallery, deskripsi, material, harga, estimasi, CTA WhatsApp, produk terkait |
| **Tentang** | Cerita UMKM, founder, filosofi, visi-misi, stats |
| **Blog** | SEO optimized, kategori, tags, search, reading time, related articles |
| **Kontak** | WhatsApp CTA, Instagram, TikTok, Google Maps |

### Admin CMS

| Modul | Fitur |
|-------|-------|
| **Dashboard** | Widget total products, blogs, drafts, published |
| **Produk** | CRUD produk (nama, slug, deskripsi, harga, gambar, kategori, status, featured, SEO) |
| **Blog** | CRUD artikel (title, slug, content, thumbnail, kategori, tags, status, SEO) |
| **Auth** | Login/logout dengan session JWT |

---

## Design Direction

**Konsep:** "Modern Artisan Luxury"

- Scandinavian minimalism + handmade warmth
- Editorial fashion layout
- Soft premium aesthetic

### Color Palette

| Tipe | Warna |
|------|-------|
| Primary | Warm cream, soft beige, cotton white |
| Accent | Terracotta, dusty rose, olive muted |
| Neutral | Charcoal, warm gray |

### Typography

| Role | Font |
|------|------|
| Heading | Playfair Display, Cormorant Garamond (serif) |
| Body | Inter, Manrope (sans-serif) |

---

## Database Schema

Tabel utama:

- `users` — admin & editor accounts
- `products` — data produk + SEO metadata
- `product_images` — gallery produk
- `categories` — kategori produk
- `blogs` — artikel blog + SEO metadata
- `blog_categories` — kategori blog
- `testimonials` — ulasan pelanggan
- `homepage_settings` — konfigurasi homepage
- `media` — manajemen gambar
- `seo_metadata` — metadata SEO global

---

## SEO Strategy

- SSR/SSG untuk setiap halaman
- Dynamic metadata & OpenGraph
- Sitemap & robots.txt
- Canonical URL
- Blog konten untuk keyword: *hadiah handmade, tas rajut aesthetic, dompet rajut lucu, bouquet rajut, crochet handmade indonesia*

**Target Performance:**
- Lighthouse 95+
- LCP < 2.5s
- Image optimization (AVIF/WebP)

---

## WhatsApp Conversion Strategy

- Floating WhatsApp button (sticky)
- CTA copy: *"Pesan Custom Sekarang"*, *"Chat via WhatsApp"*, *"Request Design"*
- Pre-filled message: `Halo WienCraft, saya tertarik dengan produk rajutnya.`
- Nomor: 6281265014539

---

## Fitur Tambahan (Rekomendasi)

- [x] Floating WhatsApp CTA
- [x] Testimoni pelanggan
- [x] Blog SEO
- [ ] Wishlist
- [ ] Custom Order Form (warna, nama, request design)
- [ ] Testimonial Video
- [ ] Instagram Feed Sync
- [ ] TikTok Embed
- [ ] Seasonal Campaign Banner (Ramadan, Wisuda, Valentine, Natal)
- [ ] Pinterest Style Gallery

---

## Cara Menjalankan

### Prasyarat
- Node.js 20+
- npm / pnpm / yarn

### Install & Jalankan

```bash
# Clone repo
git clone <repo-url>
cd wiencraft

# Install dependencies
npm install

# Push schema database
npx drizzle-kit push

# Jalankan development server
npm run dev
```

Buka http://localhost:3000

### Build untuk Production

```bash
npm run build
npm start
```

---

## Admin Login

| Field | Value |
|-------|-------|
| URL | `/admin/login` |
| Username | `admin` |
| Password | `admin123` |

> ⚠️ **Penting:** Ganti password default segera setelah login pertama kali.

---

## Deployment

Deploy otomatis ke Vercel. Setiap push ke branch `main` akan trigger redeploy.

```bash
npx vercel --prod
```

---

## Catatan Teknis

### SQLite di Vercel
SQLite di Vercel bersifat **ephemeral** (tidak persisten). Data akan hilang saat redeploy. Untuk production dengan data persisten, migrasikan ke:

- **PostgreSQL** (Neon / Supabase / Vercel Postgres)
- Tambahkan environment variable `DATABASE_URL`

### Migrasi ke PostgreSQL
1. Setup database PostgreSQL
2. Update `drizzle.config.ts` ke dialect `postgresql`
3. Update `src/db/index.ts` ke driver PostgreSQL
4. Jalankan `npx drizzle-kit push`

---

## License

&copy; 2026 WienCraft. All rights reserved.

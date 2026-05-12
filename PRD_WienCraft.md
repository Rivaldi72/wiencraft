# PRD — WienCraft

## Platform Website UMKM Kerajinan Rajut Premium

Untuk brand: WienCraft

---

# 1. Executive Summary

## Tujuan Project
Membangun website modern untuk UMKM kerajinan tangan rajut bernama WienCraft yang berfungsi sebagai:

- Media branding profesional
- Showcase produk rajut handmade
- Portfolio hasil karya
- Media storytelling UMKM
- Blog SEO untuk traffic organik Google
- Landing page konversi ke WhatsApp
- CMS internal untuk update konten tanpa coding

Fokus utama:
> meningkatkan trust, branding, dan order masuk via WhatsApp.

---

# 2. Positioning Brand

## Brand Name
# WienCraft

## Makna Brand
- “Wien” → terdengar artisan, premium, elegant
- “Craft” → handmade craftsmanship

## Brand Personality
- Warm
- Handmade premium
- Artistic
- Feminine modern
- Clean artisan
- Trustworthy
- Personalized

---

# 3. Core Business Goal

## Goals

### Primary
- Mendapatkan order via WhatsApp

### Secondary
- Branding UMKM agar terlihat profesional
- Mempermudah showcase katalog
- Mendapatkan traffic dari Google
- Menjadi portfolio digital UMKM

### Long-term
- Siap scale ke marketplace
- Siap scale ke ecommerce penuh
- Siap multi-admin
- Siap migrasi SQLite → PostgreSQL/MySQL

---

# 4. Target Audience

## Primary Audience

### Wanita 18–40 tahun
- Suka handmade
- Suka aesthetic products
- Fashion casual
- Gift buyers
- Pecinta craft

## Secondary Audience
- Orang yang cari hadiah custom
- Corporate souvenir
- Hampers
- Event organizer
- Bridesmaid gifts

---

# 5. Technical Stack

## Frontend
- Next.js 16
- React Server Components
- App Router
- TypeScript

## Styling
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Backend
- Next.js Server Actions
- Route Handlers

## Database
- SQLite

## ORM
- Drizzle ORM

## Deployment
- Vercel

## Content
- JSON static seeding
- MDX blog support

---

# 6. Architecture Strategy

## Hybrid Architecture

### Initial Phase (Pilot)
- SQLite local
- JSON seed data
- Vercel deployment

### Future Ready
Architecture harus siap migrasi:
- SQLite → PostgreSQL
- CMS ringan → Headless CMS
- Single tenant → multi user

---

# 7. Data Persistence Strategy

## Problem
SQLite di Vercel ephemeral.

## Solution
Saat redeploy:
- JSON seed otomatis inject ulang ke SQLite
- Content penting disimpan di `/data/*.json`
- Seeder dijalankan saat build/start

## Recommended Structure

```bash
/data
  products.json
  blogs.json
  testimonials.json
  categories.json
```

## Future Upgrade
Saat traffic naik:
- Migrasi ke PostgreSQL
- Gunakan Neon/Supabase

---

# 8. Website Structure

# PUBLIC WEBSITE

## 8.1 Home

### Sections
#### Hero Section
- Visual crochet aesthetic unik
- CTA WhatsApp
- Highlight handmade premium

#### Featured Products
- Produk unggulan

#### Why WienCraft
- Handmade
- Custom
- Premium yarn
- Local UMKM

#### Product Categories
- Gantungan kunci
- Tas
- Dompet
- Boneka rajut
- Bouquet
- Custom

#### Process Section
“Bagaimana produk dibuat”

#### Testimonials

#### Blog Preview

#### CTA Banner
“Pesan sekarang via WhatsApp”

---

## 8.2 Product Catalog

### Features
- Filter kategori
- Search
- Product detail
- Multi image
- Related product
- CTA WhatsApp

### Product Detail
- Nama
- Deskripsi
- Harga opsional
- Material
- Estimasi pengerjaan
- Custom request
- Gallery

---

## 8.3 About Page

### Content
- Cerita UMKM
- Founder story
- Handmade philosophy
- Visi misi
- Behind the scene

---

## 8.4 Blog

## Features
- SEO optimized
- Category
- Tags
- Search
- Featured image
- Slug SEO
- Related articles
- Reading time
- Share buttons

## SEO Target
Contoh artikel:
- “Ide hadiah handmade”
- “Tas rajut aesthetic”
- “Cara merawat tas rajut”
- “Kado custom unik”

---

## 8.5 Contact Page

### Content
- WhatsApp CTA
- Instagram
- TikTok
- Shopee/Tokopedia future
- Google Maps optional

---

# 9. Admin CMS

# ADMIN PANEL

## Authentication
- Admin login
- Session auth
- Protected routes

---

## 9.1 Dashboard

### Widgets
- Total products
- Total blogs
- Draft blogs
- Published blogs
- Recent activity

---

## 9.2 Product Management

## CRUD Product

### Fields
- Name
- Slug
- Description
- Images
- Category
- Status
- Featured
- Price optional
- SEO metadata

### Status
- Draft
- Published
- Archived

---

## 9.3 Blog CMS

## CRUD Blog

### Fields
- Title
- Slug
- Thumbnail
- Content (MDX/Rich Text)
- Category
- Tags
- Status
- SEO metadata

### Status
- Draft
- Published
- Scheduled

---

## 9.4 Homepage CMS

Admin bisa edit:
- Hero text
- CTA text
- Featured products
- Testimonials
- About preview
- Contact info

---

## 9.5 Media Management

### Features
- Upload image
- Compress image
- Alt text SEO
- Gallery management

---

# 10. Design Direction

# DESIGN CONCEPT

## Core Concept
> “Modern Artisan Luxury”

Gabungan:
- Scandinavian minimalism
- Handmade warmth
- Editorial fashion layout
- Soft premium aesthetic

---

## UI Style

### Design Keywords
- Soft luxury
- Organic
- Elegant
- Calm
- Premium handmade
- Modern artisan

---

## Visual Direction

### Layout
- Large whitespace
- Bento layout
- Magazine/editorial sections
- Uneven asymmetrical grid
- Smooth micro interaction

### Shapes
- Rounded organic cards
- Curved separators
- Soft shadows

### Motion
- Slow elegant animations
- Fade-in transitions
- Smooth hover effect

---

# 11. Color Palette

## Primary
- Warm cream
- Soft beige
- Cotton white

## Accent
- Terracotta
- Dusty rose
- Olive muted

## Neutral
- Charcoal
- Warm gray

---

# 12. Typography

## Heading
Elegant serif:
- Playfair Display
- Cormorant Garamond

## Body
Modern readable:
- Inter
- Manrope

---

# 13. Unique Differentiator

## Yang Membuat WienCraft Berbeda

### 1. Editorial Layout
Bukan template ecommerce biasa.

### 2. Storytelling Focus
Produk dijual dengan cerita.

### 3. Handmade Feeling
Visual terasa crafted.

### 4. Slow Luxury Design
Tidak ramai seperti marketplace.

### 5. Emotional Branding
Cocok untuk hadiah & custom products.

---

# 14. SEO Strategy

# SEO REQUIREMENTS

## Technical SEO
- SSR/SSG
- Dynamic metadata
- OpenGraph
- Twitter cards
- Sitemap
- robots.txt
- Canonical URL

---

## Content SEO
Blog dibuat untuk keyword:
- hadiah handmade
- tas rajut aesthetic
- dompet rajut lucu
- bouquet rajut
- crochet handmade indonesia

---

## Performance
Target:
- Lighthouse 95+
- LCP < 2.5s
- CLS minimal
- Image optimization AVIF/WebP

---

# 15. WhatsApp Conversion Strategy

## CTA Strategy

### Floating CTA
WhatsApp sticky floating button.

### CTA Copy
- “Pesan Custom Sekarang”
- “Chat via WhatsApp”
- “Request Design”

---

## Pre-filled Message

```text
Halo WienCraft, saya tertarik dengan produk rajutnya.
```

---

## WhatsApp URL

```text
https://wa.me/6281265014539
```

---

# 16. Suggested Additional Features

# HIGHLY RECOMMENDED

## 1. Wishlist
Walau belum checkout.

## 2. Custom Order Form
Input:
- warna
- nama
- request design

## 3. Testimonial Video
Very high trust impact.

## 4. Instagram Feed Sync

## 5. TikTok Embed

## 6. Seasonal Campaign Banner
- Ramadan
- Wisuda
- Valentine
- Natal

## 7. AI SEO Helper
Generate draft blog otomatis.

## 8. Pinterest Style Gallery
Cocok untuk craft products.

---

# 17. Folder Structure

```bash
src/
  app/
  components/
  features/
  lib/
  db/
  hooks/
  styles/
  data/
  types/
  actions/
```

---

# 18. Database Schema Recommendation

## Tables
- users
- products
- product_images
- categories
- blogs
- blog_categories
- testimonials
- homepage_settings
- media
- seo_metadata

---

# 19. Security Requirements

## Requirements
- CSRF protection
- Rate limit login
- Secure session
- Input validation Zod
- Sanitized HTML
- File upload restriction

---

# 20. Recommended Libraries

## Core
- zod
- react-hook-form
- lucide-react
- next-seo
- uploadthing
- framer-motion

## Optional
- tiptap editor
- react-email
- resend

---

# 21. Performance Requirements

## Must Have
- Lazy loading
- Dynamic imports
- Optimized fonts
- Image compression
- Server components first

---

# 22. Accessibility

## Requirements
- WCAG friendly
- Proper contrast
- Keyboard navigation
- Alt text mandatory

---

# 23. Suggested Timeline

## Phase 1
Branding + UI/UX  
1 minggu

## Phase 2
Landing page + catalog  
1–2 minggu

## Phase 3
CMS admin  
1 minggu

## Phase 4
Blog + SEO  
1 minggu

## Phase 5
Optimization  
3–5 hari

---

# 24. WienCraft Logo Concept

# LOGO DIRECTION

## Concept
Gabungan:
- benang rajut
- jarum crochet
- elegant monogram
- artisan luxury

---

## Style
- Minimal premium
- Fashion-brand feel
- Tidak terlalu “craft rumahan”

---

## Logo Variants

### Primary Logo
“WienCraft” serif elegant

### Icon Logo
Huruf:
- W
dibentuk seperti benang rajut melengkung

### Stamp Version
Cocok untuk:
- packaging
- thank you card
- watermark

---

# 25. Future Scaling Plan

## Future Features
- Ecommerce checkout
- Payment gateway
- Multi vendor artisan
- Affiliate creator
- Inventory
- Shipment tracking
- Mobile app

---

# 26. Final Recommendation

## Sangat Disarankan

### Jangan buat seperti marketplace biasa.
Yang dijual WienCraft bukan sekadar produk.

Yang dijual adalah:
- handmade feeling
- emotional value
- aesthetic lifestyle
- custom uniqueness

Karena itu:
- visual
- storytelling
- photography
- branding

lebih penting daripada fitur ecommerce berat di tahap awal.

---

# 27. Recommended MVP Scope

## MVP Ideal

Fokus:
- branding
- showcase
- WhatsApp conversion
- SEO

Belum perlu:
- checkout
- payment gateway
- stock kompleks

Karena:
WhatsApp closing masih paling efektif untuk UMKM handmade custom.

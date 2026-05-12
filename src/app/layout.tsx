import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "next-themes";
import { ImageZoomProvider } from "@/components/ui/image-zoom";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WienCraft | Kerajinan Rajut Premium & Custom Order",
    template: "%s | WienCraft Artisan"
  },
  description: "WienCraft menghadirkan kerajinan rajut handmade premium mulai dari tas, dompet, boneka (amigurumi), hingga buket bunga yang elegan. Setiap simpul dibuat dengan cinta dan ketelitian untuk momen spesial Anda.",
  keywords: ["rajut handmade", "tas rajut premium", "amigurumi indonesia", "kado unik", "kerajinan tangan", "WienCraft", "custom order rajut", "buket bunga rajut"],
  authors: [{ name: "WienCraft Team" }],
  creator: "WienCraft",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://wiencraft.vercel.app",
    siteName: "WienCraft Artisan",
    title: "WienCraft | Kerajinan Rajut Premium",
    description: "Karya seni rajut tangan berkualitas tinggi untuk gaya hidup estetik Anda.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://wiencraft.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ImageZoomProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <Toaster richColors position="top-right" />
          </ImageZoomProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

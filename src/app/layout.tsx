import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "next-themes";

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
  title: { default: "WienCraft - Handmade Premium Craft", template: "%s | WienCraft" },
  description: "WienCraft - UMKM kerajinan rajut handmade premium. Tas, dompet, bouquet, boneka, dan custom rajut.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "WienCraft",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://wiencraft.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-stone-50 text-stone-800`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

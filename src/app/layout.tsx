import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "next-themes";
import { ImageZoomProvider } from "@/components/ui/image-zoom";
import { GOOGLE_ANALYTICS_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WienCraft | Kerajinan Rajut Premium & Custom Order",
    template: "%s | WienCraft Artisan"
  },
  description: SITE_DESCRIPTION,
  keywords: ["rajut handmade", "tas rajut premium", "amigurumi indonesia", "kado unik", "kerajinan tangan", "WienCraft", "custom order rajut", "buket bunga rajut"],
  authors: [{ name: "WienCraft Team", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "WienCraft | Kerajinan Rajut Premium & Custom Order",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WienCraft handmade premium crochet brand mark and headline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WienCraft | Kerajinan Rajut Premium & Custom Order",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281265014539";
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Halo WienCraft, saya tertarik dengan produk rajutnya.";
export const SITE_NAME = "WienCraft";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wiencraft.site";
export const SITE_DESCRIPTION = "WienCraft menghadirkan kerajinan rajut handmade premium mulai dari tas, dompet, boneka, hingga bouquet yang elegan untuk hadiah dan custom order.";
export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Y8XFHJ648D";
export const INSTAGRAM = "wiencraft";
export const TIKTOK = "wiencraft";

export function whatsappUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

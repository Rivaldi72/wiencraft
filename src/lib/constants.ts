export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281265014539";
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Halo WienCraft, saya tertarik dengan produk rajutnya.";
export const SITE_NAME = "WienCraft";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wiencraft.vercel.app";
export const INSTAGRAM = "wiencraft";
export const TIKTOK = "wiencraft";

export function whatsappUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

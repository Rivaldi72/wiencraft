"use client";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

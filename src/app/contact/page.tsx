import { Button } from "@/components/ui/button";
import { whatsappUrl, INSTAGRAM, TIKTOK } from "@/lib/constants";
import { MessageCircle, MapPin } from "lucide-react";

export const metadata = { title: "Kontak", description: "Hubungi WienCraft via WhatsApp dan media sosial." };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Hubungi Kami</h1>
      <p className="text-stone-600 mb-10">Punya pertanyaan atau request custom? Chat kami langsung!</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4 group-hover:scale-110 transition-transform"><MessageCircle className="w-6 h-6" /></div>
          <h3 className="font-semibold text-stone-900">WhatsApp</h3>
          <p className="text-sm text-stone-600 mt-1">Pesan & custom order</p>
        </a>
        <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer" className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-rose-100 text-rose-700 mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
          <h3 className="font-semibold text-stone-900">Instagram</h3>
          <p className="text-sm text-stone-600 mt-1">@{INSTAGRAM}</p>
        </a>
        <div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4"><MapPin className="w-6 h-6" /></div>
          <h3 className="font-semibold text-stone-900">Lokasi</h3>
          <p className="text-sm text-stone-600 mt-1">Indonesia</p>
        </div>
      </div>
      <div className="mt-10">
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8"><MessageCircle className="w-4 h-4 mr-2" /> Chat WhatsApp Sekarang</Button>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function WhatsAppFloat() {
  const whatsappUrl = siteConfig.contact.whatsappUrl;

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
        aria-label="WhatsApp'tan Hızlı Bilgi Alın"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wide">Fatmanur Hanım'a Danışın</span>
      </a>
    </div>
  );
}

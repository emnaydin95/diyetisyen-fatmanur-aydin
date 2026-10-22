"use client";

import React from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";

export default function MobileStickyBar() {
  const whatsappUrl = siteConfig.contact.whatsappUrl;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-borderHairline p-3 flex items-center gap-2.5 shadow-2xl safe-area-bottom">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("mobile_sticky_bar")}
        className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow active:scale-95 transition-transform"
        aria-label="WhatsApp'tan Yazın"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
      <a
        href="/#randevu"
        onClick={() => trackEvent("appointment_cta_click", { event_category: "Navigation", click_location: "mobile_sticky_bar" })}
        className="flex-1 py-3 bg-terracotta hover:bg-terracotta-dark text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow active:scale-95 transition-transform"
        aria-label="Randevu Planla"
      >
        <Calendar className="w-4 h-4" />
        <span>Randevu Al</span>
      </a>
    </div>
  );
}

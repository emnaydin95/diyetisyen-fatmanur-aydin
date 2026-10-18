"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Show banner after 800ms delay for smooth entrance
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked/unavailable
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted_all");
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted_necessary");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-borderHairline shadow-2xl space-y-4">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-charcoal">Çerez (Cookie) Tercihleri</h4>
              <p className="text-[11px] text-mutedSlate">6698 Sayılı KVKK Kapsamında</p>
            </div>
          </div>
          <button
            onClick={handleAcceptNecessary}
            aria-label="Kapat"
            className="text-mutedSlate hover:text-charcoal p-1 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Text */}
        <p className="text-xs text-charcoal/80 leading-relaxed">
          Web sitemizin güvenli ve sorunsuz çalışması, danışan deneyiminizin kişiselleştirilmesi amacıyla yasal mevzuata uygun çerezler kullanmaktayız. Detaylı bilgi için{" "}
          <Link
            href="/cerez-politikasi"
            className="text-terracotta font-semibold underline hover:text-terracotta-dark"
          >
            Çerez Politikamızı
          </Link>{" "}
          ve{" "}
          <Link
            href="/kvkk-aydinlatma-metni"
            className="text-sage font-semibold underline hover:text-sage-dark"
          >
            KVKK Aydınlatma Metnimizi
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 bg-sage hover:bg-sage-dark text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Tümünü Kabul Et</span>
          </button>
          <button
            onClick={handleAcceptNecessary}
            className="py-2.5 px-4 bg-brandBg hover:bg-brandSurface text-charcoal rounded-xl text-xs font-semibold border border-borderHairline transition-all text-center whitespace-nowrap"
          >
            Yalnızca Zorunlu Çerezler
          </button>
        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Cookie, X, Check, ChevronDown, Shield } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

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

  // Click outside listener for the mobile options popup
  useEffect(() => {
    if (!showOptions) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showOptions]);

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
    <div className="fixed bottom-[74px] sm:bottom-6 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-borderHairline shadow-2xl">
        
        {/* Header / Text Row */}
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <div className="flex items-start sm:items-center gap-2">
            <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Cookie className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            
            {/* Mobile Compact Text (Reduces height by >60%) */}
            <p className="sm:hidden text-[11px] text-charcoal/90 leading-tight">
              Deneyiminizi geliştirmek için yasal çerezler kullanıyoruz.{" "}
              <Link
                href="/cerez-politikasi"
                className="text-terracotta underline font-semibold"
              >
                Politikamız
              </Link>
            </p>

            {/* Desktop Header */}
            <div className="hidden sm:block">
              <h4 className="text-sm font-bold text-charcoal">Çerez (Cookie) Tercihleri</h4>
              <p className="text-[11px] text-mutedSlate">6698 Sayılı KVKK Kapsamında</p>
            </div>
          </div>

          <button
            onClick={handleAcceptNecessary}
            aria-label="Kapat"
            className="text-mutedSlate hover:text-charcoal p-1 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Desktop Description */}
        <p className="hidden sm:block text-xs text-charcoal/80 leading-relaxed mb-4">
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
        <div className="relative">
          
          {/* Mobile Popup: Yalnızca Zorunlu Çerezler */}
          {showOptions && (
            <div
              ref={popupRef}
              className="absolute bottom-full mb-2 left-0 right-0 bg-white rounded-2xl p-1.5 border border-borderHairline shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 sm:hidden"
            >
              <button
                onClick={handleAcceptNecessary}
                className="w-full text-left py-2 px-3 rounded-xl hover:bg-brandBg text-xs font-semibold text-charcoal transition-colors flex items-center justify-between group active:bg-brandSurface"
              >
                <span className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-sage" />
                  <span>Yalnızca Zorunlu Çerezler</span>
                </span>
                <span className="text-[10px] text-mutedSlate group-hover:text-charcoal font-medium">Uygula &rarr;</span>
              </button>
            </div>
          )}

          {/* Mobile Split Button: Tümünü Kabul Et + Dropdown Arrow */}
          <div className="flex sm:hidden items-stretch rounded-xl bg-sage hover:bg-sage-dark text-white shadow-sm overflow-hidden transition-all">
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 active:bg-sage-dark transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Tümünü Kabul Et</span>
            </button>
            <div className="w-[1px] bg-white/20 my-1" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions((prev) => !prev);
              }}
              aria-label="Çerez seçenekleri"
              className={`px-3 py-2 flex items-center justify-center transition-colors active:bg-white/20 ${
                showOptions ? "bg-black/15" : "hover:bg-black/10"
              }`}
            >
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showOptions ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Desktop Buttons (Unchanged side-by-side layout) */}
          <div className="hidden sm:flex items-center gap-2">
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
    </div>
  );
}

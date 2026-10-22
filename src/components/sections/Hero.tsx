"use client";

import React from "react";
import { MapPin, ArrowRight, MessageSquare, Star, Utensils, Smartphone, Activity, User, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";

export default function Hero() {
  const whatsappUrl = siteConfig.contact.whatsappUrl;

  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft text-sage text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              <span>Keçiören / Etlik Ankara & Tüm Dünya Online Diyet</span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-charcoal">
              Yasaklarla Değil, <span className="italic font-normal text-sage">Sürdürülebilir Dengeyle</span> Sağlıklı Yaşam.
            </h1>

            <p className="text-base sm:text-lg text-mutedSlate max-w-xl leading-relaxed">
              Katı diyet listelerini ve aç kalma korkusunu geride bırakın. Ankara Keçiören'deki kliniğimizde yüz yüze veya dilediğiniz yerden online; kan tahlillerinize ve yaşam tarzınıza özel beslenme programı.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#randevu"
                className="inline-flex justify-center items-center gap-2.5 bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base"
              >
                <span>Hemen Randevu Planla</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero_button")}
                className="inline-flex justify-center items-center gap-2 bg-brandSurface hover:bg-[#EAE5DD] text-charcoal font-semibold px-6 py-3.5 rounded-xl border border-borderHairline transition-all text-base"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp'tan Bilgi Al</span>
              </a>
            </div>

            {/* Social Proof Trust Bar */}
            <div className="pt-6 border-t border-borderHairline/80">
              <a
                href={siteConfig.contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("google_reviews_click", { event_category: "SocialProof", click_location: "hero_stars" })}
                className="inline-flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
                aria-label="Google Haritalar Yorumlarını İnceleyin"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-mutedSlate group-hover:text-charcoal transition-colors">
                  <span className="font-bold text-charcoal">5.0 / 5.0</span> Google Haritalar Puanı
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame & Floating Micro UI Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Soft Gradient Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sage/20 to-terracotta/20 rounded-[2.5rem] transform rotate-2 blur-lg opacity-70"></div>
              
              {/* Main Clinic Visual Frame */}
              <div className="relative bg-brandSurface rounded-[2rem] overflow-hidden border-2 border-borderHairline shadow-xl p-3">
                <div className="w-full aspect-[4/5] rounded-2xl relative overflow-hidden group">
                  <img
                    src="/images/clinic/consultation-main.jpg"
                    alt="Diyetisyen Fatmanur Aydın Keçiören Kliniği"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end px-5 pb-14 pt-5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-sage px-2.5 py-0.5 rounded-full w-max mb-1.5 shadow-sm">
                      Keçiören / Etlik Kliniğimiz
                    </span>
                    <h3 className="editorial-title text-xl font-bold">
                      {siteConfig.brand.name}
                    </h3>
                    <p className="text-[11px] text-white/85">
                      Sarayköy Sk. No: 16/A • Nezih & Ferah Muayenehane
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Micro UI Card 1: Kişiye Özel Beslenme */}
              <div className="absolute -top-4 -left-6 bg-white/95 backdrop-blur shadow-lg rounded-2xl p-3 border border-borderHairline flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-soft flex items-center justify-center text-sage">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Kişiye Özel Beslenme</p>
                  <p className="text-[11px] text-mutedSlate">Katı yasaklar yok, esnek denge</p>
                </div>
              </div>

              {/* Floating Micro UI Card 2: Yüz Yüze & Online */}
              <div className="absolute top-1/2 -right-6 bg-white/95 backdrop-blur shadow-lg rounded-2xl p-3 border border-borderHairline flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta-soft flex items-center justify-center text-terracotta">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Yüz Yüze & Online</p>
                  <p className="text-[11px] text-mutedSlate">Her hafta düzenli takip</p>
                </div>
              </div>

              {/* Floating Micro UI Card 3: Vücut Analizi */}
              <div className="absolute -bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-2xl p-3 border border-borderHairline flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Tanita Vücut Analizi</p>
                  <p className="text-[11px] text-mutedSlate">Kas, yağ ve su (sıvı) analizi</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

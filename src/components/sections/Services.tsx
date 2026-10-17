"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  UserCheck, 
  Activity, 
  Baby, 
  Sparkles, 
  TrendingUp, 
  Scale, 
  GraduationCap, 
  Dumbbell, 
  Check, 
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Online", "Yüz Yüze", "Klinik", "Özel Beslenme"];

  const getIcon = (id: string) => {
    switch (id) {
      case "online-diyet":
        return <Globe className="w-6 h-6" />;
      case "yuz-yuze-diyet":
        return <UserCheck className="w-6 h-6" />;
      case "insulin-direnci-diyabet":
        return <Activity className="w-6 h-6" />;
      case "gebe-emziren-anne":
        return <Baby className="w-6 h-6" />;
      case "pkos-beslenmesi":
        return <Sparkles className="w-6 h-6" />;
      case "kilo-alma":
        return <TrendingUp className="w-6 h-6" />;
      case "vucut-analizi":
        return <Scale className="w-6 h-6" />;
      case "cocuk-ergen-beslenmesi":
        return <GraduationCap className="w-6 h-6" />;
      case "sporcu-beslenmesi":
        return <Dumbbell className="w-6 h-6" />;
      default:
        return <Scale className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedCategory === "Tümü"
    ? siteConfig.services
    : siteConfig.services.filter(s => s.category === selectedCategory);

  return (
    <section id="hizmetler" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Google İşletme Doğrulamalı
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
              Uzmanlık Alanlarımız & <span className="text-sage italic">Beslenme Programları</span>
            </h2>
          </div>
          <p className="text-mutedSlate text-sm max-w-md leading-relaxed">
            Kliniğimizde ve online platformda sunduğumuz 9 temel uzmanlık alanı; yaşam tarzınıza, tahlillerinize ve hedefinize tam uyumlu olarak planlanır.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-sage text-white shadow-sm"
                  : "bg-white text-mutedSlate border border-borderHairline hover:border-sage hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3x3 Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 transition-all flex flex-col justify-between group ${
                service.isPopular
                  ? "bg-brandSurface border-2 border-terracotta shadow-md hover:shadow-xl relative"
                  : "bg-white border border-borderHairline hover:border-sage hover:shadow-lg"
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-3 right-6 bg-terracotta text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  Popüler Danışmanlık
                </div>
              )}

              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                    service.isPopular
                      ? "bg-terracotta-soft text-terracotta"
                      : "bg-sage-soft text-sage"
                  }`}
                >
                  {getIcon(service.id)}
                </div>

                <div className="text-[10px] font-bold uppercase text-mutedSlate tracking-wider mb-1">
                  {service.category}
                </div>

                <h3 className="editorial-title text-xl font-bold text-charcoal mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-mutedSlate mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                        service.isPopular
                          ? "bg-white text-charcoal"
                          : "bg-brandSurface text-charcoal"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <ul className="space-y-2 mb-6 border-t border-borderHairline/60 pt-4 text-xs text-charcoal">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[11px] text-mutedSlate">
                      <Check className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Service Action (WhatsApp & Details) */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Merhaba Fatmanur Hanım, ${service.title} hizmetiniz hakkında bilgi almak ve müsait seans saatlerini öğrenmek istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 text-center text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    service.isPopular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Bu Hizmet İçin Randevu Al</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom compare banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brandSurface border border-borderHairline flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base text-charcoal">Hangi programın size uygun olduğuna emin değil misiniz?</h4>
            <p className="text-xs sm:text-sm text-mutedSlate mt-1">Sağlık hedeflerinizi iletin, Diyetisyen Fatmanur Aydın ile birlikte en uygun yol haritasını çizelim.</p>
          </div>
          <Link
            href="/hizmetler"
            className="px-6 py-3 rounded-xl bg-sage hover:bg-sage-dark text-white text-xs font-bold transition-all shadow whitespace-nowrap flex items-center gap-2"
          >
            <span>Detaylı Hizmet Karşılaştırması</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

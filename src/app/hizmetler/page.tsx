import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Activity, 
  Baby, 
  TrendingUp, 
  Scale, 
  GraduationCap, 
  Dumbbell 
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Beslenme Paketleri & Hizmetler | Dyt. Fatmanur Aydın",
  description: "Keçiören yüz yüze ve online diyet programları. İnsülin direnci, PKOS, gebe/emzirme beslenmesi, kilo alma, sporcu beslenmesi ve klinik vücut analizi.",
};

export default function ServicesPage() {
  const specializedServices = siteConfig.services.filter(
    s => s.id !== "online-diyet" && s.id !== "yuz-yuze-diyet"
  );

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "insulin-direnci-diyabet":
        return <Activity className="w-5 h-5 text-terracotta" />;
      case "gebe-emziren-anne":
        return <Baby className="w-5 h-5 text-sage" />;
      case "pkos-beslenmesi":
        return <Sparkles className="w-5 h-5 text-terracotta" />;
      case "kilo-alma":
        return <TrendingUp className="w-5 h-5 text-sage" />;
      case "vucut-analizi":
        return <Scale className="w-5 h-5 text-terracotta" />;
      case "cocuk-ergen-beslenmesi":
        return <GraduationCap className="w-5 h-5 text-sage" />;
      case "sporcu-beslenmesi":
        return <Dumbbell className="w-5 h-5 text-terracotta" />;
      default:
        return <Sparkles className="w-5 h-5 text-sage" />;
    }
  };

  return (
    <div className="py-16 md:py-24 bg-brandBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Dyt. Fatmanur Aydın Danışmanlık Modelleri
          </span>
          <h1 className="editorial-title text-4xl sm:text-5xl font-bold mt-2 text-charcoal">
            Beslenme & Diyet Hizmetleri
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base mt-3 leading-relaxed">
            Google Haritalar işletme profilimizde doğrulanmış tüm hizmetlerimiz; bilimsel temelli, kişiye özel ve sürdürülebilir yaşam odaklıdır.
          </p>
        </div>

        {/* 1. Core Models Comparison (Yüz Yüze vs Online) */}
        <div>
          <div className="text-center mb-8">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              2 Ana Çalışma Modelimiz
            </h2>
            <p className="text-xs text-mutedSlate mt-1">İster Keçiören kliniğimizde yüz yüze, ister evinizin konforunda görüntülü online.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card: Yüz Yüze Danışmanlık */}
            <div className="bg-white rounded-3xl p-8 border border-borderHairline shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-sage-soft text-sage text-xs font-bold rounded-full mb-4">
                  Keçiören / Etlik Kliniği
                </div>
                <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                  Yüz Yüze Diyet & Beslenme Danışmanlığı
                </h3>
                <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed mb-6">
                  Kliniğimizde birebir görüşmeler ve profesyonel cihazla detaylı vücut analizi (yağ-kas ölçümü) eşliğinde kişiye özel beslenme takibi. Yaşam tarzınıza, sağlık durumunuza ve hedeflerinize uygun sürdürülebilir, motivasyon odaklı yüz yüze klinik seansları.
                </p>

                <div className="space-y-3 border-t border-borderHairline pt-6 text-xs text-charcoal">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Profesyonel klinik cihazla detaylı yağ-kas-sıvı analizi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Haftalık yüz yüze kontrol ve motivasyon seansları</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Kan tahlili sonuçlarının tıbbi değerlendirmesi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Hafta içi WhatsApp üzerinden anlık soru-cevap ve tabak takibi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Sosyal yaşama ve sevilen besinlere göre esnek alternatifli liste</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-borderHairline flex flex-col sm:flex-row gap-3">
                <Link
                  href="/iletisim"
                  className="flex-1 py-3 text-center bg-sage hover:bg-sage-dark text-white rounded-xl text-xs font-bold shadow transition-colors"
                >
                  Klinik Konumu & Randevu Al
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Merhaba Fatmanur Hanım, kliniğinizde yüz yüze diyet randevusu oluşturmak istiyorum. Müsait seans saatleri hakkında bilgi alabilir miyim?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card: Online Diyet */}
            <div className="bg-brandSurface rounded-3xl p-8 border-2 border-terracotta shadow-lg flex flex-col justify-between relative">
              <div className="absolute -top-3 right-8 bg-terracotta text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-full shadow">
                Türkiye & Yurt Dışı Geneli
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-terracotta-soft text-terracotta text-xs font-bold rounded-full mb-4">
                  Mesafe Engeli Yok
                </div>
                <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                  Online Diyet & Beslenme Danışmanlığı
                </h3>
                <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed mb-6">
                  Haftalık görüntülü seanslar, WhatsApp üzerinden düzenli öğün ve motivasyon takibi ile tamamen size özel online beslenme programı. Sağlıklı kilo verme, kilo alma ve sürdürülebilir yaşam tarzı hedeflerinize uzaktan güvenle ulaşın.
                </p>

                <div className="space-y-3 border-t border-borderHairline pt-6 text-xs text-charcoal">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>Haftalık 30-40 dakikalık görüntülü görüşme (Google Meet / WhatsApp)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>Hafta içi anlık tabak kontrolü ve WhatsApp motivasyon desteği</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>Saat farkına ve çalışma düzenine göre esnek randevu saatleri</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>Kan tahlillerinin dijital incelenmesi ve besin zamanlaması</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>Restoranda ve seyahatte dengeleme rehberi</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-borderHairline flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Merhaba Fatmanur Hanım, online diyet programınıza katılmak istiyorum. Müsait seans saatleri ve süreç hakkında bilgi alabilir miyim?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-terracotta hover:bg-terracotta-dark text-white rounded-xl text-xs font-bold shadow transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Online Programa Başla</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Specialized Clinical & Lifestyle Services */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Özel Sağlık & Yaşam Hedefleri
            </span>
            <h2 className="editorial-title text-3xl font-bold mt-1 text-charcoal">
              Tıbbi & Spesifik Beslenme Programları
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate mt-2">
              Klinik tahlil bulgularınıza veya özel dönemlerinize (gebelik, spor, büyüme çağı vb.) özel olarak hazırlanan bilimsel programlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-borderHairline hover:border-sage hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-brandSurface flex items-center justify-center mb-4">
                    {getServiceIcon(service.id)}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-mutedSlate">
                    {service.category}
                  </span>

                  <h3 className="editorial-title text-lg font-bold text-charcoal mt-1 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-mutedSlate leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-brandSurface text-charcoal px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 border-t border-borderHairline/60 pt-3 text-[11px] text-mutedSlate">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-borderHairline">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      `Merhaba Fatmanur Hanım, ${service.title} programınız hakkında bilgi almak ve seans planlamak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-brandSurface hover:bg-sage hover:text-white text-charcoal rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-borderHairline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp'tan Bilgi Al</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

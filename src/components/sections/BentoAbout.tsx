import React from "react";
import { HeartHandshake, Microscope, Building, Award, CheckCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function BentoAbout() {
  return (
    <section id="hakkimda" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Beslenme Felsefemiz
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
            Bedeninizle Savaşmayı Bırakın, <br />
            <span className="text-sage italic">Dengenizi Birlikte Keşfedelim</span>
          </h2>
          <p className="text-mutedSlate text-sm sm:text-base mt-3 leading-relaxed">
            Geçici şok diyetlerin yerini; günlük yaşantınıza, damak tadınıza ve metabolizmanıza tam uyumlu kalıcı alışkanlıklar alıyor.
          </p>
        </div>

        {/* 4-Box Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Box 1 (Large - 7 cols): Yaklaşım */}
          <div className="lg:col-span-7 bg-brandSurface rounded-3xl p-8 border border-borderHairline hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sage-soft text-sage flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                Diyet Yapmak Değil, Beslenmeyle Barışmak
              </h3>
              <p className="text-mutedSlate text-sm sm:text-base leading-relaxed">
                Yemek yemek hayatın en doğal keyiflerinden biridir. Amacımız sizi favori yemeklerinizden mahrum bırakmak değil; porsiyon kontrolünü, öğün saatlerini ve besin kombinasyonlarını yaşam biçiminiz haline getirmektir. Haftalık revizyonlarla motivasyonunuzu daima yüksek tutuyoruz.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-sage">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Hazır Şablon Liste Yok
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Aç Kalmadan Doygunluk
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Yasaksız Sosyal Yaşam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Kalıcı Alışkanlık
              </span>
            </div>
          </div>

          {/* Box 2 (5 cols): Bilimsel & Eğitim */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-borderHairline hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-terracotta-soft text-terracotta flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                Bilimsel & Kanıta Dayalı
              </h3>
              <p className="text-mutedSlate text-sm leading-relaxed">
                Ezbere listelere son. {siteConfig.brand.university} eğitim altyapısıyla; tahlil sonuçlarınız (kan şekeri, insülin, tiroid, vitamin düzeyleri) ve klinik vücut analizi verileriniz ışığında, tamamen fizyolojinize göre hazırlanan protokoller.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-borderHairline text-xs font-medium text-mutedSlate flex items-center justify-between">
              <span>Klinik Analiz Entegrasyonu</span>
              <span className="text-sage font-bold">Biyokimyasal Takip</span>
            </div>
          </div>

          {/* Box 3 (5 cols): Hibrit Model */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-borderHairline hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sage-soft text-sage flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                Yüz Yüze & Online Hibrit Model
              </h3>
              <p className="text-mutedSlate text-sm leading-relaxed">
                Ankara Keçiören / Etlik Sarayköy Sokak'taki nezih kliniğimizde yüz yüze vücut analizi ve görüşmeler; ya da Türkiye ve yurt dışındaki danışanlarımız için görüntülü online diyet takibi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-borderHairline text-xs text-mutedSlate flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
              <span>{siteConfig.location.landmark}</span>
            </div>
          </div>

          {/* Box 4 (7 cols): Danışan İstatistikleri */}
          <div className="lg:col-span-7 bg-brandSurface rounded-3xl p-8 border border-borderHairline hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-2xl font-bold text-charcoal mb-3">
                Danışan Başarı & Takip İstatistikleri
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4">
                <div className="bg-white/90 p-4 rounded-2xl border border-borderHairline text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-terracotta">500+</div>
                  <div className="text-[11px] sm:text-xs text-mutedSlate mt-1 font-medium">Mutlu Danışan</div>
                </div>
                <div className="bg-white/90 p-4 rounded-2xl border border-borderHairline text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-sage">%98</div>
                  <div className="text-[11px] sm:text-xs text-mutedSlate mt-1 font-medium">Hedefe Ulaşma</div>
                </div>
                <div className="bg-white/90 p-4 rounded-2xl border border-borderHairline text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-charcoal">5.0 ⭐</div>
                  <div className="text-[11px] sm:text-xs text-mutedSlate mt-1 font-medium">Google Puanı</div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[11px] text-mutedSlate">
              * İstatistikler kliniğimizde takip edilen danışanlarımızın kilo koruma ve memnuniyet anketlerine dayanmaktadır.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

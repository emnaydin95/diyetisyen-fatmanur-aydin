import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, Heart, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Hakkımda | Diyetisyen Fatmanur Aydın - Keçiören Ankara",
  description: "Diyetisyen Fatmanur Aydın kimdir? Biruni Üniversitesi Beslenme ve Diyetetik mezuniyeti, klinik deneyimi, sürdürülebilir beslenme felsefesi.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Uzman Biyografisi & Yaklaşım
          </span>
          <h1 className="editorial-title text-4xl sm:text-5xl font-bold mt-2 text-charcoal">
            Diyetisyen Fatmanur Aydın
          </h1>
          <p className="text-mutedSlate text-base mt-3">
            Biruni Üniversitesi Beslenme ve Diyetetik Bölümü Mezunu • Klinik Beslenme Uzmanı
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="relative bg-brandSurface rounded-3xl p-3 border border-borderHairline shadow-lg overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <img
                  src="/images/clinic/consultation-desk.jpg"
                  alt="Diyetisyen Fatmanur Aydın Çalışma Masası ve Klinik"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-sage px-2.5 py-0.5 rounded-full w-max mb-1">
                    Keçiören / Etlik
                  </span>
                  <span className="editorial-title text-xl font-bold">Diyetisyen Fatmanur Aydın</span>
                  <span className="text-[11px] text-white/80">Klinik Muayene ve Danışma Alanı</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5 text-sm sm:text-base text-charcoal/90 leading-relaxed">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              Beslenmeyle Barışık, <span className="text-sage italic">Ömür Boyu Süren Bir Denge</span>
            </h2>
            <p>
              Merhaba, ben <strong>Diyetisyen Fatmanur Aydın</strong>. Lisans eğitimimi sağlık bilimleri odaklı güçlü akademik altyapısıyla tanınan <strong>Biruni Üniversitesi Beslenme ve Diyetetik</strong> bölümünde tamamladım.
            </p>
            <p className="text-mutedSlate">
              Meslek hayatım boyunca yüzlerce danışanımla birlikte deneyimlediğim en temel gerçek şudur: <em>"Bedeninizle savaştığınız hiçbir kısıtlayıcı diyet kalıcı olamaz."</em> Gerçek başarı; tahlillerinizi doğru okumak, sevdiğiniz yiyecekleri dışlamadan porsiyon ve denge kurallarını günlük yaşantınıza entegre etmekle mümkündür.
            </p>
            <p className="text-mutedSlate">
              Ankara Keçiören / Etlik Aşağı Eğlence'deki kliniğimde yüz yüze; aynı zamanda tüm Türkiye ve dünyanın dört bir yanındaki danışanlarımla online platformda haftalık düzenli görüşmeler gerçekleştiriyoruz.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-borderHairline shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sage-soft text-sage flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-charcoal mb-2">Bilimsel Altyapı</h3>
            <p className="text-xs text-mutedSlate leading-relaxed">
              Tüm beslenme programlarımız güncel uluslararası klinik rehberler, tahlil parametreleri ve metabolik kanıtlar üzerine inşa edilir.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-borderHairline shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-soft text-terracotta flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-charcoal mb-2">Şefkatli & Esnek Takip</h3>
            <p className="text-xs text-mutedSlate leading-relaxed">
              Diyet sürecini bir ceza olarak değil, kendinize gösterdiğiniz bir özen olarak yaşamanızı sağlayan empati odaklı motivasyon desteği.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-borderHairline shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-charcoal mb-2">Kalıcı Alışkanlıklar</h3>
            <p className="text-xs text-mutedSlate leading-relaxed">
              Kilo verdikten sonra geri almayı önleyen, koruma protokolleri ve pratik mutfak çözümleri ile kalıcı yaşam tarzı dönüşümü.
            </p>
          </div>
        </div>

        {/* Clinic Photo Gallery */}
        <div className="space-y-6 pt-6 border-t border-borderHairline">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Huzurlu ve Modern Ortam
            </span>
            <h2 className="editorial-title text-2xl sm:text-3xl font-bold mt-1 text-charcoal">
              Keçiören / Etlik Kliniğimizden Kareler
            </h2>
            <p className="text-xs text-mutedSlate mt-1">
              Danışanlarımızın kendilerini evinde ve huzurda hissetmeleri için tasarlanan ferah muayenehanemiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden border border-borderHairline shadow-sm bg-white group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="/images/clinic/consultation-main.jpg"
                  alt="Diyetisyen Fatmanur Aydın Muayene Odası"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-xs text-charcoal">Muayene & Görüşme Odası</h4>
                <p className="text-[11px] text-mutedSlate mt-0.5">Birebir değerlendirme ve haftalık seanslar</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-borderHairline shadow-sm bg-white group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="/images/clinic/tanita-analyzer.jpg"
                  alt="Tanita Profesyonel Vücut Analiz Cihazı"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-xs text-charcoal">Tanita Profesyonel Vücut Analizi</h4>
                <p className="text-[11px] text-mutedSlate mt-0.5">Yağ, kas, sıvı ve metabolizma hızı ölçümü</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-borderHairline shadow-sm bg-white group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="/images/clinic/waiting-lounge.jpg"
                  alt="Klinik Bekleme ve Dinlenme Alanı"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-xs text-charcoal">Danışan Bekleme Alanı</h4>
                <p className="text-[11px] text-mutedSlate mt-0.5">Ferah ve dinlendirici bekleme salonumuz</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-brandSurface p-8 rounded-3xl border border-borderHairline text-center space-y-4">
          <h3 className="editorial-title text-2xl font-bold text-charcoal">
            Dengenizi Keşfetmek İçin İlk Adımı Atın
          </h3>
          <p className="text-xs sm:text-sm text-mutedSlate max-w-lg mx-auto">
            Keçiören kliniğimizde yüz yüze vücut analizi veya dilediğiniz yerden online danışmanlık randevunuzu hemen planlayın.
          </p>
          <div className="pt-2">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-xl text-xs font-bold shadow transition-all"
            >
              <span>Randevu Planlayın</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

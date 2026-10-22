import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2, Settings } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Çerez Politikası | Diyetisyen Fatmanur Aydın",
  description: "Web sitemizde kullanılan çerezler, kullanım amaçları ve çerez tercihlerinizi yönetme rehberi.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-mutedSlate hover:text-sage transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft text-sage text-xs font-semibold">
            <Cookie className="w-4 h-4" />
            <span>Çerez (Cookie) Aydınlatma Metni</span>
          </div>
          <h1 className="editorial-title text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Çerez Politikası ve Yönetimi
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base leading-relaxed">
            <strong>Diyetisyen Fatmanur Aydın</strong> (&quot;{siteConfig.seo.domain}&quot;) olarak; web sitemizi ziyaret eden kullanıcılarımızın deneyimini iyileştirmek, site güvenliğini sağlamak ve hizmetlerimizi geliştirmek amacıyla çerezler (cookies) kullanmaktayız.
          </p>
          <div className="text-xs text-mutedSlate pt-2 border-b border-borderHairline pb-4">
            Son Güncelleme: Ekim 2026 • 6698 Sayılı KVKK ve e-Gizlilik Standartları Uyarınca Hazırlanmıştır.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-charcoal/90 text-sm sm:text-base leading-relaxed">

          {/* Section 1: Çerez Nedir? */}
          <section className="bg-brandSurface p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-3">
            <h2 className="editorial-title text-xl font-bold text-charcoal">1. Çerez (Cookie) Nedir?</h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, akıllı telefon veya tablet) kaydedilen küçük metin dosyalarıdır. Çerezler; sitemizin düzgün çalışmasını sağlamak, tercihlerinizi hatırlamak (örneğin hesaplayıcı girdileri veya dil/tema tercihleri) ve web sitemizi nasıl kullandığınızı anlayarak performansımızı artırmak amacıyla kullanılır.
            </p>
          </section>

          {/* Section 2: Kullanılan Çerez Türleri */}
          <section className="space-y-6">
            <h2 className="editorial-title text-2xl font-bold text-charcoal flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sage" />
              2. Sitemizde Kullanılan Çerez Türleri
            </h2>

            <div className="space-y-4">
              
              {/* Zorunlu Çerezler */}
              <div className="bg-white p-6 rounded-3xl border border-borderHairline space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-charcoal text-base">A. Kesinlikle Gerekli (Zorunlu) Çerezler</h3>
                  <span className="text-[10px] font-bold uppercase bg-sage-soft text-sage px-2.5 py-0.5 rounded-full">
                    Her Zaman Aktif
                  </span>
                </div>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizin temel fonksiyonlarının (sayfa navigasyonu, güvenlik önlemleri, form gönderimleri ve çerez onay tercihinizin hatırlanması) çalışması için zorunludur. Bu çerezler olmadan web sitesi düzgün çalışamaz ve sistemlerimizde kapatılamaz.
                </p>
                <div className="text-[11px] text-mutedSlate pt-2 border-t border-borderHairline">
                  <strong>Örnekler:</strong> <code className="bg-brandBg px-1.5 py-0.5 rounded text-charcoal">cookie_consent</code> (Çerez onay tercihiniz), Cloudflare oturum ve güvenlik tokenları.
                </div>
              </div>

              {/* İşlevsel Çerezler */}
              <div className="bg-white p-6 rounded-3xl border border-borderHairline space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-charcoal text-base">B. İşlevsel ve Tercih Çerezleri</h3>
                  <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full">
                    Kullanıcı Deneyimi
                  </span>
                </div>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizdeki temel arayüz tercihlerini (örneğin çerez onay tercihinizi) hatırlayarak akıcı ve tutarlı bir ziyaretçi deneyimi sunar.
                </p>
              </div>

              {/* Performans ve Analitik */}
              <div className="bg-white p-6 rounded-3xl border border-borderHairline space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-charcoal text-base">C. Performans ve Analitik Çerezler</h3>
                  <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded-full">
                    İstatistik
                  </span>
                </div>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Ziyaretçilerimizin sitemizde hangi sayfaları (özellikle tarifler, hizmetler veya klinik ulaşım) daha sık görüntülediğini, sayfa yüklenme sürelerini ve olası teknik hataları anonim (kimliğinizi ifşa etmeyecek şekilde toplu) olarak analiz etmemizi sağlar.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: Çerezlerin Yönetimi ve Silinmesi */}
          <section className="bg-brandSurface p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-4">
            <div className="flex items-center gap-2 text-terracotta">
              <Settings className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold text-charcoal">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
            </div>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Çoğu internet tarayıcısı çerezleri varsayılan olarak kabul eder. Ancak dilediğiniz zaman tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir, engelleyebilir veya mevcut çerezleri silebilirsiniz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal">
              <div className="bg-white p-4 rounded-2xl border border-borderHairline">
                <strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Diğer Site Verileri.
              </div>
              <div className="bg-white p-4 rounded-2xl border border-borderHairline">
                <strong>Apple Safari:</strong> Tercihler &gt; Gizlilik &gt; Tüm Çerezleri Engelle / Web Sitesi Verilerini Yönet.
              </div>
              <div className="bg-white p-4 rounded-2xl border border-borderHairline">
                <strong>Mozilla Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri.
              </div>
              <div className="bg-white p-4 rounded-2xl border border-borderHairline">
                <strong>Microsoft Edge:</strong> Ayarlar &gt; Site İzinleri &gt; Çerezler ve Saklanan Veriler.
              </div>
            </div>
            <p className="text-xs text-mutedSlate mt-2">
              * Zorunlu çerezlerin engellenmesi durumunda web sitesindeki bazı interaktif fonksiyonlar (randevu butonu, hesaplayıcılar) beklenen şekilde çalışmayabilir.
            </p>
          </section>

          {/* Section 4: KVKK İle İlişki */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-3">
            <h2 className="editorial-title text-xl font-bold text-charcoal">4. Kişisel Verilerinizin Korunması</h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Çerezler yoluyla elde edilen verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuata tam uyumlu olarak korunmakta ve işlenmektedir. Kişisel verilerinizin işlenmesi ve haklarınız hakkında detaylı bilgi için lütfen{" "}
              <Link href="/kvkk-aydinlatma-metni" className="text-terracotta font-bold underline hover:text-terracotta-dark">
                KVKK Aydınlatma Metnimizi
              </Link>{" "}
              inceleyiniz.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-borderHairline flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-sage hover:text-sage-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          <Link
            href="/kvkk-aydinlatma-metni"
            className="text-xs font-bold text-terracotta hover:underline"
          >
            KVKK Aydınlatma Metni&apos;ni Oku →
          </Link>
        </div>

      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, UserCheck, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "KVKK ve Gizlilik Aydınlatma Metni | Diyetisyen Fatmanur Aydın",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca web sitesi ziyaretçilerine yönelik aydınlatma metni.",
};

export default function KVKKPage() {
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
            <ShieldCheck className="w-4 h-4" />
            <span>6698 Sayılı KVKK Uyarınca Web Sitesi Bilgilendirmesi</span>
          </div>
          <h1 className="editorial-title text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Web Sitesi Gizlilik ve KVKK Aydınlatma Metni
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base leading-relaxed">
            <strong>Diyetisyen Fatmanur Aydın</strong> (&quot;Veri Sorumlusu&quot;) olarak; resmi web sitemizi (<strong>{siteConfig.seo.domain}</strong>) ziyaret eden tüm kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz.
          </p>
          <div className="text-xs text-mutedSlate pt-2 border-b border-borderHairline pb-4">
            Son Güncelleme: Ekim 2026 • Yürürlük: Türkiye Cumhuriyeti Mevzuatı (6698 Sayılı KVKK)
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-charcoal/90 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: Veri Sorumlusu */}
          <section className="bg-brandSurface p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-3">
            <div className="flex items-center gap-3 text-sage">
              <UserCheck className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold text-charcoal">1. Veri Sorumlusunun Kimliği</h2>
            </div>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca kişisel verileriniz; veri sorumlusu sıfatıyla Ankara Keçiören&apos;de faaliyet gösteren <strong>Diyetisyen Fatmanur Aydın</strong> tarafından aşağıda açıklanan kapsamda, hukuka ve dürüstlük kurallarına uygun şekilde işlenebilecektir.
            </p>
            <div className="text-xs text-charcoal bg-white p-4 rounded-2xl border border-borderHairline space-y-1 font-medium">
              <p><strong>Adres:</strong> {siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</p>
              <p><strong>Telefon:</strong> {siteConfig.contact.phone}</p>
              <p><strong>E-posta:</strong> {siteConfig.contact.email}</p>
            </div>
          </section>

          {/* Section 2: İşlenen Kişisel Veriler */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal flex items-center gap-2">
              <FileText className="w-5 h-5 text-sage" />
              2. İşlenen Kişisel Veri Kategorileri
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Web sitemizi ziyaretiniz ve sitemiz üzerindeki etkileşimleriniz kapsamında yalnızca aşağıdaki veri kategorileri işlenmektedir:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">İşlem Güvenliği ve Trafik Verileri</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitesinin güvenliğinin sağlanması, siber saldırıların engellenmesi ve 5651 sayılı Kanun kapsamındaki yasal log tutma yükümlülükleri uyarınca; internet protokol (IP) adresi, erişim tarihi ve saati, yönlendiren sayfa ve tarayıcı bilgileri güvenlik altyapısı (Cloudflare) üzerinden işlenir.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">Analitik ve Etkileşim Verileri</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizin performansını ölçmek ve kullanıcı deneyimini geliştirmek amacıyla Google Analytics 4 (GA4) üzerinden; ziyaret edilen sayfalar, sitede geçirilen süre, buton tıklamaları ve hesaplayıcı araçlarındaki anonim kullanım kategorileri (ör. BKİ aralık etiketi) istatistiki olarak işlenir.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">İletişim Verileri (Kullanıcı İnisiyatifiyle)</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizdeki WhatsApp veya telefon arama butonlarına kendi tercihinizle tıklayarak bizimle iletişime geçmeniz durumunda; paylaştığınız telefon numarası, ad-soyad ve ilettiğiniz mesaj içeriği doğrudan iletişim talebinize yanıt verme amacıyla işlenir.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">Çerez Tercihleri</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizin temel fonksiyonlarının çalışması ve çerez onay tercihinizin hatırlanması amacıyla tarayıcınızda saklanan basit çerez verileridir. Detaylı bilgi Çerez Politikası sayfamızda yer almaktadır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Verilerin İşlenme Amaçları */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate">
              Toplanan kişisel verileriniz, KVKK&apos;nın 5. maddesinde belirtilen şartlara uygun olarak şu amaçlarla işlenir:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal bg-white p-6 rounded-3xl border border-borderHairline">
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Web sitesinin teknik olarak güvenli, hızlı ve kesintisiz çalışmasının sağlanması,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Ziyaretçilerimizin talebi doğrultusunda randevu ve danışmanlık süreçlerine ilişkin bilgilendirme yapılması,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Web sitesi kullanıcı etkileşimlerinin ve içerik performansının (Google Analytics 4 ile) anonim olarak analiz edilmesi ve geliştirilmesi,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Hakkında Kanun uyarınca erişim kayıtlarının saklanması.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Verilerin Aktarılması */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Kişisel verileriniz kesinlikle üçüncü kişilere ticari, pazarlama veya reklam amacıyla devredilmez, satılmaz ve kiralanmaz. Yalnızca:
            </p>
            <ul className="text-xs sm:text-sm text-mutedSlate space-y-1 list-disc list-inside bg-brandSurface p-5 rounded-2xl border border-borderHairline">
              <li>Yetkili kamu kurum ve kuruluşları (adli makamlar veya idari merciler) tarafından yasal olarak talep edilmesi halinde,</li>
              <li>Web sitesinin teknik altyapısını ve analitik ölçümlerini sağlayan servis sağlayıcılar (Cloudflare, Google Analytics) ile teknik hizmet sınırları dahilinde paylaşılabilmektedir.</li>
            </ul>
          </section>

          {/* Section 5: Toplama Yöntemi ve Hukuki Sebebi */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Verileriniz; web sitemizi ziyaret etmeniz esnasında tarayıcınız ve sunucularımız arasındaki otomatik elektronik iletişim (çerezler ve sunucu logları) ile ve iletişim butonları üzerinden doğrudan sizin tarafınızdan iletilmesi yöntemiyle toplanır.
            </p>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Hukuki sebepler; KVKK Madde 5/2 uyarınca <em>&quot;veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması&quot;</em> ve <em>&quot;veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması&quot;</em> hükümleridir.
            </p>
          </section>

          {/* Section 6: KVKK Madde 11 Haklarınız */}
          <section className="bg-sage-soft p-6 sm:p-8 rounded-3xl border border-sage/20 space-y-4">
            <div className="flex items-center gap-2 text-sage-dark">
              <Lock className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold">6. İlgili Kişi Olarak Haklarınız (KVKK Madde 11)</h2>
            </div>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
              KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak kliniğimize başvurarak aşağıdaki haklarınızı kullanabilirsiniz:
            </p>
            <ul className="text-xs sm:text-sm text-charcoal/90 space-y-1.5 list-disc list-inside">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini talep etme.</li>
            </ul>
          </section>

          {/* Section 7: Başvuru ve İletişim */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-4">
            <div className="flex items-center gap-2 text-sage">
              <HelpCircle className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold text-charcoal">7. Başvuru ve İletişim</h2>
            </div>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              KVKK kapsamındaki taleplerinizi kliniğimizin <strong>{siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</strong> adresine yazılı olarak iletebilir veya doğrudan <strong>{siteConfig.contact.phone}</strong> numaralı telefon hattımızdan bize ulaşabilirsiniz.
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
            href="/cerez-politikasi"
            className="text-xs font-bold text-mutedSlate hover:text-sage transition-colors"
          >
            Çerez Politikası&apos;nı İncele →
          </Link>
        </div>

      </div>
    </div>
  );
}

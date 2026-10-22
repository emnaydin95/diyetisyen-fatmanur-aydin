import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, UserCheck, HelpCircle, CheckCircle2 } from "lucide-react";
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

        {/* Önemli Güvence Kutusu */}
        <div className="bg-sage-soft/60 border border-sage/30 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2.5 text-sage font-bold text-base">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Web Sitemizde Özel Nitelikli Sağlık Verisi Toplanmamaktadır</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed">
            Web sitemiz bilgilendirme, klinik tanıtımı ve randevu iletişimi sağlama amaçlı statik bir web sitesidir. 
            <strong> Web sitemiz üzerinden kesinlikle hiçbir sağlık verisi, kan tahlili, Tanita ölçümü, hastalık geçmişi veya özel nitelikli kişisel veri toplanmamakta, barındırılmamakta ve saklanmamaktadır.</strong>
          </p>
          <p className="text-xs text-mutedSlate leading-relaxed">
            Sitede yer alan hesaplayıcı araçlar (Beden Kitle İndeksi, Günlük Su İhtiyacı vb.) tamamen ziyaretçinin kendi internet tarayıcısında anlık olarak çalışır; girilen değerler sunucularımıza kaydedilmez, iletilmez ve saklanmaz.
          </p>
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

          {/* Section 2: İşlenen Sınırlı Veriler */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal flex items-center gap-2">
              <FileText className="w-5 h-5 text-sage" />
              2. Web Sitemizde İşlenen Sınırlı Veriler
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Web sitemizde üyelik, kullanıcı girişi, online form veya veri tabanı bulunmamaktadır. Web sitesi ziyareti esnasında yalnızca şu sınırlı teknik veriler oluşabilir:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">İşlem Güvenliği ve Trafik Verileri</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Web sitemizin siber güvenliğini sağlamak, sunucu hatalarını önlemek ve 5651 sayılı Kanun gereği yasal bilişim loglarını tutmak amacıyla internet erişim kayıtları (anonim IP adresi, erişim tarihi ve saati, tarayıcı türü) güvenlik altyapısı (Cloudflare) tarafından otomatik olarak işlenir.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">İletişim Talebi Verileri</h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  Ziyaretçinin web sitemizdeki WhatsApp veya telefon arama bağlantılarına kendi isteğiyle tıklaması halinde, iletişim doğrudan ilgili haberleşme kanalı üzerinden gerçekleşir. Bu esnada danışanın kendi paylaştığı iletişim bilgileri (telefon numarası, isim) yalnızca randevu oluşturma ve bilgi talebine yanıt verme amacıyla kullanılır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Verilerin İşlenme Amaçları */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              3. Verilerin İşlenme Amaçları
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate">
              Yukarıda belirtilen sınırlı veriler, KVKK&apos;nın 5. maddesinde yer alan şartlara uygun olarak yalnızca aşağıdaki amaçlarla işlenir:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal bg-white p-6 rounded-3xl border border-borderHairline">
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Web sitesinin teknik olarak güvenli, hızlı, kesintisiz ve hatasız çalışmasını sağlamak,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>WhatsApp veya telefon aracılığıyla randevu veya süreç hakkında bilgi talep eden ziyaretçilerimize geri dönüş yapmak,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Mevzuattan kaynaklanan standart yasal yükümlülükleri (bilişim güvenliği ve erişim logları) yerine getirmek.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Verilerin Aktarılması */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              4. Verilerin Paylaşılması ve Aktarımı
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Web sitemiz üzerinden elde edilen hiçbir veri <strong>kesinlikle üçüncü kişilere ticari, pazarlama veya reklam amacıyla satılmaz, kiralanmaz ve paylaşılmaz.</strong> Verileriniz yalnızca:
            </p>
            <ul className="text-xs sm:text-sm text-mutedSlate space-y-1 list-disc list-inside bg-brandSurface p-5 rounded-2xl border border-borderHairline">
              <li>Yetkili adli ve idari merciler tarafından yasal bir soruşturma veya mevzuat gereği talep edilmesi durumunda,</li>
              <li>Web sitesi barındırma ve siber güvenlik altyapı hizmeti sağlayıcılarıyla (Cloudflare) teknik gerekliliklerle sınırlı olarak.</li>
            </ul>
          </section>

          {/* Section 5: Toplama Yöntemi ve Hukuki Sebebi */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              5. Veri Toplamanın Yöntemi ve Hukuki Sebebi
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Veriler; web sitemizin ziyaret edilmesiyle birlikte elektronik ortamda otomatik yöntemlerle (sunucu logları) veya kullanıcının iletişim kanallarına (WhatsApp/telefon) tıklayarak kendi inisiyatifiyle mesaj iletmesi suretiyle toplanır.
            </p>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Hukuki sebepler; KVKK Madde 5/2 kapsamında <em>&quot;veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması&quot;</em> ve <em>&quot;bir hakkın tesisi, kullanılması veya korunması&quot;</em> hükümleridir.
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
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
            </ul>
          </section>

          {/* Section 7: Başvuru ve İletişim */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-4">
            <div className="flex items-center gap-2 text-sage">
              <HelpCircle className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold text-charcoal">7. İletişim ve Talepleriniz</h2>
            </div>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              KVKK kapsamındaki her türlü soru ve talebinizi kliniğimizin <strong>{siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</strong> adresine yazılı olarak iletebilir veya doğrudan <strong>{siteConfig.contact.phone}</strong> numaralı telefon hattımızdan bize ulaşabilirsiniz.
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

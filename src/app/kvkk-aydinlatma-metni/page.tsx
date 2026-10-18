import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, UserCheck, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Diyetisyen Fatmanur Aydın",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel ve özel nitelikli sağlık verilerinizin işlenmesine ilişkin aydınlatma metni.",
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
            <span>6698 Sayılı KVKK Kapsamında Bilgilendirme</span>
          </div>
          <h1 className="editorial-title text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base leading-relaxed">
            <strong>Diyetisyen Fatmanur Aydın</strong> (&quot;Veri Sorumlusu&quot;) olarak; danışanlarımızın, web sitemizi ziyaret eden kullanıcılarımızın ve klinik misafirlerimizin mahremiyetine ve kişisel verilerinin güvenliğine en üst düzeyde önem veriyoruz.
          </p>
          <div className="text-xs text-mutedSlate pt-2 border-b border-borderHairline pb-4">
            Son Güncelleme: Ekim 2026 • Yürürlük: Türkiye Cumhuriyeti Mevzuatı (6698 Sayılı Kanun)
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
              <FileText className="w-5 h-5 text-terracotta" />
              2. İşlenen Kişisel Veri Kategorileri
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate">
              Beslenme ve diyet danışmanlığı süreçlerimizin yürütülmesi amacıyla aşağıdaki veri kategorileri işlenmektedir:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm">Genel Nitelikli Kişisel Veriler</h3>
                <ul className="text-xs text-mutedSlate space-y-1.5 list-disc list-inside">
                  <li><strong>Kimlik Bilgisi:</strong> Ad, soyad, doğum tarihi, yaş, cinsiyet.</li>
                  <li><strong>İletişim Bilgisi:</strong> Telefon numarası, e-posta adresi, ikamet şehri.</li>
                  <li><strong>İşlem Güvenliği Verileri:</strong> Web sitesi IP adresi, erişim log kayıtları, çerez kayıtları.</li>
                  <li><strong>Talep & Şikayet Verisi:</strong> WhatsApp veya web formu üzerinden iletilen mesajlar.</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-borderHairline space-y-2">
                <h3 className="font-bold text-charcoal text-sm text-terracotta">Özel Nitelikli Sağlık Verileri</h3>
                <ul className="text-xs text-mutedSlate space-y-1.5 list-disc list-inside">
                  <li><strong>Fiziksel Ölçümler:</strong> Boy, kilo, bel-kalça çevresi, Tanita vücut analiz verileri (yağ, kas, sıvı oranları).</li>
                  <li><strong>Klinik & Biyokimyasal Veriler:</strong> Danışanın paylaştığı kan tahlili sonuçları (açlık kan şekeri, insülin, tiroid, kolesterol vb.).</li>
                  <li><strong>Beslenme Alışkanlıkları:</strong> Besin alerjileri, intoleranslar, kronik hastalık geçmişi, tüketim kayıtları.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Verilerin İşlenme Amaçları */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate">
              Toplanan kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak şu amaçlarla işlenir:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal bg-white p-6 rounded-3xl border border-borderHairline">
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Kişiye özel beslenme, kilo verme, kilo alma veya klinik diyet programlarının bilimsel olarak planlanması ve haftalık takibi,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Yüz yüze ve online diyet randevularının organize edilmesi, randevu hatırlatmalarının yapılması,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Vücut kompozisyon analizi (Tanita) sonuçlarının grafiklendirilmesi ve danışan gelişiminin izlenmesi,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>WhatsApp veya telefon aracılığıyla seans içi anlık soru, tabak kontrolü ve motivasyon desteğinin sürdürülmesi,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Mevzuattan kaynaklanan yasal yükümlülüklerin (fatura, muhasebe, arşivleme vb.) eksiksiz yerine getirilmesi.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Verilerin Aktarılması */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Kişisel verileriniz ve sağlık kayıtlarınız <strong>kesinlikle üçüncü kişilere ticari veya reklam amacıyla satılmaz, kiralanmaz veya devredilmez.</strong> Yalnızca;
            </p>
            <ul className="text-xs sm:text-sm text-mutedSlate space-y-1 list-disc list-inside bg-brandSurface p-5 rounded-2xl border border-borderHairline">
              <li>Yetkili kamu kurum ve kuruluşları (Sağlık Bakanlığı, adli merciler, vergi daireleri vb.) tarafından yasal olarak talep edilmesi halinde,</li>
              <li>Muhasebe ve finansal işlemlerin yürütülmesi için mali müşavir ve ilgili resmi mercilerle kanuni zorunluluk çerçevesinde paylaşılabilir.</li>
            </ul>
          </section>

          {/* Section 5: Toplama Yöntemi ve Hukuki Sebebi */}
          <section className="space-y-4">
            <h2 className="editorial-title text-2xl font-bold text-charcoal">
              5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
            </h2>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Verileriniz; web sitemiz üzerindeki randevu formu, WhatsApp mesajlaşma hattı, telefon görüşmeleri, klinik ortamındaki birebir görüşmeler ve Tanita vücut analiz cihazı vasıtasıyla elektronik ve fiziki ortamda toplanmaktadır.
            </p>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Hukuki sebepler; KVKK Madde 5/2 kapsamında bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi ve özel nitelikli sağlık verileri için <strong>açık rızanızın</strong> bulunmasıdır.
            </p>
          </section>

          {/* Section 6: KVKK Madde 11 Haklarınız */}
          <section className="bg-sage-soft p-6 sm:p-8 rounded-3xl border border-sage/20 space-y-4">
            <div className="flex items-center gap-2 text-sage-dark">
              <Lock className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold">6. İlgili Kişi Olarak Haklarınız (KVKK Madde 11)</h2>
            </div>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
              KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak Diyetisyen Fatmanur Aydın&apos;a başvurarak aşağıdaki haklarınızı kullanabilirsiniz:
            </p>
            <ul className="text-xs sm:text-sm text-charcoal/90 space-y-1.5 list-disc list-inside">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.</li>
            </ul>
          </section>

          {/* Section 7: Başvuru ve İletişim */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-4">
            <div className="flex items-center gap-2 text-terracotta">
              <HelpCircle className="w-5 h-5" />
              <h2 className="editorial-title text-xl font-bold text-charcoal">7. Başvuru Usulü</h2>
            </div>
            <p className="text-xs sm:text-sm text-mutedSlate leading-relaxed">
              Yukarıda belirtilen haklarınızı kullanmak için taleplerinizi kliniğimizin <strong>{siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</strong> adresine yazılı olarak şahsen teslim edebilir veya kliniğimizin <strong>{siteConfig.contact.phone}</strong> numaralı telefon hattı üzerinden bize iletebilirsiniz. Talepleriniz mevzuat çerçevesinde titizlikle incelenerek sonuçlandırılacaktır.
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
            className="text-xs font-bold text-terracotta hover:underline"
          >
            Çerez Politikası&apos;nı İncele →
          </Link>
        </div>

      </div>
    </div>
  );
}

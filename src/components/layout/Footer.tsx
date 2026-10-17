import React from "react";
import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-24 md:pb-12 border-t border-charcoal text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <span className="editorial-title text-2xl font-bold text-white tracking-tight">
              {siteConfig.brand.name}
            </span>
            <p className="text-white/60 text-xs max-w-sm leading-relaxed">
              Keçiören Ankara ve tüm dünyada sürdürülebilir, bilimsel ve şefkatli beslenme danışmanlığı ile danışanlarının hayatına değer katar.
            </p>
            <div className="space-y-1.5 text-white/70 text-xs pt-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sage-light flex-shrink-0" />
                <span>{siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sage-light flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sage-light flex-shrink-0" />
                <span>{siteConfig.location.workingHours}</span>
              </p>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Google Haritalar"
              >
                <MapPin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-white mb-3 text-sm">Hızlı Bağlantılar</h5>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/hakkimda" className="hover:text-white transition-colors">
                  Hakkımda & Biyografi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-white transition-colors">
                  Danışmanlık Paketleri
                </Link>
              </li>
              <li>
                <a href="/#hesaplayici" className="hover:text-white transition-colors">
                  BKİ & Su Hesapla
                </a>
              </li>
              <li>
                <Link href="/tarifler" className="hover:text-white transition-colors">
                  Sağlıklı Tarifler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  Keçiören Klinik Ulaşım
                </Link>
              </li>
            </ul>
          </div>

          {/* Local SEO Service Areas */}
          <div>
            <h5 className="font-bold text-white mb-3 text-sm">Hizmet Bölgeleri</h5>
            <p className="text-white/60 leading-relaxed mb-3">
              Keçiören, Etlik, Aşağı Eğlence, Basınevleri, İncirli, Kalaba, Subayevleri ve tüm Ankara içi yüz yüze; Türkiye ve yurt dışı online beslenme danışmanlığı.
            </p>
            <div className="text-[11px] text-white/40">
              * Etlik Şehir Hastanesi'ne yakın konumda, sokak üzeri rahat otopark imkanı.
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[11px]">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. Tüm Hakları Saklıdır.</p>
          <p className="text-right">
            Sitede yer alan bilgiler genel beslenme rehberi niteliğinde olup hekim teşhisi ve tıbbi tedavi yerine geçmez.
          </p>
        </div>
      </div>
    </footer>
  );
}

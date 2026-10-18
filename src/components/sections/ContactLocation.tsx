"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Send, Compass, Phone, Clock, Instagram, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import FaqAccordion from "./FaqAccordion";

export default function ContactLocation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consultType, setConsultType] = useState("Keçiören / Etlik Ofisi Yüz Yüze");
  const [goal, setGoal] = useState("Kilo Verme / Yağ Yakımı");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `Merhaba Fatmanur Hanım, web sitenizden randevu/bilgi talebinde bulunuyorum.\n\n👤 Ad Soyad: ${name}\n📞 Telefon: ${phone}\n📍 Danışmanlık Türü: ${consultType}\n🎯 Hedef: ${goal}`;
    if (note.trim()) {
      msg += `\n📝 Danışan Notu: ${note.trim()}`;
    }

    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="iletisim" className="py-20 bg-brandBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Bize Ulaşın
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
            Ankara Keçiören Kliniğimiz & <br />
            <span className="text-sage italic">Hızlı Randevu Formu</span>
          </h2>
          <p className="text-mutedSlate text-sm mt-3 leading-relaxed">
            Etlik Caddesi Sarayköy Sokak'taki ofisimizde kahvemizi içebilir ya da doğrudan WhatsApp üzerinden anında bilgi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & FAQ (7 cols) */}
          <div id="randevu" className="lg:col-span-7 space-y-8">
            
            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderHairline shadow-md">
              <h3 className="editorial-title text-2xl font-bold text-charcoal mb-2">
                İlk Görüşme & Randevu Talebi
              </h3>
              <p className="text-xs text-mutedSlate mb-6 leading-relaxed">
                Formu doldurduğunuzda bilgileriniz otomatik olarak WhatsApp mesajına dönüştürülür ve doğrudan Diyetisyen Fatmanur Hanım'a iletilir.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Örn: Ayşe Yılmaz"
                      className="w-full px-4 py-3 rounded-xl bg-brandBg border border-borderHairline text-sm focus:outline-none focus:ring-2 focus:ring-sage font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-4 py-3 rounded-xl bg-brandBg border border-borderHairline text-sm focus:outline-none focus:ring-2 focus:ring-sage font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Tercih Edilen Danışmanlık
                    </label>
                    <select
                      value={consultType}
                      onChange={(e) => setConsultType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-brandBg border border-borderHairline text-sm focus:outline-none focus:ring-2 focus:ring-sage font-medium"
                    >
                      <option value="Keçiören / Etlik Ofisi Yüz Yüze">
                        Keçiören / Etlik Ofisinde Yüz Yüze
                      </option>
                      <option value="Online Diyet (Görüntülü Takip)">
                        Online Diyet (Görüntülü Takip)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Öncelikli Hedefiniz
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-brandBg border border-borderHairline text-sm focus:outline-none focus:ring-2 focus:ring-sage font-medium"
                    >
                      <option value="Kilo Verme / Yağ Yakımı">Kilo Verme / Yağ Yakımı</option>
                      <option value="Kilo Alma / Kas Kazanımı">Kilo Alma / Kas Kazanımı</option>
                      <option value="İnsülin Direnci / PCOS">İnsülin Direnci & Tıbbi Beslenme</option>
                      <option value="Gebelik ve Emzirme">Gebelik & Emzirme Beslenmesi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1">
                    Kısaca Durumunuz veya Notunuz (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Boy, kilo, mevcut sağlık geçmişiniz veya merak ettiğiniz sorular..."
                    className="w-full px-4 py-3 rounded-xl bg-brandBg border border-borderHairline text-sm focus:outline-none focus:ring-2 focus:ring-sage font-medium"
                  />
                </div>

                <p className="text-[11px] text-mutedSlate leading-relaxed">
                  Randevu talebi göndererek{" "}
                  <Link href="/kvkk-aydinlatma-metni" target="_blank" className="text-terracotta underline hover:text-terracotta-dark font-medium">
                    KVKK Aydınlatma Metni
                  </Link>
                  &apos;ni okuduğunuzu ve kişisel verilerinizin randevu organizasyonu amacıyla işlenmesini kabul etmiş sayılırsınız.
                </p>

                <button
                  type="submit"
                  className="w-full py-4 bg-terracotta hover:bg-terracotta-dark text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Randevu Talebini WhatsApp ile İlet</span>
                </button>
              </form>
            </div>

            {/* SSS Accordion */}
            <FaqAccordion />

          </div>

          {/* Right Column: Clinic Card, Transit Guide & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Clinic Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderHairline shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sage-soft text-sage flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-charcoal">Keçiören / Etlik Kliniğimiz</h4>
                  <p className="text-xs text-mutedSlate">{siteConfig.brand.name} Muayenehanesi</p>
                </div>
              </div>

              <div className="text-xs text-mutedSlate space-y-2.5 border-y border-borderHairline py-4">
                <p className="text-charcoal font-medium flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.location.street}, {siteConfig.location.district} / {siteConfig.location.city}</span>
                </p>
                <div className="flex items-start gap-2 pt-0.5">
                  <Clock className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-charcoal">Çalışma Saatleri</p>
                    <p className="text-charcoal">Salı – Cuma: <span className="font-semibold text-charcoal">09:00 – 20:00</span></p>
                    <p className="text-charcoal">Cumartesi: <span className="font-semibold text-charcoal">08:00 – 15:00</span></p>
                    <p className="text-mutedSlate text-[11px]">Pazar & Pazartesi: Kapalı</p>
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-sage flex-shrink-0" />
                  <span>{siteConfig.contact.instagram}</span>
                </p>
              </div>

              {/* KONUM & ULAŞIM BİLGİSİ KARTI */}
              <div className="bg-brandSurface rounded-2xl p-4 border border-borderHairline text-xs space-y-2.5">
                <div className="font-bold text-charcoal flex items-center gap-1.5 text-sm">
                  <Compass className="w-4 h-4 text-terracotta" />
                  <span>Konum & Ulaşım Bilgisi</span>
                </div>
                <p className="text-mutedSlate leading-relaxed">
                  🏥 <strong>Konum:</strong> {siteConfig.location.transit.locationInfo}
                </p>
                <p className="text-mutedSlate leading-relaxed">
                  🚌 <strong>Toplu Taşıma:</strong> {siteConfig.location.transit.bus}
                </p>
                <p className="text-mutedSlate leading-relaxed">
                  🚗 <strong>Özel Araç & Otopark:</strong> {siteConfig.location.transit.parking}
                </p>
              </div>

              {/* Google Haritalar'da Yol Tarifi Al Butonu */}
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-sage hover:bg-sage-dark text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Haritalar'da Yol Tarifi Al</span>
              </a>
            </div>

            {/* Embedded Live Interactive Google Map */}
            <div className="bg-brandSurface rounded-3xl p-3 border border-borderHairline shadow-sm overflow-hidden">
              <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-borderHairline">
                <iframe
                  title="Diyetisyen Fatmanur Aydın Klinik Konumu"
                  src="https://maps.google.com/maps?q=Diyetisyen%20Fatmanur%20Ayd%C4%B1n,%20Sarayk%C3%B6y%20Sk.%20No:16/A,%20Ke%C3%A7i%C3%B6ren%20Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                ></iframe>
              </div>
              <div className="p-3 text-center">
                <p className="text-[11px] font-semibold text-charcoal">
                  {siteConfig.location.street} • {siteConfig.location.landmark}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

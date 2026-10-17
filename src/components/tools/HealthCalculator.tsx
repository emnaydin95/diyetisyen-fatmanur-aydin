"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Droplets, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function HealthCalculator() {
  const [activeTab, setActiveTab] = useState<"bmi" | "water">("bmi");

  // BMI states
  const [height, setHeight] = useState<number>(168);
  const [weight, setWeight] = useState<number>(68);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<string>("kadin");
  const [consultType, setConsultType] = useState<string>("Keçiören Ofis Yüz Yüze");
  const [bmiResult, setBmiResult] = useState<string>("24.1");
  const [bmiCategory, setBmiCategory] = useState<string>("İdeal / Normal Kilo");
  const [bmiCategoryColor, setBmiCategoryColor] = useState<string>("bg-emerald-100 text-emerald-800");
  const [bmiDescription, setBmiDescription] = useState<string>("");

  // Water states
  const [waterWeight, setWaterWeight] = useState<number>(68);
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [waterResult, setWaterResult] = useState<string>("2.7");

  // Calculate BMI
  useEffect(() => {
    if (!height || !weight || height <= 0 || weight <= 0) return;
    const hInM = height / 100;
    const val = weight / (hInM * hInM);
    const rounded = val.toFixed(1);
    setBmiResult(rounded);

    if (val < 18.5) {
      setBmiCategory("Düşük Kilolu");
      setBmiCategoryColor("bg-amber-100 text-amber-800");
      setBmiDescription("Beden kitle indeksiniz standart sağlıklı aralığın altında. Kas dokunuzu ve bağışıklığınızı destekleyen sağlıklı kilo alımı programı uygulayabiliriz.");
    } else if (val <= 24.9) {
      setBmiCategory("İdeal / Normal Kilo");
      setBmiCategoryColor("bg-emerald-100 text-emerald-800");
      setBmiDescription("Tebrikler! Kilonuz sağlıklı aralıkta. Bu dengeyi korumak, kas/yağ oranınızı optimize etmek ve enerjinizi artırmak için yanınızdayız.");
    } else if (val <= 29.9) {
      setBmiCategory("Fazla Kilolu");
      setBmiCategoryColor("bg-amber-100 text-amber-800");
      setBmiDescription("Hafif kilo fazlalığınız bulunuyor. Yasaksız, aç kalmadan metabolizmanızı hızlandıran bir menüyle ideal kilonuza rahatlıkla dönebilirsiniz.");
    } else {
      setBmiCategory("Obezite Aralığı");
      setBmiCategoryColor("bg-rose-100 text-rose-800");
      setBmiDescription("Metabolik sağlığınızı korumak için klinik beslenme desteği almanız önerilir. Kan tahlillerinizle birlikte size özel bir yol haritası çizelim.");
    }
  }, [height, weight]);

  // Calculate Water
  useEffect(() => {
    if (!waterWeight || waterWeight <= 0) return;
    const val = (waterWeight * 0.033 * activityLevel).toFixed(1);
    setWaterResult(val);
  }, [waterWeight, activityLevel]);

  // Dynamic WhatsApp Message generator for BMI
  const getBmiWhatsAppLink = () => {
    const text = `Merhaba Fatmanur Hanım, web sitenizden ulaşıyorum. Boyum ${height} cm, kilom ${weight} kg (BKİ: ${bmiResult} - ${bmiCategory}). [${consultType}] danışmanlık hakkında bilgi alabilir miyim?`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Dynamic WhatsApp Message generator for Water
  const getWaterWhatsAppLink = () => {
    const text = `Merhaba Fatmanur Hanım, web sitenizden günlük su ihtiyacımı hesapladım (${waterResult} Litre). Sağlıklı beslenme ve ödem atıcı programınız hakkında bilgi almak istiyorum.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="hesaplayici" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Hızlı Değerlendirme</span>
          <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
            İnteraktif <span className="text-sage italic">Sağlık Hesaplayıcıları</span>
          </h2>
          <p className="text-mutedSlate text-sm mt-3">
            Bedeninizin güncel durumunu birkaç saniyede öğrenin ve size özel beslenme programını anında planlayın.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-4xl mx-auto bg-brandSurface rounded-3xl border border-borderHairline p-6 sm:p-10 shadow-lg">
          
          {/* Tabs Nav */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 p-1.5 rounded-2xl border border-borderHairline inline-flex gap-2">
              <button
                onClick={() => setActiveTab("bmi")}
                className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "bmi"
                    ? "bg-sage text-white shadow"
                    : "text-mutedSlate hover:text-charcoal"
                }`}
              >
                <Calculator className="w-4 h-4" />
                Beden Kitle İndeksi (BKİ)
              </button>
              <button
                onClick={() => setActiveTab("water")}
                className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "water"
                    ? "bg-sage text-white shadow"
                    : "text-mutedSlate hover:text-charcoal"
                }`}
              >
                <Droplets className="w-4 h-4" />
                Günlük Su İhtiyacı
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Form Column */}
            <div className="md:col-span-7 space-y-4">
              {activeTab === "bmi" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5">Boyunuz (cm)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        min={100}
                        max={230}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5">Kilonuz (kg)</label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        min={30}
                        max={250}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5">Yaşınız</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5">Cinsiyet</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                      >
                        <option value="kadin">Kadın</option>
                        <option value="erkek">Erkek</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1.5">Hedeflediğiniz Danışmanlık Türü</label>
                    <select
                      value={consultType}
                      onChange={(e) => setConsultType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                    >
                      <option value="Keçiören Ofis Yüz Yüze">Keçiören / Etlik Ofisi Yüz Yüze</option>
                      <option value="Online Diyet (Görüntülü)">Online Diyet (Görüntülü Takip)</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1.5">Mevcut Kilonuz (kg)</label>
                    <input
                      type="number"
                      value={waterWeight}
                      onChange={(e) => setWaterWeight(Number(e.target.value))}
                      min={30}
                      max={250}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1.5">Fiziksel Aktivite Seviyeniz</label>
                    <select
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-borderHairline focus:outline-none focus:ring-2 focus:ring-sage text-sm font-semibold"
                    >
                      <option value={1}>Masa Başı / Hareketsiz Yaşam</option>
                      <option value={1.2}>Hafif Hareketli (Haftada 1-2 Gün Yürüyüş)</option>
                      <option value={1.4}>Aktif Sporcu (Haftada 3-4 Gün Antrenman)</option>
                    </select>
                  </div>
                  <p className="text-xs text-mutedSlate">
                    * Dünya Sağlık Örgütü (WHO) kilogram başına minimum 33 ml su tüketimini önermektedir.
                  </p>
                </>
              )}
            </div>

            {/* Dynamic Result Column */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-borderHairline text-center flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-mutedSlate">
                  {activeTab === "bmi" ? "Beden Kitle İndeksiniz" : "Günlük İdeal Su Miktarınız"}
                </span>

                <div className="editorial-title text-4xl sm:text-5xl font-bold text-terracotta my-2">
                  {activeTab === "bmi" ? bmiResult : `${waterResult} L`}
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${activeTab === "bmi" ? bmiCategoryColor : "bg-blue-100 text-blue-800"}`}>
                  {activeTab === "bmi" ? bmiCategory : "Önerilen Minimum Tüketim"}
                </div>

                <p className="text-xs text-mutedSlate mt-3 leading-relaxed">
                  {activeTab === "bmi"
                    ? bmiDescription
                    : `Metabolizmanızın, sindiriminizin ve ödem atımının en verimli çalışması için günde yaklaşık ${waterResult} litre temiz su içmeniz hedeflenmektedir.`}
                </p>
              </div>

              {/* Dynamic Smart WhatsApp Action */}
              <a
                href={activeTab === "bmi" ? getBmiWhatsAppLink() : getWaterWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {activeTab === "bmi"
                    ? "Bu Sonucu Diyetisyen Fatmanur Hanım'a İlet"
                    : "Su Hedefimi Fatmanur Hanım'la Paylaş"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

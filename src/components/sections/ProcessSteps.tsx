import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Ön Görüşme & Vücut Analizi",
      desc: "Beslenme alışkanlıklarınız, sağlık geçmişiniz, tahlilleriniz ve detaylı vücut kompozisyonunuz (kas/yağ/ödem) analiz edilir.",
      accent: "text-sage/40",
    },
    {
      num: "02",
      title: "Size Özel Liste Tasarımı",
      desc: "Günlük rutininize, sevdiğiniz yiyeceklere ve çalışma saatlerinize birebir uyumlu, alternatifli esnek diyet listeniz hazırlanır.",
      accent: "text-terracotta/40",
    },
    {
      num: "03",
      title: "Haftalık Takip & Revizyon",
      desc: "Her hafta yüz yüze veya online kontrol seansları düzenlenir. Kilo ve ölçüm değişimine göre menünüz güncellenir.",
      accent: "text-sage/40",
    },
    {
      num: "04",
      title: "Kalıcı Kilo & Alışkanlık",
      desc: "Hedef kiloya ulaşıldığında kilonun geri alınmasını engelleyen koruma programı ve sürdürülebilir beslenme bilinci kazandırılır.",
      accent: "text-terracotta/40",
    },
  ];

  return (
    <section id="surec" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Şeffaf Danışan Yol Haritası
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
            Adım Adım <span className="text-sage italic">Dönüşüm Süreci</span>
          </h2>
          <p className="text-mutedSlate text-sm sm:text-base mt-3 leading-relaxed">
            İlk adımdan kalıcı sonuca kadar danışanlarımızın geçtiği 4 aşamalı profesyonel süreç:
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl p-7 border border-borderHairline shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`editorial-title text-4xl font-extrabold ${step.accent} mb-4 transition-colors group-hover:text-charcoal/60`}>
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-mutedSlate leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-mutedSlate/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

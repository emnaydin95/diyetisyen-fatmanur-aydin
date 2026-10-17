import React from "react";
import { Star, ExternalLink, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Gerçek Danışan Deneyimleri
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
              Google Haritalar <span className="text-sage italic">5.0 Yıldızlı Değerlendirmeler</span>
            </h2>
          </div>
          <a
            href={siteConfig.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-sage hover:text-sage-dark bg-white px-4 py-2.5 rounded-xl border border-borderHairline shadow-sm hover:shadow transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Google Haritalar'da Tüm Yorumları Gör</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-borderHairline shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-borderHairline group-hover:text-sage/40 transition-colors" />
                </div>
                <p className="text-xs text-charcoal leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-borderHairline flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-charcoal block">{rev.author}</span>
                  <span className="text-[10px] text-mutedSlate">{rev.role}</span>
                </div>
                <span className="text-[10px] text-mutedSlate/60">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Star, ExternalLink, Quote, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/analytics";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? siteConfig.reviews : siteConfig.reviews.slice(0, 8);

  return (
    <section id="yorumlar" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-soft text-sage text-xs font-semibold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
              <span>Google Haritalar Doğrulanmış Yorumlar</span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-1 text-charcoal">
              Gerçek Danışan Deneyimleri <span className="text-sage italic">(5.0 ★★★★★)</span>
            </h2>
            <p className="text-xs text-mutedSlate mt-1 max-w-xl">
              Keçiören kliniğimizde yüz yüze ve online danışanlarımızın Google Haritalar profilimize bıraktığı tarafsız değerlendirmeler.
            </p>
          </div>
          <a
            href={siteConfig.contact.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("google_reviews_click", { event_category: "SocialProof", click_location: "testimonials_header" })}
            className="inline-flex items-center gap-2 text-xs font-bold text-sage hover:text-sage-dark bg-white px-4 py-2.5 rounded-xl border border-borderHairline shadow-sm hover:shadow transition-all self-start md:self-auto"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Google Haritalar'da İncele</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedReviews.map((rev) => (
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
                  <span className="text-[10px] text-sage font-medium">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-mutedSlate/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {siteConfig.reviews.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-borderHairline text-charcoal hover:bg-brandSurface text-xs font-bold shadow-sm transition-all"
            >
              <span>
                {showAll
                  ? "Daha Az Yorum Göster"
                  : `Tüm Google Yorumlarını Göster (${siteConfig.reviews.length} Yorum)`}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

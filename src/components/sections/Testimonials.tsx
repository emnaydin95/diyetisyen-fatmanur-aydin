"use client";

import React, { useState } from "react";
import { Star, ExternalLink, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/analytics";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? siteConfig.reviews : siteConfig.reviews.slice(0, 8);

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="yorumlar" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Danışan Deneyimleri
            </h2>
            <p className="text-sm sm:text-base text-mutedSlate mt-2.5 max-w-xl font-normal leading-relaxed">
              Birlikte çıktığımız beslenme ve sağlıklı yaşam yolculuklarından danışanlarımızın samimi paylaşımları.
            </p>
          </div>

          <a
            href={siteConfig.contact.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("google_reviews_click", { event_category: "SocialProof", click_location: "testimonials_header" })}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-sage-soft/70 text-charcoal hover:text-sage text-xs font-semibold border border-borderHairline shadow-sm hover:shadow transition-all self-start md:self-end"
          >
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              ★ 5.0
            </span>
            <span className="w-1 h-1 rounded-full bg-borderHairline"></span>
            <span className="text-mutedSlate">Google Yorumları</span>
            <ExternalLink className="w-3.5 h-3.5 text-mutedSlate/70" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-borderHairline/80 shadow-sm hover:shadow-md hover:border-sage/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-borderHairline group-hover:text-sage/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-[13px] sm:text-sm text-charcoal/85 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Journey Info */}
              <div className="pt-4 mt-4 border-t border-borderHairline/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brandSurface text-sage font-semibold text-xs flex items-center justify-center shrink-0 border border-borderHairline">
                  {getInitials(rev.author)}
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-charcoal text-xs block truncate">
                    {rev.author}
                  </span>
                  {rev.category && (
                    <span className="text-[11px] text-mutedSlate block truncate">
                      {rev.category}
                    </span>
                  )}
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-borderHairline text-charcoal hover:bg-brandSurface text-xs font-semibold shadow-sm transition-all"
            >
              <span>
                {showAll
                  ? "Daha Az Göster"
                  : `Tüm Yorumları Gör (${siteConfig.reviews.length})`}
              </span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Flame, ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Diyetisyen Onaylı Sağlıklı Tarifler | Diyetisyen Fatmanur Aydın",
  description: "Fit tatlılar, detoks içecekleri, pratik ve sağlıklı ara öğün tarifleri. Diyetisyen Fatmanur Aydın onaylı besleyici mutfak rehberi.",
};

export default function RecipesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Mutfakta Sağlıklı Pratikler
          </span>
          <h1 className="editorial-title text-4xl sm:text-5xl font-bold mt-2 text-charcoal">
            Diyetisyen Onaylı Tarifler
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base mt-3 leading-relaxed">
            Rafine şekersiz, yüksek lifli ve dakikalar içinde hazırlanan lezzetli fit alternatifler.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.recipes.map((rec) => (
            <Link
              key={rec.slug}
              href={`/tarifler/${rec.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-borderHairline shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-brandSurface border-b border-borderHairline group">
                  {rec.image ? (
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center group-hover:bg-[#EAE5DD] transition-colors">
                      <span className="editorial-title text-xl font-bold text-sage">
                        {rec.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase bg-sage-soft text-sage px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {rec.category}
                  </span>
                  <h3 className="editorial-title text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                    {rec.title}
                  </h3>
                  <p className="text-xs text-mutedSlate leading-relaxed mb-4">
                    {rec.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-mutedSlate pt-2 border-t border-borderHairline">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-sage" /> {rec.prepTime}</span>
                    <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-terracotta" /> {rec.calories}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-sage">
                <span>Tarifi Görüntüle</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Instagram Vitrini */}
        <div className="bg-brandSurface p-8 rounded-3xl border border-borderHairline text-center space-y-4">
          <Instagram className="w-8 h-8 text-terracotta mx-auto" />
          <h3 className="editorial-title text-2xl font-bold text-charcoal">
            Daha Fazla Video ve Tarif İçin Instagram'dayız
          </h3>
          <p className="text-xs text-mutedSlate max-w-md mx-auto">
            Hergün paylaştığımız pratik reels videolarını ve danışan tabaklarını kaçırmamak için takip edin.
          </p>
          <div>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold shadow transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{siteConfig.contact.instagram} Takip Et</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Instagram, Play, ArrowRight, Clock, Flame } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function RecipesShowcase() {
  return (
    <section id="tarifler" className="py-20 bg-brandBg border-b border-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Mutfakta Pratik Sağlık
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold mt-2 text-charcoal">
              Diyetisyen Onaylı <span className="text-sage italic">Tarifler & Reels Vitrini</span>
            </h2>
          </div>
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-terracotta hover:text-terracotta-dark bg-white px-4 py-2.5 rounded-xl border border-borderHairline shadow-sm hover:shadow transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>{siteConfig.contact.instagram} Takip Et</span>
          </a>
        </div>

        {/* 4 Cards Grid (3 Recipes + 1 Reels Showcase) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Recipe 1 */}
          <Link
            href={`/tarifler/${siteConfig.recipes[0].slug}`}
            className="bg-white rounded-3xl overflow-hidden border border-borderHairline shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="aspect-[9/11] relative flex flex-col justify-end p-5 overflow-hidden">
              {siteConfig.recipes[0].image && (
                <img
                  src={siteConfig.recipes[0].image}
                  alt={siteConfig.recipes[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase bg-sage px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  {siteConfig.recipes[0].category}
                </span>
                <h4 className="text-sm font-bold group-hover:text-terracotta-soft transition-colors drop-shadow-sm">
                  {siteConfig.recipes[0].title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-gray-200 mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {siteConfig.recipes[0].prepTime}</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {siteConfig.recipes[0].calories}</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-semibold text-sage border-t border-borderHairline">
              <span>Tarifi İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Recipe 2 */}
          <Link
            href={`/tarifler/${siteConfig.recipes[1].slug}`}
            className="bg-white rounded-3xl overflow-hidden border border-borderHairline shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="aspect-[9/11] relative flex flex-col justify-end p-5 overflow-hidden">
              {siteConfig.recipes[1].image && (
                <img
                  src={siteConfig.recipes[1].image}
                  alt={siteConfig.recipes[1].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase bg-terracotta px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  {siteConfig.recipes[1].category}
                </span>
                <h4 className="text-sm font-bold group-hover:text-terracotta-soft transition-colors drop-shadow-sm">
                  {siteConfig.recipes[1].title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-gray-200 mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {siteConfig.recipes[1].prepTime}</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {siteConfig.recipes[1].calories}</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-semibold text-sage border-t border-borderHairline">
              <span>Tarifi İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: 9:16 Instagram Reels Video Showcase with Real Reel Cover */}
          <a
            href="https://www.instagram.com/reel/DIeHwAtoh-G/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl overflow-hidden border-2 border-sage/40 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between relative"
          >
            <div className="aspect-[9/11] relative flex flex-col justify-end p-5 overflow-hidden">
              <img
                src="/images/reel-smoothie-cover.jpg"
                alt="Diyetisyen Fatmanur Aydın Instagram Reels"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow">
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
              </div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase bg-white/20 backdrop-blur px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  Instagram Reels Vitrini
                </span>
                <h4 className="text-sm font-bold group-hover:text-terracotta-soft transition-colors drop-shadow-sm">
                  Ödem Atmaya Yardımcı: Maydanoz Smoothie
                </h4>
                <p className="text-[11px] text-gray-200 mt-1">Fatmanur Hanım ile Mutfakta Hazırlanışı İzleyin</p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-semibold text-terracotta border-t border-borderHairline">
              <span>Reels Videosunu İzle</span>
              <Instagram className="w-4 h-4" />
            </div>
          </a>

          {/* Recipe 4 */}
          <Link
            href={`/tarifler/${siteConfig.recipes[2].slug}`}
            className="bg-white rounded-3xl overflow-hidden border border-borderHairline shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="aspect-[9/11] relative flex flex-col justify-end p-5 overflow-hidden">
              {siteConfig.recipes[2].image && (
                <img
                  src={siteConfig.recipes[2].image}
                  alt={siteConfig.recipes[2].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase bg-sage px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  {siteConfig.recipes[2].category}
                </span>
                <h4 className="text-sm font-bold group-hover:text-terracotta-soft transition-colors drop-shadow-sm">
                  {siteConfig.recipes[2].title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-gray-200 mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {siteConfig.recipes[2].prepTime}</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {siteConfig.recipes[2].calories}</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-semibold text-sage border-t border-borderHairline">
              <span>Tarifi İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}

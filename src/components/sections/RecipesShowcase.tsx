"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Play, ArrowRight, Clock, Flame } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackInstagramClick } from "@/lib/analytics";

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
            onClick={() => trackInstagramClick("recipes_showcase_header")}
            className="inline-flex items-center gap-2 text-xs font-bold text-terracotta hover:text-terracotta-dark bg-white px-4 py-2.5 rounded-xl border border-borderHairline shadow-sm hover:shadow transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>{siteConfig.contact.instagram} Takip Et</span>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.recipes.slice(0, 4).map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/tarifler/${recipe.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-borderHairline shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="aspect-[9/11] relative flex flex-col justify-end p-5 overflow-hidden">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                {recipe.instagramUrl && recipe.instagramUrl.includes("/reel/") && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow" title="Instagram Reels Videosu Mevcut">
                    <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                  </div>
                )}
                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-bold uppercase bg-sage px-2.5 py-0.5 rounded-full mb-2 inline-block">
                    {recipe.category}
                  </span>
                  <h4 className="text-sm font-bold group-hover:text-terracotta-soft transition-colors drop-shadow-sm line-clamp-2">
                    {recipe.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-gray-200 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {recipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3" /> {recipe.calories}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-semibold text-sage border-t border-borderHairline">
                <span>Tarifi İncele</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Recipes Link */}
        <div className="mt-10 text-center">
          <Link
            href="/tarifler"
            className="inline-flex items-center gap-2 text-xs font-bold text-charcoal hover:text-terracotta bg-white px-6 py-3 rounded-xl border border-borderHairline shadow-sm hover:shadow transition-all"
          >
            <span>Tüm Diyetisyen Onaylı Tarifleri İncele</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

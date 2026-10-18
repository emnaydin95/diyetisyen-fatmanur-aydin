import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Flame, ArrowLeft, CheckCircle2, MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return siteConfig.recipes.map((r) => ({
    slug: r.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const recipe = siteConfig.recipes.find((r) => r.slug === params.slug);
  if (!recipe) return {};

  return {
    title: `${recipe.title} | Diyetisyen Fatmanur Aydın Sağlıklı Tarifler`,
    description: recipe.description,
  };
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = siteConfig.recipes.find((r) => r.slug === params.slug);
  if (!recipe) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <Link
          href="/tarifler"
          className="inline-flex items-center gap-2 text-xs font-bold text-mutedSlate hover:text-sage transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Tariflere Geri Dön</span>
        </Link>

        {/* Recipe Image Banner */}
        {recipe.image && (
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-borderHairline shadow-md relative group">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* Recipe Title & Meta */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta bg-terracotta-soft px-3 py-1 rounded-full">
            {recipe.category}
          </span>
          <h1 className="editorial-title text-3xl sm:text-5xl font-bold mt-3 text-charcoal">
            {recipe.title}
          </h1>
          <p className="text-mutedSlate text-sm sm:text-base mt-3 leading-relaxed">
            {recipe.description}
          </p>

          <div className="flex items-center gap-6 mt-6 py-4 border-y border-borderHairline text-xs font-semibold text-charcoal">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sage" />
              <span>Hazırlama: {recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-terracotta" />
              <span>Enerji: {recipe.calories}</span>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Ingredients (5 cols) */}
          <div className="md:col-span-5 bg-brandSurface p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-4">
            <h3 className="editorial-title text-xl font-bold text-charcoal">
              Gerekli Malzemeler
            </h3>
            <ul className="space-y-3 text-xs text-charcoal">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions (7 cols) */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-borderHairline space-y-5">
            <h3 className="editorial-title text-xl font-bold text-charcoal">
              Adım Adım Hazırlanışı
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal/90 leading-relaxed">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-sage-soft text-sage font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dietitian Note Banner */}
        <div className="bg-sage-soft p-6 sm:p-8 rounded-3xl border border-sage/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="editorial-title text-lg font-bold text-sage-dark">
              Diyetisyen Notu & Öneri
            </h4>
            <p className="text-xs text-mutedSlate mt-1 max-w-lg leading-relaxed">
              Bu tarifi ara öğünlerinizde bir fincan bitki çayı veya filtre kahve eşliğinde rahatlıkla tüketebilirsiniz. Kan şekerinizi dengede tutarak tatlı krizinizi önler.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Merhaba Fatmanur Hanım, web sitenizdeki "${recipe.title}" tarifiniz hakkında bir soru sormak istiyorum.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow flex items-center gap-2 transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tarifi WhatsApp'tan Sor</span>
          </a>
        </div>

        {/* Instagram Reels Callout */}
        <div className="bg-gradient-to-r from-charcoal to-[#2B3E36] p-6 sm:p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sage-light bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
              Instagram Reels & Video
            </span>
            <h4 className="editorial-title text-xl font-bold text-white">
              Tarifin Yapılış Videosunu Instagram'da İzleyin
            </h4>
            <p className="text-xs text-white/70 max-w-lg">
              Fatmanur Hanım'ın bu tarifi hazırlarken paylaştığı püf noktalarını ve daha fazla fit tarifi keşfetmek için takip edin.
            </p>
          </div>
          <a
            href={recipe.instagramUrl || siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white hover:bg-sand text-charcoal rounded-xl text-xs font-bold whitespace-nowrap shadow flex items-center gap-2 transition-all hover:scale-105"
          >
            <Instagram className="w-4 h-4 text-terracotta" />
            <span>{siteConfig.contact.instagram} İzle</span>
          </a>
        </div>

      </div>
    </div>
  );
}

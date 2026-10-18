"use client";

import React from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackWhatsAppClick, trackInstagramClick } from "@/lib/analytics";

interface RecipeActionButtonsProps {
  recipeTitle: string;
  instagramUrl?: string;
}

export function RecipeWhatsAppButton({ recipeTitle }: { recipeTitle: string }) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Merhaba Fatmanur Hanım, web sitenizdeki "${recipeTitle}" tarifiniz hakkında bir soru sormak istiyorum.`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("recipe_detail_question", recipeTitle)}
      className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow flex items-center gap-2 transition-transform hover:scale-105"
    >
      <MessageCircle className="w-4 h-4" />
      <span>Tarifi WhatsApp&apos;tan Sor</span>
    </a>
  );
}

export function RecipeReelsButton({ recipeTitle, instagramUrl }: RecipeActionButtonsProps) {
  const targetUrl = instagramUrl || siteConfig.contact.instagramUrl;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackInstagramClick("recipe_reels_watch", recipeTitle)}
      className="px-6 py-3.5 bg-white hover:bg-sand text-charcoal rounded-xl text-xs font-bold whitespace-nowrap shadow flex items-center gap-2 transition-all hover:scale-105"
    >
      <Instagram className="w-4 h-4 text-terracotta" />
      <span>{siteConfig.contact.instagram} İzle</span>
    </a>
  );
}

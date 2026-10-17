"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-brandSurface rounded-3xl p-6 sm:p-8 border border-borderHairline">
      <h3 className="editorial-title text-xl font-bold text-charcoal mb-4">
        Sıkça Sorulan Sorular
      </h3>
      <div className="space-y-3">
        {siteConfig.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-borderHairline cursor-pointer transition-all"
              onClick={() => toggle(idx)}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-charcoal">
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-mutedSlate transition-transform duration-200 flex-shrink-0 ml-2 ${
                    isOpen ? "rotate-180 text-sage" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <div className="mt-2.5 pt-2.5 border-t border-borderHairline/60 text-xs text-mutedSlate leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

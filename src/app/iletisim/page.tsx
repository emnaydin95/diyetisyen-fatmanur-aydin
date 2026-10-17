import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import ContactLocation from "@/components/sections/ContactLocation";

export const metadata: Metadata = {
  title: "İletişim & Ulaşım | Diyetisyen Fatmanur Aydın - Keçiören Ankara",
  description: "Diyetisyen Fatmanur Aydın Keçiören kliniği iletişim, randevu formu ve konum rehberi. Sarayköy Sk. No:16/A, Etlik Şehir Hastanesi'ne yakın konumda, Keçiören / Ankara.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <ContactLocation />
    </div>
  );
}

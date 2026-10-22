"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-brandBg/90 backdrop-blur-md border-b border-borderHairline transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="editorial-title text-2xl font-bold tracking-tight text-sage group-hover:text-sage-dark transition-colors">
              {siteConfig.brand.shortName}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-mutedSlate">
              Beslenme & Diyet Kliniği
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-charcoal">
            <Link href="/hakkimda" className="hover:text-sage transition-colors">
              Hakkımda
            </Link>
            <Link href="/hizmetler" className="hover:text-sage transition-colors">
              Hizmetler & Paketler
            </Link>
            <a href="/#hesaplayici" className="hover:text-sage transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
              BKİ & Su Hesapla
            </a>
            <Link href="/tarifler" className="hover:text-sage transition-colors">
              Tarifler
            </Link>
            <Link href="/iletisim" className="hover:text-sage transition-colors">
              İletişim & Ulaşım
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar_desktop")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-sage/30 text-sage hover:bg-sage/10 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp
            </a>
            <a
              href="#randevu"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              Randevu Planla
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal hover:bg-brandSurface transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brandBg border-b border-borderHairline px-4 pt-3 pb-6 space-y-3">
            <Link
              href="/hakkimda"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-sage"
            >
              Hakkımda & Yaklaşımım
            </Link>
            <Link
              href="/hizmetler"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-sage"
            >
              Hizmetler & Danışmanlık Paketleri
            </Link>
            <a
              href="/#hesaplayici"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-sage flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-terracotta"></span>
              BKİ & Su İhtiyacı Hesaplayıcı
            </a>
            <Link
              href="/tarifler"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-sage"
            >
              Sağlıklı Tarifler & Mutfak
            </Link>
            <Link
              href="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-sage"
            >
              İletişim & Klinik Ulaşım
            </Link>
            <div className="pt-3 border-t border-borderHairline flex gap-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick("navbar_mobile_menu");
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#randevu"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 bg-terracotta text-white rounded-xl text-xs font-bold text-center"
              >
                Randevu Al
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

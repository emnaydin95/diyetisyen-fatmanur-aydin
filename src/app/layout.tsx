import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/playfair-display-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/playfair-display-latin-ext.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/playfair-display-italic-latin.woff2",
      weight: "400 700",
      style: "italic",
    },
    {
      path: "../../public/fonts/playfair-display-italic-latin-ext.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = localFont({
  src: [
    {
      path: "../../public/fonts/plus-jakarta-sans-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/plus-jakarta-sans-latin-ext.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CookieConsent from "@/components/layout/CookieConsent";

export const metadata: Metadata = {
  title: siteConfig.brand.title,
  description: siteConfig.brand.description,
  keywords: [
    "Ankara Diyetisyen",
    "Keçiören Diyetisyen",
    "Etlik Diyetisyen",
    "Aşağı Eğlence Diyetisyen",
    "Diyetisyen Fatmanur Aydın",
    "Online Diyetisyen",
    "Kilo Verme Keçiören",
    "İnsülin Direnci Beslenme",
    "PCOS Diyetisyeni",
    "Tıbbi Beslenme Tedavisi",
  ],
  authors: [{ name: siteConfig.brand.name, url: siteConfig.seo.domain }],
  creator: siteConfig.brand.name,
  metadataBase: new URL(siteConfig.seo.domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.brand.title,
    description: siteConfig.brand.description,
    url: siteConfig.seo.domain,
    siteName: siteConfig.brand.name,
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & Dietitian Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dietitian", "LocalBusiness", "MedicalBusiness"],
    "@id": `${siteConfig.seo.domain}#dietitian`,
    name: siteConfig.brand.name,
    alternateName: siteConfig.brand.shortName,
    description: siteConfig.brand.description,
    url: siteConfig.seo.domain,
    telephone: siteConfig.contact.phone,
    hasMap: siteConfig.contact.googleMapsUrl,
    priceRange: "₺₺",
    image: `${siteConfig.seo.domain}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.district,
      addressRegion: siteConfig.location.city,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.geo.latitude,
      longitude: siteConfig.location.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Keçiören" },
      { "@type": "AdministrativeArea", name: "Etlik" },
      { "@type": "AdministrativeArea", name: "Aşağı Eğlence" },
      { "@type": "City", name: "Ankara" },
      { "@type": "Country", name: "Türkiye" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beslenme ve Diyet Danışmanlığı Hizmetleri",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: [siteConfig.contact.instagramUrl, siteConfig.contact.googleMapsUrl],
  };

  return (
    <html lang="tr" className={`scroll-smooth ${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brandBg text-charcoal antialiased selection:bg-terracotta selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFloat />
        <CookieConsent />

        {/* Google Analytics 4 (GA4) */}
        {siteConfig.analytics?.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${siteConfig.analytics.googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

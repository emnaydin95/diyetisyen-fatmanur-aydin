/**
 * Google Analytics 4 (GA4) Event Tracking Utilities
 * Diyetisyen Fatmanur Aydın
 */

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, params);
  }
};

export const trackWhatsAppClick = (location: string, label?: string) => {
  trackEvent("whatsapp_click", {
    event_category: "Lead",
    event_label: label || location,
    click_location: location,
  });
};

export const trackInstagramClick = (location: string, target?: string) => {
  trackEvent("instagram_click", {
    event_category: "Social",
    event_label: target || location,
    click_location: location,
  });
};

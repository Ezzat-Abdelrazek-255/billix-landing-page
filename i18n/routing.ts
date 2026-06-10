import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // English stays at "/", Arabic lives under "/ar"
  localePrefix: "as-needed",
  // Locale is chosen purely by URL — no Accept-Language redirects, no cookie
  localeDetection: false,
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];

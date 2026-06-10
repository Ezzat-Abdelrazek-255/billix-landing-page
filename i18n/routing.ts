import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // English stays at "/", Arabic lives under "/ar"
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://billix.io";
export const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || "https://chat.billix.io";
export const MAIN_ROUTES = [
  {
    key: "enterprise",
    href: "/enterprise",
  },
  {
    key: "blogs",
    href: "/blogs",
  },
  {
    key: "pricing",
    href: "/pricing",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

export const ALL_ROUTES = [
  {
    key: "enterprise",
    href: "/enterprise",
  },
  {
    key: "blogs",
    href: "/blogs",
  },
  {
    key: "pricing",
    href: "/pricing",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
  { key: "changelog", href: "/changelog" },
  { key: "privacyPolicy", href: "/privacy-policy" },
  { key: "termsOfService", href: "/terms-of-service" },
  { key: "securityPolicy", href: "/security-policy" },
];

export const LOADER_DELAY = 1.4;
export const INTRO_DURATION = 1.2;

export const INTRO_STAGGER = 0.25;

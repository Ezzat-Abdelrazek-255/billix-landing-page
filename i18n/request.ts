import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

const NAMESPACES = [
  "common",
  "notFound",
  "home",
  "about",
  "enterprise",
  "pricing",
  "contact",
  "blogs",
  "changelog",
  "legal",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messages: Record<string, unknown> = {};
  for (const namespace of NAMESPACES) {
    messages[namespace] = (await import(`../messages/${locale}/${namespace}.json`)).default;
  }

  return {
    locale,
    messages,
  };
});

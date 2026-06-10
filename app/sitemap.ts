import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://billix.io";

const PAGES: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/enterprise", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  { path: "/changelog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/security-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, changeFrequency, priority }) => {
    const enUrl = `${BASE_URL}${path}` || BASE_URL;
    const arUrl = `${BASE_URL}/ar${path}`;
    const alternates = {
      languages: {
        en: enUrl,
        ar: arUrl,
      },
    };

    return [
      {
        url: enUrl,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: arUrl,
        lastModified: new Date(),
        changeFrequency,
        priority: priority * 0.9,
        alternates,
      },
    ];
  });
}

import localFont from "next/font/local";
import "./globals.css";
import Debug from "@/components/debug/debug";
import CookieConsent from "@/components/ui/cookie-consent";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HeaderCompact from "@/components/ui/header-compact";
import Noise from "@/components/ui/noise";
import Preloader from "@/components/ui/preloader";
import { APP_URL } from "@/constants";
import JsonLd from "@/components/seo/json-ld";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const ivyprestoHeadline = localFont({
  src: "./fonts/IvyprestoHeadline-LightItalic.woff2",
  style: "italic",
  weight: "300",
  variable: "--font-ivypresto-headline",
});

const helveticaNowProText = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowProTextRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowProTextMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowProTextBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now-pro-text",
});

const siteTitle = "Billix — AI Workspace for Chat, Automation & Integrations";
const siteDescription =
  "Billix unifies AI chat, automation, content creation, and 500+ integrations in one seamless workspace. Give plain-language instructions and let Billix execute real actions instantly — no setup, no tech skills required.";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL || "https://billix.io"),
  title: {
    default: siteTitle,
    template: "%s | Billix",
  },
  description: siteDescription,
  applicationName: "Billix",
  keywords: [
    "AI workspace",
    "AI automation",
    "AI chat",
    "workflow automation",
    "no-code automation",
    "AI integrations",
    "AI assistant",
    "productivity tool",
    "business automation",
    "Billix",
    "AI content creation",
    "natural language automation",
    "500 integrations",
    "Slack integration",
    "Gmail automation",
    "Notion integration",
    "HubSpot automation",
    "Salesforce integration",
  ],
  authors: [{ name: "Billix", url: "https://billix.io" }],
  creator: "Billix",
  publisher: "Billix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://billix.io",
    siteName: "Billix",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Billix — AI Workspace for Chat, Automation & Integrations",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@BillixIo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://billix.io",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${ivyprestoHeadline.variable} ${helveticaNowProText.variable} antialiased`}>
        <Providers>
          <Analytics />
          <Header />
          <HeaderCompact />
          <Noise />
          {children}
          <Preloader />
          <Footer />
          {process.env.NODE_ENV === "development" && <Debug />}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import RichContentLink from "../ui/rich-content/rich-content-link";
import RichContentList from "../ui/rich-content/rich-content-list";
import RichContentSection from "../ui/rich-content/rich-content-section";
import RichContentSeparator from "../ui/rich-content/rich-content-separator";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { cn, remToPx } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const accountInfoItems = [
  "Name, email address, and profile image (via Google OAuth)",
  "Optional profile information like occupation and preferences",
  "Your AI model preferences and settings",
];

const usageInfoItems = [
  "Your chat messages and any files you upload",
  "API keys you provide (encrypted with AES-GCM 256-bit encryption)",
  "Usage statistics like message counts and model usage",
  "Technical information like browser type and IP address",
];

const analyticsInfoItems = [
  "We use Sentry for comprehensive error tracking, performance monitoring, and analytics, along with Vercel Analytics for service improvement",
  "Personal identifiers are removed from analytics data",
];

const dataUsageItems = [
  "Provide AI services: Process your messages through AI models",
  "Account management: Create and manage your account and preferences",
  "Rate limiting: Enforce usage limits (5/day anonymous, 20/day registered)",
  "Customer support: Respond to your questions and provide help",
  "Service improvement: Analyze usage patterns to improve our service",
  "Legal compliance: Comply with applicable laws and regulations",
];

const aiProviders = [
  "OpenAI, Anthropic, Google, Mistral, xAI, Together AI, Meta, and others",
  "These providers may be located outside your country, including in the US",
];

const otherThirdParties = [
  "Analytics & Monitoring: Sentry (primary platform for error tracking, performance monitoring, and analytics), Vercel Analytics",
  "Search: Exa, Tavily, Brave Search for enhanced AI responses",
  "Authentication: Convex Auth for secure login",
  "Payments: Polar for subscription billing",
  "Infrastructure: Convex for backend services",
];

const securityMeasures = [
  "Encryption: API keys encrypted with AES-GCM 256-bit encryption",
  "Secure transmission: All communications use TLS 1.3 encryption",
  "Access controls: Server-side authentication and authorization",
  "Rate limiting: Protection against abuse and unauthorized access",
];

const retentionItems = [
  "Account information: Until you delete your account",
  "Chat messages: Retained for service functionality; you can delete chats",
  "Analytics data: Aggregated data kept up to 3 years",
  "Legal records: As required by law",
];

const generalRights = [
  "Access: Request information about your data",
  "Correction: Fix inaccurate information",
  "Deletion: Request deletion of your data",
  "Portability: Receive your data in machine-readable format",
];

const ccpaRights = [
  "Right to know what personal information is collected and shared",
  "Right to delete personal information",
  "Right to opt-out of sale/sharing (we don't sell your data)",
  "Right to non-discrimination for exercising your rights",
];

const gdprRights = [
  "Right not to be subject to automated decision-making",
  "Right to human review of automated decisions",
  "Right to lodge complaints with supervisory authorities",
];

const cookieUses = [
  "Authentication and session management",
  "User preferences and settings",
  "Analytics and performance monitoring",
  "Security and fraud prevention",
];

const NAVIGATION = [
  { label: "Information Collection", href: "#information-collection" },
  { label: "Data Usage & Processing", href: "#data-usage-processing" },
  { label: "Data Sharing", href: "#data-sharing" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "User Rights", href: "#user-rights" },
  { label: "Contact & Legal", href: "#contact-legal" },
];

const PrivacyPolicyContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      NAVIGATION.forEach(item => {
        const section = container.querySelector(item.href);
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: `top-=${remToPx(12)} top`,
            end: `bottom-=${remToPx(12)} top`,
            onEnter: () => setActiveSection(item.href),
            onEnterBack: () => setActiveSection(item.href),
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      data-reveal-group
      data-animate-whole
      data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
      ref={containerRef}
      className="grid-12 gap-base relative z-0"
    >
      <div className="relative z-0 col-span-12 hidden sm:col-span-3 sm:block">
        <div className="gap-sm sticky top-[calc(3.2rem+var(--header-height))] flex flex-col">
          {NAVIGATION.map(item => (
            <div className="w-full" key={item.label}>
              <Link
                className={cn(
                  "border-foreground px-base ease-out-quad py-sm block w-full rounded-full border border-dashed transition-colors",
                  activeSection === item.href && "bg-foreground text-background",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 col-start-1 sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
        <div className="bg-background-muted gap-xl body-base flex flex-col rounded-sm p-[4.8rem]">
          {/* ---------------- General ---------------- */}
          <div id="information-collection" className="gap-xl flex flex-col">
            <p className="scroll-mt-[18rem]">
              At Billix, we&apos;re committed to protecting your privacy. This policy explains how we collect, use, and
              protect your information when you use our AI application.
            </p>
            <p>
              <strong>Important:</strong> You&apos;re interacting with AI systems that process your messages to generate
              responses. While we strive for accuracy, AI content may not always be correct.
            </p>

            <RichContentSeparator />

            {/* -------- Information Collection -------- */}
            <RichContentSection title="Information We Collect">
              <div className="gap-base flex flex-col">
                <div className="gap-sm flex flex-col">
                  <p>
                    <strong>When you create an account:</strong>
                  </p>
                  <RichContentList items={accountInfoItems} />
                </div>

                <div className="gap-sm flex flex-col">
                  <p>
                    <strong>When you use Billix:</strong>
                  </p>
                  <RichContentList items={usageInfoItems} />
                </div>

                <div className="gap-sm flex flex-col">
                  <p>
                    <strong>Analytics data:</strong>
                  </p>
                  <RichContentList items={analyticsInfoItems} />
                </div>
              </div>
            </RichContentSection>

            <div className="bg-foreground/20 h-[1px] w-full" />

            <RichContentSection title="Cookies and Tracking">
              <p>We use cookies for:</p>
              <RichContentList items={cookieUses} />
              <p>You can control cookies through your browser settings.</p>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Do Not Track">
              <p>
                We currently do not support the Do Not Track browser setting. For more details, visit{" "}
                <RichContentLink href="https://www.allaboutdnt.com">https://www.allaboutdnt.com</RichContentLink>.
              </p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* -------- Data Usage & Processing -------- */}
          <div id="data-usage-processing" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="How We Use Your Information">
              <RichContentList items={dataUsageItems} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Automated Decision-Making">
              <p>
                Our AI systems automatically generate responses. You can request human review by contacting{" "}
                <RichContentLink href="mailto:support@billix.io">support@billix.io</RichContentLink>.
              </p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* -------------- Data Sharing -------------- */}
          <div id="data-sharing" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Information Sharing">
              <div className="gap-base flex flex-col">
                <div className="gap-sm flex flex-col">
                  <p>
                    <strong>AI Providers:</strong>
                  </p>
                  <RichContentList items={aiProviders} />
                </div>

                <div className="gap-sm flex flex-col">
                  <p>
                    <strong>Other Third Parties:</strong>
                  </p>
                  <RichContentList items={otherThirdParties} />
                </div>

                <p>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law.
                </p>
              </div>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="International Transfers">
              <p>Your data may be transferred outside your jurisdiction, including the US.</p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* ------------ Data Protection ------------ */}
          <div id="data-protection" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Data Security">
              <RichContentList items={securityMeasures} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Data Retention">
              <RichContentList items={retentionItems} />
            </RichContentSection>

            <RichContentSeparator />
            <RichContentSection title="Data Breach Notification">
              <p>We will notify authorities and affected users when required by law.</p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          <div id="user-rights" className="gap-xl flex flex-col">
            {/* --------------- User Rights --------------- */}
            <RichContentSection className="scroll-mt-[11.2rem]" title="Your Rights">
              <div className="gap-base flex flex-col">
                <RichContentList items={generalRights} />
                <RichContentList items={ccpaRights} />
                <RichContentList items={gdprRights} />
              </div>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Children">
              <p>Billix is not intended for children under 13 years of age.</p>
            </RichContentSection>

            <RichContentSeparator />

            {/* ----------- Contact & Legal ----------- */}
            <RichContentSection title="Updates to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time.</p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          <RichContentSection className="scroll-mt-[11.2rem]" id="contact-legal" title="Contact Us">
            <p>
              Questions about privacy? <RichContentLink href="/contact">Contact us</RichContentLink>
            </p>
          </RichContentSection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;

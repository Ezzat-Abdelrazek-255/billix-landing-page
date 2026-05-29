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

/* ---------------- Content ---------------- */

const encryptionItems = [
  "API Keys: Encrypted using AES-GCM 256-bit with PBKDF2 key derivation (100,000 iterations)",
  "Data in Transit: All communications use HTTPS/TLS encryption",
  "User Isolation: User-specific encryption keys ensure data isolation",
];

const accessControlItems = [
  "Authentication via Google OAuth through Convex Auth",
  "Users can only access their own data",
  "Server-side validation for all data access requests",
  "Rate limiting: 5 messages/day anonymous, 20 messages/day authenticated",
  "Session management with automatic expiration",
];

const techStackItems = [
  "Convex Backend: Managed serverless backend with built-in security features",
  "Next.js 15: Modern framework with security best practices",
  "TypeScript: Type-safe development to reduce bugs",
  "Vercel Hosting: Secure hosting with DDoS protection",
];

const appSecurityItems = [
  "Input validation and sanitization",
  "Protection against common web vulnerabilities (XSS, CSRF)",
  "Secure session management",
  "Environment variables for sensitive configuration",
];

const thirdPartyAIItems = [
  "OpenAI, Anthropic, Google, and other established AI providers",
  "API calls are encrypted",
  "Only necessary message data is sent",
  "API keys are encrypted and stored securely",
];

const otherServicesItems = [
  "Convex: Database and backend infrastructure",
  "Vercel: Hosting and analytics",
  "Polar: Payment processing (PCI compliant) — we do not store card info",
];

const dataStorageItems = [
  "Account information (name, email from Google OAuth)",
  "Chat messages and conversation history",
  "Encrypted API keys (if provided)",
  "User preferences and settings",
];

const dataDeletionItems = [
  "Users can delete their chat history at any time",
  "Account deletion removes all associated data",
  "Data is retained only as long as necessary for service functionality",
];

const securityPracticesItems = [
  "Regular updates of dependencies and frameworks",
  "Code reviews for security-sensitive changes",
  "Monitoring for known vulnerabilities in dependencies",
  "Following web application security best practices",
  "Using environment variables for sensitive configuration",
];

const incidentResponseItems = [
  "Investigate security issues promptly",
  "Contain and fix problems",
  "Notify affected users if data is compromised",
  "Work to prevent similar incidents in the future",
];

const userResponsibilitiesItems = [
  "Keep your Google account secure",
  "Do not share your API keys",
  "Log out when using shared devices",
  "Report any suspicious activity to us",
];

const reportingItems = [
  "Report vulnerabilities to support@billix.io",
  "Include issue details and reproduction steps",
  "Allow reasonable time for investigation and resolution",
  "Do not publicly disclose until addressed",
];

/* ---------------- Navigation ---------------- */

const NAVIGATION = [
  { label: "Introduction", href: "#introduction" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "Infrastructure Security", href: "#infrastructure-security" },
  { label: "Third-Party Services", href: "#third-party-services" },
  { label: "Data Storage & Retention", href: "#data-storage-retention" },
  { label: "Security Practices", href: "#security-practices" },
  { label: "Incident Response", href: "#incident-response" },
  { label: "Your Responsibilities", href: "#your-responsibilities" },
  { label: "Reporting Issues", href: "#reporting-issues" },
  { label: "Updates & Contact", href: "#updates-contact" },
];

const SecurityPolicyContent = () => {
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
      {/* Navigation */}
      <div className="relative z-0 col-span-12 hidden sm:col-span-3 sm:block">
        <div className="gap-sm sticky top-[calc(3.2rem+var(--header-height))] flex flex-col">
          {NAVIGATION.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-foreground px-base ease-out-quad py-sm block w-full rounded-full border border-dashed transition-colors",
                activeSection === item.href && "bg-foreground text-background",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 col-start-1 sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
        <div className="bg-background-muted gap-xl body-base flex flex-col rounded-sm p-[4.8rem]">
          {/* Introduction */}
          <div id="introduction" className="gap-xl flex flex-col">
            <p className="scroll-mt-[18rem]">
              At Billix, we take security seriously. This policy outlines how we protect your data and maintain the
              security of our AI application.
            </p>
            <p>
              <strong>Last Updated:</strong> September 9, 2025
            </p>
            <RichContentSeparator />
          </div>

          {/* Data Protection */}
          <div id="data-protection" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Encryption">
              <RichContentList items={encryptionItems} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Access Controls">
              <RichContentList items={accessControlItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Infrastructure Security */}
          <div id="infrastructure-security" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Technology Stack">
              <RichContentList items={techStackItems} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Application Security">
              <RichContentList items={appSecurityItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Third-Party Services */}
          <div id="third-party-services" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="AI Providers">
              <RichContentList items={thirdPartyAIItems} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Other Services">
              <RichContentList items={otherServicesItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Data Storage & Retention */}
          <div id="data-storage-retention" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Data We Store">
              <RichContentList items={dataStorageItems} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Data Deletion">
              <RichContentList items={dataDeletionItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Security Practices */}
          <div id="security-practices" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Our Security Practices">
              <RichContentList items={securityPracticesItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Incident Response */}
          <div id="incident-response" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Incident Response">
              <RichContentList items={incidentResponseItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Your Responsibilities */}
          <div id="your-responsibilities" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Your Security Responsibilities">
              <RichContentList items={userResponsibilitiesItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Reporting Issues */}
          <div id="reporting-issues" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Reporting Security Issues">
              <RichContentList items={reportingItems} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Updates & Contact */}
          <div id="updates-contact" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Policy Updates">
              <p>
                We may update this security policy as practices evolve. Check periodically for updates. The &quot;Last
                Updated&quot; date shows the most recent changes.
              </p>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection className="scroll-mt-[11.2rem]" id="contact-legal" title="Contact Us">
              <p>
                Questions about privacy? <RichContentLink href="/contact">Contact us</RichContentLink>
              </p>
            </RichContentSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPolicyContent;

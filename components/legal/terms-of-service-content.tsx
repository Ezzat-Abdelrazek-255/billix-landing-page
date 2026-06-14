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
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ---------------- Content ---------------- */

const acceptableUseAllowed = [
  "Personal, educational, and professional communication with AI",
  "Creative writing and content generation",
  "Research and learning",
  "Business and productivity applications",
];

const acceptableUseProhibited = [
  "Illegal activities or violating laws",
  "Generating harmful, offensive, or inappropriate content",
  "Attempting to hack, exploit, or breach our security",
  "Excessive use that negatively impacts other users",
  "Spreading misinformation or impersonating others",
  "Infringing on intellectual property rights",
];

const usageLimits = [
  "Anonymous users: 5 messages per day",
  "Registered users: 20 messages per day",
  "Premium users: Enhanced limits based on subscription",
];

const accountResponsibilities = [
  "You may use Billix anonymously or via Google OAuth",
  "Keep your account secure and report unauthorized access",
  "You are responsible for all activity under your account",
  "Provide accurate information and keep it up to date",
];

const contentOwnership = [
  "You retain ownership of content you submit",
  "You grant us permission to process content to provide services",
  "AI-generated responses are provided to you and may not be unique",
  "You are responsible for compliance with laws and these terms",
];

const aiLimitations = [
  "AI responses may contain errors, biases, or inappropriate content",
  "Do not rely on AI for medical, legal, financial, or professional advice",
  "AI outputs do not represent Billix’s views or opinions",
  "We do not guarantee the accuracy of AI-generated content",
];

const premiumTerms = [
  "Premium subscriptions include enhanced features and higher limits",
  "Payments are processed via Polar",
  "Subscriptions are non-refundable except as required by law",
  "You may cancel at any time; access continues until period end",
];

/* ---------------- Navigation ---------------- */

const NAVIGATION = [
  { label: "Introduction", href: "#introduction" },
  { label: "Eligibility & Account", href: "#eligibility-account" },
  { label: "Acceptable Use", href: "#acceptable-use" },
  { label: "Usage Limits", href: "#usage-limits" },
  { label: "Your Content & AI", href: "#your-content-ai" },
  { label: "Subscriptions & Privacy", href: "#subscriptions-privacy" },
  { label: "Legal & Contact", href: "#legal-contact" },
];

const TermsOfServiceContent = () => {
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
              Welcome to Billix! These Terms of Service govern your use of our AI application and related services. By
              using Billix, you agree to these terms. If you do not agree, please discontinue use.
            </p>

            <p>
              <strong>AI Service Notice:</strong> You are interacting with AI systems that generate responses. AI output
              may contain inaccuracies and should not be relied upon for critical decisions without verification.
            </p>

            <RichContentSeparator />
          </div>

          {/* Eligibility & Account */}
          <div id="eligibility-account" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Eligibility">
              <p>
                You must be at least 13 years old to use Billix. If you are between 13 and 18, parental consent is
                required. We do not knowingly collect data from children under 13.
              </p>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Your Account">
              <RichContentList items={accountResponsibilities} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Acceptable Use */}
          <div id="acceptable-use" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Acceptable Use">
              <p>You may use Billix for:</p>
              <RichContentList items={acceptableUseAllowed} />

              <p className="mt-base">You may NOT use Billix for:</p>
              <RichContentList items={acceptableUseProhibited} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Usage Limits */}
          <div id="usage-limits" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Usage Limits">
              <RichContentList items={usageLimits} />
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Your Content & AI */}
          <div id="your-content-ai" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Your Content">
              <RichContentList items={contentOwnership} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="AI Limitations">
              <RichContentList items={aiLimitations} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Third-Party AI Providers">
              <p>
                Your messages may be processed by third-party AI providers including OpenAI, Anthropic, Google, Mistral,
                and others in accordance with our Privacy Policy.
              </p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Subscriptions & Privacy */}
          <div id="subscriptions-privacy" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Premium Services">
              <RichContentList items={premiumTerms} />
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Privacy">
              <p>
                Your privacy matters to us. Please review our{" "}
                <RichContentLink href="/privacy">Privacy Policy</RichContentLink> to understand how we handle your data.
              </p>
            </RichContentSection>

            <RichContentSeparator />
          </div>

          {/* Legal & Contact */}
          <div id="legal-contact" className="gap-xl flex flex-col">
            <RichContentSection className="scroll-mt-[11.2rem]" title="Termination">
              <p>
                You may stop using Billix at any time. We may suspend or terminate access for violations, illegal
                activity, or extended inactivity.
              </p>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Billix is not liable for indirect or consequential damages.
                Total liability will not exceed the amount paid in the previous twelve months.
              </p>
            </RichContentSection>

            <RichContentSeparator />

            <RichContentSection title="Dispute Resolution & Changes">
              <p>
                Please contact <RichContentLink href="mailto:support@billix.io">support@billix.io</RichContentLink>{" "}
                before legal action. We may update these terms, and continued use constitutes acceptance.
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

export default TermsOfServiceContent;

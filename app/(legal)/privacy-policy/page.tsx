import LegalHeading from "@/components/legal/legal-heading";
import PrivacyPolicyContent from "@/components/legal/privacy-policy-content";
import CtaSection from "@/components/ui/cta-section";
import FaqsSection from "@/components/ui/faqs-section";
import { FAQS } from "@/constants/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Billix collects, uses, and protects your personal data. We are committed to transparency and safeguarding your privacy.",
  openGraph: {
    title: "Privacy Policy | Billix",
    description:
      "Learn how Billix collects, uses, and protects your personal data.",
    url: "https://billix.io/privacy-policy",
  },
  alternates: {
    canonical: "https://billix.io/privacy-policy",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="privacy-policy-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem] px-(--container-px)">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <LegalHeading
              eyebrow="Your Data & Privacy"
              title="privacy-policy"
              description="We explain what information we collect, how it’s used, and the choices you have to control and protect your personal data."
            />
          </div>
        </div>
        <PrivacyPolicyContent />
      </div>
      <FaqsSection faqs={FAQS} />
      <CtaSection />
    </main>
  );
};

export default PrivacyPolicyPage;

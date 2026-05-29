import LegalHeading from "@/components/legal/legal-heading";
import SecurityPolicyContent from "@/components/legal/security-policy-content";
import CtaSection from "@/components/ui/cta-section";
import FaqsSection from "@/components/ui/faqs-section";
import { FAQS } from "@/constants/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy",
  description:
    "Learn how Billix safeguards your data with industry-standard security practices, infrastructure protections, and internal controls.",
  openGraph: {
    title: "Security Policy | Billix",
    description:
      "Learn how Billix safeguards your data with industry-standard security practices.",
    url: "https://billix.io/security-policy",
  },
  alternates: {
    canonical: "https://billix.io/security-policy",
  },
};

const SecurityPolicyPage = () => {
  return (
    <main className="security-policy-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem] px-(--container-px)">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <LegalHeading
              eyebrow="Security & Protection"
              title="Security policy"
              description="Learn how we safeguard your data through industry-standard security practices, infrastructure protections, and internal controls."
            />
          </div>
        </div>
        <SecurityPolicyContent />
      </div>
      <FaqsSection faqs={FAQS} />
      <CtaSection />
    </main>
  );
};

export default SecurityPolicyPage;

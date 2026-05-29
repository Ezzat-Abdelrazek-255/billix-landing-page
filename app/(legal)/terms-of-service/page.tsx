import LegalHeading from "@/components/legal/legal-heading";
import TermsOfServiceContent from "@/components/legal/terms-of-service-content";
import CtaSection from "@/components/ui/cta-section";
import FaqsSection from "@/components/ui/faqs-section";
import { FAQS } from "@/constants/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions for using Billix. These terms outline your rights, responsibilities, and acceptable use of our AI workspace platform.",
  openGraph: {
    title: "Terms of Service | Billix",
    description:
      "Review the terms and conditions for using the Billix AI workspace platform.",
    url: "https://billix.io/terms-of-service",
  },
  alternates: {
    canonical: "https://billix.io/terms-of-service",
  },
};

const TermsOfServicePage = () => {
  return (
    <main className="terms-of-service-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem] px-(--container-px)">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <LegalHeading
              eyebrow="Terms & Conditions"
              title="Terms of service"
              description="These terms outline your rights and responsibilities when using our services, including acceptable use and account obligations."
            />
          </div>
        </div>
        <TermsOfServiceContent />
      </div>
      <FaqsSection faqs={FAQS} />
      <CtaSection />
    </main>
  );
};

export default TermsOfServicePage;

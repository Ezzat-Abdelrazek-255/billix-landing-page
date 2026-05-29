import PricingCards from "@/components/pricing/pricing-cards";
import PricingHeading from "@/components/pricing/pricing-heading";
import { FAQPageJsonLd } from "@/components/seo/json-ld";
import FaqsSection from "@/components/ui/faqs-section";
import { FAQS } from "@/constants/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Team Size",
  description:
    "Choose the Billix plan that fits your needs. From individual users to enterprise teams — AI chat, automation, and 500+ integrations starting at $4/month.",
  openGraph: {
    title: "Pricing — Plans for Every Team Size | Billix",
    description:
      "AI chat, automation, and 500+ integrations starting at $4/month. Choose the plan that fits your needs.",
    url: "https://billix.io/pricing",
  },
  alternates: {
    canonical: "https://billix.io/pricing",
  },
};

const PricingPage = () => {
  return (
    <main className="pricing-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <FAQPageJsonLd faqs={FAQS} />
      <div className="grid-12 gap-y-[8rem] px-(--container-px)">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
          <PricingHeading />
        </div>
        <div className="col-span-12">
          <PricingCards />
        </div>
      </div>
      <FaqsSection faqs={FAQS} />
    </main>
  );
};

export default PricingPage;

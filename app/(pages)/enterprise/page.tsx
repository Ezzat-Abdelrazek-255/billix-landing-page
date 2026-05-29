import EnterpriseHeroSection from "@/components/enterprise/enterprise-hero-section";
import EnterpriseStatisticsSection from "@/components/enterprise/enterprise-statistics-section";
import EnterpriseValuesSection from "@/components/enterprise/enterprise-values-section";
import CtaSection from "@/components/ui/cta-section";
import FeaturesSection from "@/components/ui/features-section/features-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise — AI Automation at Scale for Your Organization",
  description:
    "Billix Enterprise delivers AI-powered automation, team collaboration, and advanced security for large organizations. Scale your workflows with 500+ integrations and dedicated support.",
  openGraph: {
    title: "Enterprise — AI Automation at Scale | Billix",
    description:
      "AI-powered automation, team collaboration, and advanced security for large organizations.",
    url: "https://billix.io/enterprise",
  },
  alternates: {
    canonical: "https://billix.io/enterprise",
  },
};

const EnterprisePage = () => {
  return (
    <main className="enterprise-page flex flex-col gap-(--sections-gap)">
      <div>
        <EnterpriseHeroSection />
        <EnterpriseValuesSection />
      </div>
      <FeaturesSection />
      <EnterpriseStatisticsSection />
      <CtaSection />
    </main>
  );
};

export default EnterprisePage;

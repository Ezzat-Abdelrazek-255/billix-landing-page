import CompareSection from "@/components/home/compare-section";
import HomeHeroSection from "@/components/home/hero-section/home-hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section/how-it-works-section";
import TheWorkspaceSection from "@/components/home/the-workspace-section";
import WhyUsSection from "@/components/home/why-us-section";
import CtaSection from "@/components/ui/cta-section";
import FeaturesSection from "@/components/ui/features-section/features-section";
import IntegrationsSection from "@/components/ui/integrations-section";

export default function Home() {
  return (
    <main className="home-page mx-auto flex max-w-(--max-container) flex-col gap-(--sections-gap)">
      <HomeHeroSection />
      <HowItWorksSection />
      <TheWorkspaceSection />
      <FeaturesSection />
      <WhyUsSection />
      <IntegrationsSection />
      <CompareSection />
      <CtaSection />
    </main>
  );
}

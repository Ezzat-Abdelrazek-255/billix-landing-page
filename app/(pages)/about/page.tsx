import AboutHeroSection from "@/components/about/about-hero-section";
import AboutMissionSection from "@/components/about/about-mission-section";
import AboutValuesSection from "@/components/about/about-values-section";
import AboutWhyWeExistSection from "@/components/about/about-why-we-exist-section";
import CtaSection from "@/components/ui/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Billix — Our Mission to Simplify Work with AI",
  description:
    "Billix was built with a simple belief: work shouldn't feel scattered or repetitive. Learn about our mission to create one intelligent AI workspace that listens, understands, and acts.",
  openGraph: {
    title: "About Billix — Our Mission to Simplify Work with AI",
    description:
      "Learn about our mission to create one intelligent AI workspace that listens, understands, and acts across all your apps.",
    url: "https://billix.io/about",
  },
  alternates: {
    canonical: "https://billix.io/about",
  },
};

const AboutPage = () => {
  return (
    <main className="about-page flex flex-col gap-(--sections-gap)">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutWhyWeExistSection />
      <AboutValuesSection />
      <CtaSection />
    </main>
  );
};

export default AboutPage;

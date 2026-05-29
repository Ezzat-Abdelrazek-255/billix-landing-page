import ChangelogEntries from "@/components/changelog/changelog-entries";
import ChangelogHeading from "@/components/changelog/changelog-heading";
import CtaSection from "@/components/ui/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — What's New in Billix",
  description:
    "See the latest updates, features, and improvements to Billix. We ship new capabilities weekly to help you automate more with less effort.",
  openGraph: {
    title: "Changelog — What's New in Billix",
    description:
      "See the latest updates, features, and improvements to Billix.",
    url: "https://billix.io/changelog",
  },
  alternates: {
    canonical: "https://billix.io/changelog",
  },
};

const ChangelogPage = () => {
  return (
    <main className="changelog-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem] px-(--container-px)">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <ChangelogHeading />
          </div>
        </div>
        <ChangelogEntries />
      </div>
      <CtaSection />
    </main>
  );
};

export default ChangelogPage;

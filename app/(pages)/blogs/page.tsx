import BlogCards from "@/components/blogs/blogs-cards";
import BlogsHeading from "@/components/blogs/blogs-heading";
import CtaSection from "@/components/ui/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Automation Tips, Updates & Insights",
  description:
    "Stay up to date with the latest from Billix. Read about AI automation, productivity tips, product updates, and how teams are transforming their workflows.",
  openGraph: {
    title: "Blog — AI Automation Tips, Updates & Insights | Billix",
    description:
      "Read about AI automation, productivity tips, product updates, and how teams are transforming their workflows.",
    url: "https://billix.io/blogs",
  },
  alternates: {
    canonical: "https://billix.io/blogs",
  },
};

const BlogsPage = () => {
  return (
    <main className="blogs-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem]">
        <div className="grid-12 px-(--container-px)">
          <div className="col-span-12 flex flex-col gap-[8rem] sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <BlogsHeading />
          </div>
        </div>
        <BlogCards />
      </div>
      <CtaSection />
    </main>
  );
};

export default BlogsPage;

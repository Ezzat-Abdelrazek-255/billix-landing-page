import PageHeading from "@/components/ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";

const BlogsHeading = () => {
  return (
    <div className="gap-base flex flex-col">
      <PageHeading
        eyebrow="Fresh Ideas, Every Week"
        title="The Blogs"
        description="Explore articles, guides, and deep dives designed to help you work smarter, build better systems, and stay ahead of the evolving productivity landscape."
      />
      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          Last updated
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          March 10, 2026
        </div>
      </div>
    </div>
  );
};

export default BlogsHeading;

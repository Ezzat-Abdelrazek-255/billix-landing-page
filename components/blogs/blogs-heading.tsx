import PageHeading from "@/components/ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { useTranslations } from "next-intl";

const BlogsHeading = () => {
  const t = useTranslations("blogs.heading");

  return (
    <div className="gap-base flex flex-col">
      <PageHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          {t("lastUpdatedLabel")}
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          {t("lastUpdatedDate")}
        </div>
      </div>
    </div>
  );
};

export default BlogsHeading;

import PageHeading from "../ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { useTranslations } from "next-intl";

const LegalHeading = ({
  eyebrow,
  title,
  description,
  date,
}: {
  eyebrow: string;
  title: string;
  description: string;
  date?: string;
}) => {
  const t = useTranslations("legal");

  return (
    <div className="gap-base flex flex-col">
      <PageHeading eyebrow={eyebrow} title={title} description={description} />

      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          {t("lastUpdatedLabel")}
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          {date ?? t("lastUpdatedDate")}
        </div>
      </div>
    </div>
  );
};

export default LegalHeading;

import PageHeading from "../ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { useLocale, useTranslations } from "next-intl";

const ContactHeading = () => {
  const t = useTranslations("contact");
  const locale = useLocale();

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(today);

  return (
    <div className="gap-base flex flex-col">
      <PageHeading
        eyebrow={t("heading.eyebrow")}
        title={t("heading.title")}
        description={t("heading.description")}
      />
      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          {t("heading.todaysDate")}
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default ContactHeading;

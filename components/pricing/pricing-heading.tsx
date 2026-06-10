import PageHeading from "@/components/ui/page-heading";
import { useTranslations } from "next-intl";

const PricingHeading = () => {
  const t = useTranslations("pricing");

  return (
    <PageHeading eyebrow={t("heading.eyebrow")} title={t("heading.title")} description={t("heading.description")} />
  );
};

export default PricingHeading;

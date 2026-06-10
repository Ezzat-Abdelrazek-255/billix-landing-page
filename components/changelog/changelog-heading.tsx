import PageHeading from "../ui/page-heading";
import { useTranslations } from "next-intl";

const ChangelogHeading = () => {
  const t = useTranslations("changelog.heading");

  return <PageHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />;
};

export default ChangelogHeading;

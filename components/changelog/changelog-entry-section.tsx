import ChangelogEntryImage from "./changelog-entry-image";
import ChangelogEntryLink from "./changelog-entry-link";
import ChangelogEntrySectionTitle from "./changelog-entry-section-title";
import ChangelogEntrySpacing from "./changelog-entry-spacing";
import ChangelogEntryText from "./changelog-entry-text";
import { useTranslations } from "next-intl";

interface ChangelogEntrySectionProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const ChangelogEntrySection: React.FC<ChangelogEntrySectionProps> = ({ title, description, link, imageSrc }) => {
  const t = useTranslations("changelog.entry");

  return (
    <>
      <ChangelogEntrySectionTitle>{title}</ChangelogEntrySectionTitle>
      <ChangelogEntrySpacing size="sm" />
      <ChangelogEntryText>{description}</ChangelogEntryText>
      <ChangelogEntrySpacing size="sm" />
      <ChangelogEntryLink href={link}>{t("tryItOut")}</ChangelogEntryLink>
      <ChangelogEntrySpacing size="xl" />
      <ChangelogEntryImage width={563} height={137} src={imageSrc} alt={title} />
    </>
  );
};

export default ChangelogEntrySection;

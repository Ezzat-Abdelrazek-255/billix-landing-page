import { Link } from "@/i18n/navigation";

const ChangelogEntryLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-primary text-base-sm font-sans font-medium underline">
      {children}
    </Link>
  );
};

export default ChangelogEntryLink;

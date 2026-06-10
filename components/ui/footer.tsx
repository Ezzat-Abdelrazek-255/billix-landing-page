import NextLink from "./next-link";
import InstagramIcon from "@/icons/brands/instagram-icon";
import LinkedinIcon from "@/icons/brands/linkedin-icon";
import XIcon from "@/icons/brands/x-icon";
import LogoTextIcon from "@/icons/logos/logo-text";
import { getCurrentYear } from "@/lib/utils";
import { useTranslations } from "next-intl";

const FOOTER_LINKS = {
  navigation: [
    { key: "enterprise", href: "/enterprise" },
    { key: "blogs", href: "/blogs" },
    { key: "pricing", href: "/pricing" },
    { key: "about", href: "/about" },
  ],
  resources: [
    { key: "community", href: "/" },
    { key: "blogs", href: "/blogs" },
  ],
  company: [
    { key: "changelog", href: "/changelog" },
    { key: "contact", href: "/contact" },
  ],
  legal: [
    { key: "privacyPolicy", href: "/privacy-policy" },
    { key: "termsOfService", href: "/terms-of-service" },
    { key: "securityPolicy", href: "/security-policy" },
  ],
} as const;

const SOCIAL_ICONS = [
  { Icon: XIcon, label: "X", href: "https://x.com/BillixIo" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/billix/" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/billix_io" },
];

const FooterSection = ({ title, links }: { title: string; links: ReadonlyArray<{ key: string; href: string }> }) => {
  const t = useTranslations("common.nav");

  return (
    <div className="gap-base sm:gap-xl flex flex-col">
      <h3 className="text-base-lg font-sans font-medium">{title}</h3>
      <ul className="gap-sm text-base-sm text-foreground/60 flex flex-col font-sans font-medium">
        {links.map(link => (
          <li key={link.key}>
            <NextLink data-underline-link className="hover:text-primary transition-all" href={link.href}>
              {t(link.key)}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const t = useTranslations("common.footer");

  return (
    <footer className="grid-12 gap-y-xl mt-[3.2rem] px-(--container-px) py-(--container-px) md:gap-y-[6.4rem]">
      <div className="gap-base md:gap-lg col-span-12 flex flex-col items-start sm:col-span-8 md:col-span-4">
        <LogoTextIcon className="w-[16rem]" />
        <p className="text-base-sm text-foreground/60 font-sans font-medium">{t("description")}</p>
      </div>

      <div className="gap-xl col-span-12 flex flex-col justify-between sm:flex-row md:col-span-6 md:col-start-7">
        <FooterSection title={t("sections.navigation")} links={FOOTER_LINKS.navigation} />
        <FooterSection title={t("sections.resources")} links={FOOTER_LINKS.resources} />
        <FooterSection title={t("sections.company")} links={FOOTER_LINKS.company} />
        <FooterSection title={t("sections.legal")} links={FOOTER_LINKS.legal} />
      </div>

      <div className="gap-base col-span-12 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="gap-sm flex">
          {SOCIAL_ICONS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("followAriaLabel", { network: label })}
              className="bg-background-muted rounded-2xs p-base size-[4.8rem] transition-opacity hover:opacity-70"
            >
              <Icon className="text-foreground w-full" />
            </a>
          ))}
        </div>
        <p className="font-sans text-base font-medium sm:text-right">
          {t("copyright", { year: getCurrentYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

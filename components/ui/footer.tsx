import NextLink from "./next-link";
import InstagramIcon from "@/icons/brands/instagram-icon";
import LinkedinIcon from "@/icons/brands/linkedin-icon";
import XIcon from "@/icons/brands/x-icon";
import LogoTextIcon from "@/icons/logos/logo-text";
import { getCurrentYear } from "@/lib/utils";

const FOOTER_LINKS = {
  navigation: [
    { label: "Enterprise", href: "/enterprise" },
    { label: "Blogs", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],
  resources: [
    { label: "Community", href: "/" },
    { label: "Blogs", href: "/blogs" },
  ],
  company: [
    { label: "Changelog", href: "/changelog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Security Policy", href: "/security-policy" },
  ],
};

const SOCIAL_ICONS = [
  { Icon: XIcon, label: "X", href: "https://x.com/BillixIo" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/billix/" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/billix_io" },
];

const FooterSection = ({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) => (
  <div className="gap-base sm:gap-xl flex flex-col">
    <h3 className="text-base-lg font-sans font-medium">{title}</h3>
    <ul className="gap-sm text-base-sm text-foreground/60 flex flex-col font-sans font-medium">
      {links.map(link => (
        <li key={link.label}>
          <NextLink data-underline-link className="hover:text-primary transition-all" href={link.href}>
            {link.label}
          </NextLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="grid-12 gap-y-xl mt-[3.2rem] px-(--container-px) py-(--container-px) md:gap-y-[6.4rem]">
      <div className="gap-base md:gap-lg col-span-12 flex flex-col items-start sm:col-span-8 md:col-span-4">
        <LogoTextIcon className="w-[16rem]" />
        <p className="text-base-sm text-foreground/60 font-sans font-medium">
          Billix unifies AI chat, automation, content creation, and 500+ integrations in one seamless workspace. Give
          plain-language instructions and let Billix execute real actions instantly—no setup, no tech skills required.
        </p>
      </div>

      <div className="gap-xl col-span-12 flex flex-col justify-between sm:flex-row md:col-span-6 md:col-start-7">
        <FooterSection title="Navigation" links={FOOTER_LINKS.navigation} />
        <FooterSection title="Resources" links={FOOTER_LINKS.resources} />
        <FooterSection title="Company" links={FOOTER_LINKS.company} />
        <FooterSection title="Legal" links={FOOTER_LINKS.legal} />
      </div>

      <div className="gap-base col-span-12 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="gap-sm flex">
          {SOCIAL_ICONS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Billix on ${label}`}
              className="bg-background-muted rounded-2xs p-base size-[4.8rem] transition-opacity hover:opacity-70"
            >
              <Icon className="text-foreground w-full" />
            </a>
          ))}
        </div>
        <p className="font-sans text-base font-medium sm:text-right">
          © {getCurrentYear()} Billix Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

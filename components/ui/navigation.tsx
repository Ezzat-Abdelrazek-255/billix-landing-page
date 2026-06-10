import NextLink from "./next-link";
import { MAIN_ROUTES } from "@/constants";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("common.nav");

  return (
    <nav className="font-sans font-medium">
      <ul className="gap-xl flex items-center">
        {MAIN_ROUTES.map(item => (
          <li key={item.href}>
            <NextLink data-underline-link className="hover:text-primary transition-all" href={item.href}>
              {t(item.key)}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

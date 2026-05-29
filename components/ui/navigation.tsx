import NextLink from "./next-link";
import { MAIN_ROUTES } from "@/constants";

const Navigation = () => {
  return (
    <nav className="font-sans font-medium">
      <ul className="gap-xl flex items-center">
        {MAIN_ROUTES.map(item => (
          <li key={item.href}>
            <NextLink data-underline-link className="hover:text-primary transition-all" href={item.href}>
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

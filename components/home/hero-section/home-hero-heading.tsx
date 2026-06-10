import { INTRO_DURATION, LOADER_DELAY } from "@/constants";
import { useTranslations } from "next-intl";

const HomeHeroHeading = () => {
  const t = useTranslations("home");

  return (
    <h1
      className="text-center"
      data-split-duration={INTRO_DURATION}
      data-split="heading"
      data-split-delay={LOADER_DELAY - 0.1}
    >
      <span className="h2 pb-sm block leading-none">{t("hero.heading.line1")}</span>
      <br />
      <span className="h2-serif pb-base-sm block leading-none">{t("hero.heading.line2")}</span>
    </h1>
  );
};

export default HomeHeroHeading;

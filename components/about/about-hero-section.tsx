import { useTranslations } from "next-intl";
import Eyebrow from "@/components/ui/eyebrow";
import { INTRO_DURATION, INTRO_STAGGER, LOADER_DELAY } from "@/constants";

const AboutHeroSection = () => {
  const t = useTranslations("about");

  return (
    <section className="hero-section w-full px-(--container-px) pt-[10.4rem] sm:pt-[11.2rem] md:pt-[8rem]">
      <div className="p-2xl relative z-0 flex h-[80vh] w-full items-end rounded-sm bg-red-500 bg-[url(/about-hero.jpg)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 -z-10 h-full w-full bg-black/20"></div>
        <div className="gap-xl flex flex-col items-center sm:w-3/4 sm:items-start md:w-1/2">
          <div data-reveal-group data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}>
            <Eyebrow className="text-white">{t("hero.eyebrow")}</Eyebrow>
          </div>
          <div className="gap-base flex flex-col">
            <h1
              data-split-padding-bottom="0.8rem"
              data-split="heading"
              data-split-delay={LOADER_DELAY - 0.6}
              data-split-duration={INTRO_DURATION}
              className="h1 text-center text-white sm:text-left"
            >
              {t.rich("hero.title", {
                serif: (chunks) => <span className="h1-serif">{chunks}</span>,
              })}
            </h1>
            <p
              data-split="heading"
              data-split-delay={LOADER_DELAY}
              data-split-duration={INTRO_DURATION}
              className="body-base text-center text-white/60 sm:text-left"
            >
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

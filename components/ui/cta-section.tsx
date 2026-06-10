import BubbleButton from "./bubble-button";
import DotsPattern from "./dots-pattern";
import Eyebrow from "./eyebrow";
import { APP_URL } from "@/constants";
import { useTranslations } from "next-intl";

const CtaSection = () => {
  const t = useTranslations("home");

  return (
    <div className="grid-12 relative z-0 px-(--container-px)">
      <section className="bg-foreground relative z-0 col-span-12 overflow-hidden rounded-sm">
        <DotsPattern className="opacity-20" colorVariable="--background" />

        <div className="text-background gap-xl relative z-0 flex min-h-[50rem] flex-col items-center justify-center py-[8rem] md:min-h-[63.5rem]">
          <div className="gap-base sm:gap-xl flex flex-col items-center">
            <Eyebrow animated={false}>{t("cta.eyebrow")}</Eyebrow>
            <h2 className="text-center font-sans text-[4.8rem] leading-[1] font-bold tracking-[-2%] sm:text-[6.4rem]">
              {t.rich("cta.title", {
                br: () => <br />,
                serif: chunks => <span className="font-serif font-light">{chunks}</span>,
              })}
            </h2>
          </div>
          <BubbleButton isLink href={APP_URL} target="_blank" variant="secondary">
            {t("cta.button")}
          </BubbleButton>
          <div className="text-background/60 absolute bottom-(--container-px) flex w-full items-center justify-center gap-[8rem] px-[4rem] text-sm sm:text-base">
            <p className="text-center">{t.rich("cta.badges.security", { br: () => <br /> })}</p>

            <p className="text-center">{t.rich("cta.badges.effortless", { br: () => <br /> })}</p>

            <p className="text-center">{t.rich("cta.badges.automation", { br: () => <br /> })}</p>

            <p className="text-center">{t.rich("cta.badges.sync", { br: () => <br /> })}</p>
          </div>
        </div>

        <div className="absolute top-(--container-px) flex w-full items-center justify-center px-(--container-px)">
          <div className="px-base py-2xs border-background text-background h-fit rounded-full border border-dashed font-sans font-medium">
            {t("cta.banner")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaSection;

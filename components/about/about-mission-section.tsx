import { useTranslations } from "next-intl";
import Eyebrow from "@/components/ui/eyebrow";

const AboutMissionSection = () => {
  const t = useTranslations("about");

  return (
    <section className="gap-xl flex flex-col items-center px-(--container-px)">
      <Eyebrow>{t("mission.eyebrow")}</Eyebrow>
      <div className="grid-12">
        <h2
          data-split="heading"
          className="col-span-12 text-center font-sans text-[3.2rem] leading-[1.1] font-medium tracking-tight md:col-span-8 md:col-start-3 md:text-[4.8rem]"
        >
          {t("mission.statement")}
        </h2>
      </div>
    </section>
  );
};

export default AboutMissionSection;

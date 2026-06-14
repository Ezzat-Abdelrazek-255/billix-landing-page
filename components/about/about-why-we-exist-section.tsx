import { useTranslations } from "next-intl";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import AccessibilityIcon from "@/icons/ui/accessibility-icon";
import LimitsIcon from "@/icons/ui/limits-icon";
import TeamIcon from "@/icons/ui/team-icon";
import XIcon from "@/icons/ui/x-icon";

const reasons = [
  {
    id: "complexity",
    number: "01",
    icon: XIcon,
  },
  {
    id: "teammate",
    number: "02",
    icon: TeamIcon,
  },
  {
    id: "limits",
    number: "03",
    icon: LimitsIcon,
  },
  {
    id: "accessibility",
    number: "04",
    icon: AccessibilityIcon,
  },
];

const ReasonCard = ({
  reason,
  isFirst,
  isLast,
}: {
  reason: (typeof reasons)[0];
  isFirst: boolean;
  isLast: boolean;
}) => {
  const t = useTranslations("about");
  const Icon = reason.icon;

  return (
    <div
      className={`grid-12 gap-xl border-y-foreground/20 col-span-12 py-[6.4rem] ${isFirst ? "border-y" : "border-b"} ${isLast ? "border-0" : ""}`}
    >
      <p
        data-split="heading"
        data-split-padding-bottom="0.4rem"
        className="col-span-12 font-sans text-[12.8rem] leading-[0.75] font-bold sm:col-span-4 md:col-span-3 md:text-[21.6rem]"
      >
        {reason.number}
      </p>
      <div className="gap-base col-span-12 flex flex-col sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
        <div data-reveal-group className="flex">
          <div className="border-foreground grid aspect-square h-full shrink-0 place-content-center rounded-full border border-dashed">
            <Icon />
          </div>
          <p className="bg-background-muted py-sm px-base rounded-full font-sans font-medium">
            {t(`whyWeExist.reasons.${reason.id}.title`)}
          </p>
        </div>
        <p data-split="heading" className="text-foreground/70 body-base">
          {t(`whyWeExist.reasons.${reason.id}.description`)}
        </p>
      </div>
    </div>
  );
};

const AboutWhyWeExistSection = () => {
  const t = useTranslations("about");

  return (
    <section className="grid-12 gap-xl px-(--container-px) sm:gap-y-[4.8rem]">
      <div className="gap-base sm:gap-xl col-span-12 flex flex-col sm:col-span-8 md:col-span-5">
        <Eyebrow>{t("whyWeExist.eyebrow")}</Eyebrow>
        <h2 data-split="heading" data-split-padding-bottom="0.4rem" className="h2">
          {t.rich("whyWeExist.title", {
            serif: (chunks) => <span className="h2-serif">{chunks}</span>,
          })}
        </h2>
      </div>
      <div data-reveal-group className="col-start-12 self-end justify-self-end">
        <LogoSymbolIcon className="hidden w-[7rem] md:block" />
      </div>
      <div className="grid-12 col-span-12">
        {reasons.map((reason, index) => (
          <ReasonCard key={reason.number} reason={reason} isFirst={index === 0} isLast={index === reasons.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default AboutWhyWeExistSection;

"use client";
import { Marquee } from "@/components/ui/marquee";
import { BRANDS } from "@/constants/brands";
import { useTranslations } from "next-intl";

const HowItWorksStepTwo = () => {
  const t = useTranslations("home");

  return (
    <div
      data-cursor="accent"
      className="bg-background-muted p-base relative z-0 flex h-[22.4rem] w-full flex-col justify-between overflow-hidden rounded-sm"
    >
      <p className="h2">02</p>
      <div className="gap-sm flex flex-col">
        <h3 className="h3">{t("howItWorks.step2.title")}</h3>
        <p className="text-foreground/70 w-4/5 font-sans font-medium">{t("howItWorks.step2.description")}</p>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="from-background-muted to-background-muted/0 absolute inset-0 z-10 h-full w-full bg-linear-to-t from-30% to-80%"></div>
        <div className="gap-sm absolute top-1/2 flex w-full -translate-y-1/2 flex-col">
          <Marquee>
            {[...BRANDS].map(({ label, Icon }) => (
              <div
                className="py-xs px-sm gap-base bg-background flex items-center rounded-xs font-sans text-base font-medium"
                key={label}
              >
                <Icon className="w-[1.6rem]" />
                <span>{label}</span>
              </div>
            ))}
          </Marquee>
          <Marquee reverse={true}>
            {[...BRANDS].map(({ label, Icon }) => (
              <div
                className="py-xs px-sm gap-base bg-background flex items-center rounded-xs font-sans text-base font-medium"
                key={label}
              >
                <Icon className="w-[1.6rem]" />
                <span>{label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStepTwo;

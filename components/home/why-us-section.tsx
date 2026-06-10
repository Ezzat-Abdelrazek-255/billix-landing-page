import { ComponentType, FC } from "react";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import ConnectionIcon from "@/icons/ui/connection-icon";
import GearIcon from "@/icons/ui/gear-icon";
import LampIcon from "@/icons/ui/lamp-icon";
import SparklesIcon from "@/icons/ui/sparkles-icon";
import { useTranslations } from "next-intl";

interface Feature {
  id: string;
  icon: ComponentType<{ className?: string }>;
}

const FEATURES: Feature[] = [
  {
    id: "setupFree",
    icon: GearIcon,
  },
  {
    id: "naturalLanguage",
    icon: SparklesIcon,
  },
  {
    id: "connected",
    icon: ConnectionIcon,
  },
  {
    id: "realExecution",
    icon: LampIcon,
  },
];

const FeatureItem: FC<Feature & { label: string; description: string }> = ({ icon: Icon, label, description }) => (
  <div className="gap-base border-foreground/20 pt-lg flex grid-cols-8 flex-col border-t sm:grid">
    <div data-reveal-group className="col-span-3 flex h-fit items-center">
      <div className="border-foreground grid h-[3.6rem] shrink-0 basis-[3.6rem] place-content-center rounded-full border border-dashed">
        <Icon />
      </div>
      <div className="body-base bg-background-muted text-foreground py-xs px-base rounded-full whitespace-nowrap">
        {label}
      </div>
    </div>
    <p data-split="heading" className="body-base col-span-4 col-start-5">
      {description}
    </p>
  </div>
);

const WhyUsSection = () => {
  const t = useTranslations("home");

  return (
    <section className="grid-12 px-(--container-px)">
      <div data-reveal-group className="hidden md:block">
        <LogoSymbolIcon className="text-foreground" />
      </div>
      <div className="gap-xl col-span-12 col-start-1 flex flex-col sm:gap-[6.4rem] md:col-span-8 md:col-start-5">
        <div className="gap-base sm:gap-xl flex flex-col">
          <Eyebrow>{t("whyUs.eyebrow")}</Eyebrow>
          <h2
            data-split="heading"
            className="font-sans text-[3.2rem] leading-[1.2] font-bold tracking-[-2%] sm:text-[4rem]"
          >
            {t("whyUs.heading")}
          </h2>
        </div>
        <div className="gap-xl flex w-full flex-col sm:gap-[6.4rem]">
          {FEATURES.map(feature => (
            <FeatureItem
              key={feature.id}
              {...feature}
              label={t(`whyUs.items.${feature.id}.label`)}
              description={t(`whyUs.items.${feature.id}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

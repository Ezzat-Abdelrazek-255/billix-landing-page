import { ComponentType, FC, SVGProps } from "react";
import { useTranslations } from "next-intl";
import BubbleButton from "@/components/ui/bubble-button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Eyebrow from "@/components/ui/eyebrow";
import { APP_URL } from "@/constants";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import BarriersIcon from "@/icons/ui/barriers-icon";
import EfficiencyIcon from "@/icons/ui/efficiency-icon";
import SimplicityIcon from "@/icons/ui/simplicity-icon";

interface Value {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const VALUES: Value[] = [
  {
    id: "simplicity",
    icon: SimplicityIcon,
  },
  {
    id: "efficiency",
    icon: EfficiencyIcon,
  },
  {
    id: "barriers",
    icon: BarriersIcon,
  },
];

interface ValueCardProps {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
}

const ValueCard: FC<ValueCardProps> = ({ title, icon: Icon, description }) => (
  <div className="bg-background-muted p-lg flex h-[22.4rem] w-full flex-col justify-between rounded-sm">
    <div className="flex items-center justify-between">
      <h3 className="font-sans text-[3.2rem] leading-[1.1] font-bold">{title}</h3>
      <Icon />
    </div>
    <p className="body-base text-foreground/70">{description}</p>
  </div>
);

const AboutValuesSection: FC = () => {
  const t = useTranslations("about");

  return (
    <section className="px-(--container-px)">
      <Eyebrow className="mb-[1.6rem] sm:mb-[3.2rem]">{t("values.eyebrow")}</Eyebrow>

      <div className="grid-12 gap-y-base sm:gap-y-xl mb-[3.2rem] sm:mb-[8rem]">
        <h2 data-split-padding-bottom="0.4rem" data-split="heading" className="h2 col-span-12 sm:col-span-5">
          {t.rich("values.title", {
            serif: (chunks) => <span className="h2-serif">{chunks}</span>,
          })}
        </h2>

        <div className="gap-base col-span-12 flex flex-col items-start justify-end sm:col-span-5 sm:col-start-8 md:col-span-4 md:col-start-7">
          <p data-split="heading" className="text-foreground/70 w-full font-sans text-base font-medium">
            {t("values.description")}
          </p>
          <div data-reveal-group data-animate-whole>
            <BubbleButton isLink href={APP_URL}>
              {t("values.cta")}
            </BubbleButton>
          </div>
        </div>

        <div className="col-start-12 hidden flex-col items-end justify-end md:flex">
          <LogoSymbolIcon className="w-[7rem]" fill="#212121" />
        </div>
      </div>

      {/* Desktop Grid */}
      <div data-reveal-group className="gap-base hidden grid-cols-12 md:grid">
        {VALUES.map((value: Value) => (
          <div key={value.id} className="col-span-4">
            <ValueCard
              title={t(`values.items.${value.id}.title`)}
              icon={value.icon}
              description={t(`values.items.${value.id}.description`)}
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <Carousel className="md:hidden">
        <CarouselContent className="gap-base pl-base mb-[3.2rem] flex">
          {VALUES.map((value: Value) => (
            <div key={value.id} className="shrink-0 basis-[44.8rem]">
              <ValueCard
                title={t(`values.items.${value.id}.title`)}
                icon={value.icon}
                description={t(`values.items.${value.id}.description`)}
              />
            </div>
          ))}
        </CarouselContent>

        <div className="gap-sm flex items-center justify-end">
          <CarouselPrevious className="aspect-square size-[4rem] shrink-0 rounded-full" />
          <CarouselNext className="aspect-square size-[4rem] shrink-0 rounded-full" />
        </div>
      </Carousel>
    </section>
  );
};

export default AboutValuesSection;

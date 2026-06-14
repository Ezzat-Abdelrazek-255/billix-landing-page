import { useTranslations } from "next-intl";
import BubbleButton from "@/components/ui/bubble-button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";

const STATISTICS = [
  {
    id: "productivity",
    value: "5 - 10x",
  },
  {
    id: "savings",
    value: "75 - 85%",
  },
  {
    id: "revenue",
    value: "1.3x",
  },
];

const StatisticCard = ({ value, title, description }: { value: string; title: string; description: string }) => (
  <div className="bg-background-muted p-base flex h-[22.4rem] w-full flex-col justify-between rounded-sm">
    <h3 className="h2 leading-none">{value}</h3>
    <div className="gap-sm flex flex-col">
      <h4 className="h3">{title}</h4>
      <p className="text-base-sm text-foreground/70 max-w-[35ch] font-sans font-medium">{description}</p>
    </div>
  </div>
);

const EnterpriseStatisticsSection = () => {
  const t = useTranslations("enterprise");

  return (
    <section className="px-(--container-px)">
      <Eyebrow className="mb-[1.6rem] sm:mb-[3.2rem]">{t("statistics.eyebrow")}</Eyebrow>

      <div className="grid-12 gap-y-base sm:gap-y-xl mb-[3.2rem] sm:mb-[8rem]">
        <h2 data-split="heading" className="h2 col-span-12 sm:col-span-5">
          {t.rich("statistics.title", {
            serif: (chunks) => <span className="h2-serif">{chunks}</span>,
          })}
        </h2>

        <div className="gap-base col-span-12 flex flex-col items-start justify-end sm:col-span-5 sm:col-start-8 md:col-span-4 md:col-start-7">
          <p data-split="heading" className="text-foreground/70 w-full font-sans text-base font-medium">
            {t("statistics.description")}
          </p>
          <div data-reveal-group data-animate-whole>
            <BubbleButton isLink href="/about">
              {t("statistics.cta")}
            </BubbleButton>
          </div>
        </div>

        <div data-reveal-group className="col-start-12 hidden flex-col items-end justify-end md:flex">
          <LogoSymbolIcon className="w-[7rem]" fill="#212121" />
        </div>
      </div>

      {/* Desktop Grid */}
      <div data-reveal-group className="gap-base hidden grid-cols-12 md:grid">
        {STATISTICS.map((stat, index) => (
          <div key={index} className="col-span-4">
            <StatisticCard
              value={stat.value}
              title={t(`statistics.items.${stat.id}.title`)}
              description={t(`statistics.items.${stat.id}.description`)}
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <Carousel className="md:hidden">
        <CarouselContent className="gap-base pl-base mb-[3.2rem] flex">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="shrink-0 basis-[44.8rem]">
              <StatisticCard
                value={stat.value}
                title={t(`statistics.items.${stat.id}.title`)}
                description={t(`statistics.items.${stat.id}.description`)}
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

export default EnterpriseStatisticsSection;

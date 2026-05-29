import BubbleButton from "@/components/ui/bubble-button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";

const STATISTICS = [
  {
    value: "5 - 10x",
    title: "More Productive teams",
    description:
      "Type or speak your request in natural language. Billix understands your intent and plans the workflow automatically.",
  },
  {
    value: "75 - 85%",
    title: "Savings compared to hiring",
    description:
      "Connects to 10,000+ apps — Gmail, Notion, Slack, and more. Handles tasks end-to-end with no setup, triggers, or flow diagrams.",
  },
  {
    value: "1.3x",
    title: "higher revenue per employee",
    description:
      "Track your tasks in real-time, get updates, and access everything later—fully searchable and stored for reference.",
  },
];

const StatisticCard = ({ value, title, description }: (typeof STATISTICS)[0]) => (
  <div className="bg-background-muted p-base flex h-[22.4rem] w-full flex-col justify-between rounded-sm">
    <h3 className="h2 leading-none">{value}</h3>
    <div className="gap-sm flex flex-col">
      <h4 className="h3">{title}</h4>
      <p className="text-base-sm text-foreground/60 max-w-[35ch] font-sans font-medium">{description}</p>
    </div>
  </div>
);

const EnterpriseStatisticsSection = () => {
  return (
    <section className="px-(--container-px)">
      <Eyebrow className="mb-[1.6rem] sm:mb-[3.2rem]">Statistics</Eyebrow>

      <div className="grid-12 gap-y-base sm:gap-y-xl mb-[3.2rem] sm:mb-[8rem]">
        <h2 data-split="heading" className="h2 col-span-12 sm:col-span-5">
          AI employees built to <span className="h2-serif">do work</span>, not just talk about it.
        </h2>

        <div className="gap-base col-span-12 flex flex-col items-start justify-end sm:col-span-5 sm:col-start-8 md:col-span-4 md:col-start-7">
          <p data-split="heading" className="text-foreground/60 w-full font-sans text-base font-medium">
            Expand your team&apos;s capacity and boost efficiency with AI employees that deliver measurable business
            impact
          </p>
          <div data-reveal-group data-animate-whole>
            <BubbleButton isLink href="/about">
              Discover more
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
            <StatisticCard {...stat} />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <Carousel className="md:hidden">
        <CarouselContent className="gap-base pl-base mb-[3.2rem] flex">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="shrink-0 basis-[44.8rem]">
              <StatisticCard {...stat} />
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

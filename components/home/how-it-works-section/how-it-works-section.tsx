import HowItWorksStepOne from "./how-it-works-step-one";
import HowItWorksStepThree from "./how-it-works-step-three";
import HowItWorksStepTwo from "./how-it-works-step-two";
import BubbleButton from "@/components/ui/bubble-button";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Eyebrow from "@/components/ui/eyebrow";
import LazyVisible from "@/components/ui/lazy-visible";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { useTranslations } from "next-intl";

const HowItWorksSection = () => {
  const t = useTranslations("home");

  return (
    <section className="px-(--container-px)">
      <Eyebrow className="mb-[1.6rem] sm:mb-[3.2rem]">{t("howItWorks.eyebrow")}</Eyebrow>
      <div className="grid-12 gap-y-base sm:gap-y-xl mb-[3.2rem] sm:mb-[8rem]">
        <h2 data-split="heading" className="h2 col-span-12 sm:col-span-5">
          {t.rich("howItWorks.title", { serif: chunks => <span className="h2-serif">{chunks}</span> })}
        </h2>
        <div className="gap-base col-span-12 flex flex-col items-start justify-end sm:col-span-5 sm:col-start-8 md:col-span-4 md:col-start-7">
          <p data-split="heading" className="text-foreground/70 w-full font-sans text-base font-medium">
            {t("howItWorks.description")}
          </p>
          <div data-reveal-group data-animate-whole>
            <BubbleButton isLink href="/about">
              {t("howItWorks.discoverMore")}
            </BubbleButton>
          </div>
        </div>
        <div data-reveal-group className="col-start-12 hidden flex-col items-end justify-end md:flex">
          <LogoSymbolIcon className="w-[7rem]" fill="#212121" />
        </div>
      </div>
      <div data-reveal-group className="gap-base hidden grid-cols-12 md:grid">
        <div className="col-span-4">
          <LazyVisible>
            <HowItWorksStepOne />
          </LazyVisible>
        </div>
        <div className="col-span-4">
          <LazyVisible>
            <HowItWorksStepTwo />
          </LazyVisible>
        </div>
        <div className="col-span-4">
          <LazyVisible>
            <HowItWorksStepThree />
          </LazyVisible>
        </div>
      </div>
      <Carousel className="md:hidden">
        <CarouselContent className="gap-base pl-base mb-[3.2rem] flex">
          <div className="shrink-0 basis-[44.8rem] md:col-span-4">
            <HowItWorksStepOne />
          </div>
          <div className="shrink-0 basis-[44.8rem] md:col-span-4">
            <HowItWorksStepTwo />
          </div>
          <div className="shrink-0 basis-[44.8rem] md:col-span-4">
            <HowItWorksStepThree />
          </div>
        </CarouselContent>
        <div className="gap-sm flex items-center justify-end">
          <CarouselPrevious className="aspect-square size-[4rem] shrink-0 rounded-full" />
          <CarouselNext className="aspect-square size-[4rem] shrink-0 rounded-full" />
        </div>
      </Carousel>
    </section>
  );
};

export default HowItWorksSection;

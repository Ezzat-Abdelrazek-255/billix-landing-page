"use client";

import { useRef } from "react";
import BubbleButton from "@/components/ui/bubble-button";
import Eyebrow from "@/components/ui/eyebrow";
import { INTRO_DURATION, INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EnterpriseHeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".logo__wrap", {
        yPercent: 100,
        delay: LOADER_DELAY + INTRO_STAGGER,
        ease: "primary",
        duration: INTRO_DURATION,
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <section
      ref={containerRef}
      className="grid-12 gap-base sm:gap-xl md:gap-base relative z-0 items-center overflow-hidden px-(--container-px) pt-[12.8rem] pb-[6.4rem] md:items-start md:pb-[24rem]"
    >
      <div className="gap-base sm:gap-xl col-span-12 flex flex-col items-center text-center sm:col-span-8 sm:col-start-3 md:col-span-7 md:col-start-1 md:items-start md:text-left">
        <div data-reveal-group data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}>
          <Eyebrow>Enterprise</Eyebrow>
        </div>
        <h1
          data-split="heading"
          data-split-duration={INTRO_DURATION}
          data-split-delay={LOADER_DELAY - 0.25}
          className="font-sans text-[4rem] leading-[1.1] font-bold tracking-tight sm:text-[5.6rem] md:text-[9.6rem]"
        >
          One AI platform for every team automation made{" "}
          <span className="inline-block pb-[1.2rem] font-serif font-light">simple for everyone</span>
        </h1>
      </div>
      <div className="gap-base col-span-12 flex flex-col items-center sm:col-span-8 sm:col-start-3 md:col-span-4 md:col-start-8 md:items-start">
        <p
          data-split="heading"
          data-split-duration={INTRO_DURATION}
          data-split-delay={LOADER_DELAY}
          className="body-base text-center md:text-left"
        >
          Billix replaces disconnected tools with a unified AI workspace where teams can chat, automate, create content,
          handle files, and execute cross-platform tasks — all through natural conversation. No technical experience
          needed. No flow builders. No complex setup. Just point, speak, and Billix handles the execution.
        </p>
        <div data-reveal-group data-animate-whole data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}>
          <BubbleButton isLink href="/contact">
            Contact us
          </BubbleButton>
        </div>
      </div>
      <div className="grid-12 logo__wrap absolute right-(--container-px) bottom-0 col-span-6 w-full translate-y-1/2">
        <div className="col-span-6 col-start-7">
          <LogoSymbolIcon className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;

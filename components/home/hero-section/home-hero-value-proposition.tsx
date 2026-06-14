"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_DURATION, INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { BRANDS } from "@/constants/brands";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { shouldAnimate } from "@/lib/animation";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useTranslations } from "next-intl";

gsap.registerPlugin(MotionPathPlugin);

const ICON_COMPONENTS = BRANDS.map(brand => brand.Icon);

const OFFSET_SPACING = 1 / (ICON_COMPONENTS.length * 2);

const ICONS = [...ICON_COMPONENTS, ...ICON_COMPONENTS].map((Component, index) => ({
  Component,
  offset: index * OFFSET_SPACING,
}));

// Half the icons for mobile, evenly distributed
const MOBILE_ICONS = ICON_COMPONENTS.map((Component, index) => ({
  Component,
  offset: index * (1 / ICON_COMPONENTS.length),
}));

const HomeHeroValueProposition = () => {
  const t = useTranslations("home");
  const containerRef = useRef<HTMLDivElement>(null);

  const [showCarousel, setShowCarousel] = useState(false);
  useEffect(() => {
    setShowCarousel(shouldAnimate());
  }, []);

  useGSAP(
    () => {
      if (!shouldAnimate() || !showCarousel) return;
      const tl = gsap.timeline();

      tl.from(
        ".value-proposition__carousel",
        {
          opacity: 0,
          scale: 0.9,
          y: 80,
          delay: LOADER_DELAY + INTRO_STAGGER,
          ease: "primary",
          duration: INTRO_DURATION,
        },
        0,
      );

      // Desktop animation (all icons)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 744px)", () => {
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" },
        });

        ICONS.forEach((icon, i) => {
          tl.to(
            `.ball-${i}`,
            {
              motionPath: {
                path: "#motionPath",
                align: "#motionPath",
                alignOrigin: [0.5, 0.5],
                start: icon.offset,
                end: icon.offset + 1,
              },
            },
            0, // ALL start at same time
          );
        });

        tl.duration(ICONS.length);
      });

      // Mobile animation (half icons)
      mm.add("(max-width: 743px)", () => {
        MOBILE_ICONS.forEach((_, index) => {
          gsap.to(`.ball-mobile-${index}`, {
            duration: MOBILE_ICONS.length,
            repeat: -1,
            ease: "none",
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              start: MOBILE_ICONS[index].offset,
              end: MOBILE_ICONS[index].offset + 1,
            },
          });
        });
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
      dependencies: [showCarousel],
    },
  );

  return (
    <div ref={containerRef} className="grid-12 relative z-0 font-sans font-medium md:gap-[8rem]">
      <p
        data-split="heading"
        data-split-delay={LOADER_DELAY + INTRO_STAGGER}
        className="text-foreground/70 value-proposition__text col-span-12 text-center sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4"
      >
        {t.rich("hero.valueProposition", {
          highlight: chunks => <span className="text-primary">{chunks}</span>,
        })}
      </p>

      {showCarousel && (
      <div className="md:pt-xl col-span-12 hidden w-full justify-center overflow-hidden sm:flex">
        <div className="border-foreground/20 relative flex h-[10rem] min-h-[140px] w-full justify-center border-b">
          <div className="value-proposition__carousel relative flex h-full w-full justify-center will-change-transform">
            <svg width="1440" height="316" viewBox="0 0 1440 316" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M720 0.5C918.798 0.5 1098.76 18.183 1229.01 46.7656C1294.14 61.0578 1346.81 78.0697 1383.19 96.9434C1401.38 106.38 1415.47 116.27 1425.01 126.498C1434.54 136.724 1439.5 147.258 1439.5 158C1439.5 168.742 1434.54 179.276 1425.01 189.502C1415.47 199.73 1401.38 209.62 1383.19 219.057C1346.81 237.93 1294.14 254.942 1229.01 269.234C1098.76 297.817 918.798 315.5 720 315.5C521.202 315.5 341.24 297.817 210.99 269.234C145.861 254.942 93.1893 237.93 56.8115 219.057C38.6221 209.62 24.5307 199.73 14.9932 189.502C5.45792 179.276 0.5 168.742 0.5 158C0.5 147.258 5.45792 136.724 14.9932 126.498C24.5307 116.27 38.6221 106.38 56.8115 96.9434C93.1893 78.0697 145.861 61.0578 210.99 46.7656C341.24 18.183 521.202 0.5 720 0.5Z"
                className="stroke-foreground/20"
                id="motionPath"
              />
            </svg>

            {/* Desktop icons (all) */}
            {ICONS.map(({ Component }, index) => (
              <div
                key={`desktop-${index}`}
                className={`ball-${index} border-foreground/10 absolute top-0 left-0 z-10 hidden size-[5.6rem] place-content-center rounded-full border bg-white shadow-md will-change-transform md:grid`}
              >
                <Component className="text-black" />
              </div>
            ))}

            {/* Mobile icons (half) */}
            {MOBILE_ICONS.map(({ Component }, index) => (
              <div
                key={`mobile-${index}`}
                className={`ball-mobile-${index} border-foreground/10 absolute top-0 left-0 z-10 grid size-[5.6rem] place-content-center rounded-full border bg-white shadow-md will-change-transform md:hidden`}
              >
                <Component className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default HomeHeroValueProposition;

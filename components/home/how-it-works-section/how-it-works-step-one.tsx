"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

const HowItWorksStepOne: React.FC = () => {
  const t = useTranslations("home");
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  const originalText: string = t("howItWorks.step1.typingInitial");
  const hoverText: string = t("howItWorks.step1.typingHover");

  useEffect(() => {
    const container = containerRef.current;

    const typewriterEffect = (targetText: string, onComplete?: () => void): gsap.core.Timeline | undefined => {
      if (!textRef.current) return;

      // Kill existing animation and reset flag
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      isAnimatingRef.current = true;

      const currentText: string = textRef.current.textContent || "";
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          if (onComplete) onComplete();
        },
      });

      // Delete current text
      const deleteChars: number = currentText.length;
      for (let i = deleteChars; i > 0; i--) {
        tl.to(
          {},
          {
            duration: 0.03,
            onStart: () => {
              if (textRef.current) {
                textRef.current.textContent = currentText.substring(0, i - 1);
              }
            },
          },
        );
      }

      // Type new text
      for (let i = 1; i <= targetText.length; i++) {
        tl.to(
          {},
          {
            duration: 0.05,
            onStart: () => {
              if (textRef.current) {
                textRef.current.textContent = targetText.substring(0, i);
              }
            },
          },
        );
      }

      timelineRef.current = tl;
      return tl;
    };

    const handleMouseEnter = (): void => {
      typewriterEffect(hoverText);
    };

    const handleMouseLeave = (): void => {
      typewriterEffect(originalText);
    };

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      data-cursor="accent"
      ref={containerRef}
      className="bg-background-muted p-base group relative z-0 flex h-[22.4rem] w-full flex-col justify-between overflow-hidden rounded-sm"
    >
      <p className="h2">01</p>
      <div className="gap-sm flex flex-col">
        <h3 className="h3">{t("howItWorks.step1.title")}</h3>
        <p className="text-foreground/60 w-4/5 font-sans font-medium">{t("howItWorks.step1.description")}</p>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="from-background-muted to-background-muted/0 absolute inset-0 z-10 h-full w-full bg-linear-to-t from-30% to-60%"></div>
        <div className="bg-background border-foreground/10 p-base text-foreground/60 ease-primary absolute top-1/2 -right-1/2 h-[15rem] w-full origin-bottom -translate-y-1/2 rounded-sm border font-sans text-base font-medium shadow-md duration-700 group-hover:-translate-y-[55%] group-hover:scale-105">
          <span ref={textRef}>{originalText}</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStepOne;

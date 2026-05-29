"use client";

import { useEffect, useRef, useState } from "react";
import PricingCard from "./pricing-card";
import PricingCardHorizontal from "./pricing-card-horizontal";
import { CHAT_URL, INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import type { PricingPlan } from "@/types";

const PricingCards = () => {
  const [isAnnually, setIsAnnualy] = useState(false);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch(`${CHAT_URL}/api/pricing`)
      .then((res) => res.json())
      .then((data) => {
        setPlans(data.plans);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const animateRipple = (button: HTMLButtonElement | null, scale: 0 | 1, transformOrigin: "right" | "left") => {
    if (!button) return;

    const bg = button.querySelector<HTMLSpanElement>(".btn__bg");
    if (!bg) return;

    gsap.killTweensOf(bg);

    const duration = 1;
    const ease = "power2.out";

    gsap.fromTo(
      bg,
      {
        scale: scale === 1 ? 0 : 1,
        transformOrigin,
      },
      {
        scale,
        duration,
        ease,
      },
    );
  };

  const handleMonthlyClick = () => {
    if (!isAnnually) return;

    setIsAnnualy(false);

    animateRipple(monthlyRef.current, 1, "right");
    animateRipple(annualRef.current, 0, "left");
  };

  const handleAnnualClick = () => {
    if (isAnnually) return;

    setIsAnnualy(true);

    animateRipple(annualRef.current, 1, "left");
    animateRipple(monthlyRef.current, 0, "right");
  };

  return (
    <div className="gap-xl flex flex-col">
      <div data-reveal-group data-reveal-delay={LOADER_DELAY + INTRO_STAGGER} className="flex w-full justify-center">
        {/* Monthly */}
        <div>
          <button
            ref={monthlyRef}
            onClick={handleMonthlyClick}
            className={cn(
              "border-foreground px-base py-sm ease-out-quad text-base-sm relative z-0 cursor-pointer overflow-hidden rounded-full border border-dashed font-sans leading-none font-medium transition-transform duration-700",
            )}
          >
            <div className="relative z-0 overflow-hidden">
              <span
                className={cn(
                  "text-background ease-out-quad inline-block duration-500",
                  isAnnually && "-translate-y-[150%]",
                )}
              >
                Monthly
              </span>
              <span
                className={cn(
                  "text-foreground ease-out-quad absolute top-1/2 left-1/2 -translate-1/2 translate-y-[150%] duration-500",
                  isAnnually && "-translate-y-1/2",
                )}
              >
                Monthly
              </span>
            </div>
            <span className="btn__bg bg-foreground absolute top-1/2 left-1/2 -z-10 block aspect-square w-[150%] -translate-1/2 rounded-full" />
          </button>
        </div>

        {/* Annually */}
        <div>
          <button
            ref={annualRef}
            onClick={handleAnnualClick}
            className={cn(
              "border-foreground px-base py-sm text-base-sm relative z-0 cursor-pointer rounded-full border border-dashed font-sans leading-none font-medium",
            )}
          >
            <div className="relative z-0 overflow-hidden">
              <span
                className={cn(
                  "text-background ease-out-quad inline-block duration-500",
                  !isAnnually && "-translate-y-[150%]",
                )}
              >
                Annually
              </span>
              <span
                className={cn(
                  "text-foreground ease-out-quad absolute top-1/2 left-1/2 -translate-1/2 translate-y-[150%] duration-500",
                  !isAnnually && "-translate-y-1/2",
                )}
              >
                Annually
              </span>
            </div>

            <span className="px-base-sm py-xs bg-primary absolute top-[-2rem] -right-[5.2rem] rounded-full font-sans text-sm font-medium whitespace-nowrap text-white">
              Save 10%
            </span>

            <span className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-full">
              <span className="bg-foreground btn__bg ease-primary absolute top-1/2 left-1/2 -z-10 block aspect-square w-[150%] -translate-1/2 scale-0 rounded-full"></span>
            </span>
          </button>
        </div>
      </div>

      <div data-reveal-delay={LOADER_DELAY + INTRO_STAGGER} data-reveal-group className="gap-base flex flex-col">
        <div className="grid-12 gap-base">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-background-muted col-span-12 animate-pulse rounded-sm p-[4rem] sm:col-span-8 sm:col-start-3 md:col-span-4 md:col-start-auto"
                >
                  <div className="flex flex-col gap-[2rem]">
                    <div className="bg-foreground/10 h-[4.4rem] w-[4.4rem] rounded-full" />
                    <div className="bg-foreground/10 h-[2.4rem] w-[60%] rounded" />
                    <div className="bg-foreground/10 h-[4.8rem] w-[40%] rounded" />
                    <div className="bg-foreground/10 h-[1px] w-full" />
                    <div className="bg-foreground/10 h-[1.6rem] w-full rounded" />
                    <div className="bg-foreground/10 h-[1.6rem] w-[80%] rounded" />
                    <div className="bg-foreground/10 h-[4.8rem] w-full rounded-full" />
                    <div className="flex flex-col gap-[1rem]">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div key={j} className="bg-foreground/10 h-[1.4rem] w-[70%] rounded" />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : plans
                .filter((plan) => plan.tier !== "max")
                .map((plan) => (
                  <div
                    key={plan.tier}
                    className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-4 md:col-start-auto"
                  >
                    <PricingCard
                      isAnnually={isAnnually}
                      variant={plan.badge === "Most Popular" ? "secondary" : "primary"}
                      plan={plan}
                    />
                  </div>
                ))}
        </div>

        {/* Max Plan — Horizontal */}
        {loading ? (
          <div className="bg-background-muted animate-pulse rounded-sm p-[4rem]">
            <div className="flex flex-col gap-[2rem] md:flex-row md:items-center md:gap-[4rem]">
              <div className="flex flex-col gap-[1.2rem] md:w-[28rem]">
                <div className="bg-foreground/10 h-[4.4rem] w-[4.4rem] rounded-full" />
                <div className="bg-foreground/10 h-[2.4rem] w-[60%] rounded" />
                <div className="bg-foreground/10 h-[4.8rem] w-[50%] rounded" />
              </div>
              <div className="bg-foreground/10 h-[1px] w-full md:h-[12rem] md:w-[1px]" />
              <div className="flex flex-1 flex-col gap-[1rem]">
                <div className="bg-foreground/10 h-[1.6rem] w-full rounded" />
                <div className="bg-foreground/10 h-[1.6rem] w-[80%] rounded" />
                <div className="grid grid-cols-2 gap-[1rem]">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="bg-foreground/10 h-[1.4rem] w-[70%] rounded" />
                  ))}
                </div>
              </div>
              <div className="md:w-[20rem]">
                <div className="bg-foreground/10 h-[4.8rem] w-full rounded-full" />
              </div>
            </div>
          </div>
        ) : (
          plans
            .filter((plan) => plan.tier === "max")
            .map((plan) => (
              <PricingCardHorizontal key={plan.tier} plan={plan} isAnnually={isAnnually} />
            ))
        )}
      </div>
    </div>
  );
};

export default PricingCards;

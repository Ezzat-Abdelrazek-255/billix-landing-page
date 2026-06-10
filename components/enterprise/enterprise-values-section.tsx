"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import DotsPattern from "@/components/ui/dots-pattern";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FeatureCircleProps {
  label: string;
  position: string;
  textOffset: string;
  size: string;
}

interface TimelinePointProps {
  label: string;
  left: string;
}

const FEATURES: Array<Omit<FeatureCircleProps, "label"> & { id: string }> = [
  {
    id: "sync",
    position: `right-0 translate-x-[50vw] -translate-y-1/2 top-1/2`,
    textOffset: "mr-[30vw]",
    size: "h-[90vw]",
  },
  {
    id: "effortless",
    position: "top-1/2 right-0 -translate-x-[30vw] -translate-y-1/2",
    textOffset: "ml-[2vw]",
    size: "h-[45vw]",
  },
  {
    id: "automation",
    position: "top-1/2 right-0 -translate-x-[65vw] -translate-y-1/2 md:block hidden",
    textOffset: "mr-[10vw]",
    size: "h-[30vw]",
  },
];

const TIMELINE_POINTS: Array<Omit<TimelinePointProps, "label"> & { id: string }> = [
  { id: "automations", left: "left-(--container-px)" },
  { id: "models", left: "left-[70rem]" },
  { id: "workspaces", left: "left-[120rem]" },
];

const FeatureCircle: React.FC<FeatureCircleProps> = ({ label, position, textOffset, size }) => (
  <div
    className={`absolute grid aspect-square ${size} ${position} place-content-center rounded-full border-2 border-dashed border-white`}
  >
    <p
      data-split="heading"
      className={`md:text-base-lg ${textOffset} max-w-[15ch] text-center font-sans leading-[1.1] font-medium whitespace-pre-line`}
    >
      {label}
    </p>
  </div>
);

const TimelinePoint: React.FC<TimelinePointProps> = ({ label, left }) => (
  <div
    className={`text-secondary timeline__point gap-sm absolute -top-[5rem] opacity-0 ${left} flex flex-col items-center`}
  >
    <p
      data-split="heading"
      className="max-w-[10ch] text-center font-sans leading-[1.1] font-medium whitespace-pre-line"
    >
      {label}
    </p>
    <div className="bg-secondary size-[1.2rem] rounded-full"></div>
  </div>
);

const EnterpriseValuesSection: React.FC = () => {
  const t = useTranslations("enterprise");
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "primary",
          duration: 1,
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      tl.to(".timeline__wrap", {
        scaleX: 1,
      }).to(".timeline__point", {
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
        duration: 0.3,
      });
    },
    {
      scope: containerRef,
    },
  );
  return (
    <section
      ref={containerRef}
      className="bg-primary grid-12 relative z-0 min-h-screen overflow-hidden px-(--container-px) py-(--container-px) text-white"
    >
      <DotsPattern colorVariable="--white" />

      <div className="col-span-12 flex flex-col justify-between sm:col-span-8 md:col-span-6">
        <div className="gap-xl flex flex-col">
          <Eyebrow logoClassName="text-secondary">{t("values.eyebrow")}</Eyebrow>
          <h2 data-split="heading" className="h2">
            {t.rich("values.title", {
              serif: (chunks) => <span className="h2-serif">{chunks}</span>,
            })}
          </h2>
        </div>

        <div className="gap-2xl flex flex-col">
          <p data-split="heading" className="body-base text-white/60">
            {t("values.description")}
          </p>
          <p data-split="heading" className="font-sans text-[3.2rem] font-bold tracking-tight capitalize">
            {t("values.tagline")}
          </p>
        </div>
      </div>

      <div data-reveal-group className="absolute right-(--container-px) bottom-(--container-px) hidden md:block">
        <LogoSymbolIcon />
      </div>

      <div className="absolute inset-0 z-0 h-full w-full">
        {FEATURES.map(({ id, ...feature }, idx) => (
          <FeatureCircle key={idx} label={t(`values.features.${id}`)} {...feature} />
        ))}

        <div className="timeline__wrap absolute top-2/5 w-full origin-left scale-x-0 border border-white">
          {TIMELINE_POINTS.map(({ id, ...point }, idx) => (
            <TimelinePoint key={idx} label={t(`values.timeline.${id}`)} {...point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseValuesSection;

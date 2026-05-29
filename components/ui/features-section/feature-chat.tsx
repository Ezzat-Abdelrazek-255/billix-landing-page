"use client";

import { useRef } from "react";
import Image from "next/image";
import DotsPattern from "../dots-pattern";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import LampIcon from "@/icons/ui/lamp-icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeatureChat = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: "primary",
          duration: 0.735,
        },
      });
      const loopTl = gsap.timeline({ repeat: -1 });

      loopTl.to(".typing-dot", {
        y: -6,
        duration: 0.6,
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        },
        ease: "power2.inOut",
      });

      tl.to(".chat-box", {
        height: "10rem",
        width: "85%",
        ease: "primary",
        duration: 0.8,
      });

      tl.to(
        ".typing-dot",
        {
          y: -8,
          opacity: 0,
        },
        "<",
      );

      tl.to(
        ".chat-box-text",
        {
          y: "0",
          opacity: 1,
          stagger: 0.1,
        },
        "<+=0.4",
      );

      if (container) {
        container.addEventListener("mouseenter", () => tl.timeScale(1).play());
        container.addEventListener("mouseleave", () => tl.timeScale(1.5).reverse());
      }
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div
      ref={containerRef}
      className="bg-background-muted p-lg relative z-0 flex h-full w-full flex-col gap-[3.2rem] overflow-hidden rounded-sm"
    >
      <DotsPattern />
      <div className="gap-sm flex flex-col items-center text-center">
        <h3 className="h3-serif bg-background-muted w-fit">Chat-Native Automation</h3>
        <p className="body-base-sm text-primary">
          Type or speak your request. Billix understands your goal and starts executing immediately. No setup, no
          diagrams, no steps.
        </p>
      </div>
      <div className="gap-lg flex grow flex-col justify-start">
        <div className="gap-base flex items-end">
          <div className="text-primary border-primary p-base bg-background-muted rounded-sm border border-dashed font-sans font-medium">
            Create a task in Notion from this message and assign it to me for tomorrow
          </div>
          <div className="h-[4.8rem] shrink-0 basis-[4.8rem] rounded-full">
            <Image src="/avatar.png" className="h-full w-full object-cover" alt="Avatar" width={48} height={48} />
          </div>
        </div>
        <div className="gap-lg flex flex-col">
          <div className="gap-sm flex flex-col">
            <div className="gap-sm flex items-center">
              <div className="p-sm border-primary grid size-[3.2rem] place-content-center rounded-full border border-dashed">
                <LampIcon className="w-full" />
              </div>
              <p className="font-sans font-medium">Extracting the task details</p>
            </div>
            <div className="gap-sm flex items-center">
              <div className="p-sm border-primary grid size-[3.2rem] place-content-center rounded-full border border-dashed">
                <LampIcon className="w-full" />
              </div>
              <p className="font-sans font-medium">Creating a new Notion Item</p>
            </div>
            <div className="gap-sm flex items-center">
              <div className="p-sm border-primary grid size-[3.2rem] place-content-center rounded-full border border-dashed">
                <LampIcon className="w-full" />
              </div>
              <p className="font-sans font-medium">Assigning it to your for tomorrow</p>
            </div>
          </div>
          <div className="gap-base flex items-start">
            <div className="relative h-full w-[4.8rem]">
              <div className="bg-primary-dark p-sm absolute top-0 grid size-[4.8rem] shrink-0 place-content-center rounded-full">
                <LogoSymbolIcon className="w-full" />
              </div>
            </div>
            <div className="chat-box border-primary bg-background-muted h-[5.2rem] w-1/5 origin-top-left rounded-full rounded-sm border border-dashed p-[3px]">
              <div className="bg-primary-dark text-background gap-xs p-base relative flex h-full w-full items-center justify-center rounded-[0.7rem] text-center text-[5.6rem]">
                <p className="px-base-lg absolute top-1/2 left-0 -translate-y-1/2 text-left font-sans text-base font-medium whitespace-nowrap text-white opacity-100">
                  <span className="block overflow-hidden">
                    <span className="chat-box-text block translate-y-[110%]">Task created in Notion and scheduled</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="chat-box-text block translate-y-[110%]">for tomorrow</span>
                  </span>
                </p>
                <div className="gap-xs absolute top-1/2 left-1/2 flex -translate-1/2 items-center">
                  <span className="typing-dot bg-primary size-[0.8rem] rounded-full"></span>
                  <span className="typing-dot bg-primary size-[0.8rem] rounded-full"></span>
                  <span className="typing-dot bg-primary size-[0.8rem] rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureChat;

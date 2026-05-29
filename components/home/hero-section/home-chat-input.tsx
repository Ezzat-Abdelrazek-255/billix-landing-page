"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DirectionalButton from "@/components/ui/directional-button";
import { Textarea } from "@/components/ui/textarea";
import { APP_URL, INTRO_DURATION, LOADER_DELAY } from "@/constants";
import CodeIcon from "@/icons/ui/code-icon";
import GraduationIcon from "@/icons/ui/graduation-icon";
import HotCoffeeIcon from "@/icons/ui/hot-coffee-icon";
import LampIcon from "@/icons/ui/lamp-icon";
import PenIcon from "@/icons/ui/pen-icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";

const QUICK_ACTIONS = [
  {
    label: "Summary",
    icon: PenIcon,
    value:
      "Can you give me a clear and concise summary of the following content? Feel free to highlight the key points and main idea.",
  },
  {
    label: "Learn",
    icon: GraduationIcon,
    value:
      "Teach me this topic in a simple and understandable way. Break it down step-by-step and include any examples or analogies that will help me learn it better.",
  },
  {
    label: "Code",
    icon: CodeIcon,
    value:
      "I need help writing or understanding some code. Please provide a clean, efficient solution and explain how it works.",
  },
  {
    label: "Life stuff",
    icon: HotCoffeeIcon,
    value:
      "I need some advice or guidance about something personal or practical. Please give me a thoughtful and supportive response.",
  },
  {
    label: "Billix choice",
    icon: LampIcon,
    value:
      "Pick something interesting or helpful for me—anything you think would be useful, insightful, or fun to explore.",
  },
];

const HomeChatInput = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 80,
        opacity: 0,
        delay: LOADER_DELAY,
        ease: "primary",
        duration: INTRO_DURATION,
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="grid-12">
        <div className="gap-sm relative z-0 col-span-12 flex flex-col items-center sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
          <div className="relative z-0 h-[12.6rem] w-full">
            <Textarea
              placeholder="Tell me what you need — I’ll take care of it."
              className="h-full w-full"
              value={textAreaValue}
              onChange={e => setTextAreaValue(e.target.value)}
            />
            {/* Hover Animations and sync those different buttons with the main Button component */}
            <Button
              disabled={!textAreaValue}
              aria-label="Submit"
              className="text-background disabled:bg-foreground/50 group absolute right-[1.6rem] bottom-[1.6rem] z-0 size-[3.2rem] rounded-full"
            >
              <Link
                href={APP_URL}
                target="_blank"
                className="bg-secondary ease-primary absolute z-10 grid h-full w-full origin-bottom scale-0 place-content-center rounded-full duration-700 group-hover:scale-100"
              >
                <ArrowUp className="h-[1.6rem] text-black" />
              </Link>
              <Link
                href={APP_URL}
                target="_blank"
                className="bg-primary ease-primary grid h-full w-full origin-top place-content-center rounded-full duration-700 group-hover:scale-0"
              >
                <ArrowUp className="h-[1.6rem] text-white" />
              </Link>
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="gap-sm flex w-full flex-wrap items-center justify-center sm:flex-nowrap">
            {QUICK_ACTIONS.map(action => {
              const Icon = action.icon;
              return (
                <DirectionalButton
                  type="button"
                  key={action.label}
                  onClick={() => setTextAreaValue(action.value)}
                  className="gap-sm px-base-sm py-sm border-foreground/20 text-foreground/60 bg-background flex cursor-pointer items-center rounded-full border font-sans text-base font-medium"
                >
                  <div className="gap-sm flex items-center">
                    <Icon />
                    <span>{action.label}</span>
                  </div>
                </DirectionalButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChatInput;

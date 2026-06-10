"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import DirectionalButton from "@/components/ui/directional-button";
import { Textarea } from "@/components/ui/textarea";
import { APP_URL, INTRO_DURATION, LOADER_DELAY } from "@/constants";
import CodeIcon from "@/icons/ui/code-icon";
import GraduationIcon from "@/icons/ui/graduation-icon";
import HotCoffeeIcon from "@/icons/ui/hot-coffee-icon";
import LampIcon from "@/icons/ui/lamp-icon";
import PenIcon from "@/icons/ui/pen-icon";
import { Link } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

const QUICK_ACTIONS = [
  { id: "summary", icon: PenIcon },
  { id: "learn", icon: GraduationIcon },
  { id: "code", icon: CodeIcon },
  { id: "lifeStuff", icon: HotCoffeeIcon },
  { id: "billixChoice", icon: LampIcon },
] as const;

const HomeChatInput = () => {
  const t = useTranslations("home");
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
              placeholder={t("hero.chat.placeholder")}
              className="h-full w-full"
              value={textAreaValue}
              onChange={e => setTextAreaValue(e.target.value)}
            />
            {/* Hover Animations and sync those different buttons with the main Button component */}
            <Button
              disabled={!textAreaValue}
              aria-label={t("hero.chat.submitAriaLabel")}
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
                  key={action.id}
                  onClick={() => setTextAreaValue(t(`hero.chat.quickActions.${action.id}.value`))}
                  className="gap-sm px-base-sm py-sm border-foreground/20 text-foreground/60 bg-background flex cursor-pointer items-center rounded-full border font-sans text-base font-medium"
                >
                  <div className="gap-sm flex items-center">
                    <Icon />
                    <span>{t(`hero.chat.quickActions.${action.id}.label`)}</span>
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

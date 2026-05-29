"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BubbleButton from "./bubble-button";
import DirectionalButton from "./directional-button";
import Navigation from "./navigation";
import NextLink from "./next-link";
import ThemeSelector from "./theme-selector";
import { APP_URL, INTRO_DURATION, INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import LogoTextIcon from "@/icons/logos/logo-text";
import { vhToPx } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "body",
            start: `${vhToPx(10)} ${vhToPx(5)}`,
            toggleActions: "play none none reverse",
          },
        })
        .to(".header__inner_wrap", {
          opacity: 1,
          y: "-100%",
          ease: "primary",
          duration: 0.735,
          transformOrigin: "center",
        });

      const introMultiplier = path === "?" ? 4 : 2;

      gsap.from(".header__inner_wrap", {
        height: 0,
        delay: LOADER_DELAY + INTRO_STAGGER * introMultiplier,
        ease: "primary",
        duration: INTRO_DURATION,
      });
    },
    { dependencies: [path] },
  );

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <header className="pointer-events-auto fixed top-0 left-0 h-(--header-height) w-full px-(--container-px)">
        <div className="header__inner_wrap relative z-0 block flex h-full origin-top items-center justify-between overflow-hidden">
          <NextLink href="/">
            <LogoTextIcon />
          </NextLink>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Navigation />
          </div>
          <div className="gap-sm flex items-center">
            <DirectionalButton asChild>
              <NextLink href="/contact">Contact us</NextLink>
            </DirectionalButton>
            <BubbleButton isLink href={APP_URL} target="_blank">
              Start for free
            </BubbleButton>
            <ThemeSelector />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

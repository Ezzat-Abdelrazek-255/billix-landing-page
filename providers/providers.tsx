"use client";

import { useEffect, useState } from "react";
import AnimationsProvider from "./animations-provider";
import { ThemeProvider } from "./theme-provider";
import { shouldAnimate } from "@/lib/animation";
import dynamic from "next/dynamic";

// Desktop-only chrome — load as separate client chunks so the lib code stays
// out of the initial bundle that hydrates on mobile (where they never render).
const ReactLenis = dynamic(() => import("lenis/react").then(m => m.default ?? m.ReactLenis), { ssr: false });
const CustomCursor = dynamic(() => import("@/icons/ui/custom-cursor"), { ssr: false });

const Providers = ({ children }: { children?: React.ReactNode }) => {
  // Lenis smooth-scroll and the custom cursor are desktop-only: on touch
  // devices they add main-thread cost and hurt INP for no benefit. Decided
  // after mount to avoid SSR/hydration mismatch.
  const [richMotion, setRichMotion] = useState(false);

  useEffect(() => {
    setRichMotion(shouldAnimate());
  }, []);

  return (
    <>
      {richMotion && <ReactLenis root />}
      <ThemeProvider>{children}</ThemeProvider>
      <AnimationsProvider />
      {richMotion && <CustomCursor />}
    </>
  );
};

export default Providers;

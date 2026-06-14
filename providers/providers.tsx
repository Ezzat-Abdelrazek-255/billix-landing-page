"use client";

import { useEffect, useState } from "react";
import AnimationsProvider from "./animations-provider";
import { ThemeProvider } from "./theme-provider";
import CustomCursor from "@/icons/ui/custom-cursor";
import { shouldAnimate } from "@/lib/animation";
import ReactLenis from "lenis/react";

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

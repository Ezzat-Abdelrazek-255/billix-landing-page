"use client";

import { useEffect, useState } from "react";
import AnimationsProvider from "./animations-provider";
import { ThemeProvider } from "./theme-provider";
import { shouldAnimate } from "@/lib/animation";
import dynamic from "next/dynamic";

const ReactLenis = dynamic(() => import("lenis/react").then(m => m.default ?? m.ReactLenis), { ssr: false });
const CustomCursor = dynamic(() => import("@/icons/ui/custom-cursor"), { ssr: false });

const Providers = ({ children }: { children?: React.ReactNode }) => {
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

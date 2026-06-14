"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Mounts its children only once they scroll near the viewport. Use to keep
 * heavy, purely-visual client code (physics, video) out of the initial
 * hydration path so it doesn't weigh on first-load LCP. Not for content that
 * needs to be in the SSR HTML for SEO.
 */
const LazyVisible = ({
  children,
  className,
  rootMargin = "400px",
}: {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
};

export default LazyVisible;

/**
 * Single source of truth for "should we run rich, main-thread-heavy motion?".
 *
 * Returns false on touch / small-viewport devices and when the user prefers
 * reduced motion. Used to gate GSAP SplitText/ScrollTrigger reveals, the
 * preloader, Lenis smooth-scroll, the custom cursor, and the Matter.js
 * physics so mobile serves fast, static, SSR content (better Core Web Vitals)
 * while desktop keeps the full animated experience.
 */
export const DESKTOP_MIN_WIDTH = 1024;

export function shouldAnimate(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;
}

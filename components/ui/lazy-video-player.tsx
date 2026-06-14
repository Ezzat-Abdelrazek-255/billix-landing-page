"use client";

import dynamic from "next/dynamic";
import LazyVisible from "./lazy-visible";

// Load the video player (and its controls JS) only once it scrolls near the
// viewport, so it stays out of the initial hydration path the LCP is measured
// against. Below the fold + no indexable text, so no SSR/SEO cost.
const VideoPlayer = dynamic(() => import("./video-player"), {
  ssr: false,
  loading: () => <div className="bg-foreground h-full w-full" />,
});

const LazyVideoPlayer = ({ src, className }: { src: string; className?: string }) => (
  <LazyVisible className="h-full w-full">
    <VideoPlayer src={src} className={className} />
  </LazyVisible>
);

export default LazyVideoPlayer;

"use client";

import dynamic from "next/dynamic";
import LazyVisible from "./lazy-visible";

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

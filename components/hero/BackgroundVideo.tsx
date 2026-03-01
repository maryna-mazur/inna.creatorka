"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-1 pointer-events-none overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        src="/hero-bg-ios.mp4"
        poster="/hero-poster.jpg"
      />
    </div>
  );
}

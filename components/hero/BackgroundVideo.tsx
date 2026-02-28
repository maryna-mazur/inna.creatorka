"use client";

import { useRef, useEffect } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
          document.removeEventListener("scroll", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
        document.addEventListener("scroll", resume, { once: true });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover md:object-center"
      >
        <source src="/hero-bg.MP4" type="video/mp4" />
      </video>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { BlurLayer, BlurLayerProps } from "@/components/express/BlurLayer";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

const horizontalBlurLayers: Omit<BlurLayerProps, "direction">[] = [
  { blur: 1, mask: "transparent 38%, black 46%, black 100%" },
  { blur: 3, mask: "transparent 42%, black 50%, black 100%" },
  { blur: 8, mask: "transparent 46%, black 54%, black 100%" },
];

const verticalBlurLayers: Omit<BlurLayerProps, "direction">[] = [
  { blur: 2, mask: "transparent 35%, black 46%, black 54%, transparent 62%" },
  { blur: 6, mask: "transparent 44%, black 56%, black 100%" },
];

export default function ExpressBg() {
  const isHorizontal = useIsHorizontalLayout();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch((error) => {
        console.warn("Express video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className={`absolute top-0 left-0 overflow-hidden ${
          isHorizontal ? "h-full w-[58%]" : "w-full h-[60%]"
        }`}
      >
        <video
          ref={videoRef}
          src="/express/bg.MP4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ transform: "scaleX(-1)", objectPosition: "center 30%" }}
        />
      </div>

      {isHorizontal ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 25%, rgba(255,253,245,0.2) 33%, rgba(255,253,245,0.45) 39%, rgba(255,253,245,0.7) 44%, rgba(255,253,245,0.9) 48%, #fffdf5 52%)",
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 15%, rgba(255,253,245,0.3) 28%, rgba(255,253,245,0.7) 40%, #fffdf5 52%)",
          }}
        />
      )}

      {isHorizontal
        ? horizontalBlurLayers.map((layer, i) => (
            <BlurLayer key={i} {...layer} direction="horizontal" />
          ))
        : verticalBlurLayers.map((layer, i) => (
            <BlurLayer key={i} {...layer} direction="vertical" />
          ))}
    </div>
  );
}
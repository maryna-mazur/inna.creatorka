"use client";

import { useRef } from "react";
import Image from "next/image";

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        className="w-full h-full object-cover"
      >
        <source src="/hero-bg-ios.mp4" type="video/mp4" />
      </video>
      {/*      <Image
        src="/bg-2.gif"
        alt=""
        fill
        unoptimized
        priority
        className="object-cover"
      />*/}
    </div>
  );
}

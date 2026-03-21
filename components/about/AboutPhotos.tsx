"use client";

import Image from "next/image";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

const photos = [
  { src: "/about/photo1.jpg", alt: "About photo 1" },
  { src: "/about/photo2.jpg", alt: "About photo 2" },
  { src: "/about/photo3.jpg", alt: "About photo 3" },
];

export default function AboutPhotos() {
  const isHorizontal = useIsHorizontalLayout();

  return (
    <div className={`pt-2 md:pt-4 lg:pt-4 flex items-end gap-2 md:gap-3 lg:gap-4 w-[90%] sm:w-[85%] md:w-[80%] ${isHorizontal ? "lg:w-[55%]" : "lg:w-[75%]"} xl:w-[70%] 2xl:w-[65%] mx-auto`}>
      {photos.map((photo) => (
        <div key={photo.alt} className="relative overflow-hidden bg-accent flex-1 min-w-0 rounded-md">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={533}
            className="w-full h-auto"
            sizes="(max-width: 768px) 28vw, 300px"
          />
        </div>
      ))}
    </div>
  );
}

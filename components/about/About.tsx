"use client";

import { useTranslations } from "next-intl";
import AboutItem from "./AboutItem";
import AboutPhotos from "./AboutPhotos";
import { useIsHorizontalLayout, useViewportScale } from "@/hooks/useIsLandscape";

const items = [1, 2, 3] as const;

export default function About() {
  const t = useTranslations("About");
  const isHorizontal = useIsHorizontalLayout();
  const scale = useViewportScale();

  const scaled = scale > 1;

  return (
    <section
      id="about"
      className={`bg-bg min-h-screen flex flex-col justify-center items-center gap-4 md:gap-6 ${isHorizontal ? 'lg:gap-3' : 'lg:gap-8'} overflow-hidden py-6 md:py-8 lg:py-10 xl:py-12 3xl:py-14 4xl:py-18`}
    >
      <div className="mx-auto max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <h2
          className={`relative font-heading text-primary text-3xl md:text-4xl ${isHorizontal ? "lg:text-3xl xl:text-3xl 3xl:text-4xl" : "lg:text-5xl xl:text-4xl 3xl:text-5xl"} 4xl:text-6xl font-bold uppercase mb-4 md:mb-6 ${isHorizontal ? "lg:mb-4 xl:mb-5 3xl:mb-6 4xl:mb-6" : "lg:mb-8 xl:mb-10 4xl:mb-10"}`}
          style={scaled ? { fontSize: `calc(1.875rem * ${scale})`, marginBottom: `calc(1rem * ${scale})` } : undefined}
        >
          {t("title")}
        </h2>

        <div
          className="flex flex-col gap-3 md:gap-3"
          style={scaled ? { gap: `calc(0.75rem * ${scale})` } : undefined}
        >
          {items.map((num) => (
            <AboutItem
              key={num}
              num={num}
              title={t(`item${num}Title`)}
              scale={scale}
              text={t.rich(`item${num}`, {
                b: (chunks) => (
                  <span className="text-accent-dark">
                    {chunks}
                  </span>
                ),
              })}
            />
          ))}
        </div>
      </div>

      <AboutPhotos />
    </section>
  );
}

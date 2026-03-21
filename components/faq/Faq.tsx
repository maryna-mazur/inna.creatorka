"use client"

import { useTranslations } from "next-intl";
import FaqItem from "./FaqItem";
import {useIsHorizontalLayout} from "@/hooks/useIsLandscape";

const faqCount = 6;

export default function Faq() {
  const t = useTranslations("FAQ");
    const isHorizontal = useIsHorizontalLayout();

  return (
    <section
      id="faq"
      className="flex flex-col justify-center items-center bg-bg-dark py-6 md:py-8 lg:py-10 xl:py-12 min-h-screen 3xl:py-14 4xl:py-18"
    >
      <div className="mx-auto max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 mb-4">
        <h2 className={`font-heading text-primary
                text-3xl md:text-4xl ${isHorizontal ? "lg:text-3xl xl:text-3xl 3xl:text-4xl" : "lg:text-5xl xl:text-4xl 3xl:text-5xl"} 4xl:text-6xl
                font-bold uppercase mb-2 md:mb-3 text-center`}>
          {t("title")}
        </h2>
        <p className="font-body text-text-light text-xs md:text-sm lg:text-base xl:text-lg 3xl:text-xl 4xl:text-2xl tracking-wide mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-center">
          {t("subtitle")}
        </p>

        <div className="flex flex-col gap-3 md:gap-4 3xl:gap-5 4xl:gap-6 max-w-[900px] 3xl:max-w-[1100px] 4xl:max-w-[1400px] mx-auto">
          {Array.from({ length: faqCount }, (_, i) => (
            <FaqItem
              key={i}
              question={t(`q${i + 1}`)}
              answer={t(`a${i + 1}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

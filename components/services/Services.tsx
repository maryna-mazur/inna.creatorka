"use client";

import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";


export default function Services() {
  const t = useTranslations("Services");
  const isHorizontal = useIsHorizontalLayout();

  return (
    <section
      id="services"
      className="bg-bg py-6 md:py-8 lg:py-10 xl:py-12 4xl:py-20 md:h-screen md:flex md:flex-col md:overflow-hidden "
    >
      <div
        className="mx-auto w-full max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px]
        px-6 md:px-10 lg:px-16 xl:px-20
        md:flex md:flex-col md:flex-1 md:min-h-0 4xl:justify-between"
      >
        <h2
          className={`font-heading text-primary
            text-3xl md:text-4xl ${isHorizontal ? "lg:text-3xl" : "lg:text-5xl"} xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold uppercase
            mb-4 md:mb-4 lg:mb-6 xl:mb-8 4xl:mb-8 shrink-0`}
        >
          {t("heading")}
        </h2>

        <div className="flex flex-col gap-5 md:grid md:items-center md:grid-cols-2 md:grid-rows-2 md:gap-3 lg:gap-4 xl:gap-6 md:flex-1 md:min-h-0 4xl:max-h-[75vh]">
          <ServiceCard
            num={1}
            title={t("card1Title")}
            features={Array.from({ length: 3 }, (_, i) =>
              t(`card1Feature${i + 1}`),
            )}
            price={t("card1Price")}
            currency={t("card1Currency")}
            cta={t("card1Cta")}
            photoPlaceholder={t("photoPlaceholder")}
          />

          <ServiceCard
            num={2}
            title={t("card2Title")}
            features={Array.from({ length: 4 }, (_, i) =>
              t(`card2Feature${i + 1}`),
            )}
            price={t("card2Price")}
            currency={t("card2Currency")}
            cta={t("card2Cta")}
            photoPlaceholder={t("photoPlaceholder")}
          />

          <div
            className="rounded-2xl bg-accent/30 flex items-center justify-center overflow-hidden
            h-[23vh] sm:h-40 md:h-[95%] lg:h-[100%]"
          >
            <span className="font-body text-text-light text-xs md:text-sm uppercase tracking-widest">
              {t("photoPlaceholder")}
            </span>
          </div>

          <ServiceCard
            num={3}
            title={t("card3Title")}
            features={Array.from({ length: 5 }, (_, i) =>
              t(`card3Feature${i + 1}`),
            )}
            price={t("card3Price")}
            currency={t("card3Currency")}
            cta={t("card3Cta")}
            photoPlaceholder={t("photoPlaceholder")}
          />
        </div>
      </div>
    </section>
  );
}

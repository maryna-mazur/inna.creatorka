"use client";

import { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import ServiceCard from "./ServiceCard";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

const CARDS = [1, 2, 3] as const;

function equalizeSlides(swiper: SwiperType) {
  const slides = swiper.slides;
  const cards = slides.map((s) => s.firstElementChild as HTMLElement | null);

  slides.forEach((s) => (s.style.height = "auto"));
  cards.forEach((c) => {
    if (c) c.style.height = "auto";
  });

  let maxH = 0;
  cards.forEach((c) => {
    if (c) maxH = Math.max(maxH, c.scrollHeight);
  });

  slides.forEach((s) => (s.style.height = `${maxH}px`));
  cards.forEach((c) => {
    if (c) c.style.height = "";
  });
  swiper.update();
}

export default function Services() {
  const t = useTranslations("Services");
  const isHorizontal = useIsHorizontalLayout();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setSwiperInstance(swiper);
    requestAnimationFrame(() => equalizeSlides(swiper));
  }, []);

  useEffect(() => {
    if (!swiperInstance || isHorizontal) return;
    const onResize = () => equalizeSlides(swiperInstance);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [swiperInstance, isHorizontal]);

  const cardData = CARDS.map((n) => ({
    num: n,
    title: t(`card${n}Title`),
    features: Array.from(
      { length: n === 1 ? 2 : 4 },
      (_, i) => t(`card${n}Feature${i + 1}`),
    ),
    price: t(`card${n}Price`),
    currency: t(`card${n}Currency`),
    cta: t(`card${n}Cta`),
  }));

  return (
    <section
      id="services"
      className={`bg-bg py-6 md:py-8 lg:py-6 xl:py-8 3xl:py-12 4xl:py-14 min-h-screen md:min-h-auto md:flex md:flex-col ${
        isHorizontal ? "md:h-screen xl:h-auto md:overflow-hidden" : ""
      }`}
    >
      <div
        className="mx-auto w-full max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[2200px]
        px-6 md:px-10 lg:px-16 xl:px-20
        md:flex md:flex-col md:flex-1 md:min-h-0 md:justify-center 4xl:justify-between"
      >
        {isHorizontal ? (
          /* --- Desktop: horizontal layout --- */
          <div>
            <h2
              className="font-heading text-primary font-bold uppercase mb-4 md:mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 3.5rem)" }}
            >
              {t("heading")}
            </h2>
            <div
              className="grid min-h-0 gap-x-4 xl:gap-x-6 3xl:gap-x-8"
              style={{ gridTemplateColumns: "45% 1fr", gridTemplateRows: "auto auto" }}
            >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              onSwiper={setSwiperInstance}
              onSlideChange={(s) => setActiveIndex(s.activeIndex)}
              className="w-full min-h-0 cursor-grab active:cursor-grabbing"
              style={{ gridColumn: 1, gridRow: 1 }}
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.num} className="!h-auto md:!h-full">
                  <ServiceCard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="rounded-2xl bg-accent/30 flex items-center justify-center overflow-hidden"
              style={{ gridColumn: 2, gridRow: 1 }}
            >
              <span className="font-body text-text-light text-xs md:text-sm uppercase tracking-widest">
                {t("photoPlaceholder")}
              </span>
            </div>

            <div
              className="flex items-center justify-center gap-3 mt-3 shrink-0"
              style={{ gridColumn: 1, gridRow: 2 }}
            >
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-3 h-3"
                      : "bg-primary/30 w-2.5 h-2.5 hover:bg-primary/60"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <span
                className="ml-2 font-heading text-primary/60"
                style={{ fontSize: "clamp(0.625rem, 0.8vw, 0.875rem)" }}
              >
                {activeIndex + 1}/{CARDS.length}
              </span>
            </div>
          </div>
          </div>
        ) : (
          /* --- Mobile/Tablet: vertical stack --- */
          <>
          <h2
            className="font-heading text-primary font-bold uppercase mb-4 md:mb-6 shrink-0"
            style={{ fontSize: "clamp(1.5rem, 3vw, 3.5rem)" }}
          >
            {t("heading")}
          </h2>
          <div className="flex flex-col gap-4 md:flex-1 md:min-h-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              onSwiper={handleSwiper}
              onSlideChange={(s) => setActiveIndex(s.activeIndex)}
              className="w-full shrink-0 cursor-grab active:cursor-grabbing"
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.num}>
                  <ServiceCard {...card} className="h-full md:w-[90%] md:mx-auto" mobile />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-center gap-3 shrink-0">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-3 h-3"
                      : "bg-primary/30 w-2.5 h-2.5 hover:bg-primary/60"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <span className="ml-2 font-heading text-primary/60 text-xs">
                {activeIndex + 1}/{CARDS.length}
              </span>
            </div>
            <div className="rounded-2xl bg-accent/30 flex items-center justify-center overflow-hidden h-[25vh] md:h-[19vh] md:w-[90%] md:mx-auto mb-[clamp(70px,5vh,300px)]">
              <span className="font-body text-text-light text-xs md:text-sm uppercase tracking-widest">
                {t("photoPlaceholder")}
              </span>
            </div>
          </div>
          </>
        )}
      </div>
    </section>
  );
}

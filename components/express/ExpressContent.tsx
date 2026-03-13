"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ArrowLongIcon from "@/components/icons/ArrowLongIcon";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

export default function ExpressContent() {
  const t = useTranslations("ExpressAnalysis");
  const isHorizontal = useIsHorizontalLayout();

  return (
    <div
      className={`
        relative z-20
        flex flex-col h-full
        ${
          isHorizontal
            ? "justify-center w-[50%] xl:w-[53%] 2xl:w-[48%] px-8 xl:px-10 3xl:px-16 4xl:px-20 pb-0"
            : "justify-end w-full mx-auto md:w-[90%] px-6 pb-4"
        }
      `}
    >
      <h2
        className={`
          font-heading text-primary uppercase font-bold
          leading-tight mb-1 mt-2
          ${isHorizontal 
            ? "lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-4 lg:mt-12 2xl:mb-6 3xl:mt-18 4xl:mt-24" 
            : "text-2xl sm:text-3xl md:text-4xl lg:text-6xl md:mb-2 lg:mb-4"}
        `}
      >
        {t("title")}
      </h2>

      <p
        className={`
          font-heading text-primary/70
          ${isHorizontal 
            ? "text-xl xl:text-2xl 2xl:text-3xl 3xl:4xl 4xl:text-5xl mb-4 2xl:mb-6 4xl:mb-10" 
            : "text-lg md:text-xl lg:text-3xl mb-2 md:mb-6 lg:mb-8"}
        `}
      >
        {t("subtitle")}
      </p>

      <div
        className={`
          bg-bg-dark rounded-2xl
          ${isHorizontal 
            ? "p-6 mb-6 xl:px-8 xl:py-6 3xl:px-12 3xl:py-10 4xl:px-16 4xl:py-12 4xl:mb-12" 
            : "p-5 md:p-6 mb-3 md:mb-6 lg:mb-10"}
        `}
      >
        <p
          className={`
            font-body text-text leading-relaxed 
            ${isHorizontal 
              ? "lg:text-base xl:text-lg 3xl:text-2xl 4xl:text-3xl mb-3 4xl:mb-5" 
              : "text-xs sm:text-sm md:text-base lg:text-xl mb-2"}
          `}
        >
          {t("intro")}
        </p>

        <p
          className={`
            font-body text-text leading-relaxed 
            ${isHorizontal 
              ? "lg:text-base xl:text-lg 3xl:text-2xl 4xl:text-3xl mb-2 4xl:mb-4" 
              : "text-xs sm:text-sm md:text-base lg:text-xl mb-1"}
          `}
        >
          {t("description")}
        </p>
        <ul
          className={`
            font-body text-text leading-relaxed list-disc pl-5 
            ${isHorizontal 
              ? "lg:text-base xl:text-lg 3xl:text-2xl 4xl:text-3xl mb-5 4xl:mb-7" 
              : "text-xs sm:text-sm md:text-base lg:text-xl mb-3 lg:mb-7"}
          `}
        >
          <li>{t("benefit1")}</li>
          <li>{t("benefit2")}</li>
          <li>{t("benefit3")}</li>
        </ul>

        {isHorizontal && (
          <>
            <h3 className="font-heading text-primary font-semibold text-ms 3xl:text-2xl 4xl:text-3xl mb-2 4xl:mb-8">
              {t("howTitle")}
            </h3>
            <ol className="font-body text-text
            text-base xl:text-lg 3xl:text-2xl 4xl:text-3xl
            leading-relaxed list-decimal
            pl-5 mb-5 4xl:mb-10">
              <li>{t("step1")}</li>
              <li>{t("step2")}</li>
              <li>{t("step3")}</li>
            </ol>
          </>
        )}

        <div className={`flex flex-wrap items-center gap-2 lg:gap-3 4xl:gap-6 ${isHorizontal ? "lg:pr-5" : "lg:pr-11"}`}>
          {(["feature1", "feature2", "feature3"] as const).map((key) => (
            <span
              key={key}
              className={`font-body text-text bg-bg rounded-full
              ${
                isHorizontal
                  ? "lg:text-[13px] xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-2xl px-3 py-1 2xl:py-1.5 3xl:px-5 3xl:py-2"
                  : "text-[10px] sm:text-sm md:text-base lg:text-lg px-3 py-1 md:px-4 md:py-2 lg:px-5"
              }`}
            >
              ✨ {t(key)}
            </span>
          ))}
          <span
            className={`
              font-heading text-primary font-bold ml-auto
              ${isHorizontal 
                ? "text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl" 
                : "text-lg md:text-3xl lg:text-4xl lg:-mr-9"}
            `}
          >
            {t("price")}
          </span>
        </div>
      </div>

      <Link
        href="#express"
        className={`
          group inline-flex items-center
          bg-primary text-bg font-heading uppercase font-semibold
          rounded-full
          hover:bg-teal-dark active:bg-teal-dark
          transition-colors duration-300
          w-fit tracking-wide
          ${
            isHorizontal
              ? "lg:self-end gap-3 lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl lg:px-8 lg:py-3 3xl:px-10 3xl:py-5 4xl:px-10 4xl:py-7"
              : "gap-2 text-xs md:text-base px-5 py-2.5 md:px-8 md:py-4 md:mb-2 lg:mb-10"
          }
        `}
      >
        {t("cta")}
        <ArrowLongIcon
          className={`
            h-auto text-bg
            group-hover:translate-x-1
            transition-transform duration-300
            ${isHorizontal ? "w-14 lg:w-16 4xl:w-20" : "w-10 md:w-14"}
          `}
        />
      </Link>
    </div>
  );
}

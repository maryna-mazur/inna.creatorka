"use client";

import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";
import ServiceTitle from "./ServiceTitle";
import ServiceCta from "./ServiceCta";

interface ServiceCardProps {
  num: number;
  title: string;
  features: string[];
  price: string;
  currency: string;
  cta: string;
  photoPlaceholder: string;
  className?: string;
}

export default function ServiceCard({
  num,
  title,
  features,
  price,
  currency,
  cta,
  photoPlaceholder,
  className = "",
}: ServiceCardProps) {
  const isHorizontal = useIsHorizontalLayout();

  return (
    <div
      className={`
        relative bg-bg-dark rounded-2xl overflow-hidden ${className}
        ${
          isHorizontal
            ? "flex flex-col lg:h-[100%] p-5 md:p-6 lg:p-4 xl:p-6 2xl:p-7 3xl:p-8 4xl:p-10"
            : "min-h-0 md:h-[95%] flex flex-col justify-center p-5 md:p-6"
        }
      `}
    >
      {isHorizontal && (
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-1.5 flex-1 min-h-0">
          <div className="flex flex-col justify-between overflow-hidden">
            <div>
              <ServiceTitle
                num={num}
                title={title}
                className="lg:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-2 md:mb-3 lg:mb-2 xl:mb-4 4xl:mb-6"
              />

              <ul className="flex flex-col gap-0.5 md:gap-0.5 lg:gap-0.5 mb-2 md:mb-2 lg:mb-4">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 md:gap-2 lg:gap-3 2xl:gap-4 font-body text-text tracking-wide
                        lg:text-xs xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-[26px]"
                  >
                    <span className="text-accent-dark mt-[1px] shrink-0">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:p-1">
            <div className="rounded-xl bg-accent/40 flex items-center justify-center h-[22vh] md:h-[15vh] lg:h-[80%] xl:h-[70%]">
              <span className="font-body text-text-light text-[10px] md:text-xs uppercase tracking-widest">
                {photoPlaceholder}
              </span>
            </div>
            <p className="font-heading text-primary font-bold
                lg:text-base xl:text-xl 2xl:text-[19px] 3xl:text-[28px] 4xl:text-[32px] lg:mb-4
                text-right mt-2 xl:mt-4 4xl:mt-6">
              {price} {currency}
            </p>
          </div>
        </div>
      )}

      {!isHorizontal && (
        <>
          <div className="flex flex-col justify-between overflow-hidden">
            <div>
              <ServiceTitle
                num={num}
                title={title}
                className="text-base sm:text-lg md:text-xl mb-2 md:mb-3"
              />

              <ul className="flex flex-col gap-0.5 md:gap-0.5 mb-2 md:mb-2">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 md:gap-2 font-body text-text tracking-wide text-xs sm:text-sm lg:text-base"
                  >
                    <span className="text-accent-dark mt-[1px] shrink-0">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-heading text-primary font-bold text-lg md:text-xl mb-2 md:mb-3 text-right md:text-right">
              {price} {currency}
            </p>
          </div>

          <div>
            <div className="rounded-xl bg-accent/40 flex items-center justify-center h-[22vh] md:h-[15vh] mb-4">
              <span className="font-body text-text-light text-[10px] md:text-xs uppercase tracking-widest">
                {photoPlaceholder}
              </span>
            </div>
          </div>
        </>
      )}

      <div className={`mx-auto  ${isHorizontal ? "mt-1" : "mt-3 md:mt-4"}`}>
        <ServiceCta
          cta={cta}
          className={`gap-2 md:gap-3 px-5 py-2 
              ${isHorizontal 
                ? "lg:text-xs lg:px-3 lg:py-1 xl:text-base 2xl:text-lg 3xl:text-2xl 4xl:text-[26px] " +
              "       2xl:px-4 2xl:py-2 3xl:px-6 3xl:py-3 4xl:px-7 4xl:py-4" 
                : "text-xs md:text-ms lg:text-base md:px-4 md:py-1.5"}
              `}
        />
      </div>
    </div>
  );
}

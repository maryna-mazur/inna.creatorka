"use client";

import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";
import ServiceTitle from "./ServiceTitle";
import ServiceCta from "./ServiceCta";
import ServiceFeatures from "./ServiceFeatures";

interface ServiceCardProps {
  num: number;
  title: string;
  features: string[];
  price: string;
  currency: string;
  cta: string;
  className?: string;
}

export default function ServiceCard({
  num,
  title,
  features,
  price,
  currency,
  cta,
  className = "",
}: ServiceCardProps) {
  const isHorizontal = useIsHorizontalLayout();

  return (
    <div
      className={`
        relative bg-bg-dark rounded-2xl overflow-hidden ${className}
        ${
          isHorizontal
            ? "flex flex-col lg:h-[100%] p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-7 4xl:p-9"
            : "min-h-0 flex flex-col p-5 md:p-5"
        }
      `}
    >
      {isHorizontal && (
        <div className="flex flex-1 min-h-0 gap-3 xl:gap-4 3xl:gap-5">
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <ServiceTitle
                num={num}
                title={title}
                className="lg:text-xs xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-[28px] mb-2 md:mb-3 lg:mb-1 xl:mb-2 2xl:mb-2 3xl:mb-3 4xl:mb-5"
              />

              <ServiceFeatures
                features={features}
                listClassName="gap-0.5 md:gap-0.5 lg:gap-0.5 mb-2 md:mb-2 lg:mb-3 xl:mb-3 3xl:mb-3"
                itemClassName="gap-1.5 md:gap-2 lg:gap-0.5 2xl:gap-2 3xl:gap-3 4xl:gap-3.5
                    lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[15px] 4xl:text-[22px]
                    "
              />
            </div>

            <div className="flex items-center justify-between mt-3 lg:mt-1">
              <ServiceCta
                cta={cta}
                className={`gap-2 md:gap-3 px-5 py-2
                  lg:text-[10px] lg:px-2 lg:py-0.5 xl:text-xs xl:px-3 xl:py-1 2xl:text-sm 2xl:px-4 2xl:py-1.5 3xl:text-base 3xl:px-5 3xl:py-2 4xl:text-xl 4xl:px-6 4xl:py-3`}
              />
              <p
                className="font-heading text-primary font-bold
                  lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-[26px] whitespace-nowrap"
              >
                {price} {currency}
              </p>
            </div>
          </div>
        </div>
      )}

      {!isHorizontal && (
        <div className="flex flex-col flex-1">
          <div>
            <ServiceTitle
              num={num}
              title={title}
              className="text-base sm:text-lg md:text-base lg:text-xl mb-2 md:mb-2 lg:mb-4"
            />

            <ServiceFeatures
              features={features}
              listClassName="gap-0.5 md:gap-0.5 mb-2 md:mb-2 lg:mb-4"
              itemClassName="gap-1.5 md:gap-2 text-xs sm:text-sm md:text-[13px] lg:text-base"
            />
          </div>

          <p className="font-heading text-primary font-bold text-lg md:text-base mb-2 md:mb-0 lg:mb-4 text-right mt-auto">
            {price} {currency}
          </p>
        </div>
      )}

      {!isHorizontal && (
        <div className="mx-auto mt-3 md:mt-2">
          <ServiceCta
            cta={cta}
            className="gap-2 md:gap-3 px-5 py-2 text-xs md:text-ms lg:text-base md:px-4 md:py-1.5"
          />
        </div>
      )}
    </div>
  );
}

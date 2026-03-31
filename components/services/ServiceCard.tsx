"use client";

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
  mobile?: boolean;
}

export default function ServiceCard({
  num,
  title,
  features,
  price,
  currency,
  cta,
  className = "",
  mobile = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative h-full bg-bg-dark rounded-2xl overflow-hidden flex flex-col ${className}`}
      style={{ padding: mobile ? "1.5rem" : "clamp(1rem, 1.7vw, 2.25rem)" }}
    >
      <div className="flex h-full flex-col">
        <div className="flex-1">
          <ServiceTitle
            num={num}
            title={title}
            className={mobile ? "mb-4" : "mb-2"}
          />

          <ServiceFeatures
            features={features}
            listClassName={mobile ? "gap-1.5 md:gap-3 mb-4" : "gap-0.5 mb-2"}
            itemClassName="gap-1.5"
            mobile={mobile}
          />
        </div>

        <div
          className={`shrink-0 flex items-center justify-between ${mobile ? "pt-4" : "pt-2"}`}
        >
          <ServiceCta cta={cta} mobile={mobile} />

          <p
            className="font-heading text-primary font-bold whitespace-nowrap"
            style={{
              fontSize: mobile ? "clamp(0.875rem, 3vw, 1.125rem)" : "clamp(0.75rem, 1.1vw, 1.125rem)",
            }}
          >
            {price} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}

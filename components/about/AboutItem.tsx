import { ReactNode } from "react";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

interface AboutItemProps {
  num: number;
  title: string;
  text: ReactNode;
  scale?: number;
}

export default function AboutItem({ num, title, text, scale = 1 }: AboutItemProps) {
  const mobileStyle = scale > 1 ? { fontSize: `calc(0.75rem * ${scale})` } : undefined;
  const mobileBodyStyle = scale > 1 ? { fontSize: `calc(0.68rem * ${scale})` } : undefined;
  const isHorizontal = useIsHorizontalLayout();

  return (
    <div className={`flex items-start gap-10 md:gap-16 xl:gap-24`}>
      <span
        className={`font-heading text-primary 
            text-xs md:text-lg ${isHorizontal ? "lg:text-base xl:text-base 3xl:text-xl" : "lg:text-xl"} 4xl:text-4xl 
            font-semibold shrink-0`}
        style={mobileStyle}
      >
        /{num}
      </span>
      <div>
        <h3
          className={`font-heading text-primary uppercase 
          text-xs md:text-lg ${isHorizontal ? "lg:text-base xl:text-base 3xl:text-xl" : "lg:text-xl"} 
          font-semibold tracking-wide mb-1`}
          style={mobileStyle}
        >
          {title}
        </h3>
        <p
          className={`font-body text-text 
          text-xs md:text-base ${isHorizontal ? "lg:text-xs xl:text-sm 3xl:text-base" : "lg:text-base"} 2xl:text-[17.5px] 3xl:text-2xl 
          tracking-wide`}
          style={mobileBodyStyle}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

import { ReactNode } from "react";

interface AboutItemProps {
  num: number;
  title: string;
  text: ReactNode;
}

export default function AboutItem({ num, title, text }: AboutItemProps) {
  return (
    <div className="flex items-start gap-10 md:gap-16 lg:gap-20 xl:gap-24">
      <span className="font-heading text-primary text-sm md:text-base xl:text-xl 3xl:text-3xl 4xl:text-4xl font-semibold shrink-0">
        /{num}
      </span>
      <div>
        <h3 className="font-heading text-primary uppercase text-sm md:text-base xl:text-xl 3xl:text-3xl font-semibold tracking-wide mb-1">
          {title}
        </h3>
        <p className="font-body text-text text-xs md:text-sm xl:text-base 2xl:text-[17.5px] 3xl:text-2xl tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import ArrowLongIcon from "@/components/icons/ArrowLongIcon";
import { Link } from "@/i18n/navigation";

export default function HeroCTA() {
  const t = useTranslations("Hero");

  return (
    <>
      <style>{`
        @keyframes blobMorph {
          0%   { border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%; }
          25%  { border-radius: 45% 55% 40% 60% / 60% 40% 55% 45%; }
          50%  { border-radius: 55% 45% 60% 40% / 45% 60% 40% 55%; }
          75%  { border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; }
          100% { border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%; }
        }

        .blob-main {
          animation: blobMorph 5s ease-in-out infinite;
        }
      `}</style>

      <Link
        href="#services"
        className="group relative inline-flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-40 lg:h-40 2xl:w-48 2xl:h-48 3xl:w-58 3xl:h-58 4xl:w-70 4xl:h-70 xl:-left-[2vw] 2xl:-left-[1vw] 3xl:-left-[2vw] 4xl:left-[1vw]"
      >
        <div
          className="blob-main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-full h-full bg-accent
                     group-hover:bg-teal-dark
                     transition-colors duration-500
                   "
        />

        <span
          className="relative z-10 font-heading max-w-[7rem] 3xl:max-w-[10rem] 4xl:max-w-[12rem] text-center -mb-2 mt-2
                     text-[10px] sm:text-xs md:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase font-semibold tracking-widest
                     text-primary leading-snug
                     group-hover:text-accent transition-colors duration-300"
        >
          {t("cta")}
        </span>

        <ArrowLongIcon
          className="relative z-10 w-10 sm:w-14 md:w-16 lg:w-20 2xl:w-24 3xl:w-28 4xl:w-36 h-auto mt-1 sm:mt-2
                     text-primary/70
                     group-hover:text-accent group-hover:translate-x-1
                     transition-all duration-300"
        />
      </Link>
    </>
  );
}

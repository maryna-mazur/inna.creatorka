import { useTranslations } from "next-intl";

export default function HeroHeading() {
  const t = useTranslations("Hero");

  return (
    <h1 className="flex flex-col items-end text-right font-heading text-primary absolute right-[2vw] top-[28vh] sm:top-[33vh] sm:right-[4vw] md:top-[23vh] md:right-[3vw] sm:items-end lg:text-right lg:left-auto lg:right-14 lg:top-1/4 xl:top-[18vh] 2xl:right-20 3xl:right-24 4xl:right-[7vw]">
      <span className="block text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light tracking-wide leading-2">
        {t("greeting")}
      </span>
      <span className="block text-5xl sm:text-5xl md:text-8xl lg:text-[6rem] xl:text-[9rem] 2xl:text-[11rem] 3xl:text-[14rem] 4xl:text-[16rem] font-bold italic">
        {t("name")}
      </span>
    </h1>
  );
}

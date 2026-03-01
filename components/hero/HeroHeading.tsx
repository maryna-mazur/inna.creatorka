import { useTranslations } from "next-intl";

export default function HeroHeading() {
  const t = useTranslations("Hero");

  return (
      <h1 className="flex flex-col items-end font-heading text-primary-dark absolute right-6 bottom-1/2.8 lg:right-14 lg:bottom-auto lg:top-1/4 lg:text-primary 2xl:right-20 3xl:right-24 4xl:right-[7vw]">
        <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-5xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light tracking-wide leading-2">
          {t("greeting")}
        </span>
          <span className="block text-7xl md:text-9xl lg:text-[11rem] xl:text-[9rem] 2xl:text-[11rem] 3xl:3xl:text-[14rem] 4xl:text-[16rem] font-bold italic">
          {t("name")}
        </span>
      </h1>
  );
}

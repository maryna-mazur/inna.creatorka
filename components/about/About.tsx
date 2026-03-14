import { useTranslations } from "next-intl";
import AboutItem from "./AboutItem";
import AboutPhotos from "./AboutPhotos";

const items = [1, 2, 3] as const;

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="bg-bg min-h-screen flex flex-col justify-evenly items-center gap-4 md:gap-6 lg:gap-8 overflow-hidden py-6 md:py-8 lg:py-10 xl:py-12"
    >
      <div className="mx-auto max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <h2 className="relative font-heading text-primary text-3xl md:text-4xl lg:text-5xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold uppercase mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          {t("title")}
        </h2>

        <div className="flex flex-col gap-3 md:gap-3">
          {items.map((num) => (
            <AboutItem
              key={num}
              num={num}
              title={t(`item${num}Title`)}
              text={t.rich(`item${num}`, {
                b: (chunks) => (
                  <span className="text-accent-dark">
                    {chunks}
                  </span>
                ),
              })}
            />
          ))}
        </div>
      </div>

      {/*        <p className="absolute top-[8vh] w-3/4 text-justify font-body uppercase font-extralight leading-1.5 text-[14px] md:text-xs lg:text-sm tracking-widest">
          {t("conclusion")}
        </p>*/}

      <AboutPhotos />
    </section>
  );
}

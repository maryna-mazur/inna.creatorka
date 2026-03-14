import { useTranslations } from "next-intl";
import { type ComponentType } from "react";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Arrow1Icon from "@/components/icons/Arrow1Icon";
import Arrow2Icon from "@/components/icons/Arrow2Icon";
import Arrow5Icon from "@/components/icons/Arrow5Icon";
import Arrow7Icon from "@/components/icons/Arrow7Icon";

type Tag = {
  key: string;
  Icon: ComponentType<{ className?: string }>;
  arrowClass: string;
  side: "left" | "right";
  mobilePosition: string;
  desktopPosition: string;
};

const tags: Tag[] = [
  {
    key: "tag1",
    Icon: ArrowIcon,
    arrowClass: "relative -left-[20vw] -bottom-[7lvh] -rotate-[40deg] sm:-left-[20vw] sm:-bottom-[6lvh] sm:-rotate-[30deg] md:left-0 md:bottom-0 md:rotate-0",
    side: "left",
    mobilePosition: "left-[8vw] bottom-[30lvh] sm:left-[4vw] sm:bottom-[26lvh] md:left-[8vw] md:bottom-[28lvh] lg:bottom-[36lvh]",
    desktopPosition: "xl:left-[6vw] 2xl:left-[10vw] 3xl:left-[14vw] 4xl:left-[10vw] xl:top-[32lvh] xl:bottom-auto",
  },
  {
    key: "tag2",
    Icon: Arrow7Icon,
    arrowClass: "relative -left-[12vw] -bottom-[4lvh] -rotate-[20deg] sm:-left-[17vw] sm:-bottom-[4lvh] sm:-rotate-[20deg] md:left-0 md:bottom-0 md:rotate-0",
    side: "left",
    mobilePosition: "left-[4vw] bottom-[17lvh] sm:left-[4vw] sm:bottom-[16lvh] md:left-[6vw] md:bottom-[15lvh] lg:bottom-[19lvh]",
    desktopPosition: "xl:left-[5vw] 2xl:left-[4vw] 3xl:left-[7vw] 4xl:left-[6vw] xl:top-[52lvh] xl:bottom-auto",
  },
  {
    key: "tag3",
    Icon: Arrow1Icon,
    arrowClass: "rotate-x-180 -scale-x-100 relative -rotate-[60deg] -left-[4vw] bottom-[1lvh] sm:-rotate-[20deg] sm:-left-[12vw] sm:-bottom-[1lvh] md:left-0 md:bottom-0 md:rotate-0 xl:-left-[2vw] xl:-bottom-[2lvh]",
    side: "left",
    mobilePosition: "relative left-[8vw] -bottom-[43lvh] sm:absolute sm:left-[20vw] sm:bottom-[6lvh] md:left-[20vw] md:bottom-[6lvh] lg:left-[24vw] lg:bottom-[7lvh]",
    desktopPosition: "xl:left-[7vw] 2xl:left-[8vw] 3xl:left-[10vw] 4xl:left-[11vw] xl:top-[72lvh] xl:bottom-auto",
  },
  {
    key: "tag4",
    Icon: Arrow2Icon,
    arrowClass: "-scale-x-100 relative -rotate-[25deg] -right-[18vw] -bottom-[4lvh] sm:-right-[27vw] sm:-bottom-[5lvh] sm:-rotate-[25deg] sm:-scale-y-100 md:-right-[6vw] md:-bottom-[5lvh] md:-rotate-[380deg] md:scale-y-100 xl:bottom-0 xl:right-0",
    side: "right",
    mobilePosition: "relative -right-[23vw] -bottom-[12lvh] sm:absolute sm:right-[9vw] sm:bottom-[28lvh] lg:bottom-[35lvh]",
    desktopPosition: "xl:right-[6vw] 2xl:right-[11vw] 3xl:right-[14vw] 4xl:right-[14vw] xl:top-[48lvh] xl:bottom-auto",
  },
  {
    key: "tag5",
    Icon: Arrow5Icon,
    arrowClass: "scale-x-[-1] rotate-x-[2] relative -right-[13vw] -bottom-[4lvh] sm:-right-[20vw] sm:bottom-[5lvh] sm:rotate-[45deg] md:-right-[2vw] md:bottom-[2lvh] md:rotate-[30deg] xl:rotate-0 xl:bottom-0",
    side: "right",
    mobilePosition: "relative -right-[27vw] -bottom-[18lvh] sm:absolute sm:right-[7vw] sm:bottom-[9lvh] md:right-[7vw] md:bottom-[10lvh] lg:bottom-[10lvh]",
    desktopPosition: "xl:right-[3vw] 2xl:right-[8vw] 3xl:right-[7vw] 4xl:right-[8vw] xl:top-[60lvh] xl:bottom-auto",
  },
];

export default function HeroTags() {
  const t = useTranslations("Hero");

  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.key}
          className={`absolute ${tag.mobilePosition} ${tag.desktopPosition}`}
        >
          <div
            className={`flex items-center gap-1 ${tag.side === "right" ? "flex-row-reverse" : ""}`}
          >
            <span
              className="text-center font-heading text-[10px] sm:text-sm md:text-lg xl:text-lg 2xl:text-lg 3xl:text-2xl 4xl:text-3xl uppercase tracking-widest text-accent xl:text-primary font-semibold leading-tight max-w-20 sm:max-w-28 md:max-w-32 xl:max-w-40 3xl:max-w-56 4xl:max-w-64"
            >
              {t(tag.key)}
            </span>
            <tag.Icon
              className={`${tag.arrowClass} opacity-70 text-accent xl:text-primary sm:w-26 md:w-28 md:h-28 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32 4xl:w-44 4xl:h-44 shrink-0`}
            />
          </div>
        </div>
      ))}
    </>
  );
}

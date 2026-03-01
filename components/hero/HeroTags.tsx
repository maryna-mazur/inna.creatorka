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
  position: string;
};

const tags: Tag[] = [
  {
    key: "tag1",
    Icon: ArrowIcon,
    arrowClass: "",
    side: "left",
    position: "left-[6vw] lg:left-[10vw] 2xl:left-[10vw] 3xl:left-[14vw] 4xl:left-[10vw] top-[32vh]",
  },
  {
    key: "tag2",
    Icon: Arrow7Icon,
    arrowClass: "",
    side: "left",
    position: "left-[2.4vw] lg:left-[5vw] 2xl:left-[4vw] 3xl:left-[7vw] 4xl:left-[6vw] top-[52vh]",
  },
  {
    key: "tag3",
    Icon: Arrow1Icon,
    arrowClass: "rotate-x-180 -scale-x-100",
    side: "left",
    position: "left-[6vw] lg:left-[9vw] 2xl:left-[8vw] 3xl:left-[10vw] 4xl:left-[11vw] top-[72vh]",
  },
  {
    key: "tag4",
    Icon: Arrow2Icon,
    arrowClass: "-scale-x-100 -rotate-[341deg]",
    side: "right",
    position: "right-[8vw] lg:right-[11vw] 2xl:right-[11vw] 3xl:right-[14vw] 4xl:right-[14vw] top-[48vh]",
  },
  {
    key: "tag5",
    Icon: Arrow5Icon,
    arrowClass: "scale-x-[-1] rotate-x-[2]",
    side: "right",
    position: "right-[3vw] lg:right-[5vw] 2xl:right-[8vw] 3xl:right-[7vw] 4xl:right-[8vw] top-[63vh]",
  },
];

export default function HeroTags() {
  const t = useTranslations("Hero");

  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.key}
          className={`absolute hidden lg:block ${tag.position}`}
        >
          <div
            className={`flex items-center gap-1 ${tag.side === "right" ? "flex-row-reverse" : ""}`}
          >
            <span
              className={`text-center font-heading text-sm xl:text-base 2xl:text-base 3xl:text-lg 4xl:text-2xl  uppercase tracking-widest text-primary font-semibold leading-tight max-w-40 3xl:max-w-56 4xl:max-w-64`}
            >
              {t(tag.key)}
            </span>
            <tag.Icon
              className={`${tag.arrowClass} opacity-70 text-primary w-16 h-16 xl:w-20 xl:h-20 2xl:w-22 2xl:h-22 3xl:w-32 3xl:h-32 4xl:w-44 4xl:h-44 shrink-0`}
            />
          </div>
        </div>
      ))}

      {/* Mobile — column below heading */}
      <div className="flex flex-col items-center gap-3 mt-8 lg:hidden">
        {tags.map((tag) => (
          <span
            key={tag.key}
            className="font-body text-xs uppercase tracking-widest text-primary font-medium"
          >
            {t(tag.key)}
          </span>
        ))}
      </div>ъ
    </>
  );
}

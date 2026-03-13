"use client";

import { useTranslations } from "next-intl";

export default function ExpressBadge() {
  const t = useTranslations("ExpressAnalysis");
  const text = t("badge").toUpperCase();
  // Repeat text around the octagon path
  const repeated = `${text}  ·  ${text}  ·  ${text}  ·  `;

  return (
    <div className="hidden md:visible absolute top-6 right-6 md:top-10 md:right-10 lg:top-14 lg:right-14 xl:top-16 xl:right-16 z-30 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          {/* Octagon path for the shape */}
          <path
            id="octagon-shape"
            d="M 71 3 L 129 3 L 183 42 L 197 100 L 183 158 L 129 197 L 71 197 L 17 158 L 3 100 L 17 42 Z"
          />
          {/* Circular path for text */}
          <path
            id="badge-text-path"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>

        {/* Octagon fill */}
        <use href="#octagon-shape" className="fill-primary" />

        {/* Curved text */}
        <text className="fill-bg text-[16px] font-heading uppercase tracking-[0.15em]">
          <textPath href="#badge-text-path" startOffset="0%">
            {repeated}
          </textPath>
        </text>

        {/* Center icon — star/sparkle */}
        <text
          x="100"
          y="108"
          textAnchor="middle"
          className="fill-bg text-[40px]"
        >
          ✦
        </text>
      </svg>
    </div>
  );
}

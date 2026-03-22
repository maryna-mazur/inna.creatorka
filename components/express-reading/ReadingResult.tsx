"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface ReadingResultProps {
  selectedCards: number[];
  visible: boolean;
}

const CATEGORIES = ["focus", "resource", "action"] as const;

export default function ReadingResult({
  selectedCards,
  visible,
}: ReadingResultProps) {
  const t = useTranslations("ExpressReading");

  if (!visible) return null;

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 pb-12 animate-fade-in-up">
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
        {t("resultTitle")}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-5">
        {CATEGORIES.map((category, index) => {
          const cardNumber = selectedCards[index];
          if (!cardNumber) return null;

          return (
            <div
              key={category}
              className="flex-1 bg-bg-dark rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-teal-dark mb-4">
                {t(`label_${category}`)}
              </span>

              <div className="relative aspect-[2/3] w-40 sm:w-44 lg:w-52 shrink-0 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src={`/cards/${cardNumber}.jpg`}
                  alt={t(`label_${category}`)}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              <p className="font-body text-text text-sm sm:text-base leading-relaxed">
                {t(`card${cardNumber}_${category}`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

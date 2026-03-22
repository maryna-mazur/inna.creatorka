"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import CardGrid from "./CardGrid";
import ReadingBg from "./ReadingBg";
import ReadingInstruction from "./ReadingInstruction";
import ReadingResult from "./ReadingResult";

function shuffleArray(arr: number[]): number[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const ALL_CARDS = Array.from({ length: 32 }, (_, i) => i + 1);

export default function ExpressReadingClient() {
  const t = useTranslations("ExpressReading");
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffledCards(shuffleArray(ALL_CARDS));
  }, []);

  const handleCardClick = useCallback(
    (cardNumber: number) => {
      if (selectedCards.length >= 3 || selectedCards.includes(cardNumber)) return;

      const next = [...selectedCards, cardNumber];
      setSelectedCards(next);

      if (next.length === 3) {
        setTimeout(() => {
          setShowResult(true);
          setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }, 500);
      }
    },
    [selectedCards]
  );

  if (shuffledCards.length === 0) return null;

  return (
    <section className="relative min-h-screen bg-bg px-4 py-8 sm:py-12 md:px-8 flex flex-col items-center">
      <ReadingBg />
      <div className="relative z-10 flex flex-col items-center w-full">
      <ReadingInstruction currentStep={selectedCards.length} />

      <p className={`font-body text-text-light text-base mb-4 transition-opacity duration-300 ${
        selectedCards.length > 0 && selectedCards.length < 3 ? "opacity-100" : "opacity-0"
      }`}>
        {t("progress", { current: selectedCards.length, total: 3 })}
      </p>

      <CardGrid
        shuffledCards={shuffledCards}
        selectedCards={selectedCards}
        onCardClick={handleCardClick}
        disabled={selectedCards.length >= 3}
      />

      <div ref={resultRef}>
        <ReadingResult selectedCards={selectedCards} visible={showResult} />
      </div>
      </div>
    </section>
  );
}

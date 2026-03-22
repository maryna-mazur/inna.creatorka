"use client";

import FlipCard from "./FlipCard";

interface CardGridProps {
  shuffledCards: number[];
  selectedCards: number[];
  onCardClick: (cardNumber: number) => void;
  disabled: boolean;
}

export default function CardGrid({
  shuffledCards,
  selectedCards,
  onCardClick,
  disabled,
}: CardGridProps) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 w-full max-w-5xl mx-auto overscroll-contain">
      {shuffledCards.map((cardNumber) => {
        const selectionIndex = selectedCards.indexOf(cardNumber);
        return (
          <FlipCard
            key={cardNumber}
            cardNumber={cardNumber}
            isFlipped={selectionIndex !== -1}
            selectionOrder={selectionIndex !== -1 ? selectionIndex : null}
            onClick={() => onCardClick(cardNumber)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}

"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";

interface FlipCardProps {
  cardNumber: number;
  isFlipped: boolean;
  selectionOrder: number | null;
  onClick: () => void;
  disabled: boolean;
}

export default function FlipCard({
  cardNumber,
  isFlipped,
  selectionOrder,
  onClick,
  disabled,
}: FlipCardProps) {
  const isInactive = disabled && !isFlipped;
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (isFlipped || isInactive) return;
      const el = cardRef.current;
      if (!el) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
    },
    [isFlipped, isInactive]
  );

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el || isFlipped) return;
    el.style.transform = "";
  }, [isFlipped]);

  const handleClick = useCallback(() => {
    const el = cardRef.current;
    if (el) {
      el.style.transform = "";
    }
    onClick();
  }, [onClick]);

  return (
    <button
      onClick={handleClick}
      disabled={isInactive}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative aspect-[2/3] w-full cursor-pointer [perspective:600px] touch-manipulation transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-lg ${
        isInactive ? "opacity-40 cursor-default" : ""
      }`}
      aria-label={isFlipped ? `Card ${cardNumber}` : "Pick a card"}
    >
      <div
        ref={cardRef}
        className={`relative h-full w-full [transform-style:preserve-3d] motion-reduce:transition-none ${
          isFlipped
            ? "transition-transform duration-600 ease-out [transform:rotateY(180deg)]"
            : "transition-transform duration-200 ease-out"
        }`}
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden [backface-visibility:hidden] shadow-md hover:shadow-lg transition-shadow duration-200">
          <Image
            src="/cards/cover.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 414px) 22vw, (max-width: 1024px) 15vw, 11vw"
          />
        </div>

        <div className="absolute inset-0 rounded-lg overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg">
          <Image
            src={`/cards/${cardNumber}.jpg`}
            alt={`Card ${cardNumber}`}
            fill
            className="object-cover"
            sizes="(max-width: 414px) 22vw, (max-width: 1024px) 15vw, 11vw"
          />
        </div>
      </div>

      {selectionOrder !== null && (
        <div className="absolute -top-2 -right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-teal-dark text-white text-xs font-heading font-bold shadow-md animate-fade-in-up">
          {selectionOrder + 1}
        </div>
      )}
    </button>
  );
}

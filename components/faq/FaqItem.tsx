"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-bg transition-shadow duration-300 hover:shadow-[0_2px_12px_rgba(59,35,20,0.06)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 lg:p-7 xl:p-8 3xl:p-10 4xl:p-12 cursor-pointer text-left"
      >
        <span className="font-heading text-primary text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium tracking-wide">
          {question}
        </span>

        <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 rounded-full border border-primary/30 flex items-center justify-center">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 text-primary transition-transform duration-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 lg:px-7 xl:px-8 3xl:px-10 4xl:px-12 pb-5 md:pb-6 lg:pb-7 xl:pb-8 3xl:pb-10 4xl:pb-12 font-body text-text text-xs md:text-sm lg:text-base xl:text-[17px] 3xl:text-lg 4xl:text-xl leading-relaxed tracking-wide">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

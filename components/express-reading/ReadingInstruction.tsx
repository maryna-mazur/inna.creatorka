"use client";

import { useTranslations } from "next-intl";

interface ReadingInstructionProps {
  currentStep: number;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReadingInstruction({ currentStep }: ReadingInstructionProps) {
  const t = useTranslations("ExpressReading");

  const steps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" },
  ];

  return (
    <div className="text-center mb-8 max-w-4xl mx-auto">
      <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
        {t("title")}
      </h1>
      <p className="font-heading text-base sm:text-lg text-teal-dark font-semibold mb-5">
        {t("subtitle")}
      </p>
      <p className="font-body text-text-light text-base sm:text-lg leading-relaxed mb-6">
        {t("instruction")}
      </p>

      <div className="flex flex-col gap-3 text-left max-w-md mx-auto lg:hidden">
        {steps.map((step, i) => {
          const isDone = currentStep > i;
          const isActive = currentStep === i;

          return (
            <div
              key={step.key}
              className={`flex items-start gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-teal-dark/10 shadow-sm"
                  : isDone
                    ? "opacity-50"
                    : "opacity-70"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isDone || isActive
                    ? "bg-teal-dark text-white"
                    : "bg-accent/50 text-primary"
                }`}
              >
                {isDone ? <CheckIcon className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <p className="font-body text-sm sm:text-base text-text leading-snug">
                {t(step.key)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:flex items-start gap-0 max-w-3xl mx-auto">
        {steps.map((step, i) => {
          const isDone = currentStep > i;
          const isActive = currentStep === i;

          return (
            <div key={step.key} className="flex-1 flex flex-col items-center relative">
              {i < steps.length - 1 && (
                <div
                  className={`absolute top-3 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5 transition-colors duration-300 ${
                    currentStep > i ? "bg-teal-dark" : "bg-accent"
                  }`}
                />
              )}

              <span
                className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  isDone || isActive
                    ? "bg-teal-dark text-white shadow-sm"
                    : "bg-accent/50 text-primary"
                }`}
              >
                {isDone ? <CheckIcon className="w-3.5 h-3.5" /> : i + 1}
              </span>

              <p
                className={`font-body text-sm text-text leading-snug mt-3 px-2 text-center transition-opacity duration-300 ${
                  isActive ? "opacity-100" : isDone ? "opacity-50" : "opacity-70"
                }`}
              >
                {t(step.key)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

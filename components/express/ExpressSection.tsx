"use client";

import ExpressBg from "./ExpressBg";
import ExpressContent from "./ExpressContent";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

export default function ExpressSection() {
  const isHorizontal = useIsHorizontalLayout();

  return (
    <section
      id="express"
      className={`relative overflow-hidden bg-bg
        ${isHorizontal ? "h-screen flex justify-end" : "min-h-screen flex flex-col justify-end"}`}
    >
      <ExpressBg />
      <ExpressContent />
    </section>
  );
}

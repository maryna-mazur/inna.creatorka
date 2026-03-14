"use client";

import ExpressBg from "./ExpressBg";
import ExpressContent from "./ExpressContent";
import { useIsHorizontalLayout } from "@/hooks/useIsLandscape";

export default function ExpressSection() {
  const isHorizontal = useIsHorizontalLayout();

  return (
    <section
      id="express"
      className={`relative min-h-screen overflow-hidden bg-bg 
        ${isHorizontal ? "flex justify-end" : "flex flex-col justify-end"}`}
    >
      <ExpressBg />
      <ExpressContent />
    </section>
  );
}

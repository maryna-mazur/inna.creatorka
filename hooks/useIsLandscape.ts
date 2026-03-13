"use client";

import { useState, useEffect } from "react";

export function useIsHorizontalLayout() {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsHorizontal(w >= 1280 || (w >= 1024 && w > h));
    }

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isHorizontal;
}
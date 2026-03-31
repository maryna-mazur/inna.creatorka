"use client";

import { useState, useEffect } from "react";

export function useIsHorizontalLayout() {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      const h = window.screen.height;
      setIsHorizontal(w >= 1280 || (w >= 1024 && w > h));
    }

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isHorizontal;
}


export function useViewportScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w >= 768) {
        setScale(1);
        return;
      }
      const ratio = h / w;
      // baseline ratio ~1.78 (iPhone SE 375x667) → scale 1
      // tall ratio ~2.16 (iPhone XR 414x896) → scale ~1.07
      // very tall ~2.56 (Galaxy Z Fold 344x882) → scale ~1.15
      // short ratio ~1.3 → scale 1 (clamped)
      const s = Math.min(Math.max(1 + (ratio - 1.78) * 0.2, 1), 1.15);
      setScale(s);
    }

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return scale;
}
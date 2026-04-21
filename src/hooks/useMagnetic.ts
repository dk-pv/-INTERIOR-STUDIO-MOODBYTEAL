"use client";

import { useEffect } from "react";

export function useMagnetic<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength: number = 0.2
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let bounds: DOMRect;

    const handleEnter = () => {
      bounds = el.getBoundingClientRect();
    };

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleLeave = () => {
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, strength]);
}
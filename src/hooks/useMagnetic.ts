"use client";

import { useEffect, useRef } from "react";

export function useMagnetic<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength: number = 0.2,
) {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let bounds: DOMRect;

    const handleEnter = () => {
      bounds = el.getBoundingClientRect();
      el.style.willChange = "transform";
    };

    const handleMove = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        const x = e.clientX - bounds.left - bounds.width / 2;
        const y = e.clientY - bounds.top - bounds.height / 2;
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    };

    const handleLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      el.style.transform = "translate3d(0,0,0)";
      el.style.willChange = "auto";
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref, strength]);
}

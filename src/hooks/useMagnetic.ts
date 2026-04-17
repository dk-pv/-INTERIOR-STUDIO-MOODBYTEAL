"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useMagnetic<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength: number = 0.25
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let bounds: DOMRect;

    const handleEnter = () => {
      bounds = el.getBoundingClientRect();
    };

    const handleMove = (e: MouseEvent) => {
      if (!bounds) return;

      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
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
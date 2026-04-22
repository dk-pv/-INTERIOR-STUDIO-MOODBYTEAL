"use client";

import { useEffect } from "react";

export function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    delay?: number; // ms, default 0
    duration?: number; // ms, default 600
    fromY?: number; // px, default 32
    once?: boolean; // default true
  },
) {
  const { delay = 0, duration = 600, fromY = 32, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial invisible state
    el.style.opacity = "0";
    el.style.transform = `translateY(${fromY}px)`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.animate(
              [
                { opacity: 0, transform: `translateY(${fromY}px)` },
                { opacity: 1, transform: "translateY(0px)" },
              ],
              {
                duration,
                delay,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "forwards",
              },
            );

            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, delay, duration, fromY, once]);
}

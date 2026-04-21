"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { initGSAP } from "@/lib/gsap";

export function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    if (window.innerWidth < 768) return; // 🔥 disable mobile

    initGSAP();

    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // 🔥 reduced
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // 🔥 earlier trigger
        },
      }
    );
  }, [ref]);
}
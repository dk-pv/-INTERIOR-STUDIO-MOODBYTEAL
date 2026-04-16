"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { initGSAP } from "@/lib/gsap";

export function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    initGSAP();

    const el = ref.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, [ref]);
}
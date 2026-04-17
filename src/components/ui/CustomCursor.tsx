"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll("a, button, .card");

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ring, {
          scale: 2.2,
          borderWidth: "2px",
          backgroundColor: "rgba(255,255,255,0.08)",
        });

        gsap.to(dot, {
          scale: 0,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(ring, {
          scale: 1,
          borderWidth: "1px",
          backgroundColor: "transparent",
        });

        gsap.to(dot, {
          scale: 1,
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}

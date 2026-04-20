"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    if (!dot || !ring || !label) return;

    // ── Track mouse ───────────────────────────────────────────────────────────
    const move = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "none",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // ── Two states: default | view ────────────────────────────────────────────
    type State = "default" | "view";
    let state: State = "default";

    const toDefault = () => {
      if (state === "default") return;
      state = "default";
      gsap.to(ring, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "rgba(0,0,0,0.8)",
        borderWidth: "1px",
        duration: 0.4,
        ease: "expo.out",
      });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.25, ease: "expo.out" });
      gsap.to(label, { opacity: 0, scale: 0.6, duration: 0.18 });
    };

    const toView = () => {
      if (state === "view") return;
      state = "view";
      gsap.to(ring, {
        width: 72,
        height: 72,
        backgroundColor: "#000000",
        borderColor: "transparent",
        duration: 0.4,
        ease: "expo.out",
      });
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
      gsap.to(label, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "expo.out",
        delay: 0.08,
      });
    };

    // ── Only react to [data-cursor="view"] ───────────────────────────────────
    const detect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='view']")) {
        toView();
      } else {
        toDefault();
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", detect);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", detect);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: "#000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: "1px solid rgba(0,0,0,0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform",
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#fff",
            opacity: 0,
            transform: "scale(0.6)",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          VIEW
        </span>
      </div>
    </>
  );
}
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

    // ✅ quickSetter — zero tween overhead
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    const move = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    type State = "default" | "view";
    let state: State = "default";

    const toDefault = () => {
      if (state === "default") return;
      state = "default";
      gsap.to(ring, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(label, { opacity: 0, duration: 0.15 });
    };

    const toView = () => {
      if (state === "view") return;
      state = "view";
      gsap.to(ring, {
        width: 64,
        height: 64,
        backgroundColor: "#fff", // ✅ white fill — difference mode flips it
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.15 });
      gsap.to(label, { opacity: 1, duration: 0.25, delay: 0.05 });
    };

    const detect = (e: MouseEvent) => {
      const hovering = !!(e.target as HTMLElement).closest(
        "[data-cursor='view']",
      );

      if (hovering) {
        toView();
      } else {
        toDefault();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      move(e);
      detect(e);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* ✅ Wrapper with mix-blend-mode — this is the only real change */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference", // ✅ KEY — auto inverts on dark bg
        }}
      >
        {/* Dot — always white, difference makes it black on white, white on black */}
        <div
          ref={dotRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 6,
            height: 6,
            backgroundColor: "#ffffff", // ✅ white
            borderRadius: "50%",
            pointerEvents: "none",
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
            border: "1.5px solid #ffffff", // ✅ white border
            borderRadius: "50%",
            pointerEvents: "none",
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
              color: "#000", // ✅ black text — difference flips to white on dark bg
              opacity: 0,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            VIEW
          </span>
        </div>
      </div>
    </>
  );
}

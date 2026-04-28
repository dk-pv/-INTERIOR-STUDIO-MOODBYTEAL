"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam || !inView) return;

    beam.animate(
      [
        { height: "0%", opacity: 0 },
        { height: "100%", opacity: 1 },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.16,1,0.3,1)",
        fill: "forwards",
      },
    );
  }, [inView]);

  return (
    <>
      <section
        ref={sectionRef}
        data-theme="light"
        style={{
          position: "relative",
          minHeight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
          padding: "clamp(48px, 7vw, 90px) clamp(24px, 5vw, 72px)",
        }}
      >
        {/* Vertical beam — dark on white bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            ref={beamRef}
            style={{
              width: 1,
              height: "0%",
              background:
                "linear-gradient(to bottom, transparent, #0a0a0a 30%, rgba(10,10,10,0.3) 80%, transparent)",
              boxShadow: "0 0 32px rgba(10,10,10,0.08)",
            }}
          />
        </div>

        {/* Main content */}
        <div style={{ position: "relative", maxWidth: 960, width: "100%" }}>
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Our Identity
          </motion.p>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 6vw, 6rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#0a0a0a",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Driven by{" "}
            <span style={{ color: "rgba(10,10,10,0.25)" }}>intuition.</span>
            <br />
            Tone and{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(10,10,10,0.55)",
              }}
            >
              reality.
            </span>
          </motion.h2>
          {/* Body text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.55 }}
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              color: "rgba(10,10,10,0.5)",
              lineHeight: 1.85,
              letterSpacing: "0.01em",
              textAlign: "center",
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            A design language rooted in contrast, depth, and emotion. We build
            environments that speak beyond structure — where every material,
            shadow, and detail carries intention.
          </motion.p>
        </div>
      </section>

      <style>{`
        /* ── Pillars: tablet → 2 col, mobile → 1 col ── */
        @media (max-width: 700px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 440px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }    
      `}</style>
    </>
  );
}

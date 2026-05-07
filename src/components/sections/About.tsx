"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "DRIVEN BY", color: "#0a0a0a", delay: 0.1 },
  { text: "INTUITION", color: "#c0bdb5", delay: 0.55 },
  { text: "TONE AND", color: "#0a0a0a", delay: 1.0 },
  { text: "REALITY.", color: "#8a8880", delay: 1.45 },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [scanLine, setScanLine] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setScanLine(true), 200);
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
          backgroundColor: "#ffffff",
          padding: "clamp(56px, 8vw, 100px) clamp(24px, 5vw, 72px)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            pointerEvents: "none",
          }}
        />

        <motion.div
          aria-hidden
          initial={{ top: "0%", opacity: 0 }}
          animate={scanLine ? { top: "110%", opacity: [0, 0.55, 0.55, 0] } : {}}
          transition={{ duration: 1.6, ease: "linear", delay: 0 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(90deg, transparent 0%, #0a0a0a 20%, #0a0a0a 80%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 960,
            width: "100%",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.75)",
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            Our Identity
          </motion.p>

          <h2
            style={{
              fontFamily: "'Bitcount Grid Double', monospace",
              fontSize: "clamp(2.4rem, 5.2vw, 5.2rem)",
              lineHeight: 1.2,
              fontWeight: 400,
              textAlign: "center",
              margin: "0 0 32px",
              letterSpacing: "0.04em",
            }}
          >
            {lines.map(({ text, color, delay }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={
                  inView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}
                }
                transition={{
                  duration: 0.75,
                  delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  display: "block",
                  color,
                  textShadow:
                    color === "#0a0a0a" ? "0 0 1px rgba(0,0,0,0.15)" : "none",
                }}
              >
                {text}
              </motion.span>
            ))}
          </h2>

          {/* Separator — animated dot dash */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.9, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              marginBottom: 28,
              transformOrigin: "center",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  inView ? { opacity: i === 4 ? 1 : 0.25, scale: 1 } : {}
                }
                transition={{ delay: 1.9 + i * 0.04, duration: 0.3 }}
                style={{
                  width: i === 4 ? 6 : 4,
                  height: i === 4 ? 6 : 4,
                  borderRadius: "50%",
                  backgroundColor: "#0a0a0a",
                  display: "inline-block",
                  alignSelf: "center",
                }}
              />
            ))}
          </motion.div>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.1 }}
            style={{
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              color: "rgba(10,10,10,0.45)",
              lineHeight: 1.85,
              letterSpacing: "0.01em",
              textAlign: "center",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            A design language rooted in contrast, depth, and emotion. We build
            environments that speak beyond structure — where every material,
            shadow, and detail carries intention.
          </motion.p>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 440px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

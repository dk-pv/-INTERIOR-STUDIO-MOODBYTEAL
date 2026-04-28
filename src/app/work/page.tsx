"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectShowcase from "@/components/sections/WorkGrid";

const EXPO = [0.16, 1, 0.3, 1] as const;
const LETTERS = "OUR WORKS".split("");

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
      <section
        style={{
          minHeight: "82vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding:
            "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 72px) clamp(36px, 6vw, 60px)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
        }}
      >
        <div className="grain" />

        {/* Top-right label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: "clamp(20px, 3.5vw, 36px)",
            right: "clamp(24px, 6vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              backgroundColor: "rgba(10,10,10,0.2)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.28)",
            }}
          >
            03 / Work
          </span>
        </motion.div>

        {/* Giant hover letters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EXPO }}
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "0.01em",
            zIndex: 1,
          }}
        >
          {LETTERS.map((char, i) => (
            <motion.span
              key={i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                y: hoveredIndex === i ? -12 : 0,
                opacity:
                  hoveredIndex === null
                    ? 1
                    : hoveredIndex === i
                      ? 1
                      : 1 - Math.min(Math.abs(hoveredIndex - i) * 0.22, 0.7),
              }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(70px, 14vw, 180px)",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: "rgba(10,10,10,0.04)",
                WebkitTextStroke: "1px rgba(10,10,10,0.18)",
                lineHeight: 1,
                cursor: "default",
                userSelect: "none",
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom heading block */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{ display: "flex", alignItems: "flex-end", gap: "0.12em" }}
          >
            {["Making", " things", " matter."].map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "108%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + i * 0.12,
                    ease: EXPO,
                  }}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                    fontWeight: 400,
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    margin: 0,
                    color:
                      i === 0
                        ? "#0a0a0a"
                        : i === 1
                          ? "rgba(10,10,10,0.45)"
                          : "rgba(10,10,10,0.18)",
                    fontStyle: i === 2 ? "italic" : "normal",
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtle sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EXPO }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.22)",
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            12 projects — Interiors &amp; Spaces
          </motion.p>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: EXPO }}
          style={{
            position: "absolute",
            bottom: "clamp(36px, 6vw, 60px)",
            left: "clamp(24px, 6vw, 96px)",
            right: "clamp(24px, 6vw, 96px)",
            height: 1,
            backgroundColor: "rgba(10,10,10,0.08)",
            transformOrigin: "left",
          }}
        />
      </section>

      <ProjectShowcase />
    </main>
  );
}

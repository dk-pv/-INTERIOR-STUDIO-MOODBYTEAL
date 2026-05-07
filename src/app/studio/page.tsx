"use client";
import Founder from "@/components/sections/Founder";
import MoodyTealConcept from "@/components/sections/MoodyTealConcept";
import { motion } from "framer-motion";
import { useState } from "react";

const EXPO = [0.16, 1, 0.3, 1] as const;
const LETTERS = "STUDIO".split("");

const HERO_LINES = [
  { text: "We design spaces,", color: "#0a0a0a", italic: false },
  { text: "that feel", color: "rgba(10,10,10,0.42)", italic: false },
  { text: "before they function.", color: "rgba(10,10,10,0.18)", italic: true },
];

export default function StudioPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .studio-hero {
          min-height: 82vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(60px, 8vw, 96px) clamp(20px, 5vw, 72px) clamp(36px, 6vw, 60px);
          position: relative;
          overflow: hidden;
          background-color: #f5f4f0;
        }

        /* ── Page label (top-right) ─────────────────────────── */
        .studio-label {
          position: absolute;
          top: clamp(20px, 3.5vw, 36px);
          right: clamp(20px, 6vw, 96px);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .studio-label-line {
          width: 20px;
          height: 1px;
          background-color: rgba(10,10,10,0.2);
        }
        .studio-label-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.28);
        }

        /* ── Ghost "STUDIO" letters (centred background) ─────── */
        .studio-ghost-letters {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 0.01em;
          z-index: 1;
          pointer-events: none;
        }
        .studio-ghost-letter {
          font-family: var(--font-heading);
          font-size: clamp(52px, 11vw, 200px);
          font-weight: 400;
          letter-spacing: -0.05em;
          color: rgba(10,10,10,0.03);
          -webkit-text-stroke: 1px rgba(10,10,10,0.22);
          line-height: 1;
          cursor: default;
          user-select: none;
          display: inline-block;
          pointer-events: auto;
        }

        /* ── Hero headline block ─────────────────────────────── */
        .studio-headline-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 34vh;
        }

        /* Desktop: single centred row with wrapping */
        .studio-headline-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: center;
          column-gap: 0.22em;
          row-gap: 0.08em;
          max-width: 1500px;
          text-align: center;
        }
        .studio-headline-piece {
          overflow: hidden;
        }
        .studio-headline-h1 {
          font-family: var(--font-bitcount);
          font-size: clamp(2.2rem, 5.5vw, 6.8rem);
          font-weight: 400;
          line-height: 0.92;
          letter-spacing: -0.025em;
          margin: 0;
          white-space: nowrap;
        }

        /* ── Tablet  (≤ 768px) ──────────────────────────────── */
        @media (max-width: 768px) {
          .studio-ghost-letters {
            top: 38%;
          }
          .studio-ghost-letter {
            font-size: clamp(38px, 9vw, 80px);
          }
          .studio-headline-wrap {
            margin-top: 30vh;
          }
          .studio-headline-inner {
            flex-direction: column;
            align-items: center;
            row-gap: 0.12em;
            padding: 0 clamp(12px, 4vw, 32px);
          }
          .studio-headline-h1 {
            font-size: clamp(2rem, 7.5vw, 3.6rem);
            white-space: normal;
            text-align: center;
          }
        }

        /* ── Mobile  (≤ 480px) ──────────────────────────────── */
        @media (max-width: 480px) {
          .studio-hero {
            min-height: 90svh;
            padding: 56px 18px 32px;
          }
          .studio-ghost-letters {
            top: 35%;
          }
          .studio-ghost-letter {
            font-size: clamp(30px, 8vw, 54px);
          }
          .studio-headline-wrap {
            margin-top: 28vh;
          }
          .studio-headline-h1 {
            font-size: clamp(1.75rem, 8.5vw, 2.8rem);
            line-height: 1;
          }
        }

        /* ── Bottom rule ────────────────────────────────────── */
        .studio-bottom-rule {
          position: absolute;
          bottom: clamp(36px, 6vw, 60px);
          left: clamp(20px, 6vw, 96px);
          right: clamp(20px, 6vw, 96px);
          height: 1px;
          background-color: rgba(10,10,10,0.08);
          transform-origin: left;
        }
      `}</style>

      <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
        <section className="studio-hero">
          <div className="grain" />

          {/* ── Top-right page label ── */}
          <motion.div
            className="studio-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="studio-label-line" />
            <span className="studio-label-text">02 / Studio</span>
          </motion.div>

          {/* ── Ghost "STUDIO" background letters ── */}
          <motion.div
            className="studio-ghost-letters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EXPO }}
          >
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                className="studio-ghost-letter"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  y: hoveredIndex === i ? -12 : 0,
                  scale: hoveredIndex === i ? 1.06 : 1,
                  opacity:
                    hoveredIndex === null
                      ? 1
                      : hoveredIndex === i
                        ? 1
                        : 1 - Math.min(Math.abs(hoveredIndex - i) * 0.28, 0.75),
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* ── Hero headline ── */}
          <div className="studio-headline-wrap">
            <div className="studio-headline-inner">
              {HERO_LINES.map((item, i) => (
                <div key={i} className="studio-headline-piece">
                  <motion.h1
                    className="studio-headline-h1"
                    initial={{ y: "108%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.08 + i * 0.08,
                      ease: EXPO,
                    }}
                    style={{
                      color: item.color,
                      fontStyle: item.italic ? "italic" : "normal",
                    }}
                  >
                    {item.text}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom rule ── */}
          <motion.div
            className="studio-bottom-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: EXPO }}
          />
        </section>

        <MoodyTealConcept />
        <Founder />
      </main>
    </>
  );
}

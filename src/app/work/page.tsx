"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectShowcase from "@/components/sections/WorkGrid";

const EXPO = [0.16, 1, 0.3, 1] as const;
const LETTERS = "OUR WORK".split("");

const HERO_LINES = [
  { text: "Making", color: "#0a0a0a", italic: false },
  { text: "things", color: "rgba(10,10,10,0.45)", italic: false },
  { text: "matter.", color: "rgba(10,10,10,0.18)", italic: true },
];

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        /* ── Hero section ───────────────────────────────────── */
        .work-hero {
          min-height: 82vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(60px, 8vw, 96px) clamp(20px, 5vw, 72px) clamp(36px, 6vw, 60px);
          position: relative;
          overflow: hidden;
          background-color: #f5f4f0;
        }

        /* ── Top-right label ────────────────────────────────── */
        .work-label {
          position: absolute;
          top: clamp(20px, 3.5vw, 36px);
          right: clamp(20px, 6vw, 96px);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .work-label-line {
          width: 20px;
          height: 1px;
          background-color: rgba(10,10,10,0.2);
        }
        .work-label-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.28);
        }

        /* ── Ghost "OUR WORK" letters ───────────────────────── */
        .work-ghost-letters {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 0.01em;
          z-index: 1;
          pointer-events: none;
          white-space: nowrap;
        }
        .work-ghost-letter {
          font-family: var(--font-heading);
          font-size: clamp(38px, 8.5vw, 200px);
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

        /* ── Bottom headline block ──────────────────────────── */
        .work-headline-wrap {
          position: relative;
          z-index: 2;
        }
        .work-headline-inner {
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 0.12em;
        }
        .work-headline-piece {
          overflow: hidden;
        }
        .work-headline-h1 {
          font-family: var(--font-bitcount);
          font-size: clamp(2.4rem, 6vw, 6rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.015em;
          margin: 0;
          white-space: nowrap;
        }

        /* ── Bottom rule ────────────────────────────────────── */
        .work-bottom-rule {
          position: absolute;
          bottom: clamp(36px, 6vw, 60px);
          left: clamp(20px, 6vw, 96px);
          right: clamp(20px, 6vw, 96px);
          height: 1px;
          background-color: rgba(10,10,10,0.08);
          transform-origin: left;
        }

        /* ── Tablet (≤ 768px) ───────────────────────────────── */
        @media (max-width: 768px) {
          .work-ghost-letters {
            top: 38%;
          }
          .work-ghost-letter {
            font-size: clamp(28px, 7.5vw, 72px);
          }
          .work-headline-inner {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.14em;
          }
          .work-headline-h1 {
            font-size: clamp(2rem, 7vw, 3.6rem);
            white-space: normal;
          }
        }

        /* ── Mobile (≤ 480px) ───────────────────────────────── */
        @media (max-width: 480px) {
          .work-hero {
            min-height: 90svh;
            padding: 56px 18px 32px;
          }
          .work-ghost-letters {
            top: 35%;
          }
          .work-ghost-letter {
            font-size: clamp(22px, 7vw, 46px);
          }
          .work-headline-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.06em;
          }
          .work-headline-h1 {
            font-size: clamp(1.9rem, 9vw, 2.8rem);
            line-height: 1;
            white-space: normal;
          }
        }
      `}</style>

      <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
        <section className="work-hero">
          <div className="grain" />

          {/* ── Top-right page label ── */}
          <motion.div
            className="work-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="work-label-line" />
            <span className="work-label-text">03 / Work</span>
          </motion.div>

          {/* ── Ghost "OUR WORK" background letters ── */}
          <motion.div
            className="work-ghost-letters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EXPO }}
          >
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                className="work-ghost-letter"
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
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* ── Bottom headline ── */}
          <div className="work-headline-wrap">
            <div className="work-headline-inner">
              {HERO_LINES.map((item, i) => (
                <div key={i} className="work-headline-piece">
                  <motion.h1
                    className="work-headline-h1"
                    initial={{ y: "108%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.12,
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
            className="work-bottom-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: EXPO }}
          />
        </section>

        <ProjectShowcase />
      </main>
    </>
  );
}

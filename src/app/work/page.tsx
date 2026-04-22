"use client";

import { motion } from "framer-motion";
import ProjectShowcase from "@/components/sections/WorkGrid";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>

      {/* ═══════════════════════════════════════════
          HERO — White editorial layout
      ═══════════════════════════════════════════ */}
      <section
        data-theme="light"
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 96px) clamp(52px, 8vw, 80px)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
        }}
      >
        {/* Ghost watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EXPO }}
          aria-hidden
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(100px, 20vw, 280px)",
            fontWeight: 400,
            letterSpacing: "-0.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(10,10,10,0.05)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          WORK
        </motion.p>

        {/* Grain */}
        <div className="grain" />

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "absolute",
            top: "clamp(24px, 4vw, 48px)",
            right: "clamp(24px, 6vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 20, height: 1, backgroundColor: "rgba(10,10,10,0.25)" }} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
            }}
          >
            03 / Work
          </span>
        </motion.div>

        {/* Main heading */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
              marginBottom: 24,
            }}
          >
            Selected Works
          </motion.p>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.15em" }}>
            {["Our", " Work"].map((word, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.14, ease: EXPO }}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(3.5rem, 10vw, 9.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    color: i === 0 ? "#0a0a0a" : "rgba(10,10,10,0.25)",
                    fontStyle: i === 1 ? "italic" : "normal",
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.1, ease: EXPO }}
          style={{
            position: "absolute",
            bottom: "clamp(52px, 8vw, 80px)",
            left: "clamp(24px, 6vw, 96px)",
            right: "clamp(24px, 6vw, 96px)",
            height: 1,
            backgroundColor: "rgba(10,10,10,0.1)",
            transformOrigin: "left",
          }}
        />
      </section>

      {/* Project grid */}
      <ProjectShowcase />
    </main>
  );
}
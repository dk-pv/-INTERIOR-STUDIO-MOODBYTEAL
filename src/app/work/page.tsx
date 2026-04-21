"use client";


import { motion } from "framer-motion";
import ProjectShowcase from "@/components/sections/WorkGrid";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function WorkPage() {
  const headingWords = ["Our", "Work"];

  return (
    <main style={{ backgroundColor: "#f9f8f6", color: "#0a0a0a" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding:
            "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px) clamp(52px, 8vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(100px, 20vw, 260px)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.05)",
          }}
        >
          WORK
        </motion.p>

        {/* heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 20 }}
          >
            <span style={{ fontSize: 10, letterSpacing: "0.3em" }}>
              Selected Works
            </span>
          </motion.div>

          <div style={{ display: "flex", gap: 10 }}>
            {headingWords.map((word, i) => (
              <motion.h1
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: EXPO,
                }}
                style={{
                  fontSize: "clamp(3.8rem, 10vw, 9rem)",
                  fontWeight: i === 1 ? 700 : 300,
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <ProjectShowcase />
    </main>
  );
}
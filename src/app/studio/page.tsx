"use client";
import Founder from "@/components/sections/Founder";
import MoodyTealConcept from "@/components/sections/MoodyTealConcept";
import { motion } from "framer-motion";
import { useState } from "react";

const EXPO = [0.16, 1, 0.3, 1] as const;
const LETTERS = "STUDIO".split("");
export default function StudioPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
      {" "}
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
        {" "}
        <div className="grain" /> {/* Top-right label */}{" "}
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
          {" "}
          <div
            style={{
              width: 20,
              height: 1,
              backgroundColor: "rgba(10,10,10,0.2)",
            }}
          />{" "}
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.28)",
            }}
          >
            {" "}
            02 / Studio{" "}
          </span>{" "}
        </motion.div>{" "}
        {/* Giant hover letters */}{" "}
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
            gap: "0.015em",
            zIndex: 1,
          }}
        >
          {" "}
          {LETTERS.map((char, i) => (
            <motion.span
              key={i}
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
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(80px, 16vw, 200px)",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: "rgba(10,10,10,0.03)",
                WebkitTextStroke: "1px rgba(10,10,10,0.22)",
                lineHeight: 1,
                cursor: "default",
                userSelect: "none",
                display: "inline-block",
              }}
            >
              {" "}
              {char}{" "}
            </motion.span>
          ))}{" "}
        </motion.div>{" "}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "34vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "center",
              rowGap: "0.02em",
              columnGap: "0px",
              maxWidth: "1500px",
              textAlign: "center",
            }}
          >
            {[
              {
                text: "We design spaces , ",
                color: "#0a0a0a",
              },

              {
                text: "that feel",
                color: "rgba(10,10,10,0.42)",
              },

              {
                text: "before they function.",
                color: "rgba(10,10,10,0.18)",
                italic: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  overflow: "hidden",
                  marginRight: "0.18em",
                }}
              >
                <motion.h1
                  initial={{ y: "108%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.08 + i * 0.08,
                    ease: EXPO,
                  }}
                  style={{
                    fontFamily: "var(--font-bitcount)",
                    fontSize: "clamp(2.8rem, 6vw, 6.8rem)",
                    fontWeight: 400,
                    lineHeight: 0.92,
                    letterSpacing: "-0.025em",
                    margin: 0,
                    color: item.color,
                    fontStyle: item.italic ? "italic" : "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom rule */}{" "}
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
        />{" "}
      </section>{" "}
      <MoodyTealConcept />
      <Founder />
    </main>
  );
}

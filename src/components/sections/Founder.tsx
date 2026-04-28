"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "8+", label: "Years" },
  { value: "48+", label: "Projects" },
  { value: "2", label: "Countries" },
];

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      data-theme="light"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(48px, 7vw, 90px) clamp(24px, 5vw, 72px)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ── Label + Divider ── */}
        <div style={{ marginBottom: 40 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
              marginBottom: 16,
            }}
          >
            Founder
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: 1,
              backgroundColor: "rgba(10,10,10,0.12)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* ── Grid: Image + Text ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 3.5",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/founder.jpg"
              alt="Founder – TEAL CULTURE"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />

            {/* Bottom fade — very subtle on white section */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.15), transparent 60%)",
              }}
            />

            {/* Floating name badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                backgroundColor: "rgba(245,244,240,0.92)",
                backdropFilter: "blur(12px)",
                padding: "10px 14px",
                borderRadius: 4,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  letterSpacing: "-0.02em",
                  color: "#0a0a0a",
                }}
              >
                Sahil Haneefa
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  color: "rgba(10,10,10,0.4)",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}
              >
                Founder & Design Director
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#0a0a0a",
              }}
            >
              Designing beyond
              <br />
              <span
                style={{ color: "rgba(10,10,10,0.3)", fontStyle: "italic" }}
              >
                visual boundaries
              </span>
            </h2>

            <p
              style={{
                fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                lineHeight: 1.85,
                color: "rgba(10,10,10,0.52)",
              }}
            >
              TEAL Culture was founded with a singular vision — to redefine how
              spaces are experienced. Not through visual spectacle alone, but
              through a deep understanding of how environments shape feeling,
              behaviour, and memory.
            </p>

            <p
              style={{
                fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                lineHeight: 1.85,
                color: "rgba(10,10,10,0.38)",
              }}
            >
              Every project is a conversation between materiality and meaning,
              between structure and soul.
            </p>

            {/* Pull quote */}
            <div
              style={{
                borderLeft: "2px solid #0a0a0a",
                paddingLeft: 14,
                margin: "4px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  color: "rgba(10,10,10,0.7)",
                  lineHeight: 1.5,
                }}
              >
                "Driven by intuition, tone and reality."
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: 28,
                paddingTop: 20,
                borderTop: "1px solid rgba(10,10,10,0.08)",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      letterSpacing: "-0.04em",
                      color: "#0a0a0a",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(10,10,10,0.3)",
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

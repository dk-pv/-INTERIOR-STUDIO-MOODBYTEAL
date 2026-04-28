"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const founders = [
  {
    name: "Sahil Haneefa",
    title: "Founder & Design Director",
  },
  {
    name: "Aryan Mehta",
    title: "Co-Founder & Creative Lead",
  },
  {
    name: "Priya Nair",
    title: "Co-Founder & Strategy Head",
  },
];

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
            Founders
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

        {/* ── Section Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            color: "#0a0a0a",
            marginBottom: "clamp(32px, 5vw, 56px)",
          }}
        >
          Designing beyond
          <br />
          <span style={{ color: "rgba(10,10,10,0.3)", fontStyle: "italic" }}>
            visual boundaries
          </span>
        </motion.h2>

        {/* ── Founders Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + index * 0.12,
              }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 3.5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/founder.jpg"
                  alt={`${founder.name} – TEAL CULTURE`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />

                {/* Bottom fade */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.15), transparent 60%)",
                  }}
                />

                {/* Name badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.12 }}
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
                    {founder.name}
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
                    {founder.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Pull Quote + Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          style={{
            marginTop: "clamp(40px, 6vw, 64px)",
            paddingTop: "clamp(32px, 4vw, 48px)",
            borderTop: "1px solid rgba(10,10,10,0.08)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(24px, 4vw, 48px)",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* Description + Quote */}
          <div
            style={{
              flex: "1 1 320px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
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

            <div
              style={{
                borderLeft: "2px solid #0a0a0a",
                paddingLeft: 14,
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
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 36,
              flexShrink: 0,
              alignItems: "flex-start",
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
    </section>
  );
}

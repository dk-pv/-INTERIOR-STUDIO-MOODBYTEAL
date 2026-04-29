"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const founders = [
  {
    name: "Sahil Haneefa",
    title: "Founder & CEO",
    index: "01",
  },
  {
    name: "Muhammed Rashid",
    title: "Co-Founder, Execution Director",
    index: "02",
  },
  {
    name: "Amrithapriya",
    title: "Co-Founder, Creative Director",
    index: "03",
  },
];

function FounderCard({
  founder,
  inView,
  delay,
}: {
  founder: (typeof founders)[0];
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column", gap: 0 }}
    >
      {/* ── Image Container ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 3.8",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        {/* Ghost index number */}
        <motion.span
          animate={{ opacity: hovered ? 0.06 : 0.03 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            top: -10,
            right: 8,
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(5rem, 10vw, 9rem)",
            fontWeight: 400,
            letterSpacing: "-0.06em",
            color: "#0a0a0a",
            lineHeight: 1,
            zIndex: 2,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {founder.index}
        </motion.span>

        {/* Image with zoom on hover */}
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src="/images/founder.jpg"
            alt={`${founder.name} – MoodbyTEAL`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </motion.div>

        {/* Dark vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Animated reveal line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 2,
            backgroundColor: "#f5f4f0",
            transformOrigin: "left",
            zIndex: 3,
          }}
        />

        {/* Name badge — slides up on hover */}
        <motion.div
          animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0.82 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            zIndex: 3,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
              letterSpacing: "-0.02em",
              color: "#f5f4f0",
              lineHeight: 1.2,
              marginBottom: 5,
            }}
          >
            {founder.name}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <motion.div
              animate={{ width: hovered ? 20 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: 1,
                backgroundColor: "rgba(245,244,240,0.5)",
                overflow: "hidden",
              }}
            />
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.22em",
                color: "rgba(245,244,240,0.55)",
                textTransform: "uppercase",
              }}
            >
              {founder.title}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Below image: name row ── */}
      <div
        style={{
          paddingTop: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(10,10,10,0.1)",
          paddingBottom: 14,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
          }}
        >
          {founder.name}
        </p>

        {/* Animated arrow on hover */}
        <motion.svg
          animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="#0a0a0a"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.56rem",
          letterSpacing: "0.2em",
          color: "rgba(10,10,10,0.35)",
          textTransform: "uppercase",
          paddingTop: 10,
        }}
      >
        {founder.title}
      </p>
    </motion.div>
  );
}

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

        {/* ── Heading ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: "clamp(32px, 5vw, 56px)",
          }}
        >
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
              margin: 0,
            }}
          >
            The minds
            <br />
            <span style={{ color: "rgba(10,10,10,0.28)", fontStyle: "italic" }}>
              behind the studio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(10,10,10,0.3)",
              textTransform: "uppercase",
              alignSelf: "flex-end",
            }}
          >
            Est. 2020 — UAE
          </motion.p>
        </div>

        {/* ── Founders Grid ── */}
        <div
          className="founders-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(20px, 3vw, 40px)",
          }}
        >
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.name}
              founder={founder}
              inView={inView}
              delay={0.15 + index * 0.14}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .founders-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (min-width: 721px) and (max-width: 1000px) {
          .founders-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

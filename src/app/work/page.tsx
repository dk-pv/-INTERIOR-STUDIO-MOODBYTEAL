"use client";

import { useEffect, useRef } from "react";
import { motion, useInView} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectShowcase from "@/components/sections/WorkGrid";

gsap.registerPlugin(ScrollTrigger);

const EXPO = [0.16, 1, 0.3, 1] as const;

// ── Marquee ticker ────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "Villa Interior",
  "Private Residence",
  "Commercial Space",
  "Apartment Design",
  "Hospitality",
  "Retail Environment",
];

function Ticker() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "11px 0",
        backgroundColor: "#f9f8f6",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        style={{ display: "flex", whiteSpace: "nowrap", gap: 0 }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 28,
              paddingRight: 28,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.35)",
            }}
          >
            {item}
            {/* dot separator */}
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "#4a9d8f",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Footer statement ──────────────────────────────────────────────────────────
function FooterStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 8vw, 120px)",
        backgroundColor: "#f9f8f6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost number */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: EXPO }}
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "clamp(24px, 6vw, 80px)",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,0,0,0.05)",
          userSelect: "none",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        ∞
      </motion.span>

      <div style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EXPO }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.3)",
            marginBottom: 28,
          }}
        >
          Our Philosophy
        </motion.p>

        {/* Teal accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: EXPO, delay: 0.1 }}
          style={{
            width: 40,
            height: 2,
            backgroundColor: "#4a9d8f",
            transformOrigin: "left",
            marginBottom: 28,
          }}
        />

        {/* Statement */}
        {[
          "Every project is a balance",
          "between function, emotion,",
          "and spatial clarity.",
        ].map((line, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.p
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: EXPO, delay: 0.18 + i * 0.13 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.7rem, 3.6vw, 3rem)",
                fontWeight: i === 2 ? 700 : 400,
                fontStyle: i === 1 ? "italic" : "normal",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: i === 2 ? "#0a0a0a" : "rgba(0,0,0,0.5)",
              }}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Main Work Page ────────────────────────────────────────────────────────────
export default function WorkPage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered line reveals on load — chars animate up
      gsap.fromTo(
        ".work-hero-char",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.025,
          delay: 0.2,
        },
      );
      // Subtitle + meta fade in
      gsap.fromTo(
        ".work-hero-sub",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.12,
          delay: 0.7,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ["Our", "Work"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
      `}</style>

      <main style={{ backgroundColor: "#f9f8f6", color: "#0a0a0a" }}>
        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            minHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding:
              "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px) clamp(52px, 8vw, 80px)",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#f9f8f6",
          }}
        >
          {/* Page index — top right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              position: "absolute",
              top: "clamp(28px, 4vw, 48px)",
              right: "clamp(24px, 8vw, 120px)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 18,
                height: 1,
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.3)",
              }}
            >
              03 / Work
            </span>
          </motion.div>

          {/* Grain */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/noise.jpg')",
              backgroundRepeat: "repeat",
              opacity: 0.03,
              pointerEvents: "none",
            }}
          />

          {/* Ghost watermark */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.05 }}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(100px, 20vw, 260px)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(0,0,0,0.05)",
              whiteSpace: "nowrap",
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
            }}
          >
            WORK
          </motion.p>

          {/* Main grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "flex-end",
              gap: "clamp(32px, 6vw, 80px)",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* LEFT — heading */}
            <div>
              <div
                className="work-hero-sub"
                style={{ opacity: 0, marginBottom: 20 }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.34em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.32)",
                  }}
                >
                  Selected Works
                </span>
              </div>

              {/* Heading — word by word clip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0 0.3em",
                  overflow: "hidden",
                }}
              >
                {headingWords.map((word, wi) => (
                  <div key={wi} style={{ overflow: "hidden" }}>
                    {word.split("").map((char, ci) => (
                      <span
                        key={ci}
                        className="work-hero-char"
                        style={{
                          display: "inline-block",
                          opacity: 0,
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(3.8rem, 10vw, 9rem)",
                          fontWeight: wi === 1 ? 700 : 300,
                          fontStyle: wi === 0 ? "italic" : "normal",
                          lineHeight: 1.0,
                          letterSpacing: "-0.04em",
                          color: "#0a0a0a",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {/* space between words */}
                    <span
                      className="work-hero-char"
                      style={{
                        display: "inline-block",
                        opacity: 0,
                        width: "0.3em",
                      }}
                    >
                      &nbsp;
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — descriptor */}
            <div
              style={{
                maxWidth: 240,
                paddingBottom: 8,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                flexShrink: 0,
              }}
            >
              {/* Vertical draw line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, ease: EXPO, delay: 0.9 }}
                style={{
                  width: 1,
                  height: 44,
                  backgroundColor: "#4a9d8f",
                  transformOrigin: "top",
                }}
              />
              <p
                className="work-hero-sub"
                style={{
                  opacity: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  lineHeight: 1.8,
                  color: "rgba(0,0,0,0.42)",
                  letterSpacing: "0.01em",
                }}
              >
                A curated selection of spaces designed with precision, emotion,
                and timeless minimalism.
              </p>
              <p
                className="work-hero-sub"
                style={{
                  opacity: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.22)",
                }}
              >
                UAE / IND
              </p>
            </div>
          </div>

          {/* Bottom rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: EXPO, delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "clamp(52px, 8vw, 80px)",
              left: "clamp(24px, 8vw, 120px)",
              right: "clamp(24px, 8vw, 120px)",
              height: 1,
              backgroundColor: "rgba(0,0,0,0.09)",
              transformOrigin: "left",
              zIndex: 1,
            }}
          />
        </section>

        {/* ── TICKER ─────────────────────────────────────────────────────── */}
        <Ticker />

        {/* ── PROJECT GRID — untouched component ─────────────────────────── */}
        <ProjectShowcase />

        {/* ── FOOTER STATEMENT ───────────────────────────────────────────── */}
        <FooterStatement />
      </main>
    </>
  );
}

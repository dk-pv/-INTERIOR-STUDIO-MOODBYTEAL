"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam || !inView) return;

    beam.animate(
      [
        { height: "0%", opacity: 0 },
        { height: "100%", opacity: 1 },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.16,1,0.3,1)",
        fill: "forwards",
      },
    );
  }, [inView]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          ABOUT — White section with dark beam
      ═══════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        data-theme="light"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 96px)",
        }}
      >
        {/* Vertical beam — dark on white bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            ref={beamRef}
            style={{
              width: 1,
              height: "0%",
              background:
                "linear-gradient(to bottom, transparent, #0a0a0a 30%, rgba(10,10,10,0.3) 80%, transparent)",
              boxShadow: "0 0 32px rgba(10,10,10,0.08)",
            }}
          />
        </div>

        {/* Main content */}
        <div style={{ position: "relative", maxWidth: 960, width: "100%" }}>
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            Our Identity
          </motion.p>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 6vw, 6rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#0a0a0a",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            We Shape{" "}
            <span style={{ color: "rgba(10,10,10,0.25)" }}>Spaces</span>
            <br />
            That{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(10,10,10,0.55)",
              }}
            >
              Feel.
            </span>
          </motion.h2>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.55 }}
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              color: "rgba(10,10,10,0.5)",
              lineHeight: 1.85,
              letterSpacing: "0.01em",
              textAlign: "center",
              maxWidth: 520,
              margin: "0 auto 64px",
            }}
          >
            A design language rooted in contrast, depth, and emotion. We build
            environments that speak beyond structure — where every material,
            shadow, and detail carries intention.
          </motion.p>

          {/* Three pillars — horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              backgroundColor: "rgba(10,10,10,0.1)",
              border: "1px solid rgba(10,10,10,0.1)",
            }}
          >
            {[
              {
                num: "01",
                title: "Spatial Harmony",
                desc: "Every proportion, every threshold — considered.",
              },
              {
                num: "02",
                title: "Emotional Depth",
                desc: "Interiors that evoke, not just impress.",
              },
              {
                num: "03",
                title: "Timeless Craft",
                desc: "Material choices built to outlast trends.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: "#f5f4f0",
                  padding: "clamp(24px, 4vw, 48px) clamp(20px, 3vw, 36px)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    color: "rgba(10,10,10,0.28)",
                    marginBottom: 20,
                  }}
                >
                  {item.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                    letterSpacing: "-0.02em",
                    color: "#0a0a0a",
                    fontWeight: 400,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(10,10,10,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MOODY TEAL CONCEPT — Dark contrast strip
      ═══════════════════════════════════════════ */}
      <section
        data-theme="dark"
        style={{
          backgroundColor: "#0a0a0a",
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 96px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large ghost text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            letterSpacing: "-0.06em",
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          TEAL
        </div>

        <div
          className="concept-grid"
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 96px)",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.3)",
                marginBottom: 24,
              }}
            >
              The Studio
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 4vw, 4rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#f5f4f0",
                fontWeight: 400,
              }}
            >
              moody
              <span style={{ color: "rgba(245,244,240,0.28)" }}>TEAL</span>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                color: "rgba(245,244,240,0.45)",
                lineHeight: 1.85,
              }}
            >
              moodyTEAL is not just a name — it is a state of mind. The teal hue
              exists between blue and green, between calm and depth. It
              represents the emotional register we seek in every project:
              quietly powerful, never loud.
            </p>

            <div
              className="stats-row"
              style={{
                marginTop: 40,
                paddingTop: 32,
                borderTop: "1px solid rgba(245,244,240,0.1)",
                display: "flex",
                gap: 40,
              }}
            >
              {[
                { label: "Founded", value: "2020" },
                { label: "Projects", value: "48+" },
                { label: "Awards", value: "12" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                      letterSpacing: "-0.04em",
                      color: "#f5f4f0",
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
                      color: "rgba(245,244,240,0.3)",
                      marginTop: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive styles only */}
      <style>{`
        /* ── Pillars: tablet → 2 col, mobile → 1 col ── */
        @media (max-width: 700px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 440px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* ── Concept dark section: stack on mobile ── */
        @media (max-width: 680px) {
          .concept-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Stats row: space them evenly when stacked */
          .stats-row {
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
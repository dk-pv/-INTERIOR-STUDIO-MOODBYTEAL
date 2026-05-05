"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.7, ease },
});

export default function MoodyTealConcept() {
  return (
    <>
      <section
        data-theme="dark"
        style={{
          backgroundColor: "#0a0a0a",
          padding: "clamp(24px, 3.5vw, 48px) clamp(24px, 6vw, 96px)", // ↓ tighter
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost text — subtler */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4rem, 12vw, 14rem)",
            letterSpacing: "-0.06em",
            color: "rgba(255,255,255,0.025)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          MOOD
        </div>

        <div
          className="concept-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto 0 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 5vw, 56px)", // ↓ gap reduced
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <motion.p
              {...fadeUp(0)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.3)",
                marginBottom: 12, // ↓ was 16
              }}
            >
              The Studio
            </motion.p>

            <motion.div {...fadeUp(0.12)}>
              <img
                src="/logo-white.png"
                alt="MoodbyTeal Logo"
                style={{
                  width: "clamp(220px, 28vw, 360px)",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 12px rgba(255,255,255,0.08))",
                  display: "block",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div>
            <motion.p
              {...fadeUp(0.22)}
              style={{
                fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)", // ↓ slightly smaller
                color: "rgba(245,244,240,0.42)",
                lineHeight: 1.8,
              }}
            >
              MoodbyTEAL is a boutique interior design and fit-out studio based
              in the United Arab Emirates, creating spaces defined by clarity,
              proportion, and material integrity. Founded by Sahil Haneefa, with
              co-founders Rashid EK and Amritha Priya, the studio approaches
              each project with restraint and precision—delivering environments
              that are refined, purposeful, and quietly luxurious.
            </motion.p>

            <motion.div
              className="stats-row"
              {...fadeUp(0.34)}
              style={{
                marginTop: 16, // ↓ was 20
                paddingTop: 14, // ↓ was 18
                borderTop: "1px solid rgba(245,244,240,0.08)",
                display: "flex",
                gap: 28, // ↓ was 32
              }}
            >
              {[
                { label: "Years", value: "4+" },
                { label: "Projects", value: "25+" },
                { label: "Awards", value: "4" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)", // ↓ was 2.8rem
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
                      fontSize: "0.52rem",
                      letterSpacing: "0.22em",
                      color: "rgba(245,244,240,0.28)",
                      marginTop: 5,
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 680px) {
          .concept-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .stats-row { gap: 18px !important; }
        }
      `}</style>
    </>
  );
}

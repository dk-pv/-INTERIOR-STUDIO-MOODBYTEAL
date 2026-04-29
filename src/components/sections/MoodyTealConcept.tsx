"use client";

import { motion } from "framer-motion";

export default function MoodyTealConcept() {
  return (
    <>
      <section
        data-theme="dark"
        style={{
          backgroundColor: "#0a0a0a",
          padding: "clamp(32px, 4vw, 60px) clamp(24px, 6vw, 96px)", // ↓ height reduced
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
            fontSize: "clamp(6rem, 16vw, 18rem)",
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

        {/* Animated container */}
        <motion.div
          className="concept-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto 0 0", // ← flush left, not centered
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 6vw, 64px)",
            alignItems: "center",
            position: "relative",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
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
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.3)",
                marginBottom: 16,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Studio
            </motion.p>

            {/* Logo — now correctly below "The Studio" with no stray + */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/logo-white.png"
                alt="MoodbyTeal Logo"
                style={{
                  width: "clamp(180px, 22vw, 300px)", // ↑ slightly larger
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
              style={{
                fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                color: "rgba(245,244,240,0.45)",
                lineHeight: 1.85,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              viewport={{ once: true }}
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
              style={{
                marginTop: 20,
                paddingTop: 18,
                borderTop: "1px solid rgba(245,244,240,0.1)",
                display: "flex",
                gap: 32,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 680px) {
          .concept-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .stats-row {
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

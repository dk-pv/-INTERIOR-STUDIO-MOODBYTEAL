"use client";

export default function MoodyTealConcept() {
  return (
    <>
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

      {/* SAME responsive styles */}
      <style>{`
        @media (max-width: 680px) {
          .concept-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .stats-row {
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
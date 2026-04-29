"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        data-theme="dark"
        style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          minHeight: 560,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          backgroundColor: "#050505",
        }}
      >
        {/* ── Background image ── */}
        {/* ── Plain Background image ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Desktop + Tablet */}
          <div className="hidden sm:block w-full h-full">
            <Image
              src="/hero-desktop.png"
              alt="MOODbyTEAL interior"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>

          {/* Mobile */}
          <div className="block sm:hidden w-full h-full">
            <Image
              src="/hero-mobile.png"
              alt="MOODbyTEAL interior mobile"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
        </div>
        {/* ── Corner Labels ── */}
        {[
          { text: "Interior Design", pos: "top-left" },
          { text: "Turnkey Fit-out Construction", pos: "top-right" },
          { text: "Furniture Manufacturing", pos: "bottom-left" },
          { text: "Interior Styling", pos: "bottom-right" },
        ].map((item, i) => {
          const baseStyle = {
            position: "absolute" as const,
            zIndex: 20,
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
            letterSpacing: "0.32em",
            textTransform: "uppercase" as const,
            color: "rgba(245,244,240,0.65)",
            fontWeight: 500, // ✅ slightly bold
            pointerEvents: "none" as const,

            // ✅ premium effects
            textShadow: "0 0 18px rgba(255,255,255,0.12)",
            backdropFilter: "blur(2px)",
          };

          const spacing = "clamp(20px, 3vw, 48px)"; // ✅ responsive distance

          const positionStyles =
            item.pos === "top-left"
              ? { top: spacing, left: spacing }
              : item.pos === "top-right"
                ? { top: spacing, right: spacing, textAlign: "right" as const }
                : item.pos === "bottom-left"
                  ? { bottom: spacing, left: spacing }
                  : {
                      bottom: spacing,
                      right: spacing,
                      textAlign: "right" as const,
                    };

          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ opacity: 1 }} // future-proof (if interactive later)
              style={{ ...baseStyle, ...positionStyles }}
            >
              {item.text}
            </motion.div>
          );
        })}
        
        {/* ── TOP ROW ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "clamp(14px, 3vw, 28px) clamp(20px, 5vw, 64px)",
          }}
        ></div>

        {/* ── BOTTOM CONTENT ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 clamp(20px, 5vw, 64px) clamp(20px, 4vh, 48px)",
          }}
        >
          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: 1,
              background: "rgba(245,244,240,0.12)",
              marginBottom: "clamp(14px, 2.5vh, 24px)",
              transformOrigin: "left",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // push scroll to right
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ scaleY: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                style={{
                  width: 1,
                  height: 28,
                  background: "rgba(245,244,240,0.35)",
                  transformOrigin: "top",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.45rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,240,0.22)",
                }}
              >
                Scroll
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════════ */}
      <section
        data-theme="light"
        style={{
          backgroundColor: "#f5f4f0",
          padding: "clamp(40px, 7vw, 70px) clamp(20px, 5vw, 64px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(28px, 5vw, 64px)",
          }}
          className="md:flex-row md:items-start"
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.35)",
                marginBottom: 20,
              }}
            >
              Our Philosophy
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#0a0a0a",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Space is not just built.
              <br />
              <span style={{ color: "rgba(10,10,10,0.3)" }}>It is felt.</span>
            </h2>
          </div>

          <div style={{ flex: 1, paddingTop: "clamp(0px, 3vw, 40px)" }}>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
                color: "rgba(10,10,10,0.52)",
                lineHeight: 1.85,
                letterSpacing: "0.01em",
              }}
            >
              TEAL CULTURE is a luxury interior architecture studio crafting
              bespoke environments — private residences, commercial spaces,
              villas, and apartments — where every detail speaks intention.
            </p>

            <motion.a
              href="/studio"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="btn btn-outline inline-flex"
              style={{ cursor: "pointer", marginTop: "clamp(24px, 4vw, 48px)" }}
            >
              Our Story
              <span style={{ opacity: 0.5, fontSize: "0.8em" }}>→</span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}

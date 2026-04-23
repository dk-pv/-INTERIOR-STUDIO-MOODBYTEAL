"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section
        data-theme="dark"
        style={{
          position: "relative",
          width: "100%",
          height: "100svh" /* svh — safe on mobile browsers */,
          minHeight: 560,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          backgroundColor: "#0a0a0a",
        }}
      >
        {/* ── Background image ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/hero-bg.png"
            alt="TEAL CULTURE interior"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 0.6,
            }}
          />
        </div>

        {/* ── Gradient overlay ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* ── Grain ── */}
        <div className="grain" />

        {/* ── Bottom content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            padding: "0 clamp(20px, 6vw, 96px) clamp(32px, 6vh, 80px)",
          }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.5rem, 1.2vw, 0.62rem)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.45)",
              marginBottom: "clamp(16px, 3vh, 28px)",
            }}
          >
            Interior Architecture Studio
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.2rem, 10vw, 9rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              color: "#f5f4f0",
              fontWeight: 400,
              margin: 0,
            }}
          >
            TEAL
            <br />
            <span style={{ color: "rgba(245,244,240,0.5)" }}>CULTURE</span>
          </motion.h1>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "clamp(20px, 4vh, 40px)",
              gap: 16,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.78rem, 1.6vw, 0.92rem)",
                color: "rgba(245,244,240,0.4)",
                letterSpacing: "0.03em",
                maxWidth: "min(280px, 60vw)",
                lineHeight: 1.65,
              }}
            >
              We design spaces that carry emotion — where architecture meets
              identity.
            </motion.p>

            {/* Scroll line — hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 1 }}
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
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                style={{
                  width: 1,
                  height: 44,
                  background: "#f5f4f0",
                  transformOrigin: "top",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,240,0.28)",
                }}
              >
                Scroll
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Top-right counter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "clamp(80px, 12vh, 130px)",
            right: "clamp(20px, 6vw, 96px)",
            textAlign: "right",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.22)",
            }}
          >
            Est. 2020
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "rgba(245,244,240,0.1)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: "4px 0",
            }}
          >
            48+
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.18)",
            }}
          >
            Projects
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════════ */}
      <section
        data-theme="light"
        style={{
          backgroundColor: "#f5f4f0",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 6vw, 96px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(40px, 6vw, 96px)",
          }}
          className="md:flex-row md:items-start"
        >
          {/* Left */}
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

          {/* Right */}
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
              style={{
                cursor: "pointer",
                marginTop: "clamp(40px, 6vw, 80px)",
              }}
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

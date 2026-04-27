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

        {/* ── TOP ROW ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "clamp(20px, 4vw, 40px) clamp(20px, 6vw, 80px)",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.45rem, 1vw, 0.58rem)",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.40)",
              margin: 0,
            }}
          >
            Interior Architecture Studio
          </motion.p>
        </div>

        {/* ── BOTTOM CONTENT ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 clamp(20px, 6vw, 80px) clamp(28px, 5vh, 64px)",
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
              marginBottom: "clamp(20px, 3.5vh, 36px)",
              transformOrigin: "left",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "clamp(16px, 4vw, 48px)",
            }}
            className="flex-col sm:flex-row"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.78rem, 1.4vw, 0.92rem)",
                color: "rgba(245,244,240,0.40)",
                letterSpacing: "0.04em",
                maxWidth: "min(320px, 70vw)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              We design spaces that carry emotion — where architecture meets
              identity.
            </motion.p>

            {/* Scroll indicator */}
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
                  height: 40,
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
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 6vw, 80px)",
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
              style={{ cursor: "pointer", marginTop: "clamp(40px, 6vw, 80px)" }}
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.75, ease },
});

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hidden sm:block w-full h-full">
            <Image
              src="/hero-desktop.png"
              alt="MOODbyTEAL interior"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="block sm:hidden w-full h-full">
            <Image
              src="/hero-mobile.png"
              alt="MOODbyTEAL interior mobile"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        </div>

        {[
          { text: "Interior Design", pos: "top-left" },
          { text: "Turnkey Fit-out Construction", pos: "top-right" },
          { text: "Furniture Manufacturing", pos: "bottom-left" },
          { text: "Interior Styling", pos: "bottom-right" },
        ].map((item, i) => {
          const edge = "clamp(20px, 3vw, 48px)";
          const topOffset = "clamp(70px, 10vh, 120px)";
          const pos =
            item.pos === "top-left"
              ? { top: topOffset, left: edge }
              : item.pos === "top-right"
                ? { top: topOffset, right: edge, textAlign: "right" as const }
                : item.pos === "bottom-left"
                  ? { bottom: edge, left: edge }
                  : {
                      bottom: edge,
                      right: edge,
                      textAlign: "right" as const,
                    };
          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease }}
              style={{
                position: "absolute",
                zIndex: 20,
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(0.7rem, 1.2vw, 0.95rem)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                fontWeight: 500,

                padding: "6px 10px",
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                backdropFilter: "blur(6px)",

                textShadow: "0 2px 12px rgba(0,0,0,0.35)",

                ...pos,
              }}
            >
              {item.text}
            </motion.div>
          );
        })}

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            padding: "clamp(14px, 3vw, 28px) clamp(20px, 5vw, 64px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 clamp(20px, 5vw, 64px) clamp(20px, 4vh, 48px)",
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            style={{
              height: 1,
              background: "rgba(245,244,240,0.12)",
              marginBottom: "clamp(14px, 2.5vh, 24px)",
              transformOrigin: "left",
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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

      {/* ══════════════════════════════════════
          INTRO / PHILOSOPHY STRIP
      ══════════════════════════════════════ */}
      <section
        data-theme="light"
        style={{
          backgroundColor: "#f5f4f0",
          padding: "clamp(32px, 5vw, 60px) clamp(20px, 6vw, 80px)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* ── OUR PHILOSOPHY label — ✅ spread, no variants prop ── */}
          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
              marginBottom: 18,
            }}
          >
            Our Philosophy
          </motion.p>

          {/* ── Animated rule ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            style={{
              height: 1,
              background: "rgba(10,10,10,0.08)",
              marginBottom: 20,
              transformOrigin: "left",
            }}
          />

          {/* ── About + Logo row — ✅ spread ── */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginBottom: "clamp(10px, 2vw, 18px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                color: "#0a0a0a",
                fontWeight: 400,
                margin: 0,
              }}
            >
              About
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
            >
              <Image
                src="/teal-culture-logo.png"
                alt="Teal Culture Logo"
                width={200}
                height={52}
                priority
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>

          {/* ── Tagline — ✅ spread ── */}
          <motion.p
            {...fadeUp(0.24)}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.7rem, 3.6vw, 2.8rem)",
              color: "rgba(10,10,10,0.18)",
              lineHeight: 1.15,
              fontWeight: 400,
              margin: "0 0 clamp(16px, 3vw, 32px) 0",
            }}
          >
            Where Space Becomes Experience
          </motion.p>

          {/* ── Body + CTA — ✅ spread ── */}
          <motion.div {...fadeUp(0.36)} style={{ maxWidth: 900 }}>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.35vw, 0.95rem)",
                color: "rgba(10,10,10,0.50)",
                lineHeight: 1.9,
                letterSpacing: "0.01em",
                margin: "0 0 clamp(20px, 3vw, 36px) 0",
              }}
            >
              Teal Culture emerges within India and the United Arab Emirates as
              a convergence of architecture, interiors, and Artificial
              Intelligence. Built form is experienced as a continuous spatial
              journey rather than a fixed object. Spaces unfold through
              reduction and precision. Matter is guided by silence, weight, and
              light — revealing itself gradually through movement and
              perception. Founded by Sahil Haneefa, Teal Culture is an ongoing
              exploration of how construction becomes experience where
              architecture, intelligence, and human perception flow into a
              single evolving field.
            </p>

            <motion.a
              href="/studio"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="btn btn-outline inline-flex"
              style={{ cursor: "pointer" }}
            >
              Our Story
              <span style={{ opacity: 0.5, fontSize: "0.8em" }}>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -120px 0px" },
  transition: { delay, duration: 0.3, ease },
});

const CORNER_LABELS = [
  { text: "Interior Design", pos: "top-left" },
  { text: "Turnkey Fit-out Construction", pos: "top-right" },
  { text: "Furniture Manufacturing", pos: "bottom-left" },
  { text: "Interior Styling", pos: "bottom-right" },
];

export default function Hero() {
  return (
    <>
      <style>{`
        /* ── Hero section ─────────────────────────────────────── */
        .hero-section {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 560px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: #050505;
        }

        /* ── Image layers ─────────────────────────────────────── */
        .hero-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .hero-img-desktop { display: block; }
        .hero-img-mobile  { display: none;  }

        @media (max-width: 640px) {
          .hero-img-desktop { display: none;  }
          .hero-img-mobile  { display: block; }
        }

        /* ── Corner labels base ───────────────────────────────── */
        .hero-corner-label {
          position: absolute;
          z-index: 20;
          font-family: var(--font-heading);
          font-size: clamp(0.6rem, 1.1vw, 0.85rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          font-weight: 500;
          padding: 6px 10px;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          backdrop-filter: blur(6px);
          text-shadow: 0 2px 12px rgba(0,0,0,0.35);
          white-space: nowrap;
        }

        /* ── Corner positions — desktop ───────────────────────── */
        .hero-corner-label[data-pos="top-left"]     { top: clamp(70px,10vh,120px); left:  clamp(20px,3vw,48px); }
        .hero-corner-label[data-pos="top-right"]    { top: clamp(70px,10vh,120px); right: clamp(20px,3vw,48px); text-align: right; }
        .hero-corner-label[data-pos="bottom-left"]  { bottom: clamp(20px,3vw,48px); left:  clamp(20px,3vw,48px); }
        .hero-corner-label[data-pos="bottom-right"] { bottom: clamp(20px,3vw,48px); right: clamp(20px,3vw,48px); text-align: right; }

        /*
         * ── Mobile corner labels ─────────────────────────────────
         * On narrow screens the 4 corners can overlap each other.
         * Solution: collapse to a 2×2 pill strip at the bottom.
         */
        @media (max-width: 540px) {
  .hero-corner-label {
    display: none;
  }

  .hero-labels-strip {
    display: flex;
  }
}

        /* ── Mobile pill strip (hidden by default) ────────────── */
        /* ── Mobile pill strip ───────────────────────────── */
.hero-labels-strip {
  display: none;
  position: absolute;
  bottom: clamp(52px, 10vh, 74px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  width: calc(100% - 28px);
  max-width: 420px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 8px;
  padding: 0 6px;
}

.hero-labels-strip span {
  font-family: var(--font-heading);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.88);
  font-weight: 500;

  padding: 7px 12px;

  background: rgba(0,0,0,0.34);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;

  backdrop-filter: blur(8px);

  white-space: normal;
  text-align: center;
  line-height: 1.35;

  max-width: 48%;
}

        /* ── Scroll indicator ─────────────────────────────────── */
        .hero-bottom-bar {
          position: relative;
          z-index: 10;
          padding: 0 clamp(20px,5vw,64px) clamp(20px,4vh,48px);
        }
        .hero-rule {
          height: 1px;
          background: rgba(245,244,240,0.12);
          margin-bottom: clamp(14px,2.5vh,24px);
          transform-origin: left;
        }
        .hero-scroll {
          display: flex;
          justify-content: flex-end;
        }
        .hero-scroll-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .hero-scroll-line {
          width: 1px;
          height: 28px;
          background: rgba(245,244,240,0.35);
          transform-origin: top;
        }
        .hero-scroll-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.45rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(245,244,240,0.22);
        }

        /* ══════════════════════════════════════════════════════
           INTRO / PHILOSOPHY STRIP
        ══════════════════════════════════════════════════════ */
        .intro-section {
          background-color: #f5f4f0;
          padding: clamp(32px,5vw,60px) clamp(20px,6vw,80px);
          overflow: hidden;
        }
        .intro-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .intro-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.35);
          margin-bottom: 18px;
        }
        .intro-rule {
          height: 1px;
          background: rgba(10,10,10,0.08);
          margin-bottom: 20px;
          transform-origin: left;
        }

        /* About + logo row */
        .intro-heading-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: clamp(10px,2vw,18px);
        }
        .intro-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          letter-spacing: -0.025em;
          line-height: 1.0;
          color: #0a0a0a;
          font-weight: 400;
          margin: 0;
        }
        .intro-logo img {
          object-fit: contain;
          width: clamp(160px, 28vw, 340px);
          height: auto;
        }

        /* Body copy */
        .intro-body {
          max-width: 900px;
        }
        .intro-body p {
          font-size: clamp(0.85rem, 1.35vw, 0.95rem);
          color: rgba(10,10,10,0.50);
          line-height: 1.9;
          letter-spacing: 0.01em;
          margin: 0 0 clamp(20px,3vw,36px);
        }

        /* ── Tablet (≤ 768px) ─────────────────────────────────── */
        @media (max-width: 768px) {
          .intro-heading {
            font-size: clamp(2rem, 7vw, 3rem);
          }
          .intro-body p {
            font-size: 0.9rem;
            line-height: 1.8;
          }
        }

        /* ── Mobile (≤ 480px) ─────────────────────────────────── */
        @media (max-width: 480px) {
          .intro-section {
            padding: 40px 20px 48px;
          }
          .intro-heading-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .intro-heading {
            font-size: clamp(1.9rem, 9vw, 2.6rem);
          }
          .intro-body p {
            font-size: 0.88rem;
            line-height: 1.75;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section data-theme="dark" className="hero-section">
        {/* Background images */}
        <div className="hero-img-wrap">
          <div
            className="hero-img-desktop"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src="/hero-desktop.png"
              alt="MOODbyTEAL interior"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div
            className="hero-img-mobile"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
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

        {/* ── Corner labels — desktop/tablet ── */}
        {CORNER_LABELS.map((item, i) => (
          <motion.div
            key={item.text}
            data-pos={item.pos}
            className="hero-corner-label"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease }}
          >
            {item.text}
          </motion.div>
        ))}

        {/* ── Labels pill strip — mobile only ── */}
        <motion.div
          className="hero-labels-strip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease }}
        >
          {CORNER_LABELS.map((item) => (
            <span key={item.text}>{item.text}</span>
          ))}
        </motion.div>

        {/* Spacer top */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "clamp(14px,3vw,28px) clamp(20px,5vw,64px)",
          }}
        />

        {/* Bottom scroll indicator */}
        <div className="hero-bottom-bar">
          <motion.div
            className="hero-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
          />
          <div className="hero-scroll">
            <motion.div
              className="hero-scroll-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                className="hero-scroll-line"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />
              <span className="hero-scroll-text">Scroll</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO / PHILOSOPHY STRIP
      ══════════════════════════════════════ */}
      <section data-theme="light" className="intro-section">
        <div className="intro-inner">
          {/* Label */}
          <motion.p className="intro-label" {...fadeUp(0)}>
            Our Philosophy
          </motion.p>

          {/* Animated rule */}
          <motion.div
            className="intro-rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
          />

          {/* About + Logo row */}
          <motion.div className="intro-heading-row" {...fadeUp(0.05)}>
            <h2 className="intro-heading">About</h2>

            <motion.div
              className="intro-logo"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
            >
              <Image
                src="/teal-culture-logo.png"
                alt="Teal Culture Logo"
                width={340}
                height={90}
                style={{
                  objectFit: "contain",
                  width: "clamp(160px, 28vw, 340px)",
                  height: "auto",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Body + CTA */}
          <motion.div className="intro-body" {...fadeUp(0.1)}>
            <p>
              Teal Culture emerges within India and the United Arab Emirates as
              a convergence of architecture, interiors, and Artificial
              Intelligence. Built form is experienced as a continuous spatial
              journey rather than a fixed object. Spaces unfold through
              reduction and precision, where matter is guided by silence,
              weight, and light—revealing itself gradually through movement and
              perception. Teal Culture continues as an ongoing exploration of
              how construction becomes experience, where architecture,
              intelligence, and human perception flow into a single evolving
              field.
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

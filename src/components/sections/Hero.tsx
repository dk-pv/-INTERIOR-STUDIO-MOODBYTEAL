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

const SERVICES = [
  { num: "01", label: "Interior\nDesign" },
  { num: "02", label: "Turnkey\nFit-out Construction" },
  { num: "03", label: "Furniture\nManufacturing" },
  { num: "04", label: "Interior\nStyling" },
];

export default function Hero() {
  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════
           HERO
        ══════════════════════════════════════════════════════ */
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
        .hero-img-wrap { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hero-img-desktop { display: block; }
        .hero-img-mobile  { display: none;  }
        @media (max-width: 640px) {
          .hero-img-desktop { display: none;  }
          .hero-img-mobile  { display: block; }
        }

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
        .hero-scroll { display: flex; justify-content: flex-end; }
        .hero-scroll-inner {
          display: flex; flex-direction: column;
          align-items: center; gap: 8px; flex-shrink: 0;
        }
        .hero-scroll-line {
          width: 1px; height: 28px;
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
           SERVICES CARDS STRIP
        ══════════════════════════════════════════════════════ */
        .svc-strip {
          background: #ffffff;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px);
        }
        .svc-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        /* ── Card ─────────────────────────────────────────────── */
        .svc-card {
          background: #0a0a0a;
          border-radius: 10px;
          padding: clamp(22px, 2.8vw, 36px) clamp(18px, 2vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition:
            transform 0.5s cubic-bezier(0.16,1,0.3,1),
            box-shadow 0.5s cubic-bezier(0.16,1,0.3,1),
            opacity 0.4s ease;
        }

        /* Ambient glow orb */
        .svc-card::before {
          content: '';
          position: absolute;
          top: -60%;
          left: 50%;
          transform: translateX(-50%);
          width: 180%;
          height: 180%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.055) 0%,
            transparent 60%
          );
          opacity: 0.6;
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
        }

        /* Highlight sweep */
        .svc-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            140deg,
            rgba(255,255,255,0.08) 0%,
            rgba(255,255,255,0.0) 55%
          );
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
          border-radius: 10px;
        }

        /* Hover: zoom-in card, sweep reveal */
        .svc-card:hover {
          transform: scale(1.06);
          box-shadow:
            0 24px 64px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.07);
        }
        .svc-card:hover::before {
          opacity: 1;
          transform: translateX(-50%) scale(1.15);
        }
        .svc-card:hover::after { opacity: 1; }

        /* Siblings zoom-out slightly */
        .svc-grid:has(.svc-card:hover) .svc-card:not(:hover) {
          transform: scale(0.96);
          opacity: 0.65;
        }

        /* ── Card content ─────────────────────────────────────── */
        .svc-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.48rem;
          letter-spacing: 0.26em;
          color: rgba(255,255,255,0.2);
          position: relative; z-index: 1;
        }
        .svc-label {
          font-family: var(--font-heading);
          font-size: clamp(0.7rem, 1vw, 0.88rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 400;
          line-height: 1.6;
          white-space: pre-line;
          position: relative; z-index: 1;
          animation: cardGlow 4.2s ease-in-out infinite;
        }
        .svc-card:nth-child(1) .svc-label { animation-delay: 0s;    }
        .svc-card:nth-child(2) .svc-label { animation-delay: 1.05s; }
        .svc-card:nth-child(3) .svc-label { animation-delay: 2.1s;  }
        .svc-card:nth-child(4) .svc-label { animation-delay: 3.15s; }

        @keyframes cardGlow {
          0%,  100% {
            color: rgba(255,255,255,0.38);
            text-shadow: none;
          }
          50% {
            color: rgba(255,255,255,0.96);
            text-shadow:
              0 0 16px rgba(255,255,255,0.20),
              0 0 40px rgba(255,255,255,0.09);
          }
        }

        .svc-bar {
          margin-top: auto;
          height: 1px;
          background: rgba(255,255,255,0.07);
          position: relative; z-index: 1;
          transition: background 0.4s ease;
        }
        .svc-card:hover .svc-bar {
          background: rgba(255,255,255,0.25);
        }

        /* ── Tablet 2×2 ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile 1 col ─────────────────────────────────────── */
        @media (max-width: 480px) {
          .svc-strip { padding: 32px 16px; }
          .svc-grid  { grid-template-columns: 1fr; gap: 10px; }
          .svc-card  {
            flex-direction: row;
            align-items: center;
            gap: 20px;
            padding: 18px 20px;
          }
          .svc-bar   { display: none; }
          .svc-label { white-space: normal; }
          .svc-grid:has(.svc-card:hover) .svc-card:not(:hover) {
            transform: scale(0.985);
          }
        }

        /* ══════════════════════════════════════════════════════
           INTRO / PHILOSOPHY STRIP
        ══════════════════════════════════════════════════════ */
        .intro-section {
          background-color: #f5f4f0;
          padding: clamp(32px,5vw,60px) clamp(20px,6vw,80px);
          overflow: hidden;
        }
        .intro-inner { max-width: 1100px; margin: 0 auto; }
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
        .intro-body { max-width: 900px; }
        .intro-body p {
          font-size: clamp(0.85rem, 1.35vw, 0.95rem);
          color: rgba(10,10,10,0.50);
          line-height: 1.9;
          letter-spacing: 0.01em;
          margin: 0 0 clamp(20px,3vw,36px);
        }
        @media (max-width: 768px) {
          .intro-heading { font-size: clamp(2rem, 7vw, 3rem); }
          .intro-body p  { font-size: 0.9rem; line-height: 1.8; }
        }
        @media (max-width: 480px) {
          .intro-section     { padding: 40px 20px 48px; }
          .intro-heading-row { flex-direction: column; align-items: flex-start; gap: 12px; }
          .intro-heading     { font-size: clamp(1.9rem, 9vw, 2.6rem); }
          .intro-body p      { font-size: 0.88rem; line-height: 1.75; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section data-theme="dark" className="hero-section">
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

        {/* Spacer top */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "clamp(14px,3vw,28px) clamp(20px,5vw,64px)",
          }}
        />

        {/* Scroll indicator */}
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
          SERVICES CARDS — 4 in one row
      ══════════════════════════════════════ */}
      <section data-theme="light" className="svc-strip">
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              className="svc-card"
              initial={{ opacity: 0, y: 32, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
            >
              <span className="svc-num">{s.num}</span>
              <span className="svc-label">{s.label}</span>
              <div className="svc-bar" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO / PHILOSOPHY STRIP
      ══════════════════════════════════════ */}
      <section data-theme="light" className="intro-section">
        <div className="intro-inner">
          <motion.p className="intro-label" {...fadeUp(0)}>
            Our Philosophy
          </motion.p>

          <motion.div
            className="intro-rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
          />

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
                  width: "clamp(160px,28vw,340px)",
                  height: "auto",
                }}
              />
            </motion.div>
          </motion.div>

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

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EXPO = [0.16, 1, 0.3, 1] as const;

const contactImages = [
  "/images/contact.png",
  "/images/contact2.jpg",
  "/images/contact3.jpg",
];

// ─── Input Field ──────────────────────────────────────────
function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rows,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const baseStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused ? "#0a0a0a" : "rgba(10,10,10,0.15)"}`,
    outline: "none",
    padding: "10px 0",
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    color: "#0a0a0a",
    resize: "none" as const,
    transition: "border-color 0.3s ease",
    cursor: "text",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: focused ? "#0a0a0a" : "rgba(10,10,10,0.35)",
          transition: "color 0.25s ease",
        }}
      >
        {label}
      </label>
      {rows ? (
        <textarea
          required
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...baseStyle, lineHeight: 1.7 }}
        />
      ) : (
        <input
          required
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  );
}

// ─── Cycling Word ─────────────────────────────────────────
const cyclingWords = [
  "Beautiful",
  "Timeless",
  "Intentional",
  "Refined",
  "Resonant",
];

function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % cyclingWords.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <div
      style={{ overflow: "hidden", height: "1.15em", display: "inline-block" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EXPO }}
          style={{
            display: "block",
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            color: "#1d9e75",
          }}
        >
          {cyclingWords[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ─── Dark Info Panel ──────────────────────────────────────
function DarkPanel({ inView }: { inView: boolean }) {
  const stats = [
    { value: "48+", label: "Projects" },
    { value: "8+", label: "Years" },
    { value: "2", label: "Countries" },
  ];

  return (
    <motion.div
      className="dark-panel"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: EXPO, delay: 0.35 }}
    >
      {/* Top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO, delay: 0.5 }}
        style={{
          height: 1,
          backgroundColor: "rgba(245,244,240,0.12)",
          transformOrigin: "left",
          marginBottom: 24,
        }}
      />

      {/* Studio label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EXPO, delay: 0.6 }}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.52rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(245,244,240,0.28)",
          marginBottom: 16,
        }}
      >
        TEAL CULTURE · Studio
      </motion.p>

      {/* Animated headline */}
      <div style={{ marginBottom: 24 }}>
        {[
          { text: "Contact Us.", extra: {} },
          { text: "Build", extra: {} },
          { text: null, extra: {}, cycling: true },
          {
            text: "Interiors.",
            extra: {
              color: "rgba(245,244,240,0.22)",
              fontStyle: "italic" as const,
            },
          },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EXPO, delay: 0.65 + i * 0.1 }}
            style={{ marginTop: i > 0 ? 2 : 0 }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "#f5f4f0",
                display: "block",
                ...line.extra,
              }}
            >
              {line.cycling ? <CyclingWord /> : line.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Mid rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO, delay: 1.0 }}
        style={{
          height: 1,
          backgroundColor: "rgba(245,244,240,0.08)",
          transformOrigin: "left",
          marginBottom: 20,
        }}
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EXPO, delay: 1.05 }}
        style={{ display: "flex", gap: 28, marginBottom: 24 }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                letterSpacing: "-0.04em",
                color: "#f5f4f0",
                lineHeight: 1,
                margin: 0,
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.48rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.28)",
                marginTop: 5,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO, delay: 1.12 }}
        style={{
          height: 1,
          backgroundColor: "rgba(245,244,240,0.08)",
          transformOrigin: "left",
          marginBottom: 18,
        }}
      />

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{ position: "relative", width: 6, height: 6, flexShrink: 0 }}
          >
            <motion.div
              animate={{ scale: [1, 2.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "#1d9e75",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "#1d9e75",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#1d9e75",
            }}
          >
            Accepting Projects
          </span>
        </div>

        {/* Scanning bar */}
        <div
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "rgba(245,244,240,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "110%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              repeatDelay: 1,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "35%",
              background:
                "linear-gradient(to right, transparent, #1d9e75, transparent)",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.46rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(245,244,240,0.18)",
          }}
        >
          Dubai, United Arab Emirates
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────
export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const [currentImage, setCurrentImage] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentImage((p) => (p + 1) % contactImages.length),
      1800,
    );
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@tealculture.in?subject=Project Inquiry from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0AProject Type: ${form.type}%0A%0A${form.message}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <>
      <style>{`
        /* ════════════════════════════════════════
           DARK PANEL — fills its grid column
        ════════════════════════════════════════ */
        .dark-panel {
          background-color: #0a0a0a;
          padding: clamp(24px, 2.5vw, 40px);
          width: 100%;
          box-sizing: border-box;
        }

        /* ════════════════════════════════════════
           HERO — CSS Grid, no absolute panel
        ════════════════════════════════════════ */
        .contact-hero {
          position: relative;
          background-color: #f5f4f0;
          /* top padding reserves space for fixed navbar */
          padding: clamp(100px, 14vh, 160px) clamp(24px, 5vw, 72px)
                   clamp(60px, 8vw, 100px);
          overflow: hidden;
        }

        /* Ghost watermark */
        .hero-ghost {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-heading);
          font-size: clamp(60px, 16vw, 240px);
          letter-spacing: -0.06em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(10,10,10,0.05);
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          line-height: 1;
          z-index: 0;
        }

        /* ── Two-column grid (desktop / laptop) ── */
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 4vw, 64px);
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-heading-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .hero-panel-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* ── Tablet 769 – 1024px: tighten gap, keep 2 col ── */
        @media (max-width: 1024px) and (min-width: 769px) {
          .hero-grid {
            gap: 20px;
          }
        }

        /* ── Mobile / Small Tablet ≤ 768px: stack ── */
        @media (max-width: 768px) {
          .contact-hero {
            padding: clamp(88px, 12vh, 130px)
                     clamp(20px, 5vw, 40px)
                     clamp(48px, 8vw, 80px);
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* Scroll hint */
        .hero-scroll-hint {
          position: absolute;
          bottom: clamp(10px, 2vw, 20px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
        }

        /* ════════════════════════════════════════
           SPLIT — image + form
        ════════════════════════════════════════ */
        .contact-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 70vh;
        }

        /* Tablet: show image but shorter */
        @media (max-width: 900px) {
          .contact-split {
            grid-template-columns: 1fr 1fr;
            min-height: auto;
          }
          .contact-split-image {
            min-height: 320px;
          }
        }

        /* Mobile: hide image, form full width */
        @media (max-width: 600px) {
          .contact-split {
            grid-template-columns: 1fr;
          }
          .contact-split-image {
            display: none;
          }
        }

        /* ════════════════════════════════════════
           CONTACT INFO GRID
        ════════════════════════════════════════ */
        .contact-info-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(20px, 4vw, 40px);
        }

        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px 20px;
          }
        }

        @media (max-width: 360px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main
        data-theme="light"
        style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}
      >
        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section data-theme="light" ref={heroRef} className="contact-hero">
          {/* Ghost watermark */}
          <motion.p
            className="hero-ghost"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.6, ease: EXPO }}
            aria-hidden
          >
            CONTACT
          </motion.p>

          {/* ── Responsive two-column grid ── */}
          <div className="hero-grid">
            {/* LEFT — big heading */}
            <div className="hero-heading-col">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EXPO }}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.32)",
                  marginBottom: 20,
                }}
              >
                Let's Begin
              </motion.p>

              {["Define", "Your Space"].map((word, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.h1
                    initial={{ y: "105%", opacity: 0 }}
                    animate={heroInView ? { y: "0%", opacity: 1 } : {}}
                    transition={{
                      delay: 0.15 + i * 0.12,
                      duration: 1.1,
                      ease: EXPO,
                    }}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2.6rem, 7vw, 8rem)",
                      fontWeight: 400,
                      lineHeight: 1.0,
                      letterSpacing: "-0.04em",
                      color: i === 1 ? "rgba(10,10,10,0.28)" : "#0a0a0a",
                      fontStyle: i === 1 ? "italic" : "normal",
                      margin: 0,
                    }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}

              {/* Rule under heading */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.1, ease: EXPO }}
                style={{
                  height: 1,
                  backgroundColor: "rgba(10,10,10,0.1)",
                  transformOrigin: "left",
                  marginTop: 32,
                }}
              />
            </div>

            {/* RIGHT — dark panel (natural flow, no absolute) */}
            <div className="hero-panel-col">
              <DarkPanel inView={heroInView} />
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "rgba(10,10,10,0.15)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  position: "absolute",
                  width: "50%",
                  height: "100%",
                  backgroundColor: "rgba(10,10,10,0.5)",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.25)",
              }}
            >
              Scroll
            </span>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            SPLIT — Image + Form
        ═══════════════════════════════════════ */}
        <section data-theme="light" className="contact-split">
          {/* LEFT — Image slider (cross-fade stack, no blank flash) */}
          <div
            className="contact-split-image"
            style={{ position: "relative", overflow: "hidden", minHeight: 480 }}
          >
            {contactImages.map((src, i) => (
              <motion.div
                key={src}
                initial={false}
                animate={{
                  opacity: i === currentImage ? 1 : 0,
                  scale: i === currentImage ? 1 : 1.04,
                }}
                transition={{ duration: 0.9, ease: EXPO }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: i === currentImage ? 2 : 1,
                }}
              >
                <Image
                  src={src}
                  alt="TEAL CULTURE Interior"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.55), rgba(10,10,10,0.1))",
              }}
            />

            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                right: 56,
                zIndex: 4,
              }}
            >
              <div
                style={{
                  borderLeft: "2px solid rgba(245,244,240,0.5)",
                  paddingLeft: 14,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    letterSpacing: "-0.02em",
                    color: "#f5f4f0",
                    lineHeight: 1.4,
                    fontStyle: "italic",
                  }}
                >
                  Every project begins
                  <br />
                  with a conversation.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.45)",
                    marginTop: 12,
                  }}
                >
                  TEAL CULTURE Studio
                </p>
              </div>
            </div>

            {/* Vertical dot indicators */}
            <div
              style={{
                position: "absolute",
                bottom: 28,
                right: 20,
                zIndex: 4,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {contactImages.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: i === currentImage ? 18 : 6,
                    opacity: i === currentImage ? 1 : 0.35,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 6,
                    borderRadius: 99,
                    backgroundColor: "#f5f4f0",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            ref={formRef}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(32px, 5vw, 60px) clamp(24px, 4vw, 56px)",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ width: "100%", maxWidth: 440 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EXPO }}
                style={{ marginBottom: 28 }}
              >
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.3)",
                    marginBottom: 14,
                  }}
                >
                  Client Enquiry
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    letterSpacing: "-0.04em",
                    color: "#0a0a0a",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  Start a Project
                </h2>
              </motion.div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: "center", padding: "40px 0" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.6rem",
                      letterSpacing: "-0.03em",
                      color: "#0a0a0a",
                    }}
                  >
                    Thank you.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "rgba(10,10,10,0.45)",
                      marginTop: 12,
                      lineHeight: 1.7,
                    }}
                  >
                    We'll be in touch shortly to begin the conversation.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 24 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15, ease: EXPO }}
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  <Field
                    label="Full Name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <Field
                    label="Project Type"
                    placeholder="Villa / Apartment / Commercial..."
                    value={form.type}
                    onChange={(v) => setForm({ ...form, type: v })}
                  />
                  <Field
                    label="Project Details"
                    placeholder="Tell us about your vision..."
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                    rows={5}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ backgroundColor: "#2d6a6a" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      padding: "12px 24px",
                      backgroundColor: "#0a0a0a",
                      color: "#f5f4f0",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: 999,
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Send Enquiry →
                  </motion.button>
                </motion.form>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CONTACT INFO STRIP
        ═══════════════════════════════════════ */}
        <section
          data-theme="light"
          style={{
            backgroundColor: "#f5f4f0",
            padding: "clamp(40px, 6vw, 70px) clamp(24px, 5vw, 72px)",
            borderTop: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          <div className="contact-info-grid">
            {[
              {
                label: "Email",
                value: "hello@moodbyteal.com",
                href: "mailto:hello@moodbyteal.com",
              },
              {
                label: "Phone",
                value: "+971 50 268 5369",
                href: "tel:+971502685369",
              },
              {
                label: "Instagram",
                value: "@moodbyteal",
                href: "https://www.instagram.com/moodbyteal",
              },
              {
                label: "Location",
                value: "Dubai, United Arab Emirates",
                href: undefined,
              },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.3)",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      color: "#0a0a0a",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(10,10,10,0.12)",
                      paddingBottom: 2,
                      transition: "border-color 0.25s ease",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      color: "#0a0a0a",
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: 700,
              margin: "clamp(40px, 6vw, 70px) auto 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                color: "#0a0a0a",
                fontWeight: 400,
              }}
            >
              Thoughtful design starts{" "}
              <span
                style={{ color: "rgba(10,10,10,0.28)", fontStyle: "italic" }}
              >
                with understanding.
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

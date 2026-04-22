"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EXPO = [0.16, 1, 0.3, 1] as const;

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
    padding: "14px 0",
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

// ─── MAIN PAGE ────────────────────────────────────────────
export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@tealculture.in?subject=Project Inquiry from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0AProject Type: ${form.type}%0A%0A${form.message}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main
      data-theme="light"
      style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}
    >
      {/* ═══════════════════════════════════════
          HERO — full-height, editorial
      ═══════════════════════════════════════ */}
      <section
        data-theme="light"
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px, 6vw, 96px) clamp(52px, 8vw, 80px)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
        }}
      >
        {/* Ghost watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: EXPO }}
          aria-hidden
          style={{
            position: "absolute",
            top: "46%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(80px, 18vw, 240px)",
            letterSpacing: "-0.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(10,10,10,0.05)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          CONTACT
        </motion.p>

        {/* Grain */}
        <div className="grain" />

        {/* Top bar label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: "absolute",
            top: "clamp(24px, 4vw, 48px)",
            right: "clamp(24px, 6vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              backgroundColor: "rgba(10,10,10,0.3)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
            }}
          >
            04 / Step In
          </span>
        </motion.div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 2 }}>
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
              marginBottom: 24,
            }}
          >
            Let's Begin
          </motion.p>

          {/* Headline */}
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
                  fontSize: "clamp(3rem, 9vw, 9rem)",
                  fontWeight: 400,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: i === 1 ? "rgba(10,10,10,0.28)" : "#0a0a0a",
                  fontStyle: i === 1 ? "italic" : "normal",
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          {/* Descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.9, ease: EXPO }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              color: "rgba(10,10,10,0.45)",
              lineHeight: 1.75,
              maxWidth: 380,
              marginTop: 28,
            }}
          >
            Share your vision with us. We'll translate it into a refined,
            emotionally resonant space that carries your identity.
          </motion.p>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={heroInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.1, ease: EXPO }}
          style={{
            position: "absolute",
            bottom: "clamp(52px, 8vw, 88px)",
            left: "clamp(24px, 6vw, 96px)",
            right: "clamp(24px, 6vw, 96px)",
            height: 1,
            backgroundColor: "rgba(10,10,10,0.1)",
            transformOrigin: "left",
          }}
        />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "clamp(14px, 2.5vw, 28px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
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
      <section
        data-theme="light"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "90vh",
        }}
      >
        {/* LEFT — Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
          }}
        >
          <Image
            src="/images/contact.jpg"
            alt="TEAL CULTURE Interior"
            fill
            style={{ objectFit: "cover" }}
          />

          {/* subtle overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,10,10,0.55), rgba(10,10,10,0.1))",
            }}
          />

          {/* Quote overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 40,
              right: 40,
            }}
          >
            <div
              style={{
                borderLeft: "2px solid rgba(245,244,240,0.5)",
                paddingLeft: 20,
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
                  marginTop: 16,
                }}
              >
                TEAL CULTURE Studio
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          ref={formRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ width: "100%", maxWidth: 440 }}>
            {/* Form header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EXPO }}
              style={{ marginBottom: 48 }}
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
                }}
              >
                Start a Project
              </h2>
            </motion.div>

            {/* Form */}
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
                style={{ display: "flex", flexDirection: "column", gap: 36 }}
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

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: "#2d6a6a" }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: "16px 32px",
                    backgroundColor: "#0a0a0a",
                    color: "#f5f4f0",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: 999,
                    cursor: "none",
                    width: "100%",
                    transition: "background 0.3s ease",
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
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 96px)",
          borderTop: "1px solid rgba(10,10,10,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
          }}
        >
          {[
            {
              label: "Email",
              value: "hello@tealculture.in",
              href: "mailto:hello@tealculture.in",
            },
            {
              label: "Phone",
              value: "+91 98765 43210",
              href: "tel:+919876543210",
            },
            {
              label: "Instagram",
              value: "@tealculture",
              href: "https://instagram.com",
            },
            { label: "Location", value: "Kerala · UAE", href: undefined },
          ].map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.3)",
                  marginBottom: 12,
                }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                    color: "#0a0a0a",
                    cursor: "none",
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
                    fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                    color: "#0a0a0a",
                  }}
                >
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          style={{
            maxWidth: 700,
            margin: "clamp(60px, 8vw, 100px) auto 0",
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
            <span style={{ color: "rgba(10,10,10,0.28)", fontStyle: "italic" }}>
              with understanding.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

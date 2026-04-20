

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPO = [0.16, 1, 0.3, 1];

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ── Image: clip-path reveal (same pattern as WorkGrid cards) ────────────
      gsap.fromTo(
        imageWrapRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 80%",
          },
        }
      );

      // ── Divider line draw ────────────────────────────────────────────────────
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "expo.out",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // ── Text stagger: label → heading → body lines ──────────────────────────
      gsap.fromTo(
        ".founder-text",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 96px)",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* ── Section label + rule ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64, overflow: "hidden" }}>
        <p
          className="founder-text"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#b0a99a",
            marginBottom: 14,
          }}
        >
          Founder
        </p>
        <div
          ref={lineRef}
          style={{
            height: 1,
            backgroundColor: "#e8e6e1",
            width: "100%",
          }}
        />
      </div>

      {/* ── Two-column layout ────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <div
          ref={imageWrapRef}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 4",
            backgroundColor: "#e8e6e1",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/founder.jpg"
            alt="Sahil Haneefa — Founder & CEO"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Subtle bottom gradient for text legibility */}
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
            }}
          />

          {/* Name watermark inside image */}
          <div
            style={{
              position: "absolute",
              bottom: 24, left: 24,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Sahil Haneefa
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginTop: 4,
              }}
            >
              Founder & CEO, Chief Architect
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

          <h2
            className="founder-text"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
            }}
          >
            Designing beyond visual boundaries
          </h2>

          <p
            className="founder-text"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              lineHeight: 1.75,
              color: "#5a5650",
            }}
          >
            TEAL Culture was founded with a singular vision — to redefine how spaces
            are experienced, moving beyond aesthetics into something felt before it
            is seen.
          </p>

          <p
            className="founder-text"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              lineHeight: 1.75,
              color: "#8c8880",
            }}
          >
            Every project reflects spatial harmony and emotional depth — a balance
            between the structural and the sensory, built for those who value
            the weight of a room.
          </p>

          {/* Pull quote */}
          <div
            className="founder-text"
            style={{
              borderLeft: "2px solid #0a0a0a",
              paddingLeft: 20,
              marginTop: 8,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                fontStyle: "italic",
                color: "#0a0a0a",
                letterSpacing: "-0.01em",
                lineHeight: 1.5,
              }}
            >
              "Driven by intuition, tone and reality."
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b0a99a",
                marginTop: 10,
              }}
            >
              — Sahil
            </p>
          </div>

          {/* Stats row */}
          <div
            className="founder-text"
            style={{
              display: "flex",
              gap: 40,
              paddingTop: 24,
              borderTop: "1px solid #e8e6e1",
            }}
          >
            {[
              { num: "8+", label: "Years" },
              { num: "120+", label: "Projects" },
              { num: "2", label: "Countries" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0a0a0a",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#b0a99a",
                    marginTop: 6,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
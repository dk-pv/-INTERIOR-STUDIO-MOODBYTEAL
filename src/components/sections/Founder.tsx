"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(40px)", filter: "blur(6px)" },
                { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" },
              ],
              {
                duration: 700,
                delay: i * 80,
                easing: "ease-out",
                fill: "forwards",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      {/* Label */}
      <div style={{ marginBottom: 64 }}>
        <p className="reveal" style={{
          fontSize: 10,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#b0a99a",
          marginBottom: 14,
        }}>
          Founder
        </p>

        <div className="reveal" style={{
          height: 1,
          backgroundColor: "#e8e6e1",
          width: "100%",
        }} />
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <div
          className="reveal"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 4",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
            }}
          />
        </div>

        {/* TEXT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h2 className="reveal" style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "#0a0a0a",
          }}>
            Designing beyond visual boundaries
          </h2>

          <p className="reveal" style={{
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            lineHeight: 1.75,
            color: "#5a5650",
          }}>
            TEAL Culture was founded with a singular vision — to redefine how
            spaces are experienced.
          </p>

          <p className="reveal" style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: 1.75,
            color: "#8c8880",
          }}>
            Every project reflects spatial harmony and emotional depth.
          </p>

          {/* Quote */}
          <div className="reveal" style={{
            borderLeft: "2px solid #0a0a0a",
            paddingLeft: 20,
          }}>
            <p style={{ fontStyle: "italic" }}>
              “Driven by intuition, tone and reality.”
            </p>
          </div>

          {/* Stats */}
          <div className="reveal" style={{
            display: "flex",
            gap: 40,
            paddingTop: 24,
            borderTop: "1px solid #e8e6e1",
          }}>
            {["8+", "120+", "2"].map((n, i) => (
              <div key={i}>
                <p style={{ fontSize: 28, fontWeight: 700 }}>{n}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
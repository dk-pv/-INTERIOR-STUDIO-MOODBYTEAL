"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SILK = [0.22, 1, 0.36, 1];
const EXPO = [0.16, 1, 0.3, 1];

const team = [
  {
    name: "Sahil Haneefa",
    role: "Founder & CEO, Chief Architect",
    image: "/images/team-sahil.jpg",
  },
  {
    name: "Ar. Akhil Mohan",
    role: "Artist, CGI, Principal Architect",
    image: "/images/team-akhil.jpg",
  },
  {
    name: "Rashid EK",
    role: "Sr. Project Manager",
    image: "/images/team-rashid.jpg",
  },
  {
    name: "Ar. Laya Balakrishnan",
    role: "Principal Architect",
    image: "/images/team-laya.jpg",
  },
  {
    name: "Anaswara Anil",
    role: "Interior Designer, CGI",
    image: "/images/team-anaswara.jpg",
  },
  {
    name: "Dinesh Arivalagan",
    role: "Interior Designer, CGI",
    image: "/images/team-dinesh.jpg",
  },
];

// ── Single team card ─────────────────────────────────────────────────────────
function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="team-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "none" }}
    >
      {/* Image container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          backgroundColor: "#e8e6e1",
          marginBottom: 16,
        }}
      >
        {/* Placeholder gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, #e8e6e1 0%, #d0cdc7 100%)",
          }}
        />

        <div
          ref={imgRef}
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 50vw, 33vw"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        </div>

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Index number */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: "var(--font-heading)",
            fontSize: 11,
            fontWeight: 700,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.06em",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Footer */}
      <div style={{ paddingBottom: 4 }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            lineHeight: 1.2,
            marginBottom: 5,
          }}
        >
          {member.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b0a99a",
            lineHeight: 1.5,
          }}
        >
          {member.role}
        </p>

        {/* Animated bottom line — expands on hover */}
        <div
          style={{
            height: 1,
            backgroundColor: "#0a0a0a",
            marginTop: 14,
            width: hovered ? "100%" : "24px",
            transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            opacity: hovered ? 0.7 : 0.18,
          }}
        />
      </div>
    </div>
  );
}

// ── Main Team section ─────────────────────────────────────────────────────────
export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Draw header line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "expo.out",
          transformOrigin: "left",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        },
      );

      // Heading text
      gsap.fromTo(
        ".team-heading",
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // Cards — clip-path reveal with stagger
      gsap.fromTo(
        ".team-card",
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          stagger: {
            amount: 0.6,
            from: "start",
          },
          duration: 0.95,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 82%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 96px)",
        backgroundColor: "#f9f8f6",
        overflow: "hidden",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            paddingBottom: 24,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#b0a99a",
                marginBottom: 12,
              }}
            >
              Teal Core
            </p>
            <h2
              className="team-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#0a0a0a",
              }}
            >
              The People Behind the Mood
            </h2>
          </div>

          {/* Member count */}
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                lineHeight: 1,
              }}
            >
              {String(team.length).padStart(2, "0")}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#b0a99a",
                marginTop: 4,
              }}
            >
              Members
            </p>
          </div>
        </div>

        {/* Draw line */}
        <div
          ref={lineRef}
          style={{
            height: 1,
            backgroundColor: "#e8e6e1",
            width: "100%",
          }}
        />
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────────────── */}
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(32px, 4vw, 52px) clamp(20px, 3vw, 36px)",
        }}
      >
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

      {/* ── Bottom quote ─────────────────────────────────────────────────────── */}
      <div
        style={{
          marginTop: "clamp(60px, 8vw, 100px)",
          paddingTop: 40,
          borderTop: "1px solid #e8e6e1",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontStyle: "italic",
            color: "#0a0a0a",
            letterSpacing: "-0.01em",
          }}
        >
          "driven by intuition, tone and reality"
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#b0a99a",
            marginTop: 10,
          }}
        >
          — Sahil
        </p>
      </div>
    </section>
  );
}

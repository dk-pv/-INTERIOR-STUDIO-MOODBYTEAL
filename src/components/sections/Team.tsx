"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Sahil Haneefa",
    role: "Founder & CEO",
    tag: "Chief Architect",
    image: "/images/team-sahil.jpg",
  },
  {
    name: "Ar. Akhil Mohan",
    role: "Artist & CGI",
    tag: "Principal Architect",
    image: "/images/team-akhil.jpg",
  },
  {
    name: "Rashid EK",
    role: "Sr. Project Manager",
    tag: "Operations",
    image: "/images/team-rashid.jpg",
  },
  {
    name: "Ar. Laya Balakrishnan",
    role: "Principal Architect",
    tag: "Design Lead",
    image: "/images/team-laya.jpg",
  },
  {
    name: "Anaswara Anil",
    role: "Interior Designer",
    tag: "CGI",
    image: "/images/team-anaswara.jpg",
  },
  {
    name: "Dinesh Arivalagan",
    role: "Interior Designer",
    tag: "CGI",
    image: "/images/team-dinesh.jpg",
  },
];

// ── Magnetic Tilt Card ────────────────────────────────────────────────────────
function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    gsap.to(cardRef.current, {
      rotateY: dx * 8,
      rotateX: -dy * 8,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });

    gsap.to(glowRef.current, {
      x: x - 80,
      y: y - 80,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glowRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4,
    });
    setActive(false);
  }, []);

  return (
    <div className="team-card-wrap" style={{ perspective: "800px" }}>
      <div
        ref={cardRef}
        className={`team-card ${active ? "active" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          cursor: "none",
          transformStyle: "preserve-3d",
          willChange: "transform",
          background: "#0e0e0e",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Glow */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,155,100,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 4,
            opacity: 0,
            mixBlendMode: "screen",
          }}
        />

        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 4",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 100%)",
            }}
          />

          <div
            className="card-img"
            style={{
              position: "absolute",
              inset: 0,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                filter: "grayscale(30%) brightness(0.85)",
                transition: "filter 0.6s ease",
              }}
              sizes="(max-width: 768px) 50vw, 25vw"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>

          {/* Dark vignette bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #0e0e0e 0%, rgba(14,14,14,0.5) 40%, transparent 70%)",
              zIndex: 2,
            }}
          />

          {/* Index top-left */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 3,
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.24em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Tag badge top-right */}
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 3,
              background: "rgba(180,155,100,0.12)",
              border: "1px solid rgba(180,155,100,0.25)",
              borderRadius: 2,
              padding: "3px 8px",
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(180,155,100,0.8)",
            }}
          >
            {member.tag}
          </div>

          {/* Name over image bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 3,
              padding: "20px 18px 18px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: 5,
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(180,155,100,0.7)",
              }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Hover shimmer line */}
        <div
          className="card-shimmer"
          style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
            zIndex: 5,
            pointerEvents: "none",
            transition: "left 0.6s ease",
          }}
        />
      </div>

      <style jsx>{`
        .team-card:hover .card-img {
          transform: scale(1.06);
        }
        .team-card:hover img {
          filter: grayscale(0%) brightness(0.9) !important;
        }
        .team-card:hover .card-shimmer {
          left: 140%;
        }
      `}</style>
    </div>
  );
}

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { innerText: 0 },
      {
        innerText: target,
        duration: 1.4,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      },
    );
  }, [target]);
  return <span ref={ref}>00</span>;
}

// ── Main Team section ─────────────────────────────────────────────────────────
export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading word split reveal
      gsap.fromTo(
        ".team-word",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.06,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".team-header", start: "top 85%" },
        },
      );

      // Divider line
      gsap.fromTo(
        ".team-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          transformOrigin: "left",
          scrollTrigger: { trigger: ".team-header", start: "top 80%" },
        },
      );

      // Cards stagger
      gsap.fromTo(
        ".team-card-wrap",
        { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          stagger: {
            amount: 0.7,
            from: "start",
          },
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 82%",
          },
        },
      );

      // Quote
      gsap.fromTo(
        ".team-quote",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".team-quote", start: "top 90%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ["The", "People", "Behind", "the", "Mood"];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(90px, 11vw, 160px) clamp(24px, 6vw, 96px)",
        backgroundColor: "#080808",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <div
        className="team-header"
        style={{ marginBottom: 72, position: "relative" }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              backgroundColor: "rgba(180,155,100,0.5)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.36em",
              textTransform: "uppercase",
              color: "rgba(180,155,100,0.7)",
            }}
          >
            Teal Core
          </p>
        </div>

        {/* Big heading with word split */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0 0.28em",
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          {headingWords.map((word, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <span
                className="team-word"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  color: "#ffffff",
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Divider with counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="team-divider"
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              paddingLeft: 28,
              display: "flex",
              alignItems: "baseline",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              <AnimCounter target={team.length} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              members
            </span>
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────────────── */}
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          gap: "clamp(16px, 2.5vw, 28px)",
        }}
      >
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

      {/* ── Bottom quote ─────────────────────────────────────────────────────── */}
      <div
        className="team-quote"
        style={{
          marginTop: "clamp(72px, 10vw, 120px)",
          paddingTop: 48,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            maxWidth: 600,
          }}
        >
          <span>“driven by intuition, tone and reality”</span>
        </p>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              width: 36,
              height: 1,
              backgroundColor: "rgba(180,155,100,0.5)",
              marginLeft: "auto",
              marginBottom: 8,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(180,155,100,0.6)",
            }}
          >
            Sahil Haneefa
          </p>
        </div>
      </div>
    </section>
  );
}

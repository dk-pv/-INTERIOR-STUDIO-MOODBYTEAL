"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);

  const [active, setActive] = useState(false);

  const updateRect = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseEnter = () => {
    updateRect();
    setActive(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      const glow = glowRef.current;
      const rect = rectRef.current;

      if (!card || !glow || !rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;

      card.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
      glow.style.transform = `translate(${x - 80}px, ${y - 80}px)`;
      glow.style.opacity = "1";
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    glow.style.opacity = "0";

    setActive(false);
  };

  // ✅ update rect on scroll/resize
  useEffect(() => {
    window.addEventListener("scroll", updateRect);
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  // ✅ cleanup RAF
  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="team-card-wrap" style={{ perspective: "800px" }}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={active ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
          transform: "translateZ(0)",
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
            transition: "opacity 0.2s ease",
          }}
        />

        {/* Image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4" }}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            priority={index < 2}
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              filter: active
                ? "grayscale(0%) brightness(0.9)"
                : "grayscale(30%) brightness(0.85)",
              transition: "filter 0.5s ease, transform 0.6s ease",
              transform: active ? "scale(1.06)" : "scale(1)",
            }}
          />
        </div>

        {/* Name */}
        <div style={{ padding: 16 }}>
          <h3 style={{ color: "#fff" }}>{member.name}</h3>
          <p style={{ color: "#aaa", fontSize: 12 }}>{member.role}</p>
        </div>
      </div>
    </div>
  );
}

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / 800, 1);
      const value = Math.floor(progress * target);

      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target]);

  return <span>{count}</span>;
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".team-card-wrap");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(40px)" },
                { opacity: 1, transform: "translateY(0px)" },
              ],
              {
                duration: 600,
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

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      {/* Header + Grid same as your code (unchanged UI) */}

      {/* Grid */}
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
    </section>
  );
}
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Villa Interior",
  "Private Interior",
  "Commercial Interior",
  "Apartment Interior",
];

// ─── Filter Pill ──────────────────────────────────────────
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 18px",
        borderRadius: 999,
        border: `1px solid ${active ? "#0a0a0a" : "rgba(10,10,10,0.15)"}`,
        backgroundColor: active ? "#0a0a0a" : "transparent",
        color: active ? "#f5f4f0" : "rgba(10,10,10,0.45)",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.6rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase" as const,
        cursor: "pointer",
        transition: "all 0.25s ease",
        whiteSpace: "nowrap" as const,
      }}
    >
      {label}
    </button>
  );
}

// ─── Project Card ─────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  let frame: number | null = null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const card = ref.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const rx = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
      const ry = ((e.clientX - rect.left) / rect.width - 0.5) * -4;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: (index % 3) * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: "#ffffff",
          overflow: "hidden",
          willChange: "transform",
          borderRadius: 2,
          border: "1px solid rgba(10,10,10,0.08)",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.12)"
            : "0 2px 16px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.35s ease",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 3",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
            priority={index < 2}
            style={{
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,10,10,0.65), transparent 60%)",
            }}
          />

          {/* Category tag */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              padding: "5px 12px",
              backgroundColor: "rgba(245,244,240,0.92)",
              borderRadius: 999,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </div>

          {/* Hover title */}
          <motion.div
            animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.28 }}
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              right: 14,
            }}
          >
            <span
              style={{
                color: "#f5f4f0",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </span>
          </motion.div>
        </div>

        {/* Card footer */}
        <div
          style={{
            padding: "16px 18px",
            borderTop: "1px solid rgba(10,10,10,0.07)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              letterSpacing: "-0.01em",
              color: "#0a0a0a",
              fontWeight: 400,
            }}
          >
            {project.title}
          </h3>

          {/* Arrow grows on hover */}
          <motion.span
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "#0a0a0a",
            }}
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── MAIN ─────────────────────────────────────────────────
export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      data-theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f4f0",
        padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* ── Header ── */}
      <div ref={headerRef} style={{ marginBottom: 56 }}>
        {/* top row: label + count */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 20,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
            }}
          >
            Selected Works
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(10,10,10,0.25)",
            }}
          >
            {filtered.length} projects
          </motion.p>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#0a0a0a",
            fontWeight: 400,
            marginBottom: 36,
          }}
        >
          Our Work
        </motion.h2>

        {/* Divider */}
        <div
          style={{
            height: 1,
            backgroundColor: "rgba(10,10,10,0.1)",
            marginBottom: 28,
          }}
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {categories.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

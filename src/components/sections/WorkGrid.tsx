"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

// ─── Filter Button ─────────────────────────────────────────
function FilterButton({
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
        padding: "8px 20px",
        border: `1.5px solid ${active ? "#0a0a0a" : "#d4d4d4"}`,
        backgroundColor: active ? "#0a0a0a" : "transparent",
        color: active ? "#ffffff" : "#888",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        transition: "all 0.25s ease",
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

  // ✅ optimized tilt (throttled)
  let frame: number | null = null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const card = ref.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const ry = ((e.clientY - rect.top) / rect.height - 0.5) * 3;
      const rx = ((e.clientX - rect.left) / rect.width - 0.5) * -3;

      card.style.transform = `rotateX(${ry}deg) rotateY(${rx}deg)`;
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: (index % 3) * 0.08,
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
          boxShadow: hovered
            ? "0 12px 40px rgba(0,0,0,0.13)"
            : "0 2px 12px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* IMAGE */}
        <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
            priority={index < 2}
          />

          {/* overlay */}
          <motion.div
            animate={{ opacity: hovered ? 0.5 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          />

          {/* title hover */}
          <motion.div
            animate={{
              y: hovered ? 0 : 10,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              right: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff", fontSize: 17, fontWeight: 600 }}>
              {project.title}
            </span>
          </motion.div>
        </div>

        {/* footer */}
        <div
          style={{
            padding: "14px 16px",
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ fontSize: 14 }}>{project.title}</h3>

          <motion.div
            animate={{ width: hovered ? 40 : 16 }}
            transition={{ duration: 0.25 }}
            style={{
              height: 1,
              background: "#000",
            }}
          />
        </div>
      </motion.div>
    </Link>
  );
}

// ─── MAIN ─────────────────────────────────────────
export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f8f6",
        padding: "80px 40px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h2 className="text-4xl md:text-6xl font-heading text-black">
          Selected Works
        </h2>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import gsap from "gsap";
import { projects } from "@/data/projects";
import Link from "next/link";

const categories = [
  "All",
  "Villa Interior",
  "Private Interior",
  "Commercial Interior",
  "Apartment Interior",
];

const EXPO = [0.16, 1, 0.3, 1] as const;
const SILK = [0.22, 1, 0.36, 1] as const;

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      // snap directly — no lerp, no lag
      gsap.set(el, { x: e.clientX, y: e.clientY });

      const hovering = !!(e.target as HTMLElement).closest(
        "[data-cursor='view']",
      );
      el.setAttribute("data-view", hovering ? "1" : "0");
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      data-view="0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        /* default: small dot */
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        /* CSS handles ALL hover state — no GSAP animation */
        transition:
          "width 0.22s ease, height 0.22s ease, background-color 0.22s ease",
      }}
      /* ✅ CSS attribute selector drives expand — zero JS animation */
      className="cursor-el"
    >
      <style>{`
        .cursor-el[data-view="1"] {
          width: 56px !important;
          height: 56px !important;
          background-color: #0a0a0a !important;
        }
        .cursor-el[data-view="1"] .cursor-label {
          opacity: 1 !important;
        }
      `}</style>
      <span
        className="cursor-label"
        style={{
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
          color: "#fff",
          opacity: 0,
          whiteSpace: "nowrap",
          transition: "opacity 0.18s ease",
          userSelect: "none",
        }}
      >
        View
      </span>
    </div>
  );
}

// ─── Split Text Heading ───────────────────────────────────────────────────────
function SplitHeading({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const chars = el.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.03,
        delay: 0.1,
      },
    );
  }, []);

  return (
    <h2
      ref={containerRef}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(44px, 6vw, 76px)",
        fontWeight: 700,
        color: "#0a0a0a",
        lineHeight: 1,
        letterSpacing: "-0.025em",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char"
          style={{
            display: "inline-block",
            opacity: 0,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </h2>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevRef = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from = prevRef.current;
    prevRef.current = value;
    gsap.fromTo(
      el,
      { y: from > value ? -24 : 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "expo.out" },
    );
  }, [value]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(38px, 5vw, 64px)",
        fontWeight: 700,
        color: "#0a0a0a",
        display: "block",
        lineHeight: 1,
      }}
    >
      {String(value).padStart(2, "0")}
    </span>
  );
}

// ─── Filter Button ────────────────────────────────────────────────────────────
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
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      style={{
        padding: "8px 20px",
        border: `1.5px solid ${active ? "#0a0a0a" : "#d4d4d4"}`,
        backgroundColor: active ? "#0a0a0a" : "transparent",
        color: active ? "#ffffff" : "#888",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        cursor: "none",
        transition: "all 0.25s ease",
        outline: "none",
        borderRadius: 0,
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#0a0a0a";
          (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4d4d4";
          (e.currentTarget as HTMLButtonElement).style.color = "#888";
        }
      }}
    >
      {label}
    </motion.button>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
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
  const imageRef = useRef<HTMLImageElement>(null);

  const clipVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        clipPath: { duration: 0.9, ease: EXPO, delay: (index % 3) * 0.1 },
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    const img = imageRef.current;
    if (!card || !img) return;
    const rect = card.getBoundingClientRect();
    const ry = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    const rx = ((e.clientX - rect.left) / rect.width - 0.5) * -6;
    gsap.to(card, {
      rotateX: ry,
      rotateY: rx,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 900,
    });
    gsap.to(img, { y: ry * 1.4, duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.6)",
    });
    gsap.to(imageRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
  };

  return (
    <Link href={`/work/${project.id}`} style={{ display: "block" }}>
      <motion.div
        ref={ref}
        layout
        variants={clipVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="view"
        style={{
          backgroundColor: "#ffffff",
          cursor: "none",
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
          borderRadius: 2,
          /* ✅ Card separation: subtle shadow instead of borders */
          boxShadow: hovered
            ? "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)"
            : "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* ── Image ── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "4 / 3",
            backgroundColor: "#e8e6e1",
          }}
        >
          {/* Placeholder gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #e8e6e1 0%, #d0cdc7 100%)",
              zIndex: 0,
            }}
          />

          <motion.img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.75, ease: SILK }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              willChange: "transform",
            }}
          />

          {/* Dark overlay on hover */}
          <motion.div
            animate={{ opacity: hovered ? 0.5 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 55%)",
              zIndex: 2,
            }}
          />

          {/* Category chip */}
          <motion.span
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.35 + (index % 3) * 0.08,
              ease: SILK,
            }}
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              zIndex: 4,
              padding: "5px 10px",
              backgroundColor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(4px)",
              color: "#0a0a0a",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {project.category}
          </motion.span>

          {/* Bottom hover reveal */}
          <motion.div
            animate={{ y: hovered ? 0 : 16, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35, ease: SILK }}
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              right: 14,
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 19,
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </span>
            <div
              style={{
                width: 34,
                height: 34,
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ── Card Footer ── */}
        <div
          style={{
            padding: "15px 18px",
            /* ✅ Soft top border — much lighter than before */
            borderTop: "1px solid #ebebeb",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            backgroundColor: "#ffffff",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#0a0a0a",
              margin: 0,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>

          {/* Expanding line indicator */}
          <motion.div
            animate={{
              width: hovered ? 40 : 16,
              opacity: hovered ? 0.7 : 0.18,
            }}
            transition={{ duration: 0.35, ease: SILK }}
            style={{ height: 1, backgroundColor: "#0a0a0a", flexShrink: 0 }}
          />
        </div>

        {/* ✅ Bottom accent bar — only visible on hover, softer */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: SILK }}
          style={{
            height: 2,
            background: "linear-gradient(90deg, #0a0a0a 0%, #555 100%)",
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </Link>
  );
}

// ─── Draw Line ────────────────────────────────────────────────────────────────
function DrawLine() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: EXPO, delay: 0.15 }}
      style={{
        height: "1px",
        backgroundColor: "#e0e0e0",
        transformOrigin: "left",
        width: "100%",
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [gridKey, setGridKey] = useState(0);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleFilter = (cat: string) => {
    setActiveCategory(cat);
    setGridKey((k) => k + 1);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        button { background: none; border: none; }
      `}</style>

      <Cursor />

      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9f8f6",
          padding: "80px 60px 100px",
          cursor: "none",
        }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              paddingBottom: 28,
            }}
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                style={{
                  fontSize: 10,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#b0a99a",
                  marginBottom: 12,
                  fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Selected Works
              </motion.p>
              <SplitHeading text="Our Projects" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ textAlign: "right", overflow: "hidden" }}
            >
              <AnimatedCount value={filtered.length} />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#b0a99a",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                Projects
              </span>
            </motion.div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <DrawLine />
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: SILK }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 52,
            }}
          >
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => handleFilter(cat)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Project Grid ── */}
        {/* ✅ Gap-based grid — NO outer border, NO inner cell borders */}
        <motion.div
          key={gridKey}
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px" /* clean spacing between cards */,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center", padding: "80px 0" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  color: "#ccc",
                }}
              >
                No projects found.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

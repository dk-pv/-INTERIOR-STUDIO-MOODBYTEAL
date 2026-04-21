"use client";

import { useRef, use } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const EXPO = [0.16, 1, 0.3, 1] as const;

// Extend base project type to safely include optional fields used in the template
type ExtendedProject = (typeof projects)[number] & {
  images?: string[];
  location?: string;
  year?: string;
  quote?: string;
};

// ── Parallax hero image ───────────────────────────────────────────────────────
function HeroImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(480px, 75vh, 820px)",
        overflow: "hidden",
        backgroundColor: "#e8e6e1",
      }}
    >
      {/* Clip reveal on mount */}
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.3, ease: EXPO, delay: 0.3 }}
        style={{ position: "absolute", inset: 0 }}
      >
        <motion.div style={{ y, position: "absolute", inset: "-20%" }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </motion.div>

        {/* Gradient fade at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            background: "linear-gradient(transparent, #f9f8f6)",
            zIndex: 2,
          }}
        />
        {/* Subtle top vignette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "18%",
            background: "linear-gradient(rgba(10,10,10,0.25), transparent)",
            zIndex: 2,
          }}
        />
      </motion.div>
    </div>
  );
}

// ── Back button ───────────────────────────────────────────────────────────────
function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EXPO, delay: 0.15 }}
      style={{
        position: "fixed",
        top: "clamp(20px, 3vw, 36px)",
        left: "clamp(20px, 4vw, 52px)",
        zIndex: 50,
      }}
    >
      <Link
        href="/work"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          padding: "8px 16px 8px 10px",
          backgroundColor: "rgba(249,248,246,0.88)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0,0,0,0.1)",
          transition: "border-color 0.25s ease, background-color 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "rgba(0,0,0,0.28)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "rgba(0,0,0,0.1)";
        }}
      >
        {/* Arrow */}
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 1L1 5M1 5L5 9M1 5H12"
            stroke="#0a0a0a"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0a0a0a",
          }}
        >
          Work
        </span>
      </Link>
    </motion.div>
  );
}

// ── Metadata pill ─────────────────────────────────────────────────────────────
function MetaPill({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EXPO, delay }}
      style={{ display: "flex", flexDirection: "column", gap: 6 }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(0,0,0,0.3)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 17,
          fontWeight: 600,
          color: "#0a0a0a",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </span>
    </motion.div>
  );
}

// ── Section heading with draw line ───────────────────────────────────────────
function SectionHeading({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ marginBottom: "clamp(32px, 5vw, 52px)" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO }}
        style={{
          height: 1,
          backgroundColor: "rgba(0,0,0,0.1)",
          transformOrigin: "left",
          marginBottom: 22,
        }}
      />
      <div style={{ overflow: "hidden" }}>
        <motion.h2
          initial={{ y: "105%" }}
          animate={inView ? { y: "0%" } : {}}
          transition={{ duration: 0.9, ease: EXPO, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
            color: "#0a0a0a",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {text}
        </motion.h2>
      </div>
    </div>
  );
}

// ── Pull quote ────────────────────────────────────────────────────────────────
function PullQuote({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, ease: EXPO }}
      style={{
        padding: "clamp(36px, 6vw, 64px) clamp(28px, 5vw, 56px)",
        backgroundColor: "#f0efec",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teal accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, ease: EXPO, delay: 0.3 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          backgroundColor: "#4a9d8f",
          transformOrigin: "top",
        }}
      />
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "rgba(0,0,0,0.65)",
          lineHeight: 1.55,
          letterSpacing: "-0.01em",
        }}
      >
        <span>“{text}”</span>
      </p>
    </motion.div>
  );
}

// ── Gallery grid ──────────────────────────────────────────────────────────────
function GalleryGrid({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: images.length === 1 ? "1fr" : "1fr 1fr",
        gap: 12,
      }}
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 1 }}
          animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EXPO, delay: i * 0.14 }}
          style={{
            position: "relative",
            aspectRatio: i === 0 && images.length > 2 ? "16/9" : "4/3",
            overflow: "hidden",
            backgroundColor: "#e8e6e1",
            gridColumn: i === 0 && images.length >= 3 ? "1 / -1" : "auto",
          }}
        >
          <Image
            src={img}
            alt={`Gallery image ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ── Next project teaser ───────────────────────────────────────────────────────
function NextProject({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Link href={`/work/${project.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EXPO }}
        style={{
          position: "relative",
          height: "clamp(280px, 42vh, 480px)",
          overflow: "hidden",
          backgroundColor: "#0a0a0a",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(28px, 5vw, 52px) clamp(24px, 8vw, 120px)",
        }}
      >
        {/* Background image — dimmed */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.35,
            }}
          />
        </div>
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 14,
            }}
          >
            Next Project
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h3>
            {/* Arrow circle */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ── Main Detail Page ──────────────────────────────────────────────────────────
export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const baseProject = projects.find((p) => p.id === slug);

  if (!baseProject) {
    notFound();
  }

  // Safe extended project
  const project = baseProject as ExtendedProject;

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Gallery fallback
  const galleryImages: string[] =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : [project.image];

  // Metadata
  const meta: { label: string; value: string }[] = [
    { label: "Category", value: project.category },
    { label: "Project", value: project.title },
    { label: "Location", value: project.location ?? "UAE / India" },
    { label: "Year", value: project.year ?? "2024" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
      `}</style>

      <main style={{ backgroundColor: "#f9f8f6", color: "#0a0a0a" }}>
        {/* ── BACK BUTTON ──────────────────────────────────────────────── */}
        <BackButton />

        {/* ── HERO IMAGE ───────────────────────────────────────────────── */}
        <HeroImage src={project.image} alt={project.title} />

        {/* ── TITLE BLOCK ──────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(44px, 7vw, 72px) clamp(24px, 8vw, 120px) 0",
          }}
        >
          {/* Category label */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO, delay: 0.5 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#4a9d8f",
              marginBottom: 18,
            }}
          >
            {project.category}
          </motion.p>

          {/* Title */}
          <div style={{ overflow: "hidden", marginBottom: 36 }}>
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: EXPO, delay: 0.55 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 7vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                color: "#0a0a0a",
              }}
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Teal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: EXPO, delay: 0.85 }}
            style={{
              height: 2,
              width: "clamp(48px, 6vw, 80px)",
              backgroundColor: "#4a9d8f",
              transformOrigin: "left",
            }}
          />
        </section>

        {/* ── METADATA + DESCRIPTION ───────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(44px, 6vw, 64px) clamp(24px, 8vw, 120px)",
            display: "grid",
            gridTemplateColumns: "1fr clamp(240px, 28%, 360px)",
            gap: "clamp(40px, 8vw, 100px)",
            alignItems: "start",
          }}
        >
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EXPO, delay: 0.9 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.62)",
              letterSpacing: "0.005em",
            }}
          >
            {project.description ||
              `${project.title} is a carefully curated spatial experience — a dialogue between light, material, and human presence. Every element has been chosen to evoke stillness while quietly asserting luxury.`}
          </motion.p>

          {/* Metadata sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EXPO, delay: 1.0 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              paddingTop: 4,
            }}
          >
            {/* Top accent */}
            <div
              style={{
                height: 1,
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            />
            {meta.map((m, i) => (
              <MetaPill
                key={m.label}
                label={m.label}
                value={m.value}
                delay={1.0 + i * 0.08}
              />
            ))}
          </motion.div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "0 clamp(24px, 8vw, 120px) clamp(52px, 8vw, 80px)",
          }}
        >
          <SectionHeading text="Project Gallery" />
          <GalleryGrid images={galleryImages} />
        </section>

        {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
        <section
          style={{
            padding: "0 clamp(24px, 8vw, 120px) clamp(52px, 8vw, 80px)",
          }}
        >
          <PullQuote
            text={
              project.quote ??
              "Design is not just what it looks like and feels like. Design is how it works within life, and how life works within it."
            }
          />
        </section>

        {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
        {nextProject && <NextProject project={nextProject} />}
      </main>
    </>
  );
}

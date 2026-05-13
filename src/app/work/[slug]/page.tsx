"use client";

import { useRef, use, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const EXPO = [0.16, 1, 0.3, 1] as const;
const R_CARD = "4/5";

type ExtendedProject = (typeof projects)[number] & {
  images?: string[];
  location?: string;
  year?: string;
  quote?: string;
  description?: string;
  area?: string;
  client?: string;
};

// Scroll-reveal
function Reveal({
  children,
  delay = 0,
  y = 36,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: EXPO }}
    >
      {children}
    </motion.div>
  );
}

// Curtain image — always uses R_CARD aspect ratio
function CurtainImg({
  src,
  alt,
  delay = 0,
  caption,
  sizes = "(max-width:768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  delay?: number;
  caption?: string;
  sizes?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 1.15, delay, ease: EXPO }}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: R_CARD,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.7, delay, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
      </motion.div>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.55 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.47rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.24)",
            marginTop: 10,
            textAlign: "right",
          }}
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
}

// Hero — full-screen, unchanged
function HeroSection({
  src,
  title,
  category,
  projectIndex,
  total,
}: {
  src: string;
  title: string;
  category: string;
  projectIndex: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOp = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 560,
        overflow: "hidden",
      }}
    >
      <motion.div style={{ y: imgY, position: "absolute", inset: "-12% 0" }}>
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={src}
            alt={title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </motion.div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(170deg, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.05) 45%, rgba(8,8,8,0.78) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EXPO }}
        style={{
          position: "absolute",
          zIndex: 10,
          top: "clamp(18px,3vh,36px)",
          left: "clamp(20px,5vw,72px)",
          right: "clamp(20px,5vw,72px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/work"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(245,244,240,0.5)",
            textDecoration: "none",
          }}
        >
          ← Work
        </Link>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.28em",
            color: "rgba(245,244,240,0.3)",
          }}
        >
          {String(projectIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </motion.div>

      <motion.div
        style={{
          opacity: fadeOp,
          position: "absolute",
          zIndex: 10,
          bottom: "clamp(28px,5vh,60px)",
          left: "clamp(20px,5vw,72px)",
          right: "clamp(20px,5vw,72px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: EXPO }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              backgroundColor: "rgba(245,244,240,0.45)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.55)",
            }}
          >
            {category}
          </span>
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.25, delay: 0.55, ease: EXPO }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem,8.5vw,9rem)",
              fontWeight: 400,
              letterSpacing: "-0.05em",
              lineHeight: 0.93,
              color: "#f5f4f0",
              margin: 0,
            }}
          >
            {title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 28,
          }}
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 34,
              backgroundColor: "rgba(245,244,240,0.38)",
              transformOrigin: "top",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.44rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.28)",
            }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function SpecsStrip({ specs }: { specs: { label: string; value: string }[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
      className="specs-strip"
    >
      {specs.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: i * 0.07, ease: EXPO }}
          style={{
            padding: "clamp(14px,2.2vw,26px) clamp(10px,1.8vw,20px)",
            borderRight:
              i < specs.length - 1 ? "1px solid rgba(10,10,10,0.07)" : "none",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.28)",
              marginBottom: 7,
            }}
          >
            {s.label}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.78rem,1vw,0.9rem)",
              color: "#0a0a0a",
              lineHeight: 1.35,
            }}
          >
            {s.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <Reveal
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: "clamp(22px,3.5vw,42px)",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(10,10,10,0.28)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
      <div style={{ flex: 1, height: 1, background: "rgba(10,10,10,0.08)" }} />
    </Reveal>
  );
}

function QuoteBlock({ quote }: { quote: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div
      ref={ref}
      style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: EXPO }}
        style={{
          height: 1,
          background: "rgba(10,10,10,0.1)",
          transformOrigin: "center",
          marginBottom: 30,
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.18, ease: EXPO }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.35rem,2.6vw,2.1rem)",
          letterSpacing: "-0.03em",
          fontStyle: "italic",
          color: "rgba(10,10,10,0.5)",
          lineHeight: 1.42,
        }}
      >
        "{quote}"
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.45, ease: EXPO }}
        style={{
          height: 1,
          background: "rgba(10,10,10,0.1)",
          transformOrigin: "center",
          marginTop: 30,
        }}
      />
    </div>
  );
}

function NextProject({ project }: { project: ExtendedProject }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/work/${project.id}`} style={{ display: "block" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          position: "relative",
          height: "clamp(260px,42vh,500px)",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.85, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px,4.5vw,52px)",
            left: "clamp(20px,5vw,72px)",
            right: "clamp(20px,5vw,72px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.38)",
                marginBottom: 10,
              }}
            >
              Next Project
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.9, ease: EXPO }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem,5vw,4.5rem)",
                letterSpacing: "-0.045em",
                color: "#f5f4f0",
                fontWeight: 400,
                lineHeight: 1,
                margin: 0,
              }}
            >
              {project.title}
            </motion.h3>
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "rgba(245,244,240,0.65)",
              lineHeight: 1,
              paddingBottom: 4,
            }}
          >
            →
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

// MAIN PAGE
export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug) as ExtendedProject;
  if (!project) return notFound();

  const idx = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(idx + 1) % projects.length] as ExtendedProject;

  const gallery = project.images?.length
    ? project.images
    : Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.png`);

  const specs = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location ?? "Kerala, India" },
    { label: "Year", value: project.year ?? "2024" },
    { label: "Area", value: project.area ?? "—" },
    { label: "Client", value: project.client ?? "Private Residence" },
    { label: "Status", value: "Completed" },
  ];

  const description =
    project.description ??
    "A premium interior project crafted with spatial harmony and emotional depth. Every detail was considered to create an environment that resonates with its inhabitants — where silence, weight, and light guide each surface and form. The project unfolds as a continuous spatial journey, revealing itself gradually through movement and perception.";

  const quote =
    project.quote ??
    "Space is not a container but a living field where architecture, intelligence, and perception become one.";

  const GAP = "clamp(10px,1.6vw,20px)";

  return (
    <>
      <style>{`
        .pd-wrap { background-color: #f5f4f0; color: #0a0a0a; }
        .pd-cx { max-width: 1320px; margin: 0 auto; padding-left: clamp(20px,5vw,72px); padding-right: clamp(20px,5vw,72px); }
        .pd-py  { padding-top: clamp(40px,6vw,88px); padding-bottom: clamp(40px,6vw,88px); }
        .pd-pys { padding-top: clamp(22px,3.8vw,52px); padding-bottom: clamp(22px,3.8vw,52px); }

        /* Specs — 6 col → 3 → 2 */
        .specs-strip {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid rgba(10,10,10,0.08);
          border-bottom: 1px solid rgba(10,10,10,0.08);
        }
        @media (max-width: 900px) { .specs-strip { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 520px)  { .specs-strip { grid-template-columns: repeat(2,1fr); } }

        /* Title row */
        .title-row {
          display: grid; grid-template-columns: 1fr auto;
          gap: clamp(20px,4vw,56px); align-items: end;
          padding-bottom: clamp(22px,3vw,38px);
          border-bottom: 1px solid rgba(10,10,10,0.09);
        }
        @media (max-width: 560px) { .title-row { grid-template-columns: 1fr; } }

        /* Description grid */
        .desc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,5vw,80px); align-items: start; }
        @media (max-width: 720px) { .desc-grid { grid-template-columns: 1fr; gap: 22px; } }

        /* ── Gallery grids — all using 4/5 compact card ratio ── */

        /* 3-col trio */
        .g-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${GAP};
        }
        @media (max-width: 640px) { .g-trio { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 420px) { .g-trio { grid-template-columns: 1fr; } }

        /* 2-col duo */
        .g-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: ${GAP};
        }
        @media (max-width: 560px) { .g-duo { grid-template-columns: 1fr; } }

        /* 4-col quad — new layout for what was "final trio + single full-width" */
        .g-quad {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: ${GAP};
          align-items: start;
        }
        @media (max-width: 900px) { .g-quad { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .g-quad { grid-template-columns: 1fr; } }

        /* Centered narrow (img 7) — max 400px so it's clearly a focused card */
        .g-center { max-width: 400px; margin: 0 auto; }

        /* Back strip */
        .back-strip {
          display: flex; align-items: center; justify-content: space-between;
          padding: clamp(16px,3vw,30px) 0;
          border-top: 1px solid rgba(10,10,10,0.08);
          margin-top: clamp(24px,4vw,52px);
        }
        @media (max-width: 480px) { .back-strip { flex-direction: column; align-items: flex-start; gap: 10px; } }
      `}</style>

      <main className="pd-wrap">
        {/* 1 ── HERO */}
        <HeroSection
          src={project.image}
          title={project.title}
          category={project.category}
          projectIndex={idx}
          total={projects.length}
        />

        {/* 2 ── TITLE + SPECS */}
        <div className="pd-cx pd-pys">
          <Reveal>
            <div className="title-row">
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.52rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.28)",
                    marginBottom: 10,
                  }}
                >
                  {project.category}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.9rem,5vw,4.5rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.0,
                    color: "#0a0a0a",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h2>
              </div>
              <div style={{ textAlign: "right", paddingBottom: 6 }}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.46rem",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.18)",
                  }}
                >
                  TEAL CULTURE
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.1rem,2vw,1.7rem)",
                    letterSpacing: "-0.03em",
                    color: "rgba(10,10,10,0.1)",
                    fontStyle: "italic",
                    marginTop: 3,
                  }}
                >
                  Studio
                </p>
              </div>
            </div>
          </Reveal>
          <SpecsStrip specs={specs} />
        </div>

        {/* 3 ── DESCRIPTION */}
        <div className="pd-cx pd-pys">
          <SectionLabel text="Project Overview" />
          <div className="desc-grid">
            <Reveal delay={0.04}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.92rem,1.15vw,1.02rem)",
                  lineHeight: 1.9,
                  color: "rgba(10,10,10,0.5)",
                  letterSpacing: "0.01em",
                }}
              >
                {description}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div
                style={{
                  borderLeft: "2px solid rgba(10,10,10,0.11)",
                  paddingLeft: "clamp(18px,2.8vw,34px)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.98rem,1.55vw,1.22rem)",
                    letterSpacing: "-0.02em",
                    fontStyle: "italic",
                    color: "rgba(10,10,10,0.42)",
                    lineHeight: 1.65,
                    marginBottom: 22,
                  }}
                >
                  Light and silence. Material and restraint. Each room a study
                  in what can be left unsaid.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.22)",
                  }}
                >
                  — Teal Culture Studio
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4 ── IMAGES 1·2·3 — 3-col compact cards */}
        <div className="pd-cx">
          <SectionLabel text="Spatial Sequence" />
          <div className="g-trio">
            {[gallery[0], gallery[1], gallery[2]].map((src, i) => (
              <CurtainImg
                key={i}
                src={src}
                alt={`${project.title} — 0${i + 1}`}
                delay={i * 0.1}
                sizes="(max-width:640px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>

        {/* 5 ── IMAGE 4 — duo row with img 4 and a caption column */}
        <div className="pd-cx" style={{ marginTop: "clamp(10px,1.6vw,20px)" }}>
          <div className="g-duo">
            <CurtainImg
              src={gallery[3]}
              alt={`${project.title} — 04`}
              sizes="(max-width:560px) 100vw, 50vw"
              caption="Corridor volume — precision timber & diffused ceiling light"
            />
            <CurtainImg
              src={gallery[4]}
              alt={`${project.title} — 05`}
              sizes="(max-width:560px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 6 ── QUOTE */}
        <div className="pd-cx pd-py">
          <QuoteBlock quote={quote} />
        </div>

        {/* 7 ── IMAGES 5·6·7 — 3-col compact cards */}
        <div className="pd-cx">
          <SectionLabel text="Interior Detail" />
          <div className="g-trio">
            {[gallery[5], gallery[6], gallery[7]].map((src, i) => (
              <CurtainImg
                key={i}
                src={src}
                alt={`${project.title} — 0${i + 5}`}
                delay={i * 0.1}
                sizes="(max-width:640px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>

        {/* 8 ── IMAGE centered narrow card */}
        <div className="pd-cx" style={{ marginTop: "clamp(10px,1.6vw,20px)" }}>
          <div className="g-center">
            <CurtainImg
              src={gallery[6]}
              alt={`${project.title} — 07`}
              sizes="(max-width:768px) 100vw, 400px"
              caption="Master suite — terracotta marble & warm timber herringbone"
            />
          </div>
        </div>

        {/* 9 ── IMAGES 8·9·10·(main) — 4-col compact cards */}
        <div className="pd-cx pd-pys">
          <SectionLabel text="Material Language" />
          <div className="g-quad">
            {[gallery[7], gallery[8], gallery[9], gallery[0]].map((src, i) => (
              <CurtainImg
                key={i}
                src={src}
                alt={`${project.title} — M${i + 1}`}
                delay={i * 0.08}
                sizes="(max-width:900px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>

        {/* 10 ── BACK */}
        <div className="pd-cx">
          <Reveal>
            <div className="back-strip">
              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.54rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.36)",
                  textDecoration: "none",
                }}
              >
                ← All Projects
              </Link>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.48rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(10,10,10,0.18)",
                }}
              >
                Photography — TEAL CULTURE Studio
              </p>
            </div>
          </Reveal>
        </div>

        {/* 11 ── NEXT PROJECT */}
        <NextProject project={nextProject} />
      </main>
    </>
  );
}

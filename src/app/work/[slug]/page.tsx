"use client";

import { useRef, use } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const EXPO = [0.16, 1, 0.3, 1] as const;

type ExtendedProject = (typeof projects)[number] & {
  images?: string[];
  location?: string;
  year?: string;
  quote?: string;
  description?: string;
  area?: string;
};

// ─── Parallax Hero ────────────────────────────────────────
function HeroImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: "clamp(420px, 70vh, 720px)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.3, ease: EXPO }}
        style={{ position: "absolute", inset: 0 }}
      >
        <motion.div style={{ y, position: "absolute", inset: "-20%" }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(245,244,240,0.6), transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── Detail Image ─────────────────────────────────────────
function DetailImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EXPO }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: index % 3 === 0 ? "16/10" : "4/3",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 60vw"
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
}

// ─── Next Project Card ────────────────────────────────────
function NextProject({ project }: { project: ExtendedProject }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Link
      href={`/work/${project.id}`}
      style={{ cursor: "none", display: "block" }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        whileHover="hover"
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
         height: "clamp(240px, 38vh, 400px)",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.65, ease: EXPO }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover", opacity: 0.5 }}
          />
        </motion.div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.7), rgba(10,10,10,0.15))",
          }}
        />

        <div style={{ position: "absolute", bottom: 24, left: 32, right: 32 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(245,244,240,0.45)",
              marginBottom: 12,
            }}
          >
            Next Project
          </p>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "#f5f4f0",
              fontWeight: 400,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(245,244,240,0.35)",
              marginTop: 10,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          variants={{ hover: { x: 0, opacity: 1 } }}
          initial={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: 24,
            right: 32,
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            color: "rgba(245,244,240,0.6)",
          }}
        >
          →
        </motion.div>
      </motion.div>
    </Link>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────
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

  const extraImages = project.images?.slice(1) ?? [];

  const specs = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location ?? "Kerala, India" },
    { label: "Year", value: project.year ?? "2024" },
    { label: "Area", value: project.area ?? "—" },
  ];

  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
      {/* Hero */}
      <HeroImage src={project.image} alt={project.title} />

      {/* ── Project Title + Meta ── */}
      <section
        data-theme="light"
        style={{
          padding: "clamp(36px, 6vw, 64px) clamp(24px, 5vw, 72px)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: title */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.3)",
                marginBottom: 10,
              }}
            >
              {project.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EXPO, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "#0a0a0a",
                fontWeight: 400,
              }}
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Right: specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px 32px",
              paddingTop: 8,
              minWidth: 240,
            }}
          >
            {specs.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.54rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.3)",
                    marginBottom: 6,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    color: "#0a0a0a",
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EXPO, delay: 0.3 }}
          style={{
            height: 1,
            backgroundColor: "rgba(10,10,10,0.1)",
            marginTop: 28,
            transformOrigin: "left",
          }}
        />
      </section>

      {/* ── Description ── */}
      <section
        data-theme="light"
        style={{
          padding: "0 clamp(24px, 5vw, 72px) clamp(48px, 6vw, 72px)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EXPO }}
            style={{
              fontFamily: "var(--font-body)",
             fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              lineHeight: 1.85,
              color: "rgba(10,10,10,0.55)",
            }}
          >
            {project.description ??
              "A premium interior project crafted with spatial harmony and emotional depth. Every detail was considered to create an environment that resonates with its inhabitants."}
          </motion.p>

          {project.quote && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EXPO, delay: 0.15 }}
              style={{
                borderLeft: "2px solid rgba(10,10,10,0.15)",
                paddingLeft: 20,
                alignSelf: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  letterSpacing: "-0.02em",
                  fontStyle: "italic",
                  color: "rgba(10,10,10,0.55)",
                  lineHeight: 1.5,
                }}
              >
                "{project.quote}"
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Image Gallery ── */}
      {extraImages.length > 0 && (
        <section
          data-theme="light"
          style={{
            padding: "0 clamp(24px, 5vw, 72px) clamp(48px, 6vw, 72px)",
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {extraImages.map((img, i) => (
            <DetailImage
              key={i}
              src={img}
              alt={`${project.title} — ${i + 2}`}
              index={i}
            />
          ))}
        </section>
      )}

      {/* ── Back link ── */}
      <div
        style={{
           padding: "24px clamp(24px, 5vw, 72px) 48px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <Link
          href="/work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.4)",
            cursor: "none",
            transition: "color 0.25s ease",
          }}
        >
          ← All Projects
        </Link>
      </div>

      {/* ── Next project ── */}
      <NextProject project={nextProject} />
    </main>
  );
}

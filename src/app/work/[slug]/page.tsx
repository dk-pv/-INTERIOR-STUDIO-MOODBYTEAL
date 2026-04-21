"use client";

import { useRef } from "react";
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
};

// ── HERO IMAGE ─────────────────────────────────
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
        height: "clamp(480px, 75vh, 820px)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.2, ease: EXPO }}
        style={{ position: "absolute", inset: 0 }}
      >
        <motion.div style={{ y, position: "absolute", inset: "-20%" }}>
          <Image src={src} alt={alt} fill priority style={{ objectFit: "cover" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── NEXT PROJECT ───────────────────────────────
function NextProject({ project }: { project: ExtendedProject }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover", opacity: 0.4 }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #000, transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 30,
            color: "#fff",
          }}
        >
          <p style={{ fontSize: 10, letterSpacing: "0.3em" }}>
            Next Project
          </p>
          <h3 style={{ fontSize: 32 }}>{project.title}</h3>
        </div>
      </motion.div>
    </Link>
  );
}

// ── MAIN ──────────────────────────────────────
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.id === params.slug) as ExtendedProject;

  if (!project) return notFound();

  const index = projects.findIndex((p) => p.id === params.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main style={{ background: "#f9f8f6" }}>
      <HeroImage src={project.image} alt={project.title} />

      <section style={{ padding: "60px 80px" }}>
        <h1 style={{ fontSize: "60px" }}>{project.title}</h1>
        <p style={{ maxWidth: 600 }}>
          {project.description || "Premium interior project"}
        </p>
      </section>

      <NextProject project={nextProject} />
    </main>
  );
}
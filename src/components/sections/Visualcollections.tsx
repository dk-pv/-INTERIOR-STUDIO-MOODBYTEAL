"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   VISUAL COLLECTIONS SECTION
   Three blocks inspired by TEALCULTURE brand imagery:
   A) Commercial Architecture  – dark bento-grid mosaic
   B) Villa Architecture       – light full-bleed hero + thumbnail strip
   C) Private Interior         – dark editorial circular/pill crops

   Usage:
     import VisualCollections from "@/components/VisualCollections";
     // place directly after the Intro Strip in Hero.tsx
───────────────────────────────────────────────────────────── */

// ── Replace these src strings with real project images in /public ──
const COLLECTIONS = [
  {
    id: "commercial",
    tag: "COMMERCIAL · ARCHITECTURE",
    label: "Commercial Architecture",
    description:
      "Future-forward structures designed for impact and purpose — where form meets function at scale.",
    accent: "#c8a96e",
    images: [
      "/portfolio/commercial-1.png",
      "/portfolio/commercial-2.png",
      "/portfolio/commercial-3.png",
      "/portfolio/commercial-4.png",
    ],
  },
  {
    id: "villa",
    tag: "VILLA · VISUAL COLLECTION",
    label: "Villa Architecture",
    description:
      "Mediterranean quiet. Sun-bleached stone, arched openings, and still water — living spaces shaped by light.",
    accent: "#a8bfb8",
    images: [
      "/portfolio/villa-1.png",
      "/portfolio/villa-2.png",
      "/portfolio/villa-3.png",
      "/portfolio/villa-4.png",
    ],
  },
  {
    id: "private",
    tag: "PRIVATE · INTERIOR",
    label: "Private Interior",
    description:
      "Neutral residential spaces curated around lived emotion, tactile material, and enduring simplicity.",
    accent: "#8b7d6b",
    images: [
      "/portfolio/private-1.jpg",
      "/portfolio/private-2.jpg",
      "/portfolio/private-3.jpg",
      "/portfolio/private-4.jpg",
      "/portfolio/private-5.jpg",
    ],
  },
] as const;

/* ── Shared mono caption ── */
function MonoCaption({
  children,
  light = false,
  style,
}: {
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.5rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: light ? "rgba(245,244,240,0.35)" : "rgba(10,10,10,0.32)",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/* ── Image tile with hover zoom ── */
function Tile({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1c1c1c",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="tile-img"
      />
      <style>{`.tile-img:hover { transform: scale(1.05); }`}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK A — COMMERCIAL ARCHITECTURE
   Dark background · 3-col bento grid with centre logo cell
════════════════════════════════════════════════════════════ */
function CommercialBlock() {
  const col = COLLECTIONS[0];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#0a0a0a",
        padding:
          "clamp(60px,8vw,100px) clamp(20px,6vw,96px) clamp(60px,8vw,100px)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(24px,4vw,44px)",
        }}
      >
        <div>
          <MonoCaption light>{col.tag}</MonoCaption>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem,3.4vw,2.6rem)",
              letterSpacing: "-0.03em",
              color: "#f5f4f0",
              fontWeight: 400,
              margin: "8px 0 0",
              lineHeight: 1.05,
            }}
          >
            {col.label}
          </h2>
        </div>
        <motion.a
          href="/work#commercial"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(245,244,240,0.3)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          View All →
        </motion.a>
      </motion.div>

      {/* Bento grid — 3 cols × 2 rows */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows:
            "clamp(160px,20vw,240px) clamp(160px,20vw,240px)",
          gap: 3,
        }}
      >
        {/* Col 1 – tall spanning both rows */}
        <Tile
          src={col.images[0]}
          alt="commercial project 1"
          style={{ gridRow: "1 / 3" }}
        />

        {/* Col 2, Row 1 – logo cell */}
        <div
          style={{
            backgroundColor: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.9rem,1.8vw,1.3rem)",
              letterSpacing: "0.22em",
              color: "#f5f4f0",
              margin: 0,
            }}
          >
            TEALCULTURE
          </p>
          <div
            style={{ width: 20, height: 1, backgroundColor: col.accent }}
          />
          <MonoCaption light>Commercial</MonoCaption>
        </div>

        {/* Col 3, Row 1 */}
        <Tile src={col.images[1]} alt="commercial project 2" />

        {/* Col 2, Row 2 */}
        <Tile src={col.images[2]} alt="commercial project 3" />

        {/* Col 3, Row 2 – with label overlay */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Tile
            src={col.images[3]}
            alt="commercial project 4"
            style={{ position: "absolute", inset: 0, height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: 14,
              zIndex: 2,
            }}
          >
            <MonoCaption light>Visual Collection</MonoCaption>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{
          marginTop: 20,
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.75rem,1.2vw,0.86rem)",
          color: "rgba(245,244,240,0.32)",
          letterSpacing: "0.02em",
          lineHeight: 1.75,
          maxWidth: 480,
        }}
      >
        {col.description}
      </motion.p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK B — VILLA ARCHITECTURE
   Light background · full-bleed hero card + 3-thumbnail strip
════════════════════════════════════════════════════════════ */
function VillaBlock() {
  const col = COLLECTIONS[1];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#f5f4f0",
        padding:
          "clamp(60px,8vw,100px) clamp(20px,6vw,96px) clamp(60px,8vw,100px)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(24px,4vw,44px)",
        }}
      >
        <div>
          <MonoCaption>{col.tag}</MonoCaption>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem,3.4vw,2.6rem)",
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              fontWeight: 400,
              margin: "8px 0 0",
              lineHeight: 1.05,
            }}
          >
            {col.label}
          </h2>
        </div>
        <motion.a
          href="/work#villa"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.3)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          View All →
        </motion.a>
      </motion.div>

      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(280px,44vw,520px)",
          overflow: "hidden",
          marginBottom: 3,
        }}
      >
        <Tile
          src={col.images[0]}
          alt="villa architecture hero"
          style={{ position: "absolute", inset: 0, height: "100%" }}
        />
        {/* Bottom gradient + overlay text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "clamp(18px,3.5vw,36px)",
            left: "clamp(18px,3.5vw,36px)",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.85rem,1.6vw,1.1rem)",
              letterSpacing: "0.22em",
              color: "rgba(245,244,240,0.82)",
              margin: "0 0 5px",
            }}
          >
            TEALCULTURE
          </p>
          <MonoCaption light>Villa Architecture · Visual Collection</MonoCaption>
        </div>
      </motion.div>

      {/* 3-col thumbnail strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 3,
        }}
      >
        {col.images.slice(1).map((src, i) => (
          <Tile
            key={i}
            src={src}
            alt={`villa ${i + 2}`}
            style={{ height: "clamp(110px,16vw,190px)" }}
          />
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{
          marginTop: 20,
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.75rem,1.2vw,0.86rem)",
          color: "rgba(10,10,10,0.4)",
          letterSpacing: "0.02em",
          lineHeight: 1.75,
          maxWidth: 480,
        }}
      >
        {col.description}
      </motion.p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK C — PRIVATE INTERIOR
   Dark background · editorial outline heading + circle & pill crops
════════════════════════════════════════════════════════════ */
function PrivateBlock() {
  const col = COLLECTIONS[2];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#0a0a0a",
        padding:
          "clamp(60px,8vw,100px) clamp(20px,6vw,96px) clamp(60px,8vw,100px)",
      }}
    >
      {/* Editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "clamp(32px,5vw,56px)" }}
      >
        <MonoCaption light>{col.tag}</MonoCaption>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.4rem,7vw,5.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#f5f4f0",
            fontWeight: 400,
            margin: "10px 0 0",
          }}
        >
          Private
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(245,244,240,0.22)",
            }}
          >
            .Interior
          </span>
        </h2>
      </motion.div>

      {/* Row 1 — three circles */}
      <div style={{ marginBottom: "clamp(16px,3vw,28px)" }}>
        <MonoCaption light style={{ marginBottom: 14 }}>
          Neutral Residential
        </MonoCaption>
        <div
          style={{
            display: "flex",
            gap: "clamp(8px,1.5vw,14px)",
            flexWrap: "wrap",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.12 + i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: "relative",
                width: "clamp(120px,17vw,190px)",
                height: "clamp(120px,17vw,190px)",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#1c1c1c",
              }}
            >
              <Image
                src={col.images[i + 1] ?? col.images[0]}
                alt={`private interior ${i + 1}`}
                fill
                sizes="190px"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark divider */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.48rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(245,244,240,0.12)",
          margin: "12px 0 20px",
        }}
      >
        TEALCULTURE
      </p>

      {/* Row 2 — two pills + description/link */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "clamp(12px,2vw,20px)",
          flexWrap: "wrap",
        }}
      >
        {[3, 4].map((imgIdx, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.3 + i * 0.12,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "relative",
              width: "clamp(110px,15vw,170px)",
              height: "clamp(160px,22vw,230px)",
              borderRadius: 9999,
              overflow: "hidden",
              flexShrink: 0,
              backgroundColor: "#1c1c1c",
            }}
          >
            <Image
              src={col.images[imgIdx] ?? col.images[0]}
              alt={`private interior pill ${i + 1}`}
              fill
              sizes="170px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}

        {/* Text + link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ flex: 1, minWidth: 180, paddingBottom: 8 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.75rem,1.2vw,0.86rem)",
              color: "rgba(245,244,240,0.32)",
              letterSpacing: "0.02em",
              lineHeight: 1.78,
              margin: "0 0 20px",
            }}
          >
            {col.description}
          </p>
          <div>
            <MonoCaption light style={{ marginBottom: 6 }}>
              Visual Collection
            </MonoCaption>
            <motion.a
              href="/work#private"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.3)",
                textDecoration: "none",
              }}
            >
              View All →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT EXPORT — compose all three blocks with hairline dividers
════════════════════════════════════════════════════════════ */
export default function VisualCollections() {
  const HR_DARK = (
    <div
      style={{
        height: 1,
        backgroundColor: "rgba(245,244,240,0.05)",
        margin: "0 clamp(20px,6vw,96px)",
      }}
    />
  );
  const HR_LIGHT = (
    <div
      style={{
        height: 1,
        backgroundColor: "rgba(10,10,10,0.07)",
        margin: "0 clamp(20px,6vw,96px)",
      }}
    />
  );

  return (
    <section aria-label="Visual Collections — TEALCULTURE Portfolio">
      {HR_DARK}
      <CommercialBlock />
      {HR_LIGHT}
      <VillaBlock />
      {HR_DARK}
      <PrivateBlock />
    </section>
  );
}
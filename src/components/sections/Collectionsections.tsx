"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Images ─────────────────────────────────────────────────
const collectionImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop", alt: "Sculptural lamp" },
  { id: 2, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop", alt: "Ceramic object" },
  { id: 3, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop", alt: "Dark form" },
  { id: 4, src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fit=crop", alt: "Woven lamp" },
  { id: 5, src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80&fit=crop", alt: "Pendant shade" },
  { id: 6, src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80&fit=crop", alt: "Stone sphere" },
  { id: 7, src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80&fit=crop", alt: "Brass vase" },
  { id: 8, src: "https://images.unsplash.com/photo-1612198790700-f5a64b4ee7c4?w=600&q=80&fit=crop", alt: "Ribbed ceramic" },
  { id: 9, src: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80&fit=crop", alt: "Wooden vases" },
];

const furnitureImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&fit=crop", alt: "Modular sofa" },
  { id: 2, src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fit=crop", alt: "Curved sofa" },
  { id: 3, src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80&fit=crop", alt: "Stone seating" },
  { id: 4, src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80&fit=crop", alt: "Low profile sofa" },
  { id: 5, src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&fit=crop", alt: "Grey modular" },
];

// ─── Fade-up wrapper ─────────────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section header ──────────────────────────────────────────
function Header({ sub }: { sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 44px)" }}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(0.78rem, 1vw, 0.92rem)",
          letterSpacing: "0.22em",
          color: "#0a0a0a",
          marginBottom: 6,
        }}
      >
        TEAL<span style={{ color: "rgba(10,10,10,0.28)" }}>CULTURE</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "clamp(0.5rem, 0.72vw, 0.6rem)",
          letterSpacing: "0.36em",
          textTransform: "uppercase",
          color: "rgba(10,10,10,0.36)",
        }}
      >
        {sub}
      </motion.p>
    </div>
  );
}

// ─── Reusable image tile ─────────────────────────────────────
function Tile({
  src,
  alt,
  ratio = "1/1",
  delay = 0,
}: {
  src: string;
  alt: string;
  ratio?: string;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div
        className="tile"
        style={{ aspectRatio: ratio, overflow: "hidden", backgroundColor: "#e5e3dd" }}
      >
        <img
          src={src}
          alt={alt}
          className="tile-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </FadeUp>
  );
}

// ════════════════════════════════════════════
//  SECTION 1 — DESIGNER COLLECTION  (3×3)
// ════════════════════════════════════════════
function DesignerCollection() {
  return (
    <section
      data-theme="light"
      style={{
        backgroundColor: "#f5f4f0",
        padding: "clamp(48px, 7vw, 88px) clamp(20px, 5vw, 60px)",
      }}
    >
      <Header sub="Designer Collection" />

      <div
        className="col-grid"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(6px, 1vw, 10px)",
        }}
      >
        {collectionImages.map((img, i) => (
          <Tile key={img.id} src={img.src} alt={img.alt} ratio="1/1" delay={i * 0.04} />
        ))}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 2 — DESIGNER FURNITURE (editorial)
// ════════════════════════════════════════════
function DesignerFurniture() {
  return (
    <section
      data-theme="light"
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(48px, 7vw, 88px) clamp(20px, 5vw, 60px)",
      }}
    >
      <Header sub="Designer Furniture" />

      <div
        className="fur-grid"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(6px, 1vw, 10px)",
          alignItems: "start",
        }}
      >
        {/* Left col */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1vw, 10px)" }}>
          {/* Inline heading */}
          <div style={{ paddingBottom: 8 }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.3)",
                marginBottom: 8,
              }}
            >
              Japandi Minimalism
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 2.8vw, 2.6rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "#0a0a0a",
                fontWeight: 400,
              }}
            >
              Designer
              <br />
              Furniture
            </p>
          </div>
          <Tile src={furnitureImages[0].src} alt={furnitureImages[0].alt} ratio="3/4" delay={0.1} />
          <Tile src={furnitureImages[1].src} alt={furnitureImages[1].alt} ratio="4/3" delay={0.18} />
        </div>

        {/* Right col — offset down */}
        <div
          className="fur-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1vw, 10px)",
            paddingTop: "clamp(72px, 9vw, 110px)",
          }}
        >
          <Tile src={furnitureImages[2].src} alt={furnitureImages[2].alt} ratio="3/4" delay={0.08} />
          <Tile src={furnitureImages[3].src} alt={furnitureImages[3].alt} ratio="4/3" delay={0.16} />
          <Tile src={furnitureImages[4].src} alt={furnitureImages[4].alt} ratio="3/4" delay={0.24} />
        </div>
      </div>

      {/* ── Hover + responsive ── */}
      <style>{`
        .tile:hover .tile-img { transform: scale(1.05); }

        @media (max-width: 560px) {
          .col-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .fur-grid  { grid-template-columns: 1fr !important; }
          .fur-right { padding-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Export ──────────────────────────────────────────────────
export default function CollectionSections() {
  return (
    <>
      <DesignerCollection />
      <DesignerFurniture />
    </>
  );
}
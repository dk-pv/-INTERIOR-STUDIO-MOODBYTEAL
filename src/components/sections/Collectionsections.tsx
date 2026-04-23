"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const collectionImages = [
  {
    id: "collection-1",
    src: "/portfolio/collection-1.png",
    alt: "Modern luxury interior with neutral tones",
    label: "Collection",
  },
  {
    id: "collection-2",
    src: "/portfolio/collection-2.png",
    alt: "Minimal curved furniture living space",
    label: "Collection",
  },
  {
    id: "collection-3",
    src: "/portfolio/collection-3.png",
    alt: "Soft lighting beige interior design",
    label: "Collection",
  },
  {
    id: "collection-4",
    src: "/portfolio/collection-4.png",
    alt: "Editorial style high-end living room",
    label: "Collection",
  },
  {
    id: "collection-5",
    src: "/portfolio/collection-5.png",
    alt: "Luxury neutral palette interior design",
    label: "Collection",
  },
  {
    id: "collection-6",
    src: "/portfolio/collection-6.png",
    alt: "Minimal aesthetic modern home space",
    label: "Collection",
  },
  {
    id: "collection-7",
    src: "/portfolio/collection-7.png",
    alt: "Contemporary soft shadow interior",
    label: "Collection",
  },
  {
    id: "collection-8",
    src: "/portfolio/collection-8.png",
    alt: "Warm toned modern architecture interior",
    label: "Collection",
  },
  {
    id: "collection-9",
    src: "/portfolio/collection-9.png",
    alt: "Premium luxury living space design",
    label: "Collection",
  },
];

export const furnitureImages = [
  {
    id: "furniture-1",
    src: "/portfolio/furniture-1.png",
    alt: "Modern designer chair with minimal style",
    label: "Furniture",
  },
  {
    id: "furniture-2",
    src: "/portfolio/furniture-2.png",
    alt: "Luxury sofa with neutral fabric tones",
    label: "Furniture",
  },
  {
    id: "furniture-3",
    src: "/portfolio/furniture-3.png",
    alt: "Minimal wooden furniture aesthetic",
    label: "Furniture",
  },
  {
    id: "furniture-4",
    src: "/portfolio/furniture-4.png",
    alt: "High-end modern interior furniture piece",
    label: "Furniture",
  },
  {
    id: "furniture-5",
    src: "/portfolio/furniture-5.png",
    alt: "Soft curved contemporary furniture design",
    label: "Furniture",
  },
  {
    id: "furniture-6",
    src: "/portfolio/furniture-6.png",
    alt: "Premium designer furniture with clean lines",
    label: "Furniture",
  },
];

// ─── Shared fade-up wrapper ───────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Image tile ───────────────────────────────────────────────
function Tile({ src, alt, label, ratio = "1/1", delay = 0 }: {
  src: string; alt: string; label?: string; ratio?: string; delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div
        style={{ aspectRatio: ratio, overflow: "hidden", backgroundColor: "#1a1a1a", position: "relative" }}
        className="tc-tile"
      >
        <img
          src={src}
          alt={alt}
          className="tc-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {label && <span className="tc-label">{label}</span>}
      </div>
    </FadeUp>
  );
}

// ─── Section meta ─────────────────────────────────────────────
function SectionMeta({ category }: { category: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(24px, 3.5vw, 40px)" }}
    >
      <span style={{ fontFamily: "var(--font-heading, serif)", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,242,237,0.38)" }}>
        TEALCULTURE
      </span>
      <span style={{ width: 32, height: "0.5px", background: "rgba(245,242,237,0.18)", display: "block" }} />
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(245,242,237,0.28)" }}>
        {category}
      </span>
    </motion.div>
  );
}

// ════════════════════════════════════════════
//  SECTION 1 — DESIGNER COLLECTION  (3×3)
// ════════════════════════════════════════════
function DesignerCollection() {
  return (
    <section style={{ backgroundColor: "#0f0f0f", padding: "clamp(56px, 8vw, 100px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionMeta category="Designer Collection" />

        <FadeUp delay={0.06}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(20px, 3vw, 36px)", flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)", fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f5f2ed", lineHeight: 1, margin: 0 }}>
              Objects &amp; Decor
            </h2>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", color: "rgba(245,242,237,0.3)", textTransform: "uppercase", margin: 0 }}>
              9 Pieces
            </p>
          </div>
        </FadeUp>

        <div className="tc-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(4px, 0.6vw, 8px)" }}>
          {collectionImages.map((img, i) => (
            <Tile key={img.id} src={img.src} alt={img.alt} label={img.label} ratio="1/1" delay={i * 0.035} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 2 — DESIGNER FURNITURE (editorial)
// ════════════════════════════════════════════
function DesignerFurniture() {
  return (
    <section style={{ backgroundColor: "#111111", padding: "clamp(56px, 8vw, 100px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionMeta category="Designer Furniture" />

        <div className="tc-fur-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(4px, 0.6vw, 8px)", alignItems: "start" }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.6vw, 8px)" }}>
            <FadeUp delay={0.04}>
              <div style={{ paddingBottom: 12 }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(245,242,237,0.25)", marginBottom: 10 }}>
                  Japandi Minimalism
                </p>
                <h2 style={{ fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)", fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 0.96, color: "#f5f2ed", margin: 0 }}>
                  Designer<br />Furniture
                </h2>
              </div>
            </FadeUp>
            <Tile src={furnitureImages[0].src} alt={furnitureImages[0].alt} label={furnitureImages[0].label} ratio="3/4" delay={0.08} />
            <Tile src={furnitureImages[1].src} alt={furnitureImages[1].alt} label={furnitureImages[1].label} ratio="4/3" delay={0.14} />
          </div>

          {/* Right column — offset down */}
          <div className="tc-fur-right" style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.6vw, 8px)", paddingTop: "clamp(80px, 10vw, 120px)" }}>
            <Tile src={furnitureImages[2].src} alt={furnitureImages[2].alt} label={furnitureImages[2].label} ratio="3/4" delay={0.06} />
            <Tile src={furnitureImages[3].src} alt={furnitureImages[3].alt} label={furnitureImages[3].label} ratio="4/3" delay={0.12} />
            <Tile src={furnitureImages[4].src} alt={furnitureImages[4].alt} label={furnitureImages[4].label} ratio="3/4" delay={0.18} />
          </div>
        </div>
      </div>

      <style>{`
        .tc-img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease;
          filter: brightness(0.92);
        }
        .tc-tile:hover .tc-img { transform: scale(1.045); filter: brightness(1); }
        .tc-label {
          position: absolute;
          bottom: 10px;
          left: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 0.48rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(245,242,237,0.85);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          pointer-events: none;
        }
        .tc-tile:hover .tc-label { opacity: 1; transform: translateY(0); }
        @media (max-width: 560px) {
          .tc-grid-3 { grid-template-columns: repeat(2,1fr) !important; }
          .tc-fur-grid { grid-template-columns: 1fr !important; }
          .tc-fur-right { padding-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}

export default function CollectionSections() {
  return (
    <>
      <DesignerCollection />
      <DesignerFurniture />
    </>
  );
}
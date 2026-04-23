"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const C = [
  "/portfolio/commercial-1.png",
  "/portfolio/commercial-2.png",
  "/portfolio/commercial-3.png",
  "/portfolio/commercial-4.png",
];
const V = [
  "/portfolio/villa-1.png",
  "/portfolio/villa-2.png",
  "/portfolio/villa-3.png",
  "/portfolio/villa-4.png",
];
const P = [
  "/portfolio/private-1.jpg",
  "/portfolio/private-2.jpg",
  "/portfolio/private-3.jpg",
  "/portfolio/private-4.jpg",
  "/portfolio/private-5.jpg",
];

function Fade({
  children,
  d = 0,
  style,
  className,
}: {
  children: React.ReactNode;
  d?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={ok ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Tile({
  src,
  alt,
  sizes = "(max-width:768px) 100vw, 33vw",
  className = "",
  style,
  priority,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <div
      className={`vc-tile ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#dedad4",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
        className="vc-img"
      />
    </div>
  );
}

function TextCell({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`vc-text-cell ${className}`}
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Heading({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "var(--font-heading, serif)",
        fontSize: "clamp(0.7rem, 1.4vw, 1.2rem)",
        letterSpacing: "0.3em",
        color: "rgba(10,10,10,0.72)",
        margin: 0,
        fontWeight: 400,
        textAlign: "center",
        lineHeight: 1.7,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

export function CommercialBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#ffffff" }}>
      {/* Row 1 */}
      <motion.div
        className="vc-com-row1"
        initial={{ opacity: 0 }}
        animate={ok ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* "COMMERCIAL" label cell */}
        <TextCell className="vc-com-label-a">
          <Heading>COMMERCIAL</Heading>
        </TextCell>

        {/* Centre portrait image */}
        <Tile
          src={C[1]}
          alt="Commercial feature"
          className="vc-com-hero"
          priority
          sizes="50vw"
        />

        {/* "ARCHITECTURE" label cell */}
        <TextCell className="vc-com-label-b">
          <Heading>ARCHITECTURE</Heading>
        </TextCell>
      </motion.div>

      {/* Row 2 — 3 images */}
      <Fade d={0.12} className="vc-com-row2">
        <Tile
          src={C[0]}
          alt="Commercial 2"
          className="vc-com-img"
          sizes="33vw"
        />
        <Tile
          src={C[2]}
          alt="Commercial 3"
          className="vc-com-img"
          sizes="33vw"
        />
        <Tile
          src={C[3]}
          alt="Commercial 4"
          className="vc-com-img"
          sizes="33vw"
        />
      </Fade>
    </section>
  );
}

// ── VILLA ────────────────────────────────────────────────────
/*
  Desktop:
    Row1: [img | TEALCULTURE cell | img]
    Row2: [VILLA ARCHITECTURE cell | img | circle-img cell]
  Tablet: same layout, smaller heights
  Mobile:
    [img] full width
    [TEALCULTURE label centred]
    [img | img] 2-col
    [VILLA ARCHITECTURE label]
    [img] + circle
*/
export function VillaBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#ffffff", borderTop: "2px solid #f5f4f0" }}
    >
      {/* Row 1 */}
      <motion.div
        className="vc-vil-row1"
        initial={{ opacity: 0 }}
        animate={ok ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Tile src={V[0]} alt="Villa 1" className="vc-vil-img" sizes="33vw" />

        <TextCell className="vc-vil-brand">
          <div
            style={{
              width: 26,
              height: 26,
              border: "1px solid rgba(10,10,10,0.18)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "rgba(10,10,10,0.22)",
              }}
            />
          </div>
          <Heading>
            TEAL<span style={{ opacity: 0.4 }}>CULTURE</span>
          </Heading>
        </TextCell>

        <Tile src={V[1]} alt="Villa 2" className="vc-vil-img" sizes="33vw" />
      </motion.div>

      {/* Row 2 */}
      <Fade d={0.12} className="vc-vil-row2">
        <TextCell className="vc-vil-title">
          <Heading>
            VILLA
            <br />
            ARCHITECTURE
          </Heading>
        </TextCell>

        <Tile src={V[2]} alt="Villa 3" className="vc-vil-img2" sizes="33vw" />

        {/* Circle image cell */}
        <TextCell className="vc-vil-circle-cell">
          <div
            className="vc-tile vc-vil-circle"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              backgroundColor: "#dedad4",
              border: "1px solid rgba(10,10,10,0.1)",
            }}
          >
            <Image
              src={V[3]}
              alt="Villa 4"
              fill
              sizes="200px"
              style={{ objectFit: "cover" }}
              className="vc-img"
            />
          </div>
        </TextCell>
      </Fade>
    </section>
  );
}

// ── PRIVATE ──────────────────────────────────────────────────
/*
  Desktop:  "NEUTRAL RESIDENTIAL" title → 3 large overlapping arch shapes →
            TEALCULTURE label → 3 overlapping circles
  Tablet:   Same, arches slightly smaller
  Mobile:   Title → 1 large arch centred → 2 smaller arches row →
            TEALCULTURE → 2 circles row
*/
export function PrivateBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="vc-priv-section">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={ok ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "clamp(28px,5vw,52px)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(0.6rem, 0.95vw, 0.82rem)",
            letterSpacing: "0.46em",
            color: "rgba(10,10,10,0.48)",
            margin: 0,
            fontWeight: 400,
          }}
        >
          NEUTRAL RESIDENTIAL
        </p>
      </motion.div>

      {/* Arch row */}
      <Fade d={0.08} className="vc-priv-arches">
        {[P[0], P[1], P[2]].map((src, i) => (
          <div
            key={i}
            className={`vc-tile vc-priv-arch ${i === 1 ? "vc-priv-arch--mid" : ""}`}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "9999px",
              backgroundColor: "#c8c4bc",
              boxShadow: "0 6px 28px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src={src}
              alt={`Private ${i + 1}`}
              fill
              sizes="(max-width:480px) 55vw, 22vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              className="vc-img"
            />
          </div>
        ))}
      </Fade>

      {/* TEALCULTURE label */}
      <Fade
        d={0.18}
        style={{ textAlign: "center", margin: "clamp(20px,3.5vw,40px) 0" }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(0.65rem, 1vw, 0.88rem)",
            letterSpacing: "0.28em",
            color: "rgba(10,10,10,0.42)",
            margin: 0,
            fontWeight: 400,
          }}
        >
          TEAL<span style={{ opacity: 0.42 }}>CULTURE</span>
        </p>
      </Fade>

      {/* Circle row */}
      <Fade d={0.24} className="vc-priv-circles">
        {[P[2], P[3], P[4]].map((src, i) => (
          <div
            key={i}
            className={`vc-tile vc-priv-circle ${i === 1 ? "vc-priv-circle--mid" : ""}`}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              backgroundColor: "#c8c4bc",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
            }}
          >
            <Image
              src={src}
              alt={`Private circle ${i}`}
              fill
              sizes="(max-width:480px) 40vw, 18vw"
              style={{ objectFit: "cover" }}
              className="vc-img"
            />
          </div>
        ))}
      </Fade>
    </section>
  );
}

// ── ROOT + ALL RESPONSIVE CSS ────────────────────────────────
export default function VisualCollections() {
  return (
    <section aria-label="Visual Collections — TEALCULTURE">
      <CommercialBlock />
      <VillaBlock />
      <PrivateBlock />

      <style>{`

        /* ── shared ── */
        .vc-img {
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .vc-tile:hover .vc-img { transform: scale(1.05); }


        /* ══ COMMERCIAL ══════════════════════════════════════ */

        /* Row 1 */
        .vc-com-row1 {
          display: grid;
          gap: 2px;
        }
        .vc-com-hero { aspect-ratio: 3/4; }
        .vc-com-label-a,
        .vc-com-label-b { min-height: 80px; }

        /* Row 2 */
        .vc-com-row2 {
          display: grid;
          gap: 2px;
        }
        .vc-com-img { aspect-ratio: 4/3; }

        /* Desktop ≥769px */
        @media (min-width: 769px) {
          .vc-com-row1 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-com-hero { aspect-ratio: unset; height: clamp(260px, 34vw, 420px); }
          .vc-com-label-a,
          .vc-com-label-b { height: clamp(260px, 34vw, 420px); }
          .vc-com-row2 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-com-img { aspect-ratio: unset; height: clamp(200px, 26vw, 310px); }
        }

        /* Tablet 481–768px */
        @media (min-width: 481px) and (max-width: 768px) {
          .vc-com-row1 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-com-hero { aspect-ratio: unset; height: 200px; }
          .vc-com-label-a,
          .vc-com-label-b { height: 200px; }
          .vc-com-row2 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-com-img { aspect-ratio: unset; height: 160px; }
        }

        /* Mobile ≤480px */
        @media (max-width: 480px) {
          /* Row1: stack hero full, labels side by side below */
          .vc-com-row1 { grid-template-columns: 1fr; }
          .vc-com-label-a { order: 2; }
          .vc-com-hero    { order: 1; aspect-ratio: 4/3; height: auto; }
          .vc-com-label-b { order: 3; }
          /* Show labels as a side-by-side pair under the hero */
          .vc-com-label-a,
          .vc-com-label-b {
            grid-column: 1;
            min-height: 60px;
          }
          /* Re-layout row1 as: hero full → labels 2-col */
          .vc-com-row1 {
            grid-template-columns: 1fr 1fr;
          }
          .vc-com-hero { grid-column: 1 / -1; }
          /* Row 2: 2-col grid */
          .vc-com-row2 { grid-template-columns: 1fr 1fr; }
          .vc-com-img { aspect-ratio: 1/1; height: auto; }
        }


        /* ══ VILLA ═══════════════════════════════════════════ */

        .vc-vil-row1,
        .vc-vil-row2 { display: grid; gap: 2px; }
        .vc-vil-img,
        .vc-vil-img2 { aspect-ratio: 4/3; }
        .vc-vil-brand,
        .vc-vil-title,
        .vc-vil-circle-cell { min-height: 80px; }
        .vc-vil-circle { width: clamp(100px,15vw,200px); height: clamp(100px,15vw,200px); }

        /* Desktop */
        @media (min-width: 769px) {
          .vc-vil-row1 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-vil-row2 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-vil-img,
          .vc-vil-img2 { aspect-ratio: unset; height: clamp(220px, 28vw, 340px); }
          .vc-vil-brand,
          .vc-vil-title,
          .vc-vil-circle-cell { height: clamp(220px, 28vw, 340px); }
          .vc-vil-circle { width: clamp(130px,17vw,210px); height: clamp(130px,17vw,210px); }
        }

        /* Tablet */
        @media (min-width: 481px) and (max-width: 768px) {
          .vc-vil-row1 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-vil-row2 { grid-template-columns: 1fr 1fr 1fr; }
          .vc-vil-img,
          .vc-vil-img2 { aspect-ratio: unset; height: 180px; }
          .vc-vil-brand,
          .vc-vil-title,
          .vc-vil-circle-cell { height: 180px; }
          .vc-vil-circle { width: 110px; height: 110px; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          /* Row1: full-width image → brand label → 2-col images */
          .vc-vil-row1 {
            grid-template-columns: 1fr 1fr;
          }
          /* First image spans full width */
          .vc-vil-row1 > .vc-vil-img:first-child {
            grid-column: 1 / -1;
            aspect-ratio: 16/7;
            height: auto;
          }
          /* Brand cell + second image side by side */
          .vc-vil-brand { min-height: 100px; }
          .vc-vil-img { aspect-ratio: 1/1; height: auto; }

          /* Row2: 2-col */
          .vc-vil-row2 {
            grid-template-columns: 1fr 1fr;
          }
          .vc-vil-title { min-height: 100px; }
          .vc-vil-img2 { aspect-ratio: 1/1; height: auto; }
          /* Circle cell: hidden on mobile or shown smaller */
          .vc-vil-circle-cell { display: none; }
        }


        /* ══ PRIVATE ═════════════════════════════════════════ */

        .vc-priv-section {
          background-color: #eeece7;
          border-top: 2px solid #e5e3de;
          padding: clamp(36px,6vw,72px) clamp(16px,5vw,60px);
        }

        /* Arch row */
        .vc-priv-arches {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .vc-priv-arch {
          flex-shrink: 0;
          width: clamp(130px, 20vw, 240px);
          height: clamp(190px, 30vw, 380px);
          margin: 0 clamp(-28px,-4vw,-14px);
          z-index: 1;
        }
        .vc-priv-arch--mid {
          transform: translateY(-20px);
          z-index: 2;
        }

        /* Circle row */
        .vc-priv-circles {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .vc-priv-circle {
          flex-shrink: 0;
          width: clamp(110px,16vw,210px);
          height: clamp(110px,16vw,210px);
          margin: 0 clamp(-22px,-3vw,-10px);
          z-index: 1;
        }
        .vc-priv-circle--mid {
          transform: translateY(-10px);
          z-index: 2;
        }

        /* Tablet */
        @media (min-width: 481px) and (max-width: 768px) {
          .vc-priv-arch {
            width: clamp(110px, 26vw, 200px);
            height: clamp(160px, 36vw, 280px);
            margin: 0 -18px;
          }
          .vc-priv-arch--mid { transform: translateY(-16px); }
          .vc-priv-circle {
            width: clamp(100px,22vw,170px);
            height: clamp(100px,22vw,170px);
            margin: 0 -14px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          /* 3 arches visible but compact */
          .vc-priv-arch {
            width: clamp(90px, 28vw, 140px);
            height: clamp(130px, 40vw, 200px);
            margin: 0 -12px;
          }
          .vc-priv-arch--mid { transform: translateY(-14px); }
          .vc-priv-circle {
            width: clamp(80px, 26vw, 120px);
            height: clamp(80px, 26vw, 120px);
            margin: 0 -10px;
          }
          .vc-priv-circle--mid { transform: translateY(-8px); }
        }

      `}</style>
    </section>
  );
}

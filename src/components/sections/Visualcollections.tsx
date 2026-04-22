"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   VISUAL COLLECTIONS — TEALCULTURE
   White background throughout.
   Three editorial blocks:
     A) Commercial Architecture  — hero + bento grid
     B) Villa Architecture       — text header + hero card + grid
     C) Private Interior         — editorial heading + big card
                                   + circles + pills
───────────────────────────────────────────────────────────── */

const IMAGES = {
  commercial: [
    "/portfolio/commercial-1.png",
    "/portfolio/commercial-2.png",
    "/portfolio/commercial-3.png",
    "/portfolio/commercial-4.png",
  ],
  villa: [
    "/portfolio/villa-1.png",
    "/portfolio/villa-2.png",
    "/portfolio/villa-3.png",
    "/portfolio/villa-4.png",
  ],
  private: [
    "/portfolio/private-1.jpg",
    "/portfolio/private-2.jpg",
    "/portfolio/private-3.jpg",
    "/portfolio/private-4.jpg",
    "/portfolio/private-5.jpg",
  ],
};

// ─── Shared primitives ───────────────────────────────────────

function Mono({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.52rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "rgba(10,10,10,0.32)",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function Tile({
  src,
  alt,
  style,
  radius,
  overlay,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  radius?: string | number;
  overlay?: React.ReactNode;
}) {
  return (
    <div
      className="vc-tile"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#d8d6d0",
        borderRadius: radius ?? 0,
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
        className="vc-img"
      />
      {overlay && (
        <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          {overlay}
        </div>
      )}
    </div>
  );
}

function BrandCell({ dark = false }: { dark?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: dark ? "#0a0a0a" : "#f5f4f0",
        padding: 16,
      }}
    >
      {/* Mini logo mark */}
      <div
        style={{
          width: 28,
          height: 28,
          border: `1px solid ${dark ? "rgba(245,244,240,0.25)" : "rgba(10,10,10,0.2)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            border: `1px solid ${dark ? "rgba(245,244,240,0.5)" : "rgba(10,10,10,0.4)"}`,
            borderRadius: "50%",
          }}
        />
      </div>
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(0.55rem,1vw,0.72rem)",
          letterSpacing: "0.2em",
          color: dark ? "rgba(245,244,240,0.7)" : "rgba(10,10,10,0.6)",
          margin: 0,
        }}
      >
        TEAL<span style={{ opacity: 0.4 }}>CULTURE</span>
      </p>
    </div>
  );
}

function Fade({
  children,
  delay = 0,
  y = 20,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK A — COMMERCIAL ARCHITECTURE
   White bg · small logo row · full hero · bento 3×3 grid
════════════════════════════════════════════════════════════ */
function CommercialBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imgs = IMAGES.commercial;

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(48px,7vw,88px) clamp(20px,5vw,64px)",
      }}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: "clamp(20px,3vw,32px)",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 32,
            height: 32,
            border: "1px solid rgba(10,10,10,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              border: "1px solid rgba(10,10,10,0.35)",
              borderRadius: "50%",
            }}
          />
        </div>
        <Mono>Future-Forward Architecture</Mono>
      </motion.div>

      {/* Hero image */}
      <Fade delay={0.1}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(240px,38vw,460px)",
            overflow: "hidden",
            marginBottom: 2,
          }}
        >
          <Image
            src={imgs[0]}
            alt="commercial hero"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="vc-img"
          />
        </div>
      </Fade>

      {/* Hero caption */}
      <Fade delay={0.18}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "clamp(12px,2vw,18px) 0",
            borderBottom: "1px solid rgba(10,10,10,0.08)",
            marginBottom: "clamp(16px,2.5vw,24px)",
          }}
        >
          <Mono style={{ letterSpacing: "0.38em", color: "rgba(10,10,10,0.45)" }}>
            Commercial Architecture
          </Mono>
        </div>
      </Fade>

      {/* Bento 3×3 grid */}
      <Fade delay={0.22}>
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "clamp(130px,17vw,210px) clamp(130px,17vw,210px)",
            gap: 2,
          }}
        >
          {/* Row 1 */}
          <Tile src={imgs[1]} alt="commercial 2" />
          <BrandCell />
          <Tile src={imgs[2]} alt="commercial 3" />

          {/* Row 2 */}
          <div
            style={{
              backgroundColor: "#f5f4f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mono style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Commercial
            </Mono>
          </div>
          <Tile src={imgs[3]} alt="commercial 4" />
          <div
            style={{
              backgroundColor: "#f5f4f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mono style={{ writingMode: "vertical-rl" }}>Architecture</Mono>
          </div>
        </div>
      </Fade>

      {/* Bottom label */}
      <Fade delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "clamp(16px,2vw,24px)" }}>
          <Mono style={{ letterSpacing: "0.28em", color: "rgba(10,10,10,0.28)" }}>
            Visual Collection
          </Mono>
        </div>
      </Fade>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK B — VILLA ARCHITECTURE
   White bg · centred text header · hero card with overlay
                · 3×4 mosaic grid
════════════════════════════════════════════════════════════ */
function VillaBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imgs = IMAGES.villa;

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#fafaf8",
        padding: "clamp(48px,7vw,88px) clamp(20px,5vw,64px)",
        borderTop: "1px solid rgba(10,10,10,0.06)",
      }}
    >
      {/* Text header — centred */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{ textAlign: "center", marginBottom: "clamp(20px,3.5vw,36px)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(0.72rem,1.1vw,0.88rem)",
            letterSpacing: "0.36em",
            color: "rgba(10,10,10,0.55)",
            margin: "0 0 6px",
          }}
        >
          VILLA ARCHITECTURE
        </p>
        <Mono style={{ letterSpacing: "0.3em" }}>Visual Collection</Mono>
      </motion.div>

      {/* Hero card with centre overlay */}
      <Fade delay={0.1}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(280px,44vw,520px)",
            overflow: "hidden",
            marginBottom: 2,
          }}
        >
          <Image
            src={imgs[0]}
            alt="villa hero"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="vc-img"
          />
          {/* Subtle dark vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Centred brand overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.9rem,1.8vw,1.3rem)",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
              }}
            >
              TEAL<span style={{ opacity: 0.55 }}>CULTURE</span>
            </p>
          </div>
          {/* Bottom caption */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "clamp(14px,2.5vw,24px)",
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              zIndex: 3,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.88rem,1.6vw,1.2rem)",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              VILLA ARCHITECTURE
            </p>
            <Mono style={{ color: "rgba(255,255,255,0.4)" }}>Visual Collection</Mono>
          </div>
        </div>
      </Fade>

      {/* Mosaic grid — 3 cols × 4 rows with brand cells */}
      <Fade delay={0.2}>
        <div
          className="villa-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "repeat(4, clamp(90px,13vw,160px))",
            gap: 2,
          }}
        >
          {/* Row 1 */}
          <Tile src={imgs[1]} alt="villa 2" />
          <BrandCell />
          <Tile src={imgs[2]} alt="villa 3" />

          {/* Row 2 */}
          <BrandCell />
          <Tile src={imgs[3]} alt="villa 4" style={{ gridRow: "2/4" }} />
          <div
            style={{
              backgroundColor: "#f5f4f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
            }}
          >
            <Mono style={{ textAlign: "center", lineHeight: 2 }}>
              Villa
              <br />
              Architecture
            </Mono>
          </div>

          {/* Row 3 */}
          <Tile src={imgs[0]} alt="villa alt" />
          <div
            style={{
              backgroundColor: "#f5f4f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mono style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Visual Collection
            </Mono>
          </div>

          {/* Row 4 — full width caption row */}
          <Tile src={imgs[2]} alt="villa thumb" />
          <div
            style={{
              backgroundColor: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mono style={{ color: "rgba(245,244,240,0.4)" }}>TEAL</Mono>
          </div>
          <Tile src={imgs[1]} alt="villa thumb 2" />
        </div>
      </Fade>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BLOCK C — PRIVATE INTERIOR
   White bg · logo top · editorial mixed-case heading
            · big interior card · circles · watermark · pills
════════════════════════════════════════════════════════════ */
function PrivateBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const imgs = IMAGES.private;

  const CIRCLE = "clamp(100px,14vw,170px)";
  const PILL_W = "clamp(90px,12vw,150px)";
  const PILL_H = "clamp(140px,19vw,210px)";

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(48px,7vw,88px) clamp(20px,5vw,64px)",
        borderTop: "1px solid rgba(10,10,10,0.06)",
      }}
    >
      {/* Logo row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: "clamp(24px,4vw,44px)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            border: "1px solid rgba(10,10,10,0.15)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              border: "1px solid rgba(10,10,10,0.3)",
              borderRadius: "50%",
            }}
          />
        </div>
        <Mono>TEALCULTURE · Studio</Mono>
      </motion.div>

      {/* Editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: "clamp(24px,4vw,40px)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem,8vw,7rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: "#0a0a0a",
            fontWeight: 400,
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Private
        </p>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem,8vw,7rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            fontWeight: 400,
            margin: 0,
            color: "#0a0a0a",
          }}
        >
          <span style={{ fontStyle: "italic", color: "rgba(10,10,10,0.28)" }}>.</span>
          <span>Interior</span>
        </p>
      </motion.div>

      {/* Big interior card */}
      <Fade delay={0.12}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(220px,36vw,420px)",
            overflow: "hidden",
            marginBottom: "clamp(20px,3.5vw,36px)",
          }}
        >
          <Image
            src={imgs[0]}
            alt="private interior hero"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="vc-img"
          />
        </div>
      </Fade>

      {/* Neutral Residential label */}
      <Fade delay={0.16}>
        <div style={{ marginBottom: 14 }}>
          <Mono style={{ letterSpacing: "0.32em" }}>Neutral Residential</Mono>
        </div>
      </Fade>

      {/* Circle row */}
      <Fade delay={0.2}>
        <div
          className="circle-row"
          style={{
            display: "flex",
            gap: "clamp(6px,1.2vw,12px)",
            flexWrap: "wrap",
            marginBottom: "clamp(12px,2vw,20px)",
          }}
        >
          {[imgs[1], imgs[2], imgs[3]].map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: CIRCLE,
                height: CIRCLE,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#d8d6d0",
              }}
            >
              <Image
                src={src}
                alt={`private circle ${i}`}
                fill
                sizes="170px"
                style={{ objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                className="vc-img"
              />
            </div>
          ))}
        </div>
      </Fade>

      {/* Watermark divider */}
      <Fade delay={0.24}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            margin: "clamp(10px,1.8vw,18px) 0",
          }}
        >
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(10,10,10,0.07)" }} />
          <Mono style={{ color: "rgba(10,10,10,0.18)", letterSpacing: "0.36em" }}>
            TEALCULTURE
          </Mono>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(10,10,10,0.07)" }} />
        </div>
      </Fade>

      {/* Pills row + description */}
      <Fade delay={0.28}>
        <div
          className="pill-row"
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "clamp(8px,1.5vw,16px)",
            flexWrap: "wrap",
          }}
        >
          {[imgs[3], imgs[4]].map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: PILL_W,
                height: PILL_H,
                borderRadius: 9999,
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#d8d6d0",
              }}
            >
              <Image
                src={src}
                alt={`private pill ${i}`}
                fill
                sizes="150px"
                style={{ objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                className="vc-img"
              />
            </div>
          ))}

          {/* Text block */}
          <div style={{ flex: 1, minWidth: 160, paddingBottom: 6 }}>
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "clamp(0.8rem,1.1vw,0.9rem)",
                color: "rgba(10,10,10,0.4)",
                lineHeight: 1.8,
                margin: "0 0 18px",
              }}
            >
              Neutral residential spaces curated around lived emotion, tactile
              material, and enduring simplicity.
            </p>
            <Mono style={{ letterSpacing: "0.3em" }}>Visual Collection</Mono>
          </div>
        </div>
      </Fade>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════════════ */
export default function VisualCollections() {
  return (
    <section aria-label="Visual Collections — TEALCULTURE">
      <CommercialBlock />
      <VillaBlock />
      <PrivateBlock />

      <style>{`
        /* Hover zoom on all images */
        .vc-tile:hover .vc-img,
        .vc-img:hover { transform: scale(1.06) !important; }

        /* Bento responsive */
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .villa-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
        }
        @media (max-width: 380px) {
          .bento-grid,
          .villa-grid { grid-template-columns: 1fr !important; }
          .circle-row,
          .pill-row   { gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
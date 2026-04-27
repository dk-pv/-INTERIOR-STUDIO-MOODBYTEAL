"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const furnitureImages = [
  {
    id: "furniture-1",
    src: "/portfolio/furniture-1.png",
    alt: "Modern designer chair with minimal style",
  },
  {
    id: "furniture-2",
    src: "/portfolio/furniture-2.png",
    alt: "Luxury sofa with neutral fabric tones",
  },
  {
    id: "furniture-3",
    src: "/portfolio/furniture-3.png",
    alt: "Minimal wooden furniture aesthetic",
  },
  {
    id: "furniture-4",
    src: "/portfolio/furniture-4.png",
    alt: "High-end modern interior furniture piece",
  },
  {
    id: "furniture-5",
    src: "/portfolio/furniture-5.png",
    alt: "Soft curved contemporary furniture design",
  },
  {
    id: "furniture-6",
    src: "/portfolio/furniture-6.png",
    alt: "Premium designer furniture with clean lines",
  },
];

// ─── Fade-up animation wrapper ────────────────────────────────
function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function DesignerFurniture() {
  return (
    <section className="tc-fur-section">
      <div className="tc-fur-wrap">
        {/* ── ROW 1: heading text left + image[0] right ── */}
        <div className="tc-fur-row tc-fur-row-top">
          {/* Text block */}
          <FadeUp delay={0}>
            <div className="tc-fur-text">
              <h2 className="tc-fur-heading">
                DESIGNER
                <br />
                FURNITURE
              </h2>
              <p className="tc-fur-sub">INSPIRED BY JAPANDI MINIMALISM</p>
            </div>
          </FadeUp>

          {/* Image 1 */}
          <FadeUp delay={0.06}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[0].src}
                alt={furnitureImages[0].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>
        </div>

        {/* ── ROW 2: image[1] left + image[2] right ── */}
        <div className="tc-fur-row">
          <FadeUp delay={0.1}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[1].src}
                alt={furnitureImages[1].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[2].src}
                alt={furnitureImages[2].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>
        </div>

        {/* ── ROW 3: image[3] left + image[4] right ── */}
        <div className="tc-fur-row">
          <FadeUp delay={0.18}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[3].src}
                alt={furnitureImages[3].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[4].src}
                alt={furnitureImages[4].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>
        </div>

        {/* ── ROW 4: image[5] left + brand wordmark right ── */}
        <div className="tc-fur-row tc-fur-row-bottom">
          <FadeUp delay={0.26}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[5].src}
                alt={furnitureImages[5].alt}
                className="tc-fur-img"
              />
            </div>
          </FadeUp>

          {/* Brand block */}
          <FadeUp delay={0.32}>
            <div className="tc-fur-brand-block">
              <span className="tc-fur-brand">
                TEAL<strong>CULTURE</strong>
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
//  GLOBAL STYLES
// ════════════════════════════════════════════════════════════════
const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }



  /* ─── FURNITURE SECTION ─── */
  .tc-fur-section {
    background: #ffffff;
    padding: clamp(44px, 7vw, 88px) clamp(28px, 5.5vw, 68px);
    border-top: 1px solid rgba(17,17,17,0.07);
  }
  .tc-fur-wrap {
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: clamp(5px, 0.65vw, 9px);
  }

  /* rows */
  .tc-fur-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(5px, 0.65vw, 9px);
    align-items: stretch;
  }

  /* top row: text left sits at bottom of its half-height cell */
  .tc-fur-row-top { align-items: end; }
  .tc-fur-text {
    padding-bottom: clamp(8px, 1.5vw, 18px);
    padding-left: clamp(2px, 0.4vw, 6px);
  }
  .tc-fur-heading {
    font-family: 'DM Mono', 'Courier New', monospace;
    font-size: clamp(1.45rem, 3.2vw, 2.8rem);
    font-weight: 400;
    letter-spacing: 0.14em;
    line-height: 1.1;
    color: #111111;
    text-transform: uppercase;
    margin-bottom: clamp(6px, 1vw, 12px);
  }
  .tc-fur-sub {
    font-family: 'DM Mono', 'Courier New', monospace;
    font-size: clamp(0.36rem, 0.65vw, 0.46rem);
    letter-spacing: 0.3em;
    color: rgba(17,17,17,0.42);
    font-weight: 400;
    text-transform: uppercase;
  }

  /* image cells */
  .tc-fur-cell { overflow: hidden; background: #d8d5cf; }
  .tc-fur-cell-std { aspect-ratio: 4 / 3; }
  .tc-fur-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
  }
  .tc-fur-cell:hover .tc-fur-img { transform: scale(1.04); }

  /* bottom row brand block */
  .tc-fur-row-bottom { align-items: stretch; }
  .tc-fur-brand-block {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: clamp(10px, 1.5vw, 20px) clamp(4px, 0.8vw, 10px);
    aspect-ratio: 4 / 3;
  }
  .tc-fur-brand {
    font-family: 'DM Mono', 'Courier New', monospace;
    font-size: clamp(0.62rem, 1.1vw, 0.82rem);
    letter-spacing: 0.18em;
    color: rgba(17,17,17,0.48);
    font-weight: 400;
  }
  .tc-fur-brand strong { font-weight: 700; color: #111111; }

  /* ─── Responsive ─── */
  @media (max-width: 580px) {
    .tc-col-grid { grid-template-columns: repeat(2, 1fr); }
    .tc-fur-row { grid-template-columns: 1fr; }
    .tc-fur-row-top { align-items: start; }
    .tc-fur-brand-block { aspect-ratio: unset; padding: 20px 0; justify-content: flex-start; }
  }
  @media (min-width: 581px) and (max-width: 820px) {
    .tc-fur-heading { font-size: clamp(1.1rem, 2.8vw, 1.9rem); }
  }
`;

export default function CollectionSections() {
  return (
    <>
      <style>{styles}</style>
      <DesignerFurniture />
    </>
  );
}

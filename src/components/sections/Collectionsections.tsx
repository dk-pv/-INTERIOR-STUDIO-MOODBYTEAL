"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const furnitureImages = [
  {
    id: "furniture-1",
    src: "/portfolio/furniture-1.png",
    alt: "Real estate office corridor with bold orange door",
  },
  {
    id: "furniture-2",
    src: "/portfolio/furniture-2.png",
    alt: "Modern reception with acrylic table and orange seating",
  },
  {
    id: "furniture-3",
    src: "/portfolio/furniture-3.png",
    alt: "Open lounge space with curved grey sofas and warm tones",
  },
  {
    id: "furniture-4",
    src: "/portfolio/furniture-4.png",
    alt: "Office corridor with motion blur and orange accent walls",
  },
  {
    id: "furniture-5",
    src: "/portfolio/furniture-5.png",
    alt: "Luxury office floor with cream chairs and orange island",
  },
  {
    id: "furniture-6",
    src: "/portfolio/furniture-6.png",
    alt: "Close detail of red handle on dark architectural panel",
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
        <div className="tc-fur-row tc-fur-row-top">
          {/* Text block */}
          <FadeUp delay={0}>
            <div className="tc-fur-text">
              <h2 className="tc-fur-heading">
                INTERIOR
                <br />
                DESIGN STUDIO
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
                loading="lazy"
                className="tc-fur-img object-top"
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
                loading="lazy"
                className="tc-fur-img object-top"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[2].src}
                alt={furnitureImages[2].alt}
                loading="lazy"
                className="tc-fur-img object-top"
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
                loading="lazy"
                className="tc-fur-img object-top"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="tc-fur-cell tc-fur-cell-std">
              <img
                src={furnitureImages[4].src}
                alt={furnitureImages[4].alt}
                loading="lazy"
                className="tc-fur-img object-top"
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
                loading="lazy"
                className="tc-fur-img object-top"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }



  /* ─── FURNITURE SECTION ─── */
  .tc-fur-section {
    background: #ffffff;
    padding: clamp(32px, 5.5vw, 64px) clamp(24px, 5vw, 56px);
    border-top: 1px solid rgba(17,17,17,0.07);
  }
  .tc-fur-wrap {
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:  clamp(4px, 0.5vw, 7px);
  }

  /* rows */
  .tc-fur-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(4px, 0.5vw, 7px);
    align-items: stretch;
  }

  /* top row: text left sits at bottom of its half-height cell */
  .tc-fur-row-top { align-items: stretch; }
  .tc-fur-text {
    padding-bottom: clamp(4px, 1vw, 10px);
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
    margin-bottom:  clamp(4px, 0.7vw, 8px)
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
  .tc-fur-cell-std { aspect-ratio: 4 / 5; }
  .tc-fur-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    object-position: center;
    transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
  }
  .tc-fur-cell:hover .tc-fur-img { transform: scale(1.04); }

  /* bottom row brand block */
  .tc-fur-row-bottom { align-items: stretch; }
  .tc-fur-brand-block {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: clamp(6px, 1vw, 14px) clamp(4px, 0.6vw, 8px);
    aspect-ratio: 4 / 5;
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

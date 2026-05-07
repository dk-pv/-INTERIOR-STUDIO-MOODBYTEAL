"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { delay, duration: 0.65, ease },
});

function WipeReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.85, ease }}
    >
      {children}
    </motion.div>
  );
}

function ImgCard({
  src,
  alt,
  delay = 0,
}: {
  src: string;
  alt: string;
  delay?: number;
}) {
  return (
    <WipeReveal delay={delay}>
      <div className="tc-img-cell">
       <img src={src} alt={alt} className="tc-img" />
        <div className="tc-img-overlay" />
      </div>
    </WipeReveal>
  );
}

export default function CollectionSections() {
  return (
    <>
      <style>{css}</style>
      <section className="tc-section">
        <div className="tc-wrap">
          {/* ── ROW 1: heading text (left) + image 1 (right) ── */}
          <div className="tc-row">
            <motion.div {...fadeUp(0)} className="tc-text-cell">
              <p className="tc-eyebrow">Selected Work</p>
              <h2 className="tc-heading">
                Interior Design
                <br />& Fit-Out Studio
              </h2>
              <p className="tc-sub">REAL ESTATE OFFICE · UAE</p>
            </motion.div>
            <ImgCard
              src="/portfolio/furniture-1.png"
              alt="Office corridor orange door"
              delay={0.1}
            />
          </div>

          {/* ── ROW 2: image 2 + image 3 ── */}
          <div className="tc-row">
            <ImgCard
              src="/portfolio/furniture-2.png"
              alt="Reception acrylic table"
              delay={0.06}
            />
            <ImgCard
              src="/portfolio/furniture-3.png"
              alt="Lounge curved sofas"
              delay={0.14}
            />
          </div>

          {/* ── ROW 3: image 4 + image 5 ── */}
          <div className="tc-row">
            <ImgCard
              src="/portfolio/furniture-4.png"
              alt="Corridor motion blur"
              delay={0.06}
            />
            <ImgCard
              src="/portfolio/furniture-5.png"
              alt="Luxury office floor"
              delay={0.14}
            />
          </div>

          {/* ── ROW 4: image 6 (left) + nav card (right) ── */}
          <div className="tc-row">
            <ImgCard
              src="/portfolio/furniture-6.png"
              alt="Red handle dark panel"
              delay={0.06}
            />

            {/* ── Navigation / project card ── */}
            <motion.a
              href="/work"
              {...fadeUp(0.16)}
              className="tc-nav-card"
              whileHover="hover"
            >
              {/* animated background line */}
              <motion.span
                className="tc-nav-bg"
                variants={{ hover: { scaleY: 1 } }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease }}
              />

              <div className="tc-nav-inner">
                <div>
                  <p className="tc-nav-eyebrow">view Project</p>
                  <h3 className="tc-nav-title">View Full Case Study</h3>
                </div>

                <div className="tc-nav-bottom">
                  <div className="tc-nav-meta">
                    <span>MOOD</span>
                    <span>by</span>
                    <span>TEAL</span>
                  </div>
                  <motion.div
                    className="tc-nav-arrow"
                    variants={{ hover: { x: 6, y: -6 } }}
                    transition={{ duration: 0.3 }}
                  >
                    ↗
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tc-section {
    background: #f5f4f0;
    padding: clamp(28px, 4vw, 52px) clamp(20px, 5vw, 60px);
    border-top: 1px solid rgba(17,17,17,0.07);
  }

  .tc-wrap {
    max-width: 820px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 0.5vw, 7px);
  }

  /* ── Rows ── */
  .tc-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(4px, 0.5vw, 7px);
    align-items: stretch;
  }

  /* ── Text cell (row 1 left) ── */
  .tc-text-cell {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: clamp(6px, 1.2vw, 14px);
    padding-left: clamp(2px, 0.4vw, 6px);
  }
  .tc-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.3);
    margin-bottom: 10px;
  }
  .tc-heading {
    font-family: 'DM Mono', monospace;
    font-size: clamp(1.3rem, 2.8vw, 2.4rem);
    font-weight: 400;
    letter-spacing: 0.12em;
    line-height: 1.1;
    color: #111;
    text-transform: uppercase;
    margin-bottom: clamp(6px, 1vw, 10px);
  }
  .tc-sub {
    font-family: 'DM Mono', monospace;
    font-size: 0.38rem;
    letter-spacing: 0.28em;
    color: rgba(17,17,17,0.35);
    text-transform: uppercase;
  }

  /* ── Image cells ── */
 .tc-img-cell {
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
  background: #d8d5cf;
  transform: translateZ(0);
}
  .tc-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: center;
  transition: transform 0.8s cubic-bezier(0.76,0,0.24,1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
  .tc-img-cell:hover .tc-img { transform: scale(1.05); }
  .tc-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .tc-img-cell:hover .tc-img-overlay { opacity: 1; }

  /* ── Nav card ── */
  .tc-nav-card {
    position: relative;
    aspect-ratio: 4/5;
    background: #111111;
    overflow: hidden;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
  .tc-nav-bg {
    position: absolute;
    inset: 0;
    background: #1a1a1a;
    transform-origin: bottom;
    display: block;
  }
  .tc-nav-inner {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 24px);
  }
  .tc-nav-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.44rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245,244,240,0.28);
    margin-bottom: 8px;
  }
  .tc-nav-title {
    font-family: var(--font-heading, Georgia, serif);
    font-size: clamp(1.1rem, 2.4vw, 2rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: #f5f4f0;
  }
  .tc-nav-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .tc-nav-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .tc-nav-meta span {
    font-family: 'DM Mono', monospace;
    font-size: 0.42rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(245,244,240,0.22);
  }
  .tc-nav-arrow {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    color: rgba(245,244,240,0.55);
    line-height: 1;
    transition: color 0.3s;
  }
  .tc-nav-card:hover .tc-nav-arrow { color: #f5f4f0; }

  /* ── Responsive ── */
  @media (max-width: 580px) {
    .tc-row { grid-template-columns: 1fr; }
    .tc-text-cell { padding-bottom: 0; min-height: 120px; justify-content: center; }
    .tc-nav-card { aspect-ratio: 3/2; }
  }
`;

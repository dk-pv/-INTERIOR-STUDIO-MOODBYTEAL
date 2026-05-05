// "use client";

// import { motion } from "framer-motion";

// const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

// export const furnitureImages = [
//   {
//     id: "f1",
//     src: "/portfolio/furniture-1.png",
//     alt: "Real estate office corridor",
//     label: "01",
//     tag: "Entry",
//   },
//   {
//     id: "f2",
//     src: "/portfolio/furniture-2.png",
//     alt: "Reception with acrylic table",
//     label: "02",
//     tag: "Reception",
//   },
//   {
//     id: "f3",
//     src: "/portfolio/furniture-3.png",
//     alt: "Open lounge with curved sofas",
//     label: "03",
//     tag: "Lounge",
//   },
//   {
//     id: "f4",
//     src: "/portfolio/furniture-4.png",
//     alt: "Office corridor motion blur",
//     label: "04",
//     tag: "Circulation",
//   },
//   {
//     id: "f5",
//     src: "/portfolio/furniture-5.png",
//     alt: "Luxury office floor",
//     label: "05",
//     tag: "Workspace",
//   },
//   {
//     id: "f6",
//     src: "/portfolio/furniture-6.png",
//     alt: "Red handle on dark panel",
//     label: "06",
//     tag: "Detail",
//   },
// ];

// /* ── Clip-path wipe reveal ── */
// function Reveal({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   return (
//     <motion.div
//       className={className}
//       initial={{ clipPath: "inset(100% 0 0 0)" }}
//       whileInView={{ clipPath: "inset(0% 0 0 0)" }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ delay, duration: 0.9, ease }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* ── Fade up ── */
// const fu = (delay = 0) => ({
//   initial: { opacity: 0, y: 16 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-60px" },
//   transition: { delay, duration: 0.65, ease },
// });

// /* ── Single image card ── */
// function ImgCard({
//   img,
//   delay = 0,
//   style = {},
// }: {
//   img: (typeof furnitureImages)[0];
//   delay?: number;
//   style?: React.CSSProperties;
// }) {
//   return (
//     <Reveal delay={delay} className="tc-card">
//       <div className="tc-card-inner" style={style}>
//         <img
//           src={img.src}
//           alt={img.alt}
//           loading="lazy"
//           className="tc-card-img"
//         />
//         {/* Hover overlay */}
//         <div className="tc-card-overlay">
//           <span className="tc-card-num">{img.label}</span>
//           <span className="tc-card-tag">{img.tag}</span>
//         </div>
//       </div>
//     </Reveal>
//   );
// }

// export default function CollectionSections() {
//   return (
//     <>
//       <style>{css}</style>

//       <section className="tc-section">
//         {/* ── Header ── */}
//         <div className="tc-header">
//           <motion.p {...fu(0)} className="tc-eyebrow">
//             Selected Work
//           </motion.p>
//           <motion.h2 {...fu(0.08)} className="tc-title">
//             Real Estate
//             <br />
//             Office
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.1, ease }}
//             className="tc-rule"
//           />
//         </div>

//         {/* ── Grid ── */}
//         <div className="tc-grid">
//           {/* ROW A: large left (2/3) + tall right (1/3) */}
//           <div className="tc-row tc-row-a">
//             <ImgCard
//               img={furnitureImages[0]}
//               delay={0.05}
//               style={{ aspectRatio: "3/4" }}
//             />
//             <ImgCard
//               img={furnitureImages[1]}
//               delay={0.18}
//               style={{ aspectRatio: "3/4" }}
//             />
//           </div>

//           {/* ROW B: narrow left + wide right — offset vertically */}
//           <div className="tc-row tc-row-b">
//             <ImgCard
//               img={furnitureImages[2]}
//               delay={0.08}
//               style={{ aspectRatio: "4/5" }}
//             />
//             <div className="tc-row-b-right">
//               <ImgCard
//                 img={furnitureImages[3]}
//                 delay={0.18}
//                 style={{ aspectRatio: "4/5" }}
//               />
//             </div>
//           </div>

//           {/* ROW C: 3-up equal */}
//           <div className="tc-row tc-row-c">
//             <ImgCard
//               img={furnitureImages[4]}
//               delay={0.06}
//               style={{ aspectRatio: "3/4" }}
//             />
//             <ImgCard
//               img={furnitureImages[5]}
//               delay={0.14}
//               style={{ aspectRatio: "3/4" }}
//             />
//             {/* Brand end-card */}
//             <motion.div {...fu(0.22)} className="tc-brand-card">
//               <p className="tc-brand-label">
//                 MOODby<strong>TEAL</strong>
//               </p>
//               <p className="tc-brand-sub">
//                 Real Estate Office
//                 <br />
//                 UAE · 2024
//               </p>
//               <a href="/work" className="tc-brand-cta">
//                 View Project <span>→</span>
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// const css = `
//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   .tc-section {
//     background: #f5f4f0;
//     padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px);
//   }

//   /* ── Header ── */
//   .tc-header {
//     max-width: 1100px;
//     margin: 0 auto clamp(24px, 4vw, 48px);
//     position: relative;
//   }
//   .tc-eyebrow {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.52rem;
//     letter-spacing: 0.3em;
//     text-transform: uppercase;
//     color: rgba(10,10,10,0.35);
//     margin-bottom: 10px;
//   }
//   .tc-title {
//     font-family: var(--font-heading, Georgia, serif);
//     font-size: clamp(2rem, 5vw, 3.8rem);
//     font-weight: 400;
//     letter-spacing: -0.025em;
//     line-height: 1.05;
//     color: #0a0a0a;
//     margin-bottom: 20px;
//   }
//   .tc-rule {
//     height: 1px;
//     background: rgba(10,10,10,0.10);
//     transform-origin: left;
//   }

//   /* ── Grid wrapper ── */
//   .tc-grid {
//     max-width: 1100px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     gap: clamp(6px, 0.8vw, 10px);
//   }

//   /* ── Row A: 2-col equal ── */
//   .tc-row-a {
//     display: grid;
//     grid-template-columns: 1.15fr 0.85fr;
//     gap: clamp(6px, 0.8vw, 10px);
//   }

//   /* ── Row B: narrow + wide, right offset down ── */
//   .tc-row-b {
//     display: grid;
//     grid-template-columns: 0.8fr 1.2fr;
//     gap: clamp(6px, 0.8vw, 10px);
//     align-items: start;
//   }
//   .tc-row-b-right {
//     margin-top: clamp(24px, 4vw, 56px); /* editorial offset */
//   }

//   /* ── Row C: 3-col ── */
//   .tc-row-c {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: clamp(6px, 0.8vw, 10px);
//     align-items: stretch;
//   }

//   /* ── Card ── */
//   .tc-card { overflow: hidden; }
//   .tc-card-inner {
//     position: relative;
//     overflow: hidden;
//     width: 100%;
//     background: #d8d5cf;
//   }
//   .tc-card-img {
//     width: 100%; height: 100%;
//     object-fit: cover;
//     display: block;
//     transition: transform 0.85s cubic-bezier(0.76,0,0.24,1);
//   }
//   .tc-card-inner:hover .tc-card-img {
//     transform: scale(1.06);
//   }

//   /* Hover overlay */
//   .tc-card-overlay {
//     position: absolute;
//     inset: 0;
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     padding: 14px 16px;
//     background: linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 55%);
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }
//   .tc-card-inner:hover .tc-card-overlay { opacity: 1; }
//   .tc-card-num {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.52rem;
//     letter-spacing: 0.2em;
//     color: rgba(245,244,240,0.55);
//   }
//   .tc-card-tag {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.52rem;
//     letter-spacing: 0.18em;
//     text-transform: uppercase;
//     color: rgba(245,244,240,0.8);
//   }

//   /* ── Brand end-card ── */
//   .tc-brand-card {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     padding: clamp(16px, 2vw, 28px);
//     background: #0a0a0a;
//     aspect-ratio: 3/4;
//   }
//   .tc-brand-label {
//     font-family: 'DM Mono', monospace;
//     font-size: clamp(0.75rem, 1.2vw, 0.95rem);
//     letter-spacing: 0.12em;
//     color: rgba(245,244,240,0.38);
//     margin-bottom: 10px;
//   }
//   .tc-brand-label strong { color: #f5f4f0; font-weight: 700; }
//   .tc-brand-sub {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.52rem;
//     letter-spacing: 0.2em;
//     line-height: 1.8;
//     text-transform: uppercase;
//     color: rgba(245,244,240,0.25);
//     margin-bottom: 24px;
//   }
//   .tc-brand-cta {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     font-family: 'DM Mono', monospace;
//     font-size: 0.58rem;
//     letter-spacing: 0.22em;
//     text-transform: uppercase;
//     color: #f5f4f0;
//     text-decoration: none;
//     border-bottom: 1px solid rgba(245,244,240,0.2);
//     padding-bottom: 4px;
//     width: fit-content;
//     transition: border-color 0.3s, gap 0.3s;
//   }
//   .tc-brand-cta:hover { border-color: rgba(245,244,240,0.7); gap: 14px; }

//   /* ── Responsive ── */
//   @media (max-width: 680px) {
//     .tc-row-a,
//     .tc-row-b,
//     .tc-row-c { grid-template-columns: 1fr 1fr; }
//     .tc-row-b-right { margin-top: 0; }
//     .tc-brand-card { aspect-ratio: unset; min-height: 200px; }
//   }
//   @media (max-width: 420px) {
//     .tc-row-a,
//     .tc-row-c { grid-template-columns: 1fr; }
//     .tc-row-b { grid-template-columns: 1fr; }
//   }
// `;




"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { delay, duration: 0.65, ease },
});

function WipeReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.85, ease }}
    >
      {children}
    </motion.div>
  );
}

function ImgCard({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  return (
    <WipeReveal delay={delay}>
      <div className="tc-img-cell">
        <img src={src} alt={alt} loading="lazy" className="tc-img" />
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
                INTERIOR<br />DESIGN<br />STUDIO
              </h2>
              <p className="tc-sub">REAL ESTATE OFFICE · UAE</p>
            </motion.div>
            <ImgCard src="/portfolio/furniture-1.png" alt="Office corridor orange door" delay={0.1} />
          </div>

          {/* ── ROW 2: image 2 + image 3 ── */}
          <div className="tc-row">
            <ImgCard src="/portfolio/furniture-2.png" alt="Reception acrylic table" delay={0.06} />
            <ImgCard src="/portfolio/furniture-3.png" alt="Lounge curved sofas" delay={0.14} />
          </div>

          {/* ── ROW 3: image 4 + image 5 ── */}
          <div className="tc-row">
            <ImgCard src="/portfolio/furniture-4.png" alt="Corridor motion blur" delay={0.06} />
            <ImgCard src="/portfolio/furniture-5.png" alt="Luxury office floor" delay={0.14} />
          </div>

          {/* ── ROW 4: image 6 (left) + nav card (right) ── */}
          <div className="tc-row">
            <ImgCard src="/portfolio/furniture-6.png" alt="Red handle dark panel" delay={0.06} />

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
  }
  .tc-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    object-position: center;
    transition: transform 0.8s cubic-bezier(0.76,0,0.24,1);
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
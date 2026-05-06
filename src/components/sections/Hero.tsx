// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "0px 0px -120px 0px" },
//   transition: { delay, duration: 0.3, ease },
// });

// export default function Hero() {
//   return (
//     <>
//       <section
//         data-theme="dark"
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100svh",
//           minHeight: 560,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           overflow: "hidden",
//           backgroundColor: "#050505",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <div className="hidden sm:block w-full h-full">
//             <Image
//               src="/hero-desktop.png"
//               alt="MOODbyTEAL interior"
//               fill
//               priority
//               sizes="100vw"
//               style={{ objectFit: "cover", objectPosition: "center center" }}
//             />
//           </div>
//           <div className="block sm:hidden w-full h-full">
//             <Image
//               src="/hero-mobile.png"
//               alt="MOODbyTEAL interior mobile"
//               fill
//               priority
//               sizes="100vw"
//               style={{ objectFit: "cover", objectPosition: "center center" }}
//             />
//           </div>
//         </div>

//         {[
//           { text: "Interior Design", pos: "top-left" },
//           { text: "Turnkey Fit-out Construction", pos: "top-right" },
//           { text: "Furniture Manufacturing", pos: "bottom-left" },
//           { text: "Interior Styling", pos: "bottom-right" },
//         ].map((item, i) => {
//           const edge = "clamp(20px, 3vw, 48px)";
//           const topOffset = "clamp(70px, 10vh, 120px)";
//           const pos =
//             item.pos === "top-left"
//               ? { top: topOffset, left: edge }
//               : item.pos === "top-right"
//                 ? { top: topOffset, right: edge, textAlign: "right" as const }
//                 : item.pos === "bottom-left"
//                   ? { bottom: edge, left: edge }
//                   : {
//                       bottom: edge,
//                       right: edge,
//                       textAlign: "right" as const,
//                     };
//           return (
//             <motion.div
//               key={item.text}
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease }}
//               style={{
//                 position: "absolute",
//                 zIndex: 20,
//                 fontFamily: "var(--font-heading)",
//                 fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
//                 letterSpacing: "0.18em",
//                 textTransform: "uppercase",
//                 color: "rgba(255,255,255,0.9)",
//                 fontWeight: 500,

//                 padding: "6px 10px",
//                 background: "rgba(0,0,0,0.25)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 borderRadius: "6px",
//                 backdropFilter: "blur(6px)",

//                 textShadow: "0 2px 12px rgba(0,0,0,0.35)",

//                 ...pos,
//               }}
//             >
//               {item.text}
//             </motion.div>
//           );
//         })}

//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             display: "flex",
//             padding: "clamp(14px, 3vw, 28px) clamp(20px, 5vw, 64px)",
//           }}
//         />

//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             padding: "0 clamp(20px, 5vw, 64px) clamp(20px, 4vh, 48px)",
//           }}
//         >
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 1.1, delay: 0.4, ease }}
//             style={{
//               height: 1,
//               background: "rgba(245,244,240,0.12)",
//               marginBottom: "clamp(14px, 2.5vh, 24px)",
//               transformOrigin: "left",
//             }}
//           />
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.1 }}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 8,
//                 flexShrink: 0,
//               }}
//             >
//               <motion.div
//                 animate={{ scaleY: [0, 1, 0] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 1.8,
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   width: 1,
//                   height: 28,
//                   background: "rgba(245,244,240,0.35)",
//                   transformOrigin: "top",
//                 }}
//               />
//               <span
//                 style={{
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: "0.45rem",
//                   letterSpacing: "0.26em",
//                   textTransform: "uppercase",
//                   color: "rgba(245,244,240,0.22)",
//                 }}
//               >
//                 Scroll
//               </span>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════
//           INTRO / PHILOSOPHY STRIP
//       ══════════════════════════════════════ */}
//       <section
//         data-theme="light"
//         style={{
//           backgroundColor: "#f5f4f0",
//           padding: "clamp(32px, 5vw, 60px) clamp(20px, 6vw, 80px)",
//           overflow: "hidden",
//         }}
//       >
//         <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//           {/* ── OUR PHILOSOPHY label — ✅ spread, no variants prop ── */}
//           <motion.p
//             {...fadeUp(0)}
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.55rem",
//               letterSpacing: "0.28em",
//               textTransform: "uppercase",
//               color: "rgba(10,10,10,0.35)",
//               marginBottom: 18,
//             }}
//           >
//             Our Philosophy
//           </motion.p>

//           {/* ── Animated rule ── */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.9, delay: 0.05, ease }}
//             style={{
//               height: 1,
//               background: "rgba(10,10,10,0.08)",
//               marginBottom: 20,
//               transformOrigin: "left",
//             }}
//           />

//           {/* ── About + Logo row — ✅ spread ── */}
//           <motion.div
//             {...fadeUp(0.05)}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "24px",
//               flexWrap: "wrap",
//               marginBottom: "clamp(10px, 2vw, 18px)",
//             }}
//           >
//             <h2
//               style={{
//                 fontFamily: "var(--font-heading)",
//                 fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
//                 letterSpacing: "-0.025em",
//                 lineHeight: 1.0,
//                 color: "#0a0a0a",
//                 fontWeight: 400,
//                 margin: 0,
//               }}
//             >
//               About
//             </h2>

//             <motion.div
//               initial={{ opacity: 0, x: -12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.35, duration: 0.7, ease }}
//             >
//               <Image
//                 src="/teal-culture-logo.png"
//                 alt="Teal Culture Logo"
//                 width={340}
//                 height={90}
//                 style={{ objectFit: "contain" }}
//               />
//             </motion.div>
//           </motion.div>

//           {/* ── Body + CTA — ✅ spread ── */}
//           <motion.div {...fadeUp(0.1)} style={{ maxWidth: 900 }}>
//             <p
//               style={{
//                 fontSize: "clamp(0.85rem, 1.35vw, 0.95rem)",
//                 color: "rgba(10,10,10,0.50)",
//                 lineHeight: 1.9,
//                 letterSpacing: "0.01em",
//                 margin: "0 0 clamp(20px, 3vw, 36px) 0",
//               }}
//             >
//               Teal Culture emerges within India and the United Arab Emirates as
//               a convergence of architecture, interiors, and Artificial
//               Intelligence. Built form is experienced as a continuous spatial
//               journey rather than a fixed object. Spaces unfold through
//               reduction and precision, where matter is guided by silence,
//               weight, and light—revealing itself gradually through movement and
//               perception. Teal Culture continues as an ongoing exploration of
//               how construction becomes experience, where architecture,
//               intelligence, and human perception flow into a single evolving
//               field.
//             </p>

//             <motion.a
//               href="/studio"
//               whileHover={{ x: 6 }}
//               transition={{ duration: 0.25 }}
//               className="btn btn-outline inline-flex"
//               style={{ cursor: "pointer" }}
//             >
//               Our Story
//               <span style={{ opacity: 0.5, fontSize: "0.8em" }}>→</span>
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -120px 0px" },
  transition: { delay, duration: 0.3, ease },
});

const corners = [
  { text: "Interior Design", pos: "top-left" },
  { text: "Turnkey Fit-out Construction", pos: "top-right" },
  { text: "Furniture Manufacturing", pos: "bottom-left" },
  { text: "Interior Styling", pos: "bottom-right" },
];

export default function Hero() {
  /* ─── edge distances — further from corners ─── */
  const edgeH = "clamp(36px, 5vw, 80px)"; // horizontal inset
  const edgeV = "clamp(90px, 13vh, 150px)"; // vertical inset (keeps clear of nav + MOODbyTEAL)

  return (
    <>
      <section
        data-theme="dark"
        style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          minHeight: 560,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          backgroundColor: "#050505",
        }}
      >
        {/* ── Background ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hidden sm:block w-full h-full">
            <Image
              src="/hero-desktop.png"
              alt="MOODbyTEAL interior"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="block sm:hidden w-full h-full">
            <Image
              src="/hero-mobile.png"
              alt="MOODbyTEAL interior mobile"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        </div>

        {/* ══ CORNER LABELS ══ */}
        {corners.map((item, i) => {
          const isRight = item.pos.includes("right");
          const isBottom = item.pos.includes("bottom");

          const pos = {
            ...(isBottom ? { bottom: edgeV } : { top: edgeV }),
            ...(isRight ? { right: edgeH } : { left: edgeH }),
          };

          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.88, y: isBottom ? 14 : -14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.18, duration: 0.9, ease }}
              style={{
                position: "absolute",
                zIndex: 20,
                textAlign: isRight ? "right" : "left",
                ...pos,
              }}
            >
              {/* ── outer glow halo ── */}
              <motion.div
                animate={{ opacity: [0.18, 0.38, 0.18] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5 + i * 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: "-10px -14px",
                  borderRadius: 14,
                  background: "rgba(245,244,240,0.06)",
                  filter: "blur(14px)",
                  pointerEvents: "none",
                }}
              />

              {/* ── label card ── */}
              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                  flexDirection: "column",
                  gap: 7,
                  padding: "clamp(10px, 1.4vw, 16px) clamp(14px, 2vw, 22px)",
                  background: "rgba(4,4,4,0.42)",
                  border: "1px solid rgba(245,244,240,0.13)",
                  borderRadius: 10,
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow:
                    "0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(245,244,240,0.07)",
                  overflow: "hidden",
                }}
              >
                {/* shimmer sweep — plays once on mount */}
                <motion.div
                  initial={{ x: "-110%" }}
                  animate={{ x: "210%" }}
                  transition={{
                    delay: 0.7 + i * 0.18,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(245,244,240,0.12) 50%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* tiny mono index */}
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(0.4rem, 0.55vw, 0.52rem)",
                    letterSpacing: "0.26em",
                    color: "rgba(245,244,240,0.30)",
                    lineHeight: 1,
                    textAlign: isRight ? "right" : "left",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* service name */}
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.68rem, 1.05vw, 0.88rem)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.92)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </span>

                {/* bottom rule — left-to-right for left cards, right-to-left for right cards */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9 + i * 0.15, duration: 0.55, ease }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    background: isRight
                      ? "linear-gradient(270deg, rgba(245,244,240,0.45) 0%, rgba(245,244,240,0) 100%)"
                      : "linear-gradient(90deg,  rgba(245,244,240,0.45) 0%, rgba(245,244,240,0) 100%)",
                    transformOrigin: isRight ? "right" : "left",
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* ── Top nav spacer ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            padding: "clamp(14px, 3vw, 28px) clamp(20px, 5vw, 64px)",
          }}
        />

        {/* ── Bottom scroll indicator ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 clamp(20px, 5vw, 64px) clamp(20px, 4vh, 48px)",
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            style={{
              height: 1,
              background: "rgba(245,244,240,0.12)",
              marginBottom: "clamp(14px, 2.5vh, 24px)",
              transformOrigin: "left",
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ scaleY: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                style={{
                  width: 1,
                  height: 28,
                  background: "rgba(245,244,240,0.35)",
                  transformOrigin: "top",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.45rem",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,240,0.22)",
                }}
              >
                Scroll
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO / PHILOSOPHY STRIP
      ══════════════════════════════════════ */}
      <section
        data-theme="light"
        style={{
          backgroundColor: "#f5f4f0",
          padding: "clamp(32px, 5vw, 60px) clamp(20px, 6vw, 80px)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
              marginBottom: 18,
            }}
          >
            Our Philosophy
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            style={{
              height: 1,
              background: "rgba(10,10,10,0.08)",
              marginBottom: 20,
              transformOrigin: "left",
            }}
          />

          <motion.div
            {...fadeUp(0.05)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "clamp(10px, 2vw, 18px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                color: "#0a0a0a",
                fontWeight: 400,
                margin: 0,
              }}
            >
              About
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
            >
              <Image
                src="/teal-culture-logo.png"
                alt="Teal Culture Logo"
                width={340}
                height={90}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} style={{ maxWidth: 900 }}>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.35vw, 0.95rem)",
                color: "rgba(10,10,10,0.50)",
                lineHeight: 1.9,
                letterSpacing: "0.01em",
                margin: "0 0 clamp(20px, 3vw, 36px) 0",
              }}
            >
              Teal Culture emerges within India and the United Arab Emirates as
              a convergence of architecture, interiors, and Artificial
              Intelligence. Built form is experienced as a continuous spatial
              journey rather than a fixed object. Spaces unfold through
              reduction and precision, where matter is guided by silence,
              weight, and light—revealing itself gradually through movement and
              perception. Teal Culture continues as an ongoing exploration of
              how construction becomes experience, where architecture,
              intelligence, and human perception flow into a single evolving
              field.
            </p>

            <motion.a
              href="/studio"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="btn btn-outline inline-flex"
              style={{ cursor: "pointer" }}
            >
              Our Story
              <span style={{ opacity: 0.5, fontSize: "0.8em" }}>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

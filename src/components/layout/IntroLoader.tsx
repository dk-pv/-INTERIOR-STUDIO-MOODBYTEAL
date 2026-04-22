// "use client";

// import { useEffect, useState } from "react";

// export default function IntroLoader({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 800); // 🔥 reduced from 2500 → 800

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
//         <h1 className="text-lg font-heading">Loading...</h1>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }



"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function IntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    // Show loader for 1.6s, then exit animation
    const showTimer = setTimeout(() => setPhase("exit"), 1600);
    // After exit animation (600ms), show content
    const doneTimer = setTimeout(() => setPhase("done"), 2200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EXPO }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#0a0a0a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              overflow: "hidden",
            }}
          >
            {/* Grain texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/noise.jpg')",
                backgroundRepeat: "repeat",
                opacity: 0.03,
                pointerEvents: "none",
              }}
            />

            {/* Brand wordmark */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  phase === "loading"
                    ? { y: "0%", opacity: 1 }
                    : { y: "-105%", opacity: 0 }
                }
                transition={
                  phase === "loading"
                    ? { duration: 0.9, ease: EXPO, delay: 0.15 }
                    : { duration: 0.55, ease: EXPO }
                }
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                  color: "#f5f4f0",
                  lineHeight: 1,
                }}
              >
                TEAL
              </motion.h1>
            </div>

            <div style={{ position: "relative", overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  phase === "loading"
                    ? { y: "0%", opacity: 1 }
                    : { y: "-105%", opacity: 0 }
                }
                transition={
                  phase === "loading"
                    ? { duration: 0.9, ease: EXPO, delay: 0.27 }
                    : { duration: 0.55, ease: EXPO, delay: 0.06 }
                }
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                  color: "rgba(245,244,240,0.28)",
                  fontStyle: "italic",
                  lineHeight: 1,
                }}
              >
                CULTURE
              </motion.h1>
            </div>

            {/* Progress line */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: 1,
                backgroundColor: "rgba(245,244,240,0.2)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0, width: "100%" }}
              animate={
                phase === "loading"
                  ? { scaleX: 1 }
                  : { scaleX: 1 }
              }
              transition={{ duration: 1.4, ease: "linear", delay: 0.2 }}
            />

            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={
                phase === "loading" ? { opacity: 1 } : { opacity: 0 }
              }
              transition={
                phase === "loading"
                  ? { duration: 0.6, delay: 0.6 }
                  : { duration: 0.3 }
              }
              style={{
                position: "absolute",
                bottom: 32,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.54rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,244,240,0.22)",
                whiteSpace: "nowrap",
              }}
            >
              Interior Architecture Studio
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content — render underneath, visible after loader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
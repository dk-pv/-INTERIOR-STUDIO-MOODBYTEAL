"use client";

import { motion } from "framer-motion";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Team from "@/components/sections/Team";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function StudioPage() {
  return (
    <main style={{ backgroundColor: "#f9f8f6", color: "#0a0a0a" }}>
      <section
        style={{
          minHeight: "100vh", // ✅ fallback
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px, 6vw, 96px) clamp(52px, 8vw, 88px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: EXPO, delay: 0.1 }}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(120px, 22vw, 280px)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.06)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          STUDIO
        </motion.p>

        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/noise.jpg')",
            backgroundRepeat: "repeat",
            opacity: 0.03,
            pointerEvents: "none",
            willChange: "opacity",
          }}
        />

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EXPO }}
          style={{
            position: "absolute",
            top: "clamp(24px, 4vw, 48px)",
            right: "clamp(24px, 6vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              backgroundColor: "#0a0a0a",
              opacity: 0.3,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.35)",
            }}
          >
            02 / Studio
          </span>
        </motion.div>

        {/* MAIN GRID */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "40px",
          }}
        >
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EXPO }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
                marginBottom: 20,
              }}
            >
              A Design + Curation Studio
            </motion.p>

            {/* H1 */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.15, duration: 1.1, ease: EXPO }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.6rem, 6.5vw, 5.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  transform: "translateZ(0)",
                }}
              >
                We design spaces
              </motion.h1>
            </div>

            {/* H2 */}
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.27, duration: 1.1, ease: EXPO }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.6rem, 6.5vw, 5.8rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                }}
              >
                that feel
              </motion.h2>
            </div>

            {/* H2 */}
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.39, duration: 1.1, ease: EXPO }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.6rem, 6.5vw, 5.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                }}
              >
                before they function
              </motion.h2>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              maxWidth: 260,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: EXPO }}
              style={{
                width: "1.5px",
                height: 48,
                backgroundColor: "rgba(0,0,0,0.2)",
                transformOrigin: "top",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.9, ease: EXPO }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.45)",
              }}
            >
              MOODBYTEAL blends emotion, architecture, and minimal luxury —
              crafting environments that resonate on a deeper level.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.25)",
              }}
            >
              Based in UAE / IND
            </motion.p>
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.1, ease: EXPO }}
          style={{
            position: "absolute",
            bottom: "clamp(52px, 8vw, 88px)",
            left: "clamp(24px, 6vw, 96px)",
            right: "clamp(24px, 6vw, 96px)",
            height: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
            transformOrigin: "left",
          }}
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "clamp(14px, 2.5vw, 28px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              backgroundColor: "rgba(0,0,0,0.18)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.55)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.28)",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </section>

      <About />
      <Founder />
      <Team />
    </main>
  );
}
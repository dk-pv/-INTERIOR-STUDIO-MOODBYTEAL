"use client";

import { motion } from "framer-motion";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Team from "@/components/sections/Team";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function StudioPage() {
  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
      <section
        data-theme="light"
        style={{
          minHeight: "100vh",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px, 6vw, 96px) clamp(52px, 8vw, 88px)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f4f0",
        }}
      >
        {/* Ghost watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: EXPO, delay: 0.1 }}
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(100px, 20vw, 260px)",
            fontWeight: 400,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(10,10,10,0.06)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          STUDIO
        </motion.p>

        {/* Grain overlay */}
        <div className="grain" />

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
              backgroundColor: "rgba(10,10,10,0.25)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
            }}
          >
            02 / Studio
          </span>
        </motion.div>

        {/* Main content grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: 36,
          }}
        >
          {/* Heading block */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EXPO }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.32)",
                marginBottom: 24,
              }}
            >
              A Design + Curation Studio
            </motion.p>

            {[
              { text: "We design spaces", italic: false },
              { text: "that feel", italic: true, muted: false },
              { text: "before they function", italic: false, muted: true },
            ].map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.12,
                    duration: 1.1,
                    ease: EXPO,
                  }}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.4rem, 6.5vw, 5.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.04,
                    letterSpacing: "-0.04em",
                    fontStyle: line.italic ? "italic" : "normal",
                    color: line.muted ? "rgba(10,10,10,0.28)" : "#0a0a0a",
                    transform: "translateZ(0)",
                  }}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Descriptor */}
          <div
            style={{
              maxWidth: 320,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: EXPO }}
              style={{
                width: 1,
                height: 44,
                backgroundColor: "rgba(10,10,10,0.18)",
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
                lineHeight: 1.8,
                color: "rgba(10,10,10,0.45)",
              }}
            >
              TEAL CULTURE blends emotion, architecture, and minimal luxury —
              crafting environments that resonate on a deeper level.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.22)",
              }}
            >
              Based in Kerala, India · UAE
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
            backgroundColor: "rgba(10,10,10,0.1)",
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
              backgroundColor: "rgba(10,10,10,0.12)",
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
                backgroundColor: "rgba(10,10,10,0.5)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.25)",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </section>

      {/* About + MoodyTeal concept */}
      <About />

      {/* Founder story */}
      <Founder />

      {/* Team grid */}
      <Team />
    </main>
  );
}

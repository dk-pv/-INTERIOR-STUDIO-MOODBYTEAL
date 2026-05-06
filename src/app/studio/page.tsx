"use client";

import { motion } from "framer-motion";
import Founder from "@/components/sections/Founder";
// import Team from "@/components/sections/Team";
import MoodyTealConcept from "@/components/sections/MoodyTealConcept";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function StudioPage() {
  return (
    <main style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}>
      <section
        data-theme="light"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px, 5vw, 72px) clamp(36px, 6vw, 60px)",
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
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(100px, 20vw, 260px)",
            fontWeight: 400,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(10,10,10,0.08)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          STUDIO
        </motion.p>

        {/* Main content grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: 24,
          }}
        >
          {/* Heading block */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "0px",
              marginTop: "45vh",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EXPO }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.28)",
                marginBottom: 22,
                marginLeft: "0.4vw",
              }}
            >
              STUDIO EXPERIENCE
            </motion.p>

            <div
              style={{
                overflow: "hidden",
                width: "100%",
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: 0.12,
                  duration: 1,
                  ease: EXPO,
                }}
                style={{
                  fontFamily: "var(--font-bitcount)",
                  fontSize: "clamp(3rem, 5.8vw, 6.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  transform: "translateZ(0)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.18em",
                  flexWrap: "nowrap",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#0a0a0a" }}>Making</span>

                <span style={{ color: "#0a0a0a" }}>things</span>

                <span style={{ color: "rgba(10,10,10,0.32)" }}>matter.</span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.1, ease: EXPO }}
          style={{
            position: "absolute",
            bottom: "clamp(36px, 6vw, 60px)",
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
            bottom: "clamp(10px, 2vw, 20px)",
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

      {/* MoodyTeal concept */}
      <MoodyTealConcept />

      {/* Founder story */}
      <Founder />

      {/* Team grid */}
      {/* <Team /> */}
    </main>
  );
}

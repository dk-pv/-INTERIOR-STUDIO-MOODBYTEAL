// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* 🎬 Background (optimized) */}
//       <div className="absolute inset-0">
//         <Image
//           src="/hero-bg.png"
//           alt="background"
//           fill
//           priority
//           className="object-cover opacity-70 scale-105"
//         />
//       </div>

//       {/* 🎯 Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* 🌫️ Grain (lighter) */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.jpg')] pointer-events-none" />

//       {/* ✨ Content */}
//       <div className="relative text-center px-6">
        
//         {/* Intro */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 0.7, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-white/60 text-sm tracking-[0.3em] uppercase"
//         >
//           Welcome to
//         </motion.p>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="mt-4 text-5xl md:text-7xl font-heading tracking-tight text-white"
//         >
//           TEAL CULTURE
//         </motion.h1>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.6 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mt-6 text-white/50 text-sm tracking-wide"
//         >
//           Future-forward architecture & interiors
//         </motion.p>
//       </div>

//       {/* ⬇ Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 0.6 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.2,
//           }}
//           className="w-[1px] h-10 bg-white/40"
//         />
//       </motion.div>
      
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — Dark cinematic (first impression)
      ═══════════════════════════════════════════════ */}
      <section
        data-theme="dark"
        className="relative h-screen flex items-end overflow-hidden bg-[#0a0a0a]"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="TEAL CULTURE interior"
            fill
            priority
            className="object-cover opacity-60 scale-[1.03]"
          />
        </div>

        {/* Gradient overlay — bottom heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Grain */}
        <div className="grain" />

        {/* Content — bottom-left editorial layout */}
        <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-20">
          
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="label text-white/50 mb-6"
          >
            Interior Architecture Studio
          </motion.p>

          {/* Main title — large editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem, 8vw, 9rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              color: "#f5f4f0",
              fontWeight: 400,
            }}
          >
            TEAL
            <br />
            <span style={{ color: "rgba(245,244,240,0.55)" }}>CULTURE</span>
          </motion.h1>

          {/* Bottom row: tagline + scroll hint */}
          <div className="flex items-end justify-between mt-10 gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(245,244,240,0.45)",
                letterSpacing: "0.04em",
                maxWidth: 280,
                lineHeight: 1.6,
              }}
            >
              We design spaces that carry emotion — where architecture meets identity.
            </motion.p>

            {/* Scroll line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                style={{
                  width: 1,
                  height: 48,
                  background: "#f5f4f0",
                  transformOrigin: "top",
                }}
              />
              <span className="label text-white/30 text-[0.55rem]">Scroll</span>
            </motion.div>
          </div>
        </div>

        {/* Project count — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-32 right-8 md:right-16 text-right"
        >
          <p className="label text-white/25 text-[0.58rem]">Est. 2020</p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.8rem",
              color: "rgba(245,244,240,0.12)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            48+
          </p>
          <p className="label text-white/20 text-[0.55rem] mt-1">Projects</p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          INTRO STRIP — White, transitions from dark hero
      ═══════════════════════════════════════════════ */}
      <section
        data-theme="light"
        className="bg-[#f5f4f0] py-20 px-8 md:px-16"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          
          {/* Left: brand statement */}
          <div className="flex-1">
            <p className="label mb-5" style={{ color: "rgba(10,10,10,0.4)" }}>
              Our Philosophy
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#0a0a0a",
                fontWeight: 400,
              }}
            >
              Space is not just built.
              <br />
              <span style={{ color: "rgba(10,10,10,0.35)" }}>
                It is felt.
              </span>
            </h2>
          </div>

          {/* Right: descriptor */}
          <div className="flex-1 pt-2 md:pt-10">
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(10,10,10,0.55)",
                lineHeight: 1.85,
                letterSpacing: "0.01em",
              }}
            >
              TEAL CULTURE is a luxury interior architecture studio crafting
              bespoke environments — private residences, commercial spaces, villas,
              and apartments — where every detail speaks intention.
            </p>

            {/* CTA */}
            <motion.a
              href="/studio"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="btn btn-outline mt-8 inline-flex"
              style={{ cursor: "none" }}
            >
              Our Story
              <span style={{ opacity: 0.5, fontSize: "0.8em" }}>→</span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🎬 Cinematic Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="/hero-bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-70"
          initial={{ scale: 1.25, x: 0 }}
          animate={{ scale: 1.05, x: -30 }}
          transition={{
            duration: 14,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* 🎯 Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🌫️ Grain */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.jpg')] pointer-events-none" />

      {/* ✨ Content */}
      <div className="relative text-center px-6">
        
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/60 text-sm tracking-[0.3em] uppercase"
        >
          Welcome to
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 100, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.6,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-4 text-5xl md:text-7xl font-heading tracking-tight text-white"
        >
          TEAL CULTURE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 text-white/50 text-sm tracking-wide"
        >
          Future-forward architecture & interiors
        </motion.p>
      </div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="w-[1px] h-12 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🖼️ Background Image (CGI / texture) */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png" // 🔥 replace with your CGI image
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* 🎯 Dark overlay (depth control) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🌫️ Grain */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('/noise.jpg')]" />

      {/* ✨ Content */}
      <div className="relative text-center px-6">
        
        {/* Small intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/60 text-sm tracking-[0.3em] uppercase"
        >
          Welcome to
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-4 text-5xl md:text-7xl font-heading tracking-tight text-white"
        >
          TEAL CULTURE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-white/50 text-sm tracking-wide"
        >
          Future-forward architecture & interiors
        </motion.p>
      </div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
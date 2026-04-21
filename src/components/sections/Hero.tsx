"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🎬 Background (optimized) */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="background"
          fill
          priority
          className="object-cover opacity-70 scale-105"
        />
      </div>

      {/* 🎯 Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🌫️ Grain (lighter) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.jpg')] pointer-events-none" />

      {/* ✨ Content */}
      <div className="relative text-center px-6">
        
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/60 text-sm tracking-[0.3em] uppercase"
        >
          Welcome to
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-5xl md:text-7xl font-heading tracking-tight text-white"
        >
          TEAL CULTURE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-white/50 text-sm tracking-wide"
        >
          Future-forward architecture & interiors
        </motion.p>
      </div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="w-[1px] h-10 bg-white/40"
        />
      </motion.div>
      
    </section>
  );
}
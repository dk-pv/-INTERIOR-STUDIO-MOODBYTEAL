"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Soft background gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#f0f0ee,#f7f7f5)]" />
      </div>

      {/* Grain overlay (very subtle now) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/noise.jpg')]" />

      {/* Content */}
      <div className="relative text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading tracking-tight text-foreground"
        >
          TEAL CULTURE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-muted text-sm tracking-wide"
        >
          Future-forward architecture & interiors
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-10 bg-black/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectShowcase from "@/components/sections/WorkGrid";

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current!.querySelectorAll("h1, p"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white text-black">
      {/* ─── HERO SECTION ─── */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-16">
        <div ref={heroRef} className="max-w-5xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Our Work
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A curated selection of spaces designed with precision, emotion, and
            timeless minimalism.
          </p>
        </div>
      </section>

      {/* ─── PROJECT GRID (YOUR COMPONENT) ─── */}
      <ProjectShowcase />

      {/* ─── FOOTER STATEMENT ─── */}
      <section className="py-24 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-medium leading-relaxed max-w-3xl mx-auto">
          Every project is a balance between function, emotion, and spatial
          clarity.
        </h2>
      </section>
    </main>
  );
}

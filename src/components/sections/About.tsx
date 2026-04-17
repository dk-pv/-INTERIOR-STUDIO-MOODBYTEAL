"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { initGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initGSAP();

    const section = sectionRef.current;
    const beam = beamRef.current;
    const content = contentRef.current;

    if (!section || !beam || !content) return;

    // Light beam animation
    gsap.fromTo(
      beam,
      { height: "0%", opacity: 0 },
      {
        height: "100%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    );

    // Content reveal
    gsap.fromTo(
      content,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Light Beam */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          ref={beamRef}
          className="w-[2px] bg-gradient-to-b from-white via-white/30 to-transparent shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative text-center max-w-2xl px-6">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 text-white">
          We Shape Spaces
        </h2>

        <p className="text-white/60 leading-relaxed">
          A design language rooted in contrast, depth, and emotion. We build
          spaces that speak beyond structure — spaces that feel.
        </p>
      </div>
    </section>
  );
}

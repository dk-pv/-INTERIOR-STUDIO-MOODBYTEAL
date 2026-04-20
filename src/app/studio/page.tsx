"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Team from "@/components/sections/Team";

export default function StudioPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white text-black">
      
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16">
        <div ref={heroRef} className="max-w-5xl text-center space-y-6">
          
          <h1 className="fade-up text-5xl md:text-6xl font-semibold leading-tight">
            We design spaces that feel before they function
          </h1>

          <p className="fade-up text-gray-600 text-lg md:text-xl">
            MOODBYTEAL blends emotion, architecture, and minimal luxury.
          </p>

        </div>
      </section>

      <About />
      <Founder />
      <Team />

    </main>
  );
}
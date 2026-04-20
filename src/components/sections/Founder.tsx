"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!sectionRef.current) return;

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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 md:px-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <div className="relative w-full h-[550px] fade-up">
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          <p className="fade-up text-sm tracking-widest text-gray-500">
            FOUNDER
          </p>

          <h2 className="fade-up text-4xl md:text-5xl font-semibold leading-tight">
            Designing beyond <br />
            <span className="text-teal-600">visual boundaries</span>
          </h2>

          <p className="fade-up text-gray-600 text-lg leading-relaxed">
            TEAL Culture was founded with a vision to redefine how spaces are
            experienced.
          </p>

          <p className="fade-up text-gray-500">
            Every project reflects spatial harmony and emotional depth.
          </p>
        </div>
      </div>
    </section>
  );
}
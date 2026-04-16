"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { initGSAP } from "@/lib/gsap";
import { projects } from "@/data/projects";

export default function WorkGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initGSAP();

    const cards = gridRef.current?.querySelectorAll(".card");

    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-heading mb-16">
          Selected Work
        </h2>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="card group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-heading translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mt-1 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const team = [
  { name: "Ameen", role: "Lead Designer", image: "/images/team1.jpg" },
  { name: "Faris", role: "Architect", image: "/images/team2.jpg" },
  { name: "Nihal", role: "3D Artist", image: "/images/team3.jpg" },
  { name: "Rashid", role: "Project Manager", image: "/images/team4.jpg" },
];

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16">Our Team</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <div key={i} className="card group space-y-4">
              <div className="relative w-full h-[260px] overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

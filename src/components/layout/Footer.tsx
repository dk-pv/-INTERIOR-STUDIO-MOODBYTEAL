"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-footer",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-[#f9f8f6] text-black border-t border-[#e8e6e1]">
      
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-3 gap-12"
      >
        
        {/* ─── LEFT: BRAND ─── */}
        <div className="space-y-6 fade-footer">
          <h2 className="text-xl font-semibold tracking-wide">
            MOODBYTEAL
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            We design spaces that balance emotion, function,
            and timeless minimalism.
          </p>
        </div>

        {/* ─── CENTER: NAV ─── */}
        <div className="space-y-6 fade-footer">
          <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Navigation
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <FooterLink href="/" label="Mood" />
            <FooterLink href="/studio" label="Studio" />
            <FooterLink href="/work" label="Work" />
            <FooterLink href="/contact" label="Step In" />
          </div>
        </div>

        {/* ─── RIGHT: CONTACT ─── */}
        <div className="space-y-6 fade-footer">
          <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-600">
            
            <a
              href="mailto:your@email.com"
              className="group relative w-fit"
            >
              your@email.com
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>

            <p>+91 98765 43210</p>
            <p>Kerala, India</p>

          </div>
        </div>

      </div>

      {/* ─── BOTTOM BAR ─── */}
      <div className="border-t border-[#e8e6e1] py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MOODBYTEAL. All rights reserved.
      </div>
    </footer>
  );
}

/* ─── LINK COMPONENT ─── */
function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="group relative w-fit text-gray-600">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
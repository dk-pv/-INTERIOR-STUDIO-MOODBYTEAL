"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useMagnetic } from "@/hooks/useMagnetic";

const links = [
  { name: "Mood", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Work", href: "/work" },
  { name: "Step In", href: "/step-in" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);

  // 🔥 Detect section background
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-theme]");

      let currentTheme = "dark";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          currentTheme = section.getAttribute("data-theme") || "dark";
        }
      });

      setIsLight(currentTheme === "light");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-8 md:px-16">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        style={{
          height: "68px",
          width: "100%",
          maxWidth: "860px",
          borderRadius: "999px",

          // ✅ TRANSPARENT GLASS
          background: isLight ? "rgba(255,255,255,0.6)" : "rgba(20,20,20,0.55)",

          backdropFilter: "blur(16px)",

          border: isLight
            ? "1px solid rgba(0,0,0,0.12)"
            : "1px solid rgba(255,255,255,0.18)",

          boxShadow: isLight
            ? "0 10px 40px rgba(0,0,0,0.08)"
            : "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
        }}
      >
        {links.map((link) => (
          <MagneticLink
            key={link.name}
            href={link.href}
            active={pathname === link.href}
            isLight={isLight}
          >
            {link.name}
          </MagneticLink>
        ))}
      </motion.nav>
    </div>
  );
}



function MagneticLink({
  children,
  href,
  active,
  isLight,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  isLight?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  // ✅ use your hook instead of manual GSAP
  useMagnetic(ref, 0.18); // adjust strength here

  const textColor = isLight ? "text-black" : "text-white";
  const mutedColor = isLight ? "text-black/40" : "text-white/45";
  const underlineColor = isLight ? "bg-black" : "bg-white";

  return (
    <Link
      ref={ref}
      href={href}
      className={`relative group transition-all duration-200 ${
        active ? textColor : `${mutedColor} hover:${textColor}`
      }`}
      style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
      }}
    >
      {children}

      {/* Active underline */}
      {active && (
        <span
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            width: "100%",
            height: "1px",
            background: isLight ? "black" : "white",
          }}
        />
      )}

      {/* Hover underline */}
      {!active && (
        <span
          className={`absolute left-0 -bottom-1.5 w-0 h-px ${underlineColor} group-hover:w-full transition-all duration-300`}
        />
      )}
    </Link>
  );
}
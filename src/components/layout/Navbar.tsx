"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const navLinks = [
  { name: "Mood", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Work", href: "/work" },
];

const CTA_LINK = { name: "Step In", href: "/contact" };


// ✅ PERFORMANCE MAGNETIC (NO GSAP)
function useMagnetic(ref: React.RefObject<HTMLElement | null>, strength = 0.18) {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const y = (e.clientY - (rect.top + rect.height / 2)) * strength;

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const leave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [ref, strength]);
}


// ─── NavLink ─────────────────────────────────────────
function NavLink({ href, children, active, isLight, id, onHover }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.2);

  const activeColor = isLight ? "#000" : "#fff";
  const mutedColor = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.38)";

  return (
    <Link
      ref={ref}
      href={href}
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: active ? activeColor : mutedColor,
        padding: "4px 0",
        whiteSpace: "nowrap",
        cursor: "none",
        transform: "translateZ(0)",
      }}
    >
      {children}

      {active && (
        <motion.span
          layoutId="active-dot"
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 3,
            height: 3,
            borderRadius: "50%",
            backgroundColor: activeColor,
          }}
        />
      )}
    </Link>
  );
}


// ─── CTA ─────────────────────────────────────────
function CtaButton({ isLight }: { isLight: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.22);
  const [hover, setHover] = useState(false);

  return (
    <Link
      ref={ref}
      href={CTA_LINK.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "8px 20px",
        borderRadius: 999,
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        border: isLight ? "1px solid rgba(0,0,0,0.2)" : "1px solid rgba(255,255,255,0.2)",
        color: hover ? (isLight ? "#fff" : "#000") : (isLight ? "#000" : "#fff"),
        background: hover ? (isLight ? "#000" : "#fff") : "transparent",
        transition: "all 0.3s ease",
        cursor: "none",
      }}
    >
      {CTA_LINK.name}
    </Link>
  );
}


// ─── MAIN NAVBAR ─────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const frame = useRef<number | null>(null);

  // ✅ OPTIMIZED SCROLL
  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");

    const onScroll = () => {
      if (frame.current) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        let theme = "dark";

        for (const el of sections) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            theme = el.getAttribute("data-theme") || "dark";
            break;
          }
        }

        setIsLight(theme === "light");
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const bg = isLight
    ? scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.55)"
    : scrolled ? "rgba(14,14,14,0.82)" : "rgba(20,20,20,0.52)";


  return (
    <div
      style={{
        position: "fixed",
        top: 28,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 32px",
      }}
    >
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          height: 60,
          width: "100%",
          maxWidth: 800,
          borderRadius: 999,
          background: bg,
          backdropFilter: "blur(20px)",
          border: isLight
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(255,255,255,0.13)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
        }}
      >
        {/* LINKS */}
        <div style={{ display: "flex", gap: 36 }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
              isLight={isLight}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <CtaButton isLight={isLight} />
      </motion.nav>
    </div>
  );
}
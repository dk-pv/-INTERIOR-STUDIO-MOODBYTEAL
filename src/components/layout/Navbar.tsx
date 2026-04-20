"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Mood", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Work", href: "/work" },
];

const CTA_LINK = { name: "Step In", href: "/step-in" };

function useMagnetic(ref: React.RefObject<HTMLElement | null>, strength = 0.18) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(el, {
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.55)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
}


function NavLink({
  href,
  children,
  active,
  isLight,
  id,
  onHover,
}: {
  href: string;
  children: string;
  active: boolean;
  isLight: boolean;
  id: string;
  onHover: (id: string | null) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.2);

  const activeColor = isLight ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)";
  const mutedColor = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.38)";

  return (
    <Link
      ref={ref}
      href={href}
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: "relative",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: active ? activeColor : mutedColor,
        textDecoration: "none",
        padding: "4px 0",
        transition: "color 0.25s ease",
        whiteSpace: "nowrap",
        cursor: "none",
      }}
    >
      {/* Text with hover clone trick */}
      <span style={{ display: "block", overflow: "hidden" }}>
        <motion.span
          style={{ display: "block" }}
          animate={{ y: 0, opacity: active ? 1 : undefined }}
        >
          {children}
        </motion.span>
      </span>

      {/* Active dot */}
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
            backgroundColor: isLight ? "#000" : "#fff",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

// ─── CTA Button ───────────────────────────────────────────────────────────────
function CtaButton({ isLight }: { isLight: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.22);
  const [hov, setHov] = useState(false);

  return (
    <Link
      ref={ref}
      href={CTA_LINK.href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 20px",
        border: isLight ? "1px solid rgba(0,0,0,0.22)" : "1px solid rgba(255,255,255,0.2)",
        borderRadius: 999,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: isLight ? "#000" : "#fff",
        textDecoration: "none",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
        cursor: "none",
      }}
    >
      {/* Fill sweep */}
      <motion.span
        animate={{ x: hov ? "0%" : "-101%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: isLight ? "#000" : "#fff",
          borderRadius: 999,
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1, transition: "color 0.3s ease", color: hov ? (isLight ? "#fff" : "#000") : (isLight ? "#000" : "#fff") }}>
        {CTA_LINK.name}
      </span>
      {/* Arrow */}
      <motion.span
        animate={{ x: hov ? 2 : 0, opacity: hov ? 1 : 0.5 }}
        transition={{ duration: 0.25 }}
        style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", color: hov ? (isLight ? "#fff" : "#000") : (isLight ? "#000" : "#fff"), transition: "color 0.3s ease" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
        </svg>
      </motion.span>
    </Link>
  );
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function ScrollProgress({ isLight }: { isLight: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      left: 20,
      right: 20,
      height: 1,
      borderRadius: 999,
      backgroundColor: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
      overflow: "hidden",
    }}>
      <motion.div
        style={{
          height: "100%",
          backgroundColor: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)",
          borderRadius: 999,
          transformOrigin: "left",
        }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Detect section theme
  useEffect(() => {
    const detect = () => {
      let found = false;
      let theme = "dark";
      document.querySelectorAll("[data-theme]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (!found && rect.top <= 80 && rect.bottom >= 80) {
          theme = el.getAttribute("data-theme") || "dark";
          found = true;
        }
      });
      setIsLight(theme === "light");
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      detect();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    detect();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hover spotlight
  const [spotStyle, setSpotStyle] = useState<React.CSSProperties>({});
  const handleHover = (id: string | null) => {
    setHoveredId(id);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const parent = el.closest("nav");
    if (!parent) return;
    const elRect = el.getBoundingClientRect();
    const navRect = parent.getBoundingClientRect();
    setSpotStyle({
      left: elRect.left - navRect.left - 12,
      width: elRect.width + 24,
      opacity: 1,
    });
  };

  const bg = isLight
    ? scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.55)"
    : scrolled ? "rgba(14,14,14,0.82)" : "rgba(20,20,20,0.52)";

  const borderCol = isLight
    ? "rgba(0,0,0,0.1)"
    : "rgba(255,255,255,0.13)";

  return (
    <div style={{
      position: "fixed",
      top: 28,
      left: 0,
      right: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "center",
      padding: "0 32px",
    }}>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          height: 60,
          width: "100%",
          maxWidth: 800,
          borderRadius: 999,
          background: bg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${borderCol}`,
          boxShadow: isLight
            ? "0 8px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.8) inset"
            : "0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          overflow: "hidden",
        }}
      >
        {/* ── Hover spotlight pill ── */}
        <motion.div
          animate={{
            left: spotStyle.left ?? 0,
            width: spotStyle.width ?? 0,
            opacity: hoveredId ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: 32,
            borderRadius: 999,
            backgroundColor: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Left: Nav links ── */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            position: "relative",
            zIndex: 1,
          }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <NavLink
                href={link.href}
                active={pathname === link.href}
                isLight={isLight}
                id={`nav-${link.name}`}
                onHover={handleHover}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Right: CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <CtaButton isLight={isLight} />
        </motion.div>

        {/* ── Scroll progress bar ── */}
        <ScrollProgress isLight={isLight} />
      </motion.nav>
    </div>
  );
}
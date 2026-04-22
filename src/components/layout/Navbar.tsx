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

// ─── MAGNETIC HOOK ───────────────────────────────────
function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  strength = 0.18,
) {
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
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref, strength]);
}

// ─── NAV LINK ─────────────────────────────────────────
function NavLink({
  href,
  children,
  active,
  isLight,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  isLight: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.2);

  // On light bg (white sections): dark text. On dark bg: light text.
  const activeColor = isLight ? "#0a0a0a" : "#f5f4f0";
  const mutedColor = isLight ? "rgba(10,10,10,0.38)" : "rgba(245,244,240,0.38)";

  return (
    <Link
      ref={ref}
      href={href}
      style={{
        position: "relative",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: active ? activeColor : mutedColor,
        padding: "4px 0",
        whiteSpace: "nowrap",
        cursor: "pointer",
        transform: "translateZ(0)",
        willChange: "transform",
        transition: "color 0.25s ease",
      }}
    >
      {children}

      {active && (
        <motion.span
          layoutId="active-dot"
          style={{
            position: "absolute",
            bottom: -7,
            left: "50%",
            translateX: "-50%",
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

// ─── CTA BUTTON ───────────────────────────────────────
function CtaButton({ isLight }: { isLight: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.22);
  const [hover, setHover] = useState(false);

  const borderColor = isLight
    ? "rgba(10,10,10,0.22)"
    : "rgba(245,244,240,0.22)";
  const textDefault = isLight ? "#0a0a0a" : "#f5f4f0";
  const textHover = isLight ? "#f5f4f0" : "#0a0a0a";
  const bgHover = isLight ? "#0a0a0a" : "#f5f4f0";

  return (
    <Link
      ref={ref}
      href={CTA_LINK.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "8px 22px",
        borderRadius: 999,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.62rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        border: `1px solid ${borderColor}`,
        color: hover ? textHover : textDefault,
        background: hover ? bgHover : "transparent",
        transition: "all 0.28s ease",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {CTA_LINK.name}
    </Link>
  );
}

// ─── MAIN NAVBAR ──────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-theme]"));

    const onScroll = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled((prev) => (scrollY > 20 !== prev ? scrollY > 20 : prev));

        let theme = "dark";
        for (let i = 0; i < sections.length; i++) {
          const rect = (sections[i] as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            theme = sections[i].getAttribute("data-theme") || "dark";
            break;
          }
        }
        setIsLight((prev) =>
          (theme === "light") !== prev ? theme === "light" : prev,
        );
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // ─ Pill background adapts: white on dark sections, dark on light sections
  const pillBg = isLight
    ? scrolled
      ? "rgba(245,244,240,0.88)" // white pill on light bg, scrolled
      : "rgba(245,244,240,0.65)" // white pill on light bg, top
    : scrolled
      ? "rgba(10,10,10,0.86)" // dark pill on dark bg, scrolled
      : "rgba(10,10,10,0.52)"; // dark pill on dark bg, top

  const pillBorder = isLight
    ? "1px solid rgba(10,10,10,0.10)"
    : "1px solid rgba(245,244,240,0.12)";

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
        pointerEvents: "none",
      }}
    >
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: 58,
          width: "100%",
          maxWidth: 820,
          borderRadius: 999,
          background: pillBg,
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: pillBorder,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
          transform: "translateZ(0)",
          transition: "background 0.35s ease, border-color 0.35s ease",
          pointerEvents: "all",
        }}
      >
        {/* Logo / Brand wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.82rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: isLight ? "#0a0a0a" : "#f5f4f0",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          TC
        </Link>

        {/* Nav links — center */}
        <div style={{ display: "flex", gap: 32 }}>
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

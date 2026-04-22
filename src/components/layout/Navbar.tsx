"use client";

import { motion, AnimatePresence } from "framer-motion";
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

// ─── NAV LINK (desktop) ───────────────────────────────
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

// ─── HAMBURGER ICON ───────────────────────────────────
function Hamburger({
  open,
  isLight,
  onClick,
}: {
  open: boolean;
  isLight: boolean;
  onClick: () => void;
}) {
  const color = isLight ? "#0a0a0a" : "#f5f4f0";

  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
        width: 28,
        height: 28,
        flexShrink: 0,
      }}
    >
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "block",
          width: "100%",
          height: 1,
          backgroundColor: color,
          transformOrigin: "center",
          transition: "background-color 0.3s ease",
        }}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          display: "block",
          width: "70%",
          height: 1,
          backgroundColor: color,
          transition: "background-color 0.3s ease",
        }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "block",
          width: "100%",
          height: 1,
          backgroundColor: color,
          transformOrigin: "center",
          transition: "background-color 0.3s ease",
        }}
      />
    </button>
  );
}

// ─── MOBILE MENU OVERLAY ──────────────────────────────
function MobileMenu({
  open,
  isLight,
  pathname,
  onClose,
  pillBg,
  pillBorder,
}: {
  open: boolean;
  isLight: boolean;
  pathname: string;
  onClose: () => void;
  pillBg: string;
  pillBorder: string;
}) {
  const textColor = isLight ? "#0a0a0a" : "#f5f4f0";
  const mutedColor = isLight ? "rgba(10,10,10,0.35)" : "rgba(245,244,240,0.35)";

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            background: isLight
              ? "rgba(245,244,240,0.97)"
              : "rgba(10,10,10,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 clamp(28px, 8vw, 56px)",
          }}
        >
          {/* Nav links staggered */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: 0.06 + i * 0.07,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.6rem, 10vw, 4rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: pathname === link.href ? textColor : mutedColor,
                    display: "block",
                    fontStyle: pathname === link.href ? "italic" : "normal",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: 1,
              backgroundColor: isLight
                ? "rgba(10,10,10,0.1)"
                : "rgba(245,244,240,0.1)",
              margin: "32px 0",
              transformOrigin: "left",
            }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.32, duration: 0.4 }}
          >
            <Link
              href={CTA_LINK.href}
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: textColor,
              }}
            >
              {CTA_LINK.name}
              <span style={{ opacity: 0.4 }}>→</span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN NAVBAR ──────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const frameRef = useRef<number | null>(null);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const pillBg = isLight
    ? scrolled
      ? "rgba(245,244,240,0.88)"
      : "rgba(245,244,240,0.65)"
    : scrolled
      ? "rgba(10,10,10,0.86)"
      : "rgba(10,10,10,0.52)";

  const pillBorder = isLight
    ? "1px solid rgba(10,10,10,0.10)"
    : "1px solid rgba(245,244,240,0.12)";

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 28,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 clamp(16px, 4vw, 32px)",
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
            padding: "0 clamp(18px, 4vw, 36px)",
            transform: "translateZ(0)",
            transition: "background 0.35s ease, border-color 0.35s ease",
            pointerEvents: "all",
          }}
        >
          {/* Logo */}
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
              flexShrink: 0,
            }}
          >
            TC
          </Link>

          {/* Desktop: nav links + CTA */}
          {!isMobile && (
            <>
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
              <CtaButton isLight={isLight} />
            </>
          )}

          {/* Mobile: hamburger */}
          {isMobile && (
            <Hamburger
              open={menuOpen}
              isLight={isLight}
              onClick={() => setMenuOpen((v) => !v)}
            />
          )}
        </motion.nav>
      </div>

      {/* Mobile fullscreen menu */}
      {isMobile && (
        <MobileMenu
          open={menuOpen}
          isLight={isLight}
          pathname={pathname}
          onClose={() => setMenuOpen(false)}
          pillBg={pillBg}
          pillBorder={pillBorder}
        />
      )}
    </>
  );
}

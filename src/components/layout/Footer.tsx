// "use client";

// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Footer() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".fade-footer",
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.15,
//           duration: 1,
//           ease: "power3.out",
//         }
//       );
//     }, ref);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer className="bg-[#f9f8f6] text-black border-t border-[#e8e6e1]">
      
//       <div
//         ref={ref}
//         className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-3 gap-12"
//       >
        
//         {/* ─── LEFT: BRAND ─── */}
//         <div className="space-y-6 fade-footer">
//           <h2 className="text-xl font-semibold tracking-wide">
//             MOODBYTEAL
//           </h2>

//           <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
//             We design spaces that balance emotion, function,
//             and timeless minimalism.
//           </p>
//         </div>

//         {/* ─── CENTER: NAV ─── */}
//         <div className="space-y-6 fade-footer">
//           <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400">
//             Navigation
//           </h3>

//           <div className="flex flex-col gap-3 text-sm">
//             <FooterLink href="/" label="Mood" />
//             <FooterLink href="/studio" label="Studio" />
//             <FooterLink href="/work" label="Work" />
//             <FooterLink href="/contact" label="Step In" />
//           </div>
//         </div>

//         {/* ─── RIGHT: CONTACT ─── */}
//         <div className="space-y-6 fade-footer">
//           <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400">
//             Contact
//           </h3>

//           <div className="flex flex-col gap-3 text-sm text-gray-600">
            
//             <a
//               href="mailto:your@email.com"
//               className="group relative w-fit"
//             >
//               your@email.com
//               <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
//             </a>

//             <p>+91 98765 43210</p>
//             <p>Kerala, India</p>

//           </div>
//         </div>

//       </div>

//       {/* ─── BOTTOM BAR ─── */}
//       <div className="border-t border-[#e8e6e1] py-6 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} MOODBYTEAL. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// /* ─── LINK COMPONENT ─── */
// function FooterLink({
//   href,
//   label,
// }: {
//   href: string;
//   label: string;
// }) {
//   return (
//     <Link href={href} className="group relative w-fit text-gray-600">
//       {label}
//       <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
//     </Link>
//   );
// }



"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const navLinks = [
  { href: "/", label: "Mood" },
  { href: "/studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Step In" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

// ─── Underline Link ─────────────────────────────────────────
function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        color: "rgba(10,10,10,0.55)",
        cursor: "none",
        transition: "color 0.25s ease",
      }}
      className="footer-link group"
    >
      {label}
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          height: 1,
          width: 0,
          backgroundColor: "#0a0a0a",
          transition: "width 0.3s ease",
        }}
        className="footer-link-line"
      />
    </Link>
  );
}

// ─── MAIN FOOTER ─────────────────────────────────────────────
export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      data-theme="light"
      style={{
        backgroundColor: "#f5f4f0",
        borderTop: "1px solid rgba(10,10,10,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost large text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(6rem, 18vw, 20rem)",
          letterSpacing: "-0.06em",
          color: "rgba(10,10,10,0.04)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        TEAL
      </div>

      {/* Main grid */}
      <div
        ref={ref}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(40px, 5vw, 80px)",
          position: "relative",
        }}
      >
        {/* ─ Brand ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                letterSpacing: "-0.04em",
                color: "#0a0a0a",
                lineHeight: 1.1,
                fontWeight: 400,
              }}
            >
              TEAL
              <br />
              CULTURE
            </p>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(10,10,10,0.42)",
              lineHeight: 1.75,
              maxWidth: 260,
            }}
          >
            We design spaces that balance emotion, function, and timeless materiality.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 22px",
              borderRadius: 999,
              backgroundColor: "#0a0a0a",
              color: "#f5f4f0",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              width: "fit-content",
              cursor: "none",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
          >
            Define Your Space →
          </Link>
        </motion.div>

        {/* ─ Navigation ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
              marginBottom: 8,
            }}
          >
            Pages
          </p>
          {navLinks.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </motion.div>

        {/* ─ Socials ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
              marginBottom: 8,
            }}
          >
            Social
          </p>
          {socials.map((s) => (
            <FooterLink key={s.label} href={s.href} label={s.label} external />
          ))}
        </motion.div>

        {/* ─ Contact ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.3)",
              marginBottom: 8,
            }}
          >
            Contact
          </p>

          <a
            href="mailto:hello@tealculture.in"
            style={{
              fontSize: "0.88rem",
              color: "rgba(10,10,10,0.55)",
              cursor: "none",
              display: "inline-block",
              position: "relative",
            }}
          >
            hello@tealculture.in
          </a>

          <p style={{ fontSize: "0.88rem", color: "rgba(10,10,10,0.4)", lineHeight: 1.6 }}>
            +91 98765 43210
          </p>

          <p style={{ fontSize: "0.88rem", color: "rgba(10,10,10,0.4)" }}>
            Kerala, India
          </p>
        </motion.div>
      </div>

      {/* ─ Bottom bar ─ */}
      <div
        style={{
          borderTop: "1px solid rgba(10,10,10,0.07)",
          padding: "20px clamp(24px, 6vw, 80px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            color: "rgba(10,10,10,0.28)",
          }}
        >
          © {new Date().getFullYear()} TEAL CULTURE. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            color: "rgba(10,10,10,0.2)",
          }}
        >
          moodyTEAL Studio
        </p>
      </div>

      {/* Hover styles via style tag */}
      <style>{`
        .footer-link:hover { color: rgba(10,10,10,0.9) !important; }
        .footer-link:hover .footer-link-line { width: 100% !important; }
      `}</style>
    </footer>
  );
}
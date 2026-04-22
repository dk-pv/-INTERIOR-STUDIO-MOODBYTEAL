// "use client";

// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const navLinks = [
//   { href: "/", label: "Mood" },
//   { href: "/studio", label: "Studio" },
//   { href: "/work", label: "Work" },
//   { href: "/contact", label: "Step In" },
// ];

// const socials = [
//   { label: "Instagram", href: "https://instagram.com" },
//   { label: "Behance", href: "https://behance.net" },
//   { label: "LinkedIn", href: "https://linkedin.com" },
// ];

// // ─── Underline Link ─────────────────────────────────────────
// function FooterLink({
//   href,
//   label,
//   external = false,
// }: {
//   href: string;
//   label: string;
//   external?: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noopener noreferrer" : undefined}
//       style={{
//         position: "relative",
//         display: "inline-block",
//         fontFamily: "var(--font-body)",
//         fontSize: "0.9rem",
//         color: "rgba(10,10,10,0.55)",
//         cursor: "pointer",
//         transition: "color 0.25s ease",
//       }}
//       className="footer-link group"
//     >
//       {label}
//       <span
//         style={{
//           position: "absolute",
//           left: 0,
//           bottom: -2,
//           height: 1,
//           width: 0,
//           backgroundColor: "#0a0a0a",
//           transition: "width 0.3s ease",
//         }}
//         className="footer-link-line"
//       />
//     </Link>
//   );
// }

// // ─── MAIN FOOTER ─────────────────────────────────────────────
// export default function Footer() {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <footer
//       data-theme="light"
//       style={{
//         backgroundColor: "#f5f4f0",
//         borderTop: "1px solid rgba(10,10,10,0.08)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Ghost large text */}
//       <div
//         aria-hidden
//         style={{
//           position: "absolute",
//           bottom: -20,
//           left: "50%",
//           transform: "translateX(-50%)",
//           fontFamily: "var(--font-heading)",
//           fontSize: "clamp(6rem, 18vw, 20rem)",
//           letterSpacing: "-0.06em",
//           color: "rgba(10,10,10,0.04)",
//           whiteSpace: "nowrap",
//           pointerEvents: "none",
//           userSelect: "none",
//           lineHeight: 1,
//         }}
//       >
//         TEAL
//       </div>

//       {/* Main grid */}
//       <div
//         ref={ref}
//         style={{
//           maxWidth: 1280,
//           margin: "0 auto",
//           padding:
//             "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)",
//           display: "grid",
//           gridTemplateColumns: "2fr 1fr 1fr 1fr",
//           gap: "clamp(40px, 5vw, 80px)",
//           position: "relative",
//         }}
//       >
//         {/* ─ Brand ─ */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           style={{ display: "flex", flexDirection: "column", gap: 24 }}
//         >
//           <div>
//             <p
//               style={{
//                 fontFamily: "var(--font-heading)",
//                 fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
//                 letterSpacing: "-0.04em",
//                 color: "#0a0a0a",
//                 lineHeight: 1.1,
//                 fontWeight: 400,
//               }}
//             >
//               TEAL
//               <br />
//               CULTURE
//             </p>
//           </div>

//           <p
//             style={{
//               fontSize: "0.85rem",
//               color: "rgba(10,10,10,0.42)",
//               lineHeight: 1.75,
//               maxWidth: 260,
//             }}
//           >
//             We design spaces that balance emotion, function, and timeless
//             materiality.
//           </p>

//           {/* CTA */}
//           <Link
//             href="/contact"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 10,
//               padding: "10px 22px",
//               borderRadius: 999,
//               backgroundColor: "#0a0a0a",
//               color: "#f5f4f0",
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.6rem",
//               letterSpacing: "0.2em",
//               textTransform: "uppercase",
//               width: "fit-content",
//               cursor: "pointer",
//               transition: "background 0.3s ease, color 0.3s ease",
//             }}
//           >
//             Define Your Space →
//           </Link>
//         </motion.div>

//         {/* ─ Navigation ─ */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//           style={{ display: "flex", flexDirection: "column", gap: 16 }}
//         >
//           <p
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.58rem",
//               letterSpacing: "0.28em",
//               textTransform: "uppercase",
//               color: "rgba(10,10,10,0.3)",
//               marginBottom: 8,
//             }}
//           >
//             Pages
//           </p>
//           {navLinks.map((link) => (
//             <FooterLink key={link.href} href={link.href} label={link.label} />
//           ))}
//         </motion.div>

//         {/* ─ Socials ─ */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//           style={{ display: "flex", flexDirection: "column", gap: 16 }}
//         >
//           <p
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.58rem",
//               letterSpacing: "0.28em",
//               textTransform: "uppercase",
//               color: "rgba(10,10,10,0.3)",
//               marginBottom: 8,
//             }}
//           >
//             Social
//           </p>
//           {socials.map((s) => (
//             <FooterLink key={s.label} href={s.href} label={s.label} external />
//           ))}
//         </motion.div>

//         {/* ─ Contact ─ */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           style={{ display: "flex", flexDirection: "column", gap: 16 }}
//         >
//           <p
//             style={{
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "0.58rem",
//               letterSpacing: "0.28em",
//               textTransform: "uppercase",
//               color: "rgba(10,10,10,0.3)",
//               marginBottom: 8,
//             }}
//           >
//             Contact
//           </p>

//           <a
//             href="mailto:hello@tealculture.in"
//             style={{
//               fontSize: "0.88rem",
//               color: "rgba(10,10,10,0.55)",
//               cursor: "pointer",
//               display: "inline-block",
//               position: "relative",
//             }}
//           >
//             hello@tealculture.in
//           </a>

//           <p
//             style={{
//               fontSize: "0.88rem",
//               color: "rgba(10,10,10,0.4)",
//               lineHeight: 1.6,
//             }}
//           >
//             +91 98765 43210
//           </p>

//           <p style={{ fontSize: "0.88rem", color: "rgba(10,10,10,0.4)" }}>
//             Kerala, India
//           </p>
//         </motion.div>
//       </div>

//       {/* ─ Bottom bar ─ */}
//       <div
//         style={{
//           borderTop: "1px solid rgba(10,10,10,0.07)",
//           padding: "20px clamp(24px, 6vw, 80px)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: 12,
//           position: "relative",
//         }}
//       >
//         <p
//           style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: "0.58rem",
//             letterSpacing: "0.18em",
//             color: "rgba(10,10,10,0.28)",
//           }}
//         >
//           © {new Date().getFullYear()} TEAL CULTURE. All rights reserved.
//         </p>
//         <p
//           style={{
//             fontFamily: "'DM Mono', monospace",
//             fontSize: "0.58rem",
//             letterSpacing: "0.18em",
//             color: "rgba(10,10,10,0.2)",
//           }}
//         >
//           moodyTEAL Studio
//         </p>
//       </div>

//       {/* Hover styles via style tag */}
//       <style>{`
//         .footer-link:hover { color: rgba(10,10,10,0.9) !important; }
//         .footer-link:hover .footer-link-line { width: 100% !important; }
//       `}</style>
//     </footer>
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
function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
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
        cursor: "pointer",
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
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding:
            "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)",
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
            We design spaces that balance emotion, function, and timeless
            materiality.
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
              cursor: "pointer",
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
              cursor: "pointer",
              display: "inline-block",
              position: "relative",
            }}
          >
            hello@tealculture.in
          </a>

          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(10,10,10,0.4)",
              lineHeight: 1.6,
            }}
          >
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

      {/* Hover + Responsive styles */}
      <style>{`
        .footer-link:hover { color: rgba(10,10,10,0.9) !important; }
        .footer-link:hover .footer-link-line { width: 100% !important; }

        /* ── Tablet: 2-column layout ── */
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px 40px !important;
          }
        }

        /* ── Mobile: single column ── */
        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
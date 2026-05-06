"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const socials = [
  {
    label: "Behance",
    href: "https://behance.net",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.247 1.98 1.202 2.441.738.356 1.743.199 2.553-.31zm-5.188-4h3.485c-.091-1.256-.748-1.742-1.703-1.742-.968 0-1.615.491-1.782 1.742zM7.824 12.335c1.07-.292 1.769-1.178 1.769-2.197 0-1.791-1.317-3.138-3.568-3.138H0v11h6.222c2.337 0 3.994-1.398 3.994-3.439 0-1.244-.556-2.116-2.392-2.226zM2.569 9h3.029c.73 0 1.274.491 1.274 1.16 0 .671-.543 1.163-1.274 1.163H2.569V9zm3.364 6H2.569v-2.427h3.364c.821 0 1.388.524 1.388 1.214C7.321 14.476 6.754 15 5.933 15z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      style={{
        backgroundColor: "#060606",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Starfield ── */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {[
          [8, 18],
          [22, 8],
          [40, 22],
          [60, 10],
          [76, 28],
          [90, 14],
          [94, 44],
          [84, 60],
          [70, 78],
          [52, 88],
          [32, 82],
          [16, 64],
          [4, 46],
          [20, 92],
          [46, 96],
          [68, 84],
          [80, 44],
          [95, 70],
          [36, 40],
          [62, 55],
          [26, 58],
          [50, 28],
          [72, 18],
          [88, 82],
          [12, 78],
          [46, 68],
          [82, 34],
          [16, 34],
          [60, 72],
          [92, 54],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: i % 6 === 0 ? 2 : 1,
              height: i % 6 === 0 ? 2 : 1,
              borderRadius: "50%",
              backgroundColor: `rgba(255,255,255,${0.07 + (i % 5) * 0.05})`,
            }}
          />
        ))}
        {/* warm glow behind ring */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 320,
            height: 220,
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255,110,0,0.09) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          MAIN 3-COLUMN ROW
      ══════════════════════════════════════ */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="tc-footer-3col"
      >
        {/* ── COL 1: Contact card ── */}
        <div className="tc-col-left">
          <div className="tc-contact-card">
            {/* Icons row */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              {/* Phone icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {/* WhatsApp icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.38)"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <a href="tel:+971502685369" className="tc-phone">
              +971 50 268 5369
            </a>

            <div className="tc-divider" />

            {/* Mail icon */}
            <div style={{ marginBottom: 8 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <a href="mailto:hello@moodbyteal.com" className="tc-email">
              hello@moodbyteal.com
            </a>
          </div>
        </div>

        {/* ── COL 2: Fire ring (center) ── */}
        <div className="tc-col-center">
          {/* Fire ring */}
          <div className="tc-fire-wrap" aria-hidden>
            <div className="tc-ring-arc tc-arc-1" />
            <div className="tc-ring-arc tc-arc-2" />
            <div className="tc-ring-arc tc-arc-3" />
            <div className="tc-ring-arc tc-arc-4" />
            <div className="tc-ring-glow" />
            <div className="tc-ring-label">THIS IS US</div>
          </div>
          {/* GET IN TOUCH */}
          <p className="tc-git-label">GET IN TOUCH</p>
        </div>

        {/* ── COL 3: Address + socials ── */}
        <div className="tc-col-right">
          <p className="tc-address-en">
            Dubai,
            <br />
            United Arab Emirates
          </p>

          <div className="tc-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="tc-soc-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <div className="tc-bottom-bar">
        <div className="tc-bottom-left">
          <Image
            src="/logo-white.png"
            alt="moodyTEAL"
            width={90}
            height={24}
            style={{ opacity: 0.9 }}
          />
        </div>

        <div className="tc-bottom-center">
          © {new Date().getFullYear()} TEALCULTURE — All rights reserved
        </div>

        <div className="tc-bottom-right">moodyTEAL Studio</div>
      </div>

      {/* ══ STYLES ══ */}
      <style>{`
        * { box-sizing: border-box; }

        /* ─── 3-col layout ─── */
        .tc-footer-3col {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: none;
          padding:  24px clamp(28px, 5vw, 96px) 14px;
          position: relative;
        }

        /* push edges */
        .tc-col-left {
          display: flex;
          flex-direction: column;
          justify-self: start;
          padding-left: clamp(0px, 2vw, 24px);
        }

        .tc-col-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          justify-self: center;
        }

        .tc-col-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          gap: 7px;
          justify-self: end;
          padding-right: clamp(0px, 2vw, 24px);
        }

        /* ─── LEFT column ─── */
        .tc-contact-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          display: flex;
          flex-direction: column;
        }
          
        .tc-phone {
          display: block;
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 1rem;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.06em;
          text-decoration: none;
          margin-bottom: 4px;
          transition: color 0.2s;
        }
        .tc-phone:hover { color: #ffaa33; }
        .tc-divider {
          width: 100%;
          height: 0.5px;
          background: rgba(255,255,255,0.09);
          margin: 8px 0;
        }
        .tc-email {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s;
        }
        .tc-email:hover { color: #ffaa33; }

        /* ─── CENTER column ─── */
        .tc-col-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .tc-fire-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tc-ring-arc {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: solid transparent;
        }
        .tc-arc-1 {
          border-width: 8px;
          border-top-color: #ff8c00;
          border-right-color: #ff5500;
          border-bottom-color: rgba(255,80,0,0.15);
          border-left-color: #ffa500;
          animation: tcSpin 2.6s linear infinite;
          filter: blur(0.4px);
        }
        .tc-arc-2 {
          inset: 9px;
          border-width: 5px;
          border-top-color: transparent;
          border-right-color: #ffcc44;
          border-bottom-color: #ff9900;
          border-left-color: transparent;
          animation: tcSpinR 3.4s linear infinite;
          filter: blur(0.4px);
        }
        .tc-arc-3 {
          inset: -7px;
          border-width: 3px;
          border-top-color: rgba(255,120,0,0.35);
          border-right-color: transparent;
          border-bottom-color: rgba(255,70,0,0.25);
          border-left-color: rgba(255,150,0,0.18);
          animation: tcSpin 4s linear infinite reverse;
          filter: blur(2px);
        }
        .tc-arc-4 {
          inset: 3px;
          border-width: 3px;
          border-top-color: rgba(255,245,130,0.95);
          border-right-color: transparent;
          border-bottom-color: transparent;
          border-left-color: rgba(255,200,60,0.45);
          animation: tcSpinR 1.8s linear infinite;
        }
        .tc-ring-glow {
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,100,0,0.13) 0%, transparent 68%);
          animation: tcPulse 2.2s ease-in-out infinite alternate;
        }
        .tc-ring-label {
          position: relative;
          z-index: 2;
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.55rem;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.75);
          text-transform: uppercase;
          text-align: center;
        }
        .tc-git-label {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.5rem;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
          text-align: center;
          margin: 0;
        }

        @keyframes tcSpin  { to { transform: rotate(360deg); } }
        @keyframes tcSpinR { to { transform: rotate(-360deg); } }
        @keyframes tcPulse {
          from { opacity: 0.55; transform: scale(0.94); }
          to   { opacity: 1;    transform: scale(1.06); }
        }

        /* ─── RIGHT column ─── */
        .tc-col-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          gap: 5px;
        }
        .tc-address-en {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.8;
          letter-spacing: 0.04em;
          margin: 0;
        }
        .tc-address-ar {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.62rem;
          color: rgba(255,255,255,0.18);
          line-height: 1.7;
          direction: rtl;
          margin: 0;
        }
        .tc-www {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.1em;
          text-decoration: none;
          margin-top: 2px;
          transition: color 0.2s;
        }
        .tc-www:hover { color: rgba(255,255,255,0.65); }
        .tc-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin-top: 4px;
        }

        .tc-bottom-left,
        .tc-bottom-center,
        .tc-bottom-right {
          line-height: 1.2;
        }
        .tc-soc-icon {
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .tc-soc-icon:hover { color: rgba(255,160,0,0.9); }

        /* ─── Bottom bar ─── */
        .tc-bottom-bar {
          border-top: 0.5px solid rgba(255,255,255,0.06);
           padding: 4px clamp(20px, 4vw, 40px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
          position: relative;
        }
        .tc-bottom-left,
        .tc-bottom-center,
        .tc-bottom-right {
          font-family: 'DM Mono','Courier New',monospace;
          font-size: 0.5rem;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
        }

        /* ─── Responsive ─── */
        @media (max-width: 820px) {
          .tc-footer-3col {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 24px;
            padding-bottom: 16px;
          }
          .tc-col-left  { width: 100%; max-width: 380px; }
          .tc-col-right { align-items: center; text-align: center; width: 100%; max-width: 380px; }
          .tc-address-ar { direction: ltr; text-align: center; }
          .tc-socials { justify-content: center; }
        }
      `}</style>
    </footer>
  );
}

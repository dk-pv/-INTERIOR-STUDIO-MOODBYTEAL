"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Mood", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Work", href: "/work" },
  { name: "Step In", href: "/step-in" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-heading text-lg tracking-wide">
          TEAL
        </Link>

        {/* Links */}
        <nav className="flex gap-8 text-sm">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="relative group">
              {link.name}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
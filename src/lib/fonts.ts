import { Playfair_Display, Inter } from "next/font/google";

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap", // ✅ prevents layout shift
});

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap", // ✅ important
});
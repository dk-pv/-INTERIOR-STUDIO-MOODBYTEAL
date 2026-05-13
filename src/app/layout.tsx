import type { Metadata } from "next";
import "./globals.css";

import { headingFont, bodyFont } from "@/lib/fonts";

import PageTransition from "@/components/layout/PageTransition";
import IntroLoader from "@/components/layout/IntroLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/layout/WhatsappFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://moodbyteal.com"),

  title: {
    default: "MoodByteal | Luxury Interior Design Studio UAE",
    template: "%s | MoodByteal UAE",
  },

  description:
    "MoodByteal is a UAE-based luxury interior design studio specializing in villa interiors, apartment interiors, commercial spaces, and modern cinematic living environments.",

  keywords: [
    "Interior Design UAE",
    "Luxury Interior Design Dubai",
    "Villa Interior UAE",
    "Commercial Interior Dubai",
    "Apartment Interior Design UAE",
    "Modern Interior Studio UAE",
    "MoodByteal",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "MoodByteal | Luxury Interior Design Studio UAE",

    description:
      "Premium UAE interior design studio creating cinematic residential and commercial spaces.",

    url: "https://moodbyteal.com",

    siteName: "MoodByteal",

    locale: "en_US",

    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <IntroLoader>
          <Navbar />
          <WhatsappFloat />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </IntroLoader>
      </body>
    </html>
  );
}
"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = initLenis();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
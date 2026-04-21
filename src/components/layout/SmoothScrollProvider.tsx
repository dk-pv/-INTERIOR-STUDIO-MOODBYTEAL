"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.innerWidth < 768) return; // 🔥 disable mobile

    import("@/lib/lenis").then(({ initLenis }) => {
      const lenis = initLenis();

      return () => {
        lenis?.destroy();
      };
    });
  }, []);

  return <>{children}</>;
}
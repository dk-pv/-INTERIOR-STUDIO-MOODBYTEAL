"use client";

import { useEffect, useState } from "react";

export default function IntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 🔥 reduced from 2500 → 800

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
        <h1 className="text-lg font-heading">Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
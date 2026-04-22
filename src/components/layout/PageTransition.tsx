"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.45,
          ease: EXPO,
        }}
      >
        {/* Page wipe overlay — slides down on enter, covers on exit */}
        <motion.div
          key={pathname + "-wipe"}
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 0, transformOrigin: "top" }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 0.55, ease: EXPO }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#f5f4f0",
            zIndex: 100,
            pointerEvents: "none",
          }}
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}

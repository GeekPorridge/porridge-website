"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const AnimatePresenceLayout = ({ children, className }: Props) => {
  return (
    <main className="grow">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : "page"}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`px-6 md:px-12 py-12 md:py-20 mx-auto max-w-7xl ${className}`}
      >
        {children}
      </motion.div>
    </main>
  );
};

export default AnimatePresenceLayout;

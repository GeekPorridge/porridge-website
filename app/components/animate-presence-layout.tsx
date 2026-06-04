"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const AnimatePresenceLayout = ({ children, className }: Props) => {
  return (
    <main className="grow">
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`px-6 md:px-12 py-12 md:py-20 mx-auto max-w-7xl ${className}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default AnimatePresenceLayout;

"use client";

import { motion } from "motion/react";

type HeroSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const HeroSubtitle = ({
  children,
  className = "font-mono text-xs tracking-[0.25em] uppercase text-brand-accent",
  delay = 0.1,
}: HeroSubtitleProps) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export default HeroSubtitle;

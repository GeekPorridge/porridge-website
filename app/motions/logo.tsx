"use client";

import { motion } from "motion/react";
import Link from "next/link";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <Link
        href="/"
        className="font-serif text-2xl font-bold tracking-[0.15em] text-brand-dark transition-opacity hover:opacity-85 cursor-pointer"
      >
        GeekPorridge
      </Link>
    </motion.div>
  );
};

export default Logo;

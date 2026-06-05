"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const FadeInRight = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block"
    >
      <button
        type="button"
        className="group relative flex items-center space-x-1.5 overflow-hidden rounded-full border border-brand-dark/80 px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-dark hover:text-brand-beige cursor-pointer"
      >
        <span>{t("hireMe")}</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.div>
  );
};

export default FadeInRight;

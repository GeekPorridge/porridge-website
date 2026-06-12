"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../components/language-switcher";
import ThemeToggle from "../components/theme-toggle";

const FadeInRight = () => {
  const t = useTranslations();

  return (
    <div className="hidden md:flex items-center space-x-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-bone/50 bg-brand-bone/20 text-brand-dark hover:border-brand-accent hover:bg-brand-bone/50 transition-all cursor-pointer"
        aria-label="Toggle Light/Dark Theme"
      >
        <ThemeToggle />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-bone/50 bg-brand-bone/20 text-brand-dark hover:border-brand-accent hover:bg-brand-bone/50 transition-all cursor-pointer"
        aria-label="Toggle Light/Dark Theme"
      >
        <LanguageSwitcher />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block"
      >
        <Link
          href="/contact"
          type="button"
          className="group relative flex items-center space-x-1.5 overflow-hidden rounded-full border border-brand-dark/80 px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-dark hover:text-brand-beige cursor-pointer"
        >
          <span>{t("hireMe")}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FadeInRight;

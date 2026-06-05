"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations();

  const navItems = [
    { id: "about", label: t("about") },
    { id: "contact", label: t("contact") },
  ] as const;

  return (
    <nav className="hidden items-center space-x-10 md:flex">
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          //   onClick={() => setView(item.id)}
          text-brand-accent
          className="relative py-2 font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors  text-brand-dark/60 hover:text-brand-dark"
          // text-brand-accent
          // 后续条件判断
        >
          {item.label}
          <motion.span
            layoutId="activeNavIndicator"
            className="absolute bottom-0 left-0 h-[1.5px] w-full bg-brand-accent"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        </motion.button>
      ))}
    </nav>
  );
};

export default Nav;

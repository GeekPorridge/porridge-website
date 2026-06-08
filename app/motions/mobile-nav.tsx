"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../components/language-switcher";
import ThemeToggle from "./theme-toggle";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const navItems = [
    { id: "about", label: t("about"), href: "/" },
    { id: "portfolio", label: t("portfolio"), href: "/portfolio" },
    { id: "contact", label: t("contact"), href: "/contact" },
  ] as const;

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-brand-dark hover:bg-brand-bone/40 focus:outline-none cursor-pointer"
          aria-label={isOpen ? "Close menu" : t("toggleMenu")}
        >
          {isOpen ? (
            <X className="h-6 w-6 cursor-pointer" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              onClick={close}
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 right-0 top-20 z-50 border border-brand-bone/60 bg-brand-beige px-6 py-6 shadow-xl md:hidden"
            >
              <nav className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-xl py-3.5 font-serif text-xl text-brand-dark hover:bg-brand-bone/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-brand-bone/50">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center space-x-6"
                >
                  <ThemeToggle />
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

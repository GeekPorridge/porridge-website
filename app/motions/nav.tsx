"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Nav = () => {
  const t = useTranslations();

  const navItems = [
    { id: "about", label: t("about"), href: "/" },
    { id: "portfolio", label: t("portfolio"), href: "/portfolio" },
    { id: "contact", label: t("contact"), href: "/contact" },
  ] as const;

  return (
    <nav className="hidden items-center space-x-10 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="relative py-2 font-mono text-xs tracking-widest uppercase transition-colors text-brand-dark/60 hover:text-brand-dark"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

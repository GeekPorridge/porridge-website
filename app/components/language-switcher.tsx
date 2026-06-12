"use client";

import { useLocale } from "next-intl";
import { routing, usePathname } from "@/i18n/routing";
import { setCookie } from "@/lib/cookie";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "zh" : "en";

    // Compute the correct target URL with the appropriate locale prefix
    const isDefaultLocale = nextLocale === routing.defaultLocale;
    const targetPath = isDefaultLocale
      ? pathname
      : `/${nextLocale}${pathname === "/" ? "" : pathname}`;

    // Set the locale cookie before hard navigation so the server-side proxy
    // can read it and correctly determine the [locale] segment value
    setCookie("NEXT_LOCALE", nextLocale, {
      path: "/",
      maxAge: 31536000,
      sameSite: "Lax",
    });
    window.location.href = targetPath;
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="font-mono text-xs tracking-widest uppercase text-brand-dark/60 transition-colors hover:text-brand-accent cursor-pointer"
      aria-label={`Switch to ${locale === "en" ? "中文" : "English"}`}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;

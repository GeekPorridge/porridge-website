"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "zh" : "en";
    router.replace(pathname, { locale: nextLocale });
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

import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

const GlobalNotFound = async () => {
  let locale: string;
  try {
    locale = await getLocale();
  } catch {
    locale = "en";
  }

  const t = await getTranslations({ locale });

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-6">
      <span className="font-serif text-[8rem] sm:text-[10rem] font-light leading-none text-brand-accent/30">
        404
      </span>
      <div className="space-y-3 max-w-md">
        <h1 className="font-serif text-3xl sm:text-4xl font-light text-brand-dark">
          {t("notFoundTitle")}
        </h1>
        <p className="font-sans text-sm text-brand-dark/60 leading-relaxed">
          {t("notFoundDescription")}
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center space-x-2 rounded-full bg-brand-dark text-brand-beige px-8 py-3.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark"
      >
        {t("notFoundCta")}
      </Link>
    </div>
  );
};

export default GlobalNotFound;

import type { TFunc } from "@/app/type";
import { Link } from "@/i18n/routing";

const Footer = async ({ t }: { t: TFunc }) => {
  return (
    <footer className=" bg-brand-beige">
      <div className="mx-auto border-t border-brand-bone/45 max-w-7xl px-6 py-12 md:px-12 md:py-16 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold tracking-[0.2em]">
              {t("footer.brand")}
            </span>
            <p className="font-mono text-[9px] tracking-wider text-brand-dark/45 uppercase mt-1">
              {t("footer.tagline")}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-widest">
            <Link
              href="/contact"
              className="text-brand-dark/50 hover:text-brand-dark transition-colors"
            >
              {t("footer.nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-brand-dark/40 gap-4">
          <div>
            <span>
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{t("footer.location")}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>{t("footer.tech")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import type { TFunc } from "@/app/types";

const Footer = async ({ t }: { t: TFunc }) => {
  return (
    <footer className=" bg-brand-beige">
      <div className="mx-auto border-t border-brand-bone/45 max-w-7xl px-6 py-12 md:px-12 md:py-16 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-center text-xl font-bold tracking-[0.2em]">
              {t("footerBrand")}
            </p>
            <p className="font-mono text-[9px] tracking-wider text-brand-dark/45 uppercase mt-1">
              {t("footerTagline")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-[10px] font-mono text-brand-dark/40 gap-4">
          <div>
            <span>
              {t("footerCopyright", { year: new Date().getFullYear() })}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{t("footerLocation")}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>{t("footerTech")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

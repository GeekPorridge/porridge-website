import type { TFunc } from "@/app/type";

const Footer = async ({ t }: { t: TFunc }) => {
  const footerLinks = [
    {
      group: t("navigation"),
      items: [
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      group: t("social"),
      items: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
      ],
    },
  ] as const;

  return (
    <footer className="bg-surface-paper">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-xl font-semibold tracking-[0.1em] text-ink">
              PORRIDGE
            </span>
            <p className="max-w-56 text-body-md text-text-secondary">
              {t("tagline")}
            </p>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.group} className="flex flex-col gap-4">
              <span className="text-label-caps uppercase tracking-[0.15em] text-text-secondary">
                {group.group}
              </span>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-md text-ink transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/30 pt-6 md:flex-row md:pt-8">
          <span className="text-label-caps uppercase tracking-[0.15em] text-text-secondary">
            {t("rights", { year: new Date().getFullYear() })}
          </span>
          <span className="text-label-caps uppercase tracking-[0.15em] text-text-secondary">
            {t("crafted")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use server";

import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimatePresenceLayout from "@/app/components/animate-presence-layout";
import PortfolioShowcase from "@/app/components/ben-to-grid";

type Props = {
  params: Promise<{ locale: string }>;
};

const Portfolio = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const projects = {
    filters: {
      all: t("projectFilterAll"),
      saas: t("projectFilterSaas"),
      ecommerce: t("projectFilterEcommerce"),
      gaming: t("projectFilterGaming"),
    },
    items: [
      {
        id: t("scriboId"),
        title: t("scriboTitle"),
        subtitle: t("scriboSubtitle"),
        category: t("scriboCategory"),
        year: t("scriboYear"),
        colSpan: t("scriboColSpan"),
        tags: [
          t("scriboTag0"),
          t("scriboTag1"),
          t("scriboTag2"),
          t("scriboTag3"),
          t("scriboTag4"),
          t("scriboTag5"),
        ],
        description: t("scriboDescription"),
        highlights: [
          t("scriboHighlight0"),
          t("scriboHighlight1"),
          t("scriboHighlight2"),
        ],
      },
      {
        id: t("buffbuffId"),
        title: t("buffbuffTitle"),
        subtitle: t("buffbuffSubtitle"),
        category: t("buffbuffCategory"),
        year: t("buffbuffYear"),
        colSpan: t("buffbuffColSpan"),
        tags: [
          t("buffbuffTag0"),
          t("buffbuffTag1"),
          t("buffbuffTag2"),
          t("buffbuffTag3"),
          t("buffbuffTag4"),
        ],
        description: t("buffbuffDescription"),
        highlights: [
          t("buffbuffHighlight0"),
          t("buffbuffHighlight1"),
          t("buffbuffHighlight2"),
        ],
      },
      {
        id: t("deltaforceId"),
        title: t("deltaforceTitle"),
        subtitle: t("deltaforceSubtitle"),
        category: t("deltaforceCategory"),
        year: t("deltaforceYear"),
        colSpan: t("deltaforceColSpan"),
        tags: [
          t("deltaforceTag0"),
          t("deltaforceTag1"),
          t("deltaforceTag2"),
          t("deltaforceTag3"),
          t("deltaforceTag4"),
        ],
        description: t("deltaforceDescription"),
        highlights: [
          t("deltaforceHighlight0"),
          t("deltaforceHighlight1"),
          t("deltaforceHighlight2"),
        ],
      },
      {
        id: t("adminId"),
        title: t("adminTitle"),
        subtitle: t("adminSubtitle"),
        category: t("adminCategory"),
        year: t("adminYear"),
        colSpan: t("adminColSpan"),
        tags: [t("adminTag0"), t("adminTag1"), t("adminTag2"), t("adminTag3")],
        description: t("adminDescription"),
        highlights: [
          t("adminHighlight0"),
          t("adminHighlight1"),
          t("adminHighlight2"),
        ],
      },
    ],
  };

  // Sort by year descending (e.g. "2023-2025" > "2024" > "2021")
  projects.items.sort((a, b) => {
    const lastYear = (y: string) => parseInt(y.split("-").at(-1) ?? y, 10);
    return lastYear(b.year) - lastYear(a.year);
  });

  const uniqueCategories = new Set(projects.items.map((p) => p.category));
  const uniqueTech = new Set(projects.items.flatMap((p) => p.tags));

  const stats = {
    projects: projects.items.length,
    categories: uniqueCategories.size,
    technologies: uniqueTech.size,
  };

  const statsLabels = {
    projects: t("portfolioStatsProjects"),
    categories: t("portfolioStatsCategories"),
    technologies: t("portfolioStatsTech"),
  };

  return (
    <AnimatePresenceLayout>
      {/* Hero header */}
      <section className="relative mb-16 md:mb-24 pt-2 mt-10">
        {/* Decorative radial glow */}
        <div
          className="absolute -top-56 -left-32 w-175 h-175 rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent mb-8">
          <span className="w-6 h-px bg-brand-accent/40" />
          {t("portfolioLabel")}
          <span className="w-6 h-px bg-brand-accent/40" />
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-brand-dark max-w-4xl leading-[0.92]">
          {t("portfolioTitle")}
        </h1>

        <p className="font-sans text-base sm:text-lg text-brand-dark/45 max-w-xl mt-8 leading-relaxed">
          {t("portfolioDescription")}
        </p>
      </section>

      {/* Stats bar + Project showcase */}
      <PortfolioShowcase
        projects={projects}
        stats={stats}
        statsLabels={statsLabels}
      />
    </AnimatePresenceLayout>
  );
};

export default Portfolio;

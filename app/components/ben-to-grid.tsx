"use client";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  colSpan: string;
  tags: string[];
  description: string;
  highlights: string[];
};

type ProjectsData = {
  label: string;
  heading: string;
  filters: Record<string, string>;
  items: Project[];
};

const BentoGrid = ({ projects }: { projects: ProjectsData }) => {
  const filterKeys = Object.keys(projects.filters) as Array<
    keyof typeof projects.filters
  >;
  const [activeFilter, setActiveFilter] = useState<string>(filterKeys[0]);

  const filteredProjects = projects.items.filter((proj) => {
    if (activeFilter === "all") return true;
    const filterLabel = projects.filters[activeFilter];
    return proj.category === filterLabel;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-brand-bone/40 pb-6">
        <div>
          <span className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-widest block mb-1">
            {projects.label}
          </span>
          <h2 className="font-serif text-2xl font-light tracking-tight text-brand-dark">
            {projects.heading}
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest">
          {filterKeys.map((key) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                type="button"
                id={`filter-button-${key}`}
                onClick={() => setActiveFilter(key)}
                className={`relative px-4 py-2 rounded-full cursor-pointer transition-colors ${
                  isActive
                    ? "text-brand-beige"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBackdrop"
                    className="absolute inset-0 z-0 rounded-full bg-brand-dark"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{projects.filters[key]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        id="project-bento-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-bone/30 border border-brand-bone/60 p-5 cursor-pointer hover:border-brand-accent ${
                  project.colSpan || ""
                } transition-all duration-500 hover:shadow-lg`}
              >
                {/* Card Top Information */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/50">
                    {project.category} / {project.year}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-beige border border-brand-dark/5 text-brand-dark transition-all duration-300 group-hover:bg-brand-dark group-hover:text-brand-beige">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Main Visual Image */}
                <div className="relative w-full overflow-hidden rounded-xl bg-brand-bone aspect-video md:aspect-auto md:flex-grow mb-5">
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Bottom Meta */}
                <div className="relative z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-brand-dark mt-1 group-hover:text-brand-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-brand-dark/60 mt-1 lines-clamp-2 leading-relaxed h-10 overflow-hidden text-ellipsis">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-brand-bone/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags.slice(0, 2).map((t: string) => (
                      <span
                        key={t}
                        className="font-mono text-[8px] text-brand-dark/50 bg-brand-bone px-2 py-0.5 rounded uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BentoGrid;

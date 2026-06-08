"use client";

import dayjs from "dayjs";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  colSpan: string;
  tags: string[];
  description: string;
  highlights: string[];
};

type ProjectsData = {
  filters: Record<string, string>;
  items: Project[];
};

type Stats = {
  projects: number;
  categories: number;
  technologies: number;
};

type StatsLabels = {
  projects: string;
  categories: string;
  technologies: string;
};

const PROJECT_IMAGES: Record<string, string> = {
  scribo: "/scribo.png",
  buffbuff: "/buffbuff.png",
  deltaforce: "/deltaforcetools.png",
  admin: "/system.png",
};

const PROJECT_URLS: Record<string, string> = {
  scribo: "https://www.scribo.com.hk/",
  buffbuff: "https://buffbuff.com/",
  deltaforce: "https://deltaforcetools.gg/",
  admin: "https://react-admin-blond-delta.vercel.app/",
};

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
  category: string;
}) {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className="object-contain transition-transform group-hover:scale-[1.04] duration-1000"
    />
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = PROJECT_URLS[project.id];

  return (
    <motion.a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-brand-bone/20 border border-brand-bone/50 cursor-pointer hover:shadow-xl hover:border-brand-accent/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative w-full aspect-16/10 overflow-hidden">
        <ProjectImage
          src={PROJECT_IMAGES[project.id] ?? ""}
          alt={project.title}
          category={project.category}
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-brand-dark text-brand-beige">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-brand-dark/30 tracking-widest">
              {project.year
                .split("-")
                .map((y) => dayjs(y, "YYYY").format("YYYY"))
                .join(" - ")}
            </span>
          </div>
          {href && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-beige border border-brand-dark/5 text-brand-dark transition-all duration-300 group-hover:bg-brand-dark group-hover:text-brand-beige">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-brand-dark group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-brand-dark/55 mt-3 leading-relaxed">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 font-sans text-xs sm:text-sm text-brand-dark/65"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent/60 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] text-brand-dark/40 bg-brand-bone/50 px-2.5 py-1 rounded uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

const PortfolioShowcase = ({
  projects,
}: {
  projects: ProjectsData;
  stats: Stats;
  statsLabels: StatsLabels;
}) => {
  return (
    <div className="space-y-20">
      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 auto-rows-auto"
      >
        <AnimatePresence mode="popLayout">
          {projects.items.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioShowcase;

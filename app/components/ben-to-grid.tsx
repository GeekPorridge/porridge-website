"use client";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PROJECTS: any[] = [
  {
    id: "lumina",
    title: "Lumina Digital Experience",
    subtitle: "High-end interactive digital identity & 3D space architecture",
    category: "Digital",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspect: "video",
    colSpan: "md:col-span-2",
    tags: ["Creative Direction", "WebGL", "UI/UX Design", "3D Environment"],
    client: "Lumina Global Inc.",
    role: "Lead Digital Architect",
    description:
      "Lumina is a premium spatial visual experience designed to introduce high-end architectural concepts within a virtual fluid environment.",
    challenge:
      "Translating physical structural weight and the serene ambiance of luxury high-end concrete architecture into an interactive 3D web platform without sacrificing performance or readability.",
    solution:
      "We engineered a bespoke, fluid web experiences leveraging modern progressive enhancement, lightweight assets, and curated typography. Highlighting negative space and brutalist layout grids, the resulting web narrative drives brand credibility and elevates user engagement by over 140%.",
    metrics: [
      "+142% User Session Duration",
      "98% Performance Score",
      "Awwwards Site of the Day",
    ],
    testimonial: {
      quote:
        "Alexandre captured our structural philosophy flawlessly. The digital version of Lumina evokes the same quiet grandeur as our actual physical buildings.",
      author: "Marcus Vance",
      role: "Principal Partner, Lumina Global",
    },
  },
  {
    id: "monolith",
    title: "Monolith Studio",
    subtitle: "Timeless visual systems & kinetic guidelines",
    category: "Identity",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait",
    colSpan: "md:col-span-1",
    tags: ["Visual Identity", "Typography System", "Kinetic Brand Guidelines"],
    client: "Monolith Art Studios",
    role: "Principal Visual Designer",
    description:
      "A timeless identity scheme for an international art development collective, focusing on rigorous swiss grids, customized lettering, and architectural heavy layouts.",
    challenge:
      "Creating an identity that speaks with authority yet acts as an unobtrusive blank frame for contrasting historical and contemporary exhibition pieces of diverse mediums.",
    solution:
      "Designed a variable geometric letterform system based on mathematical ratios. Coupled with a stark high-contrast warm-gray and charcoal-black palette, the identity retreats to serve as a pedestal for artwork while expressing premium design authority of the studio itself.",
    metrics: [
      "Custom Variable Typeface",
      "Comprehensive 200pg Brand Manual",
      "Integrated Across 12 Locations",
    ],
    testimonial: {
      quote:
        "The swiss-grid system designed by Alexandre has unified our global outposts. It provides absolute design rigor without restricting artistic expression.",
      author: "Helena Sterling",
      role: "Global Creative Director, Monolith",
    },
  },
  {
    id: "veritas",
    title: "Veritas Publication",
    subtitle: "An independent journal on slow living & visual art",
    category: "Editorial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait",
    colSpan: "md:col-span-1",
    tags: ["Editorial Design", "Book layout", "Print curation", "Curation"],
    client: "Veritas Press Association",
    role: "Creative Director",
    description:
      "Veritas is a limited-run tactile literary publication gathering perspectives on modern philosophy, craftsmanship, and visual culture.",
    challenge:
      "Establishing a cohesive print layout system that balances dense philosophical prose with immersive photo-essays of architectural structures, feeling modern yet classical.",
    solution:
      "Utilized asymmetrical margins, elegant drop-caps, and a carefully calculated dual-font hierarchy. The combination of wide margins, premium linen paper selections (and matching screen textures in the digital edition) allows elements to breathe beautifully.",
    metrics: [
      "20,000 Print Run Sold Out",
      "Winner of Book Art Guild 2024",
      "Distributed in 15 Countries",
    ],
    testimonial: {
      quote:
        "A masterpiece of tactile layout. Alexandre understood the value of silence in design, crafting space that lets our writers ideas echo.",
      author: "Emile Dubois",
      role: "Editor-in-Chief, Veritas Publication",
    },
  },
  {
    id: "aura",
    title: "Aura FinTech App",
    subtitle: "Wealth management platform for the deliberate investor",
    category: "Digital",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    aspect: "video",
    colSpan: "md:col-span-2",
    tags: [
      "Product Strategy",
      "iOS Application Design",
      "Design Systems",
      "Data Viz",
    ],
    client: "Aura Wealth",
    role: "Head of Product Design",
    description:
      "A premium, high-net-worth dynamic mobile investment dashboard prioritizing clean aesthetics, absolute data clarity, and tactile micro-vibration feedback.",
    challenge:
      "Transforming chaotic, stressful real-time investment data and market tickers into a calm, reassuring financial management experience promoting deliberate, long-term decisions.",
    solution:
      "Eliminated red and green color stress. Replaced traditional stock market visual clutter with solid, serene monochrome curves, deliberate typography sizing, and customizable information cards that respect user attention.",
    metrics: [
      "$1.2B Assets Integrated",
      "4.9 App Store Rating",
      "Featured in Apple Edit Showcase",
    ],
    testimonial: {
      quote:
        "Aura doesn’t feel like a financial tool; it feels like an art gallery. Our clients love the quiet serenity of managing their legacy here.",
      author: "Jonathan Thorne",
      role: "CEO, Aura Wealth",
    },
  },
  {
    id: "minimalist-monograph",
    title: "The Minimalist Monograph",
    subtitle: "Limited-edition architectural visual compilation",
    category: "Editorial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    aspect: "square",
    colSpan: "md:col-span-1",
    tags: ["Print Design", "Curation", "Book Binding Specification"],
    client: "Atelier de L’Architecture",
    role: "Editorial Lead Coder & Designer",
    description:
      "A curated visual logbook archiving the last decade of minimalist residential projects in central Europe, printed with bespoke thread sewing.",
    challenge:
      "Preserving the subtle shifts of raw concrete and natural light across projects in high-contrast print and digital displays.",
    solution:
      "Deployed dual-tone photography correction, extensive white borders, and an strict typographic code system based on absolute minimalism.",
    metrics: [
      "Bespoke Slipcase Casing",
      "Printed on Fedrigoni paper",
      "Design Guild Gold Award",
    ],
  },
  {
    id: "ecommerce-reimagined",
    title: "E-Commerce Reimagined",
    subtitle: "Luxury bespoke retail platform with zero-friction checkout",
    category: "Digital",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    aspect: "video",
    colSpan: "md:col-span-2",
    tags: ["E-Commerce", "Next.js Interface", "Micro-Interactions"],
    client: "Maison de Curation",
    role: "Design System Architect",
    description:
      "A bespoke virtual shelf for a high-end French luxury household goods brand, focusing on visceral sliding gestures and beautiful serif storytelling.",
    challenge:
      "Designing a retail shop that feels like a luxury personal shopping boutique, maintaining visual purity while processing transactions.",
    solution:
      "Concocted an innovative horizontal list system where products are explored as museum exhibits, transitioning seamlessly to a secure 3-second quick action brief drawer.",
    metrics: [
      "+38% Conversion Increase",
      "Perfect 100/100 Core Web Vitals",
      "Bespoke stripe-integrated experience",
    ],
  },
];

const BentoGrid = () => {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Digital" | "Identity" | "Editorial"
  >("All");
  const filters = ["All", "Digital", "Identity", "Editorial"] as const;

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-brand-bone/40 pb-6">
        <div>
          <span className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-widest block mb-1">
            Curated works
          </span>
          <h2 className="font-serif text-2xl font-light tracking-tight text-brand-dark">
            Selected Masterworks
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest">
          {filters.map((f) => {
            const isActive = true;
            return (
              <button
                key={f}
                type="button"
                id={`filter-button-${f.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-full cursor-pointer transition-colors ${
                  isActive
                    ? "text-brand-beige"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                {/* Active backdrop */}
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBackdrop"
                    className="absolute inset-0 z-0 rounded-full bg-brand-dark"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
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
                // onClick={() => onProjectClick(project)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-bone/30 border border-brand-bone/60 p-5 cursor-pointer hover:border-brand-accent ${
                  project.colSpan || ""
                } transition-all duration-500 hover:shadow-lg`}
              >
                {/* Card Top Information */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/50">
                    {project.category} / {project.year}
                  </span>

                  {/* Subtle hover icon transition */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-beige border border-brand-dark/5 text-brand-dark transition-all duration-300 group-hover:bg-brand-dark group-hover:text-brand-beige">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Main Visual Image bleed with zoom */}
                <div className="relative w-full overflow-hidden rounded-xl bg-brand-bone aspect-video md:aspect-auto md:flex-grow mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Visual gradient cover vignette */}
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
                    {project.tags.slice(0, 2).map((t: any) => (
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

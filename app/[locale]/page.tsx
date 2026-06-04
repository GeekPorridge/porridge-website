"use server";

import { ArrowRight } from "lucide-react";
import {
  // getTranslations,
  setRequestLocale,
} from "next-intl/server";
import AnimatePresenceLayout from "../components/animate-presence-layout";
import HeroSubtitle from "../motions/hero-subtitle";
import WaveText from "../motions/wave-text";

type Props = {
  params: Promise<{ locale: string }>;
};

const Home = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  // const t = await getTranslations({ locale });

  return (
    <AnimatePresenceLayout className="space-y-24 md:space-y-36">
      <section className="space-y-8">
        <div className="max-w-4xl space-y-6">
          <HeroSubtitle>
            Creative Director & Design Systems Architect
          </HeroSubtitle>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-brand-dark">
            <WaveText
              segments={[
                { text: "Crafting" },
                {
                  text: "meaningful",
                  className: "font-serif italic text-brand-accent",
                },
                { text: "digital narratives through precision." },
              ]}
            />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-end">
          <div className="md:col-span-7">
            <p className="font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-xl">
              A multi-disciplinary approach to visual identity and digital
              product design for world-class brands. Merging swiss modernist
              discipline with digital kinetic fluidity.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <button
              type="button"
              id="hero-cta-button"
              className="group flex items-center space-x-3 rounded-full bg-brand-dark text-brand-beige px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark cursor-pointer shadow-md"
            >
              <span>Explore Curated Grid</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </AnimatePresenceLayout>
  );
};

export default Home;

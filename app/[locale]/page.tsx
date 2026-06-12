"use server";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimatePresenceLayout from "../components/animate-presence-layout";
import HeroSubtitle from "../motions/hero-subtitle";
import WaveText from "../motions/wave-text";

type Props = {
  params: Promise<{ locale: string }>;
};

const Home = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const heroHeadingSegments = [
    {
      text: t("heroHeadingSegment0Text"),
      className: t("heroHeadingSegment0ClassName") || undefined,
    },
    {
      text: t("heroHeadingSegment1Text"),
      className: t("heroHeadingSegment1ClassName") || undefined,
    },
    {
      text: t("heroHeadingSegment2Text"),
      className: t("heroHeadingSegment2ClassName") || undefined,
    },
  ];

  const philosophyHeadingSegments = [
    {
      text: t("philosophyHeadingSegment0Text"),
      className: t("philosophyHeadingSegment0ClassName") || undefined,
    },
    {
      text: t("philosophyHeadingSegment1Text"),
      className: t("philosophyHeadingSegment1ClassName") || undefined,
    },
    {
      text: t("philosophyHeadingSegment2Text"),
      className: t("philosophyHeadingSegment2ClassName") || undefined,
    },
    {
      text: t("philosophyHeadingSegment3Text"),
      className: t("philosophyHeadingSegment3ClassName") || undefined,
    },
    {
      text: t("philosophyHeadingSegment4Text"),
      className: t("philosophyHeadingSegment4ClassName") || undefined,
    },
  ];

  const highlights = [
    {
      id: t("highlight0Id"),
      quote: t("highlight0Quote"),
      author: t("highlight0Author"),
      role: t("highlight0Role"),
    },
    {
      id: t("highlight1Id"),
      quote: t("highlight1Quote"),
      author: t("highlight1Author"),
      role: t("highlight1Role"),
    },
    {
      id: t("highlight2Id"),
      quote: t("highlight2Quote"),
      author: t("highlight2Author"),
      role: t("highlight2Role"),
    },
  ];

  return (
    <AnimatePresenceLayout className="space-y-24 md:space-y-36">
      {/* Hero Section */}
      <section className="space-y-8 mt-20">
        <div className="max-w-4xl space-y-6">
          <HeroSubtitle>{t("heroSubtitle")}</HeroSubtitle>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-brand-dark">
            <WaveText segments={heroHeadingSegments} />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-end">
          <div className="md:col-span-7">
            <p className="font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <Link
              href="/portfolio"
              className="group flex items-center space-x-3 rounded-full bg-brand-dark text-brand-beige px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark cursor-pointer shadow-md"
            >
              <span>{t("heroCta")}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full relative py-2">
        <div className="relative aspect-21/9 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-brand-bone/40">
          <Image
            src="/shenzhen.png"
            alt="Shenzhen Cityscape"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale brightness-95 opacity-90 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-dark/45 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-brand-beige/90 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl border border-brand-dark/5 text-left max-w-xs sm:max-w-md hidden sm:block">
            <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent block mb-0.5">
              {t("heroImageLabel")}
            </span>
            <span className="font-serif italic text-xs text-brand-dark/80 block">
              {t("heroImageQuote")}
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy / Manifesto Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="md:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent block mb-2">
            {t("philosophyLabel")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight leading-[1.2]">
            <WaveText segments={philosophyHeadingSegments} />
          </h2>
        </div>

        <div className="md:col-span-7 space-y-6">
          <p className="font-sans text-sm md:text-base text-brand-dark/75 leading-relaxed">
            {t("philosophyParagraph1")}
          </p>
          <p className="font-sans text-sm md:text-base text-brand-dark/70 leading-relaxed">
            {t("philosophyParagraph2")}
          </p>
          <div className="pt-2">
            <Link
              href="/portfolio"
              className="group flex items-center space-x-2 font-mono text-xs uppercase tracking-widest font-semibold text-brand-dark hover:text-brand-accent transition-colors cursor-pointer"
            >
              <span>{t("philosophyCta")}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights (replaces Testimonials) */}
      <section className="pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">
            {t("highlightsLabel")}
          </span>

          {highlights.map((item) => (
            <div key={item.id} className="space-y-6">
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-brand-dark/90 leading-normal max-w-3xl mx-auto">
                "{item.quote}"
              </p>
              <div>
                <cite className="not-italic font-sans text-xs sm:text-sm font-semibold text-brand-dark block">
                  {item.author}
                </cite>
                <span className="font-mono text-[10px] text-brand-dark/45 uppercase tracking-widest block mt-0.5">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="rounded-2xl sm:rounded-3xl bg-brand-dark text-brand-beige p-8 sm:p-12 md:p-16 relative overflow-hidden text-center space-y-6 noise-bg">
          <span className="font-mono text-[10px] tracking-widest uppercase text-brand-accent">
            {t("ctaLabel")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight max-w-2xl mx-auto">
            {t("ctaHeading")}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-beige/65 max-w-md mx-auto">
            {t("ctaDescription")}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto rounded-full bg-brand-accent text-brand-dark px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:bg-brand-beige transition-colors cursor-pointer"
            >
              {t("ctaButton1")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-brand-beige/10 border border-brand-beige/30 hover:border-brand-accent px-8 py-3.5 font-mono text-xs tracking-widest uppercase transition-colors text-brand-beige cursor-pointer"
            >
              {t("ctaButton2")}
            </Link>
          </div>
        </div>
      </section>
    </AnimatePresenceLayout>
  );
};

export default Home;

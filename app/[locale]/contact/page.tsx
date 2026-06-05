"use server";

import { Camera, Check, Copy, Globe, LinkIcon } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import AnimatePresenceLayout from "@/app/components/animate-presence-layout";
import ContactForm from "./contact-form";

type Props = {
  params: Promise<{ locale: string }>;
};

const Contact = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const copiedEmail = false;
  const franceTime = "";

  return (
    <AnimatePresenceLayout>
      <section className="space-y-4 mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-brand-accent block">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-brand-dark max-w-3xl leading-[1.1]">
          Let’s craft your{" "}
          <span className="font-serif italic text-brand-accent">
            next vision
          </span>{" "}
          together.
        </h1>
      </section>

      {/* ASYMMETRIC DUAL LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left side: Coordinates, Active tracking, and Architectural sunset view */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-10">
          {/* Communication links list */}
          <div className="space-y-6">
            {/* Interactive email box */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1">
                Secure Email Channel
              </span>
              <div className="flex items-center space-x-2.5 group">
                <button
                  type="button"
                  //   onClick={handleCopyEmail}
                  className="font-serif text-lg sm:text-xl font-medium text-brand-dark hover:text-brand-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  hello@alexandre.design
                </button>

                <button
                  type="button"
                  id="btn-copy-email"
                  className="p-1 px-2.5 rounded bg-brand-bone/50 hover:bg-brand-dark hover:text-brand-beige text-[9px] font-mono transition-colors flex items-center space-x-1"
                >
                  {copiedEmail ? (
                    <Check className="h-3 w-3 text-emerald-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Live Paris locator */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1">
                Physical Office Coordinates
              </span>
              <div className="space-y-1">
                <span className="font-sans text-sm font-semibold text-brand-dark block">
                  Paris, France — Available Worldwide
                </span>

                {/* Interactive ticking local Paris clock widget */}
                <div
                  id="live-timezone-ticker"
                  className="inline-flex items-center space-x-2.5 bg-brand-bone/35 border border-brand-bone px-3 py-1.5 rounded-full"
                >
                  <Globe className="h-3.5 w-3.5 text-brand-accent animate-spin-slow" />
                  <span className="font-mono text-[10px] tracking-wider text-brand-dark/75">
                    Paris Time: {franceTime || "Loading..."}
                  </span>
                </div>
              </div>
            </div>

            {/* Social coordinates */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1.5">
                Visual Networks
              </span>
              <div className="flex items-center space-x-4 font-mono text-[11px] tracking-widest uppercase">
                <a
                  href="https://instagram.com"
                  id="social-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <Camera className="h-3 w-3" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  id="social-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <LinkIcon className="h-3 w-3" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sunset Grayscale Office Bleed View */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-sm border border-brand-bone/50">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Refined Atelier Workspace Sunset View"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/70 p-4 text-left">
              <span className="font-mono text-[8px] uppercase tracking-wider text-brand-accent">
                ATELIER DIRECT CAMERA
              </span>
              <p className="font-serif italic text-xs text-brand-beige/85">
                "Sunset over the Parisian office grids."
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Contact Message input shell */}
        <div
          className="lg:col-span-7 bg-brand-bone/15 border border-brand-bone/70 p-6 sm:p-10 rounded-3xl"
          id="contact-form-side"
        >
          <div className="mb-6">
            <h3 className="font-serif text-xl font-medium tracking-tight">
              Send a secure proposal
            </h3>
            <p className="font-sans text-xs text-brand-dark/50 mt-1">
              Alexandre handles all personal communication with strict
              confidentiality protocols.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </AnimatePresenceLayout>
  );
};

export default Contact;

"use server";

import { Camera, Globe, LinkIcon } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimatePresenceLayout from "@/app/components/animate-presence-layout";
import CopyEmailButton from "@/app/components/copy-email-button";
import LiveClock from "@/app/components/live-clock";
import ContactForm from "./contact-form";

type Props = {
  params: Promise<{ locale: string }>;
};

const Contact = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const headingSegments = [
    {
      text: t("contactHeadingSegment0Text"),
      className: t("contactHeadingSegment0ClassName") || undefined,
    },
    {
      text: t("contactHeadingSegment1Text"),
      className: t("contactHeadingSegment1ClassName") || undefined,
    },
    {
      text: t("contactHeadingSegment2Text"),
      className: t("contactHeadingSegment2ClassName") || undefined,
    },
  ];

  const formData = {
    heading: t("contactFormHeading"),
    description: t("contactFormDescription"),
    interestLabel: t("contactFormInterestLabel"),
    interests: [
      {
        id: t("contactFormInterest0Id"),
        label: t("contactFormInterest0Label"),
      },
      {
        id: t("contactFormInterest1Id"),
        label: t("contactFormInterest1Label"),
      },
      {
        id: t("contactFormInterest2Id"),
        label: t("contactFormInterest2Label"),
      },
      {
        id: t("contactFormInterest3Id"),
        label: t("contactFormInterest3Label"),
      },
    ],
    name: {
      label: t("contactFormNameLabel"),
      placeholder: t("contactFormNamePlaceholder"),
    },
    email: {
      label: t("contactFormEmailLabel"),
      placeholder: t("contactFormEmailPlaceholder"),
    },
    message: {
      label: t("contactFormMessageLabel"),
      placeholder: t("contactFormMessagePlaceholder"),
    },
    submit: t("contactFormSubmit"),
    submitting: t("contactFormSubmitting"),
    success: {
      title: t("contactFormSuccessTitle"),
      description: t("contactFormSuccessDescription"),
      button: t("contactFormSuccessButton"),
    },
  };

  const emailValue = t("contactEmailValue");

  return (
    <AnimatePresenceLayout>
      <section className="space-y-4 mb-16 mt-20">
        <span className="font-mono text-xs tracking-widest uppercase text-brand-accent block">
          {t("contactLabel")}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-brand-dark max-w-3xl leading-[1.1]">
          {headingSegments.map((seg) => (
            <span key={seg.text} className={seg.className}>
              {seg.text}{" "}
            </span>
          ))}
        </h1>
      </section>

      {/* ASYMMETRIC DUAL LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left side: Contact info */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-10">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1">
                {t("contactEmailLabel")}
              </span>
              <div className="flex items-center space-x-2.5 group">
                <a
                  href={`mailto:${emailValue}`}
                  className="font-serif text-lg sm:text-xl font-medium text-brand-dark hover:text-brand-accent transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {emailValue}
                </a>
                <CopyEmailButton email={emailValue} />
              </div>
            </div>

            {/* Location */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1">
                {t("contactLocationLabel")}
              </span>
              <div className="space-y-1">
                <span className="font-sans text-sm font-semibold text-brand-dark block">
                  {t("contactLocationValue")}
                </span>
                <div className="inline-flex items-center space-x-2.5 bg-brand-bone/35 border border-brand-bone px-3 py-1.5 rounded-full">
                  <Globe className="h-3.5 w-3.5 text-brand-accent" />
                  <span className="font-mono text-[10px] tracking-wider text-brand-dark/75">
                    {t("contactTimezone")} <LiveClock />
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1.5">
                {t("contactSocialLabel")}
              </span>
              <div className="flex items-center space-x-4 font-mono text-[11px] tracking-widest uppercase">
                <a
                  href="https://github.com/GeekPorridge"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <LinkIcon className="h-3 w-3" />
                  <span>{t("contactSocialGithub")}</span>
                </a>
                <a
                  href={`mailto:${emailValue}`}
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <Camera className="h-3 w-3" />
                  <span>{t("contactSocialEmail")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cityscape Image */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-sm border border-brand-bone/50">
            <Image
              src="/timezone.png"
              alt="Shenzhen Cityscape"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover  brightness-95 opacity-90 grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-dark/70 p-4 text-left">
              <span className="font-mono text-[8px] uppercase tracking-wider text-brand-accent">
                {t("contactImageLabel")}
              </span>
              <p className="font-serif italic text-xs text-brand-beige/85">
                {t("contactImageQuote")}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="lg:col-span-7 bg-brand-bone/15 border border-brand-bone/70 p-6 sm:p-10 rounded-3xl">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-medium tracking-tight">
              {formData.heading}
            </h3>
            <p className="font-sans text-xs text-brand-dark/50 mt-1">
              {formData.description}
            </p>
          </div>
          <ContactForm formData={formData} />
        </div>
      </section>
    </AnimatePresenceLayout>
  );
};

export default Contact;

"use server";

import { Camera, Globe, LinkIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimatePresenceLayout from "@/app/components/animate-presence-layout";
import CopyEmailButton from "@/app/components/copy-email-button";
import ContactForm from "./contact-form";

type Props = {
  params: Promise<{ locale: string }>;
};

const Contact = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const headingSegments = t.raw("contactPage.heading.segments") as Array<{
    text: string;
    className?: string;
  }>;

  const formData = {
    heading: t("contactPage.form.heading"),
    description: t("contactPage.form.description"),
    interestLabel: t("contactPage.form.interestLabel"),
    interests: t.raw("contactPage.form.interests") as Array<{
      id: string;
      label: string;
    }>,
    name: {
      label: t("contactPage.form.name.label"),
      placeholder: t("contactPage.form.name.placeholder"),
    },
    email: {
      label: t("contactPage.form.email.label"),
      placeholder: t("contactPage.form.email.placeholder"),
    },
    message: {
      label: t("contactPage.form.message.label"),
      placeholder: t("contactPage.form.message.placeholder"),
    },
    submit: t("contactPage.form.submit"),
    submitting: t("contactPage.form.submitting"),
    success: {
      title: t("contactPage.form.success.title"),
      description: t("contactPage.form.success.description"),
      button: t("contactPage.form.success.button"),
    },
  };

  const emailValue = t("contactPage.email.value");

  return (
    <AnimatePresenceLayout>
      <section className="space-y-4 mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-brand-accent block">
          {t("contactPage.label")}
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
                {t("contactPage.email.label")}
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
                {t("contactPage.location.label")}
              </span>
              <div className="space-y-1">
                <span className="font-sans text-sm font-semibold text-brand-dark block">
                  {t("contactPage.location.value")}
                </span>
                <div
                  id="live-timezone-ticker"
                  className="inline-flex items-center space-x-2.5 bg-brand-bone/35 border border-brand-bone px-3 py-1.5 rounded-full"
                >
                  <Globe className="h-3.5 w-3.5 text-brand-accent" />
                  <span className="font-mono text-[10px] tracking-wider text-brand-dark/75">
                    {t("contactPage.timezone")} CST (UTC+8)
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-dark/45 block mb-1.5">
                {t("contactPage.social.label")}
              </span>
              <div className="flex items-center space-x-4 font-mono text-[11px] tracking-widest uppercase">
                <a
                  href="https://github.com/GeekPorridge"
                  id="social-github"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <LinkIcon className="h-3 w-3" />
                  <span>{t("contactPage.social.github")}</span>
                </a>
                <a
                  href={`mailto:${emailValue}`}
                  id="social-email"
                  className="text-brand-dark/70 hover:text-brand-accent transition-colors flex items-center space-x-1 border-b border-transparent hover:border-brand-accent pb-0.5"
                >
                  <Camera className="h-3 w-3" />
                  <span>{t("contactPage.social.email")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cityscape Image */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-sm border border-brand-bone/50">
            {/* <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Shenzhen Skyline"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 hover:scale-105"
            /> */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/70 p-4 text-left">
              <span className="font-mono text-[8px] uppercase tracking-wider text-brand-accent">
                {t("contactPage.image.label")}
              </span>
              <p className="font-serif italic text-xs text-brand-beige/85">
                {t("contactPage.image.quote")}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div
          className="lg:col-span-7 bg-brand-bone/15 border border-brand-bone/70 p-6 sm:p-10 rounded-3xl"
          id="contact-form-side"
        >
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Fragment } from "react/jsx-runtime";
import { routing } from "@/i18n/routing";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const title = t("title");
  const description = t("description");
  const siteUrl = "https://geekporridge.com";
  const imageUrl = `${siteUrl}/shenzhen.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "GeekPorridge",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "GeekPorridge - Zhou Yang",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteUrl,
      languages: {
        en: `${siteUrl}/en`,
        zh: `${siteUrl}/zh`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <Fragment>{children}</Fragment>
      <Footer t={t} />
    </NextIntlClientProvider>
  );
}

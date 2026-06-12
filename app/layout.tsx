import { getLocale } from "next-intl/server";
import { ebGaramond, hankenGrotesk, plusJakartaSans } from "./fonts";
import "./globals.css";

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem("theme");
      if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
      }
    } catch(e) {}
  })();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script suppressHydrationWarning>{themeScript}</script>
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-brand-beige text-brand-dark selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

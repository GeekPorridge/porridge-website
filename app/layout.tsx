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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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

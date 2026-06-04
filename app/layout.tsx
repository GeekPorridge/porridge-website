import { ebGaramond, hankenGrotesk, plusJakartaSans } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body>
        <div className="min-h-screen flex flex-col bg-brand-beige text-brand-dark selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden noise-bg">
          {children}
        </div>
      </body>
    </html>
  );
}

import {
  EB_Garamond,
  Hanken_Grotesk,
  Plus_Jakarta_Sans,
} from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600"],
});

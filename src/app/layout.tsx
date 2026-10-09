import type { Metadata } from "next";
import { Great_Vibes, IBM_Plex_Mono, Libre_Bodoni, Outfit } from "next/font/google";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  style: ["normal", "italic"],
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.value,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bodoni.variable} ${vibes.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#071428] text-[#e8eef8]">{children}</body>
    </html>
  );
}

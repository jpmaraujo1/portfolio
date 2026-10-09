import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "@fontsource/dela-gothic-one";
import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import { portfolio } from "@/content/portfolio";
import "./globals.css";
import "./poster.css";

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
    <html lang="en" className={`${plex.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f2efe8] text-[#111111]">{children}</body>
    </html>
  );
}

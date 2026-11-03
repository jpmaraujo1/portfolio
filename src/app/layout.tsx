import type { Metadata } from "next";
import { Great_Vibes, IBM_Plex_Mono } from "next/font/google";
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

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role.en}`,
  description: portfolio.value.en,
};

// Picks the language before first paint: saved choice, else the browser's.
const langScript = `try{var l=localStorage.getItem("lang");if(l!=="pt"&&l!=="en"){l=(navigator.language||"").toLowerCase().indexOf("pt")===0?"pt":"en"}var r=document.documentElement;r.dataset.lang=l;r.lang=l==="pt"?"pt-BR":"en"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-lang="en" suppressHydrationWarning className={`${plex.variable} ${vibes.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="min-h-full bg-[#05070c] text-[#f7fbff]">{children}</body>
    </html>
  );
}

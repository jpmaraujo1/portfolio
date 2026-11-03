import { portfolio, ui } from "@/content/portfolio";
import { LangToggle } from "@/components/lang-toggle";
import { T } from "@/components/t";
import { t } from "@/lib/i18n";

const links = [
  { href: "#work", label: ui.nav.work, jp: "作品" },
  { href: "#about", label: ui.nav.about, jp: "紹介" },
  { href: "#skills", label: ui.nav.skills, jp: "技能" },
  { href: "#contact", label: ui.nav.contact, jp: "連絡" },
] as const;

function tape(lang: "en" | "pt") {
  const line = portfolio.disciplines.map((d) => d[lang]).join("   ·   ");
  // Long enough that one copy is wider than any screen, so the loop never shows a gap.
  return `${line}   ·   `.repeat(8);
}

const loop = t(tape("en"), tape("pt"));

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-30 bg-[#1d4d8d] text-[#f7fbff]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-end sm:justify-between md:px-8">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-poster text-lg leading-none tracking-tight"><T v={portfolio.kicker} /></span>
          <span className="text-sm tracking-wide text-white/80">ポートフォリオ</span>
        </a>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <nav aria-label="Page">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link inline-flex min-h-11 items-baseline gap-1.5">
                  <span className="text-sm font-medium"><T v={item.label} /></span>
                  <span className="text-[11px] text-white/70">{item.jp}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LangToggle />
        </div>
      </div>
      <div className="overflow-hidden bg-[#123a6b] text-[#f7fbff]">
        <p className="ticker py-1.5 font-mono text-[11px] tracking-[0.22em] uppercase">
          <span><T v={loop} /></span>
          <span aria-hidden><T v={loop} /></span>
        </p>
      </div>
    </header>
  );
}

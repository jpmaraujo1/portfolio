import { portfolio } from "@/content/portfolio";

const links = [
  { href: "#work", en: "Work", jp: "作品" },
  { href: "#about", en: "About", jp: "紹介" },
  { href: "#skills", en: "Skills", jp: "技能" },
  { href: "#contact", en: "Contact", jp: "連絡" },
] as const;

const tape = [...portfolio.disciplines, "Web", "Street", "Poster"].join("   ·   ");

export function SiteHeader() {
  const loop = `${tape}   ·   ${tape}   ·   `;

  return (
    <header className="sticky top-0 z-30 border-b-2 border-[#111111] bg-[#f2efe8]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-end sm:justify-between md:px-8">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-poster text-lg leading-none tracking-tight">{portfolio.kicker}</span>
          <span className="text-sm tracking-wide text-[#111111]">ポートフォリオ</span>
        </a>
        <nav aria-label="Page">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link inline-flex min-h-11 items-baseline gap-1.5">
                  <span className="text-sm font-medium">{item.en}</span>
                  <span className="text-[11px] text-[#5c564e]">{item.jp}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="overflow-hidden border-t border-[#111111] bg-[#111111] text-[#f4f1ea]">
        <p className="ticker py-1.5 font-mono text-[11px] tracking-[0.22em] uppercase">
          <span>{loop}</span>
          <span aria-hidden>{loop}</span>
        </p>
      </div>
    </header>
  );
}

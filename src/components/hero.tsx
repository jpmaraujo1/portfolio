import { portfolio } from "@/content/portfolio";
import { Button } from "@/components/ui/button";

function splitRole(role: string) {
  const parts = role.trim().split(/\s+/);
  const accent = parts.pop() ?? role;
  return { lead: parts.join(" "), accent };
}

export function Hero() {
  const { lead, accent } = splitRole(portfolio.role);
  const hasEmail = portfolio.email.includes("@");

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <div className="flex items-stretch gap-3">
        <p className="v-label hidden shrink-0 self-center font-poster text-sm tracking-[0.55em] text-[#111111] lg:block">
          ウェブ開発
        </p>
        <div className="poster relative min-w-0 flex-1 overflow-hidden border-2 border-[#111111] shadow-[8px_8px_0_#111111]">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-80" />
        <span className="crop crop-tl" />
        <span className="crop crop-tr" />
        <span className="crop crop-bl" />
        <span className="crop crop-br" />

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-6 lg:p-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] tracking-[0.28em] text-[#9eb0ff] uppercase">
                For recruiters · 採用
              </p>
              <span className="stamp inline-flex size-11 items-center justify-center font-sans text-lg leading-none font-bold">仮</span>
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-2xl">
              <span className="font-poster tracking-tight">{portfolio.name}</span>
              <span className="border border-[#f4f1ea]/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.22em] text-[#f4f1ea] uppercase">
                Placeholder
              </span>
            </p>
            <h1 className="mt-4 font-poster text-[clamp(2.7rem,7vw,5.6rem)] leading-[0.92] tracking-tight text-white">
              {lead ? <span className="block">{lead}</span> : null}
              <span className="block text-[#ff2d2d]">{accent}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#f4f1ea] md:text-lg">
              {portfolio.value}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="h-12 rounded-none! px-5 text-sm tracking-[0.14em] uppercase shadow-none">
                <a href="#work">View selected work</a>
              </Button>
              <a
                href={hasEmail ? `mailto:${portfolio.email}` : "#contact"}
                className="nav-link inline-flex min-h-11 items-center font-mono text-xs tracking-[0.2em] text-[#f4f1ea] uppercase"
              >
                Contact 連絡
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:self-end">
            <div className="board relative overflow-hidden">
              <div className="board-scan" />
              <div className="relative flex items-center justify-between border-b border-[#2f5bff]/50 px-3 py-2 font-mono text-[10px] tracking-[0.22em] text-[#9eb0ff] uppercase">
                <span>Index</span>
                <span className="flex items-center gap-2">
                  <span className="blink inline-block size-1.5 bg-[#ff2d2d]" />
                  Live
                </span>
              </div>
              <ul>
                {portfolio.skills.map((skill, index) => (
                  <li
                    key={skill.name}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 px-3 py-3 last:border-b-0"
                  >
                    <span className="font-mono text-[11px] text-[#2f5bff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm tracking-wide">{skill.name}</span>
                    {skill.primary ? (
                      <span className="font-mono text-[10px] tracking-[0.16em] text-[#ff2d2d] uppercase">
                        Primary
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-white/30">—</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

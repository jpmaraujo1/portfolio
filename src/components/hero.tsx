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
        <p className="v-label hidden shrink-0 self-center font-poster text-sm tracking-[0.55em] text-[#10233f] lg:block">
          ウェブ開発
        </p>
        <div className="poster relative min-w-0 flex-1 overflow-hidden border-2 border-[#10233f] shadow-[8px_8px_0_#0b1c3d]">
        <div className="tech-grid pointer-events-none absolute inset-0" />
        <span className="moon" aria-hidden />
        <span className="crop crop-tl" />
        <span className="crop crop-tr" />
        <span className="crop crop-bl" />
        <span className="crop crop-br" />

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-6 lg:p-10">
          <div className="lg:col-span-7">
            <p className="font-script pr-20 text-5xl leading-none text-[#f3e6c8] sm:pr-28 sm:text-6xl">blue hour</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] tracking-[0.28em] text-[#d5e4f7] uppercase">
                For recruiters · 採用
              </p>
              <span className="stamp inline-flex size-11 items-center justify-center font-sans text-lg leading-none font-bold text-[#f3e6c8]">仮</span>
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-2xl">
              <span className="font-poster tracking-tight">{portfolio.name}</span>
              <span className="border border-[#f3e6c8]/50 px-2 py-0.5 font-mono text-[10px] tracking-[0.22em] text-[#f3e6c8] uppercase">
                Placeholder
              </span>
            </p>
            <h1 className="mt-4 font-poster text-[clamp(2.7rem,7vw,5.6rem)] leading-[0.92] tracking-tight text-[#e8f0fa]">
              {lead ? <span className="block">{lead}</span> : null}
              <span className="block text-[#f3e6c8]">{accent}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#e8f0fa] md:text-lg">
              {portfolio.value}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="h-12 rounded-none! px-5 text-sm tracking-[0.14em] uppercase shadow-none">
                <a href="#work">View selected work</a>
              </Button>
              <a
                href={hasEmail ? `mailto:${portfolio.email}` : "#contact"}
                className="nav-link inline-flex min-h-11 items-center font-mono text-xs tracking-[0.2em] text-[#e8f0fa] uppercase"
              >
                Contact 連絡
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:self-end">
            <div className="board relative overflow-hidden">
              <div className="board-scan" />
              <div className="relative flex items-center justify-between border-b border-[#f3e6c8]/30 px-3 py-2 font-mono text-[10px] tracking-[0.22em] text-[#f3e6c8] uppercase">
                <span>Index</span>
                <span className="flex items-center gap-2">
                  <span className="blink inline-block size-1.5 bg-[#f3e6c8]" />
                  Live
                </span>
              </div>
              <ul>
                {portfolio.skills.map((skill, index) => (
                  <li
                    key={skill.name}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 px-3 py-3 last:border-b-0"
                  >
                    <span className="font-mono text-[11px] text-[#f3e6c8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm tracking-wide">{skill.name}</span>
                    {skill.primary ? (
                      <span className="font-mono text-[10px] tracking-[0.16em] text-[#f3e6c8] uppercase">
                        Primary
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-white/35">—</span>
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

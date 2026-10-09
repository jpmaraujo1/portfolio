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
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-14 pb-20 md:px-10 md:pt-20 md:pb-28">
      <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="rise d1 font-script text-5xl leading-none text-[#f3e6c8] sm:text-6xl">
            {portfolio.kicker}
          </p>
          <p className="rise d2 mt-6 text-[11px] tracking-[0.32em] text-[#b7c7de] uppercase">
            For recruiters
          </p>
          <p className="rise d2 mt-3 flex flex-wrap items-center gap-3 text-[#e8eef8]">
            <span className="font-serif text-2xl italic">{portfolio.name}</span>
            <span className="border border-[#f3e6c8]/40 px-2 py-1 font-sans text-[10px] tracking-[0.22em] text-[#f3e6c8] uppercase">
              Placeholder
            </span>
          </p>
          <h1 className="rise d3 mt-6 font-serif text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.88] font-normal tracking-[-0.03em] text-[#f4f7fb]">
            {lead ? <span className="block">{lead}</span> : null}
            <span className="block text-[#f3e6c8] italic">{accent}</span>
          </h1>
          <p className="rise d4 mt-8 max-w-xl text-lg leading-relaxed text-[#d5e2f2] md:text-xl">
            {portfolio.value}
          </p>
          <p className="rise d4 mt-4 text-sm tracking-wide text-[#9eb0c9]">
            {portfolio.disciplines.join("  ·  ")}
          </p>
          <div className="rise d5 mt-10 flex flex-wrap items-center gap-5">
            <Button
              asChild
              className="h-12 rounded-sm px-6 text-base tracking-wide shadow-none"
            >
              <a href="#work">View selected work</a>
            </Button>
            <a
              href={hasEmail ? `mailto:${portfolio.email}` : "#contact"}
              className="nav-link inline-flex min-h-11 items-center text-sm tracking-[0.16em] text-[#f3e6c8] uppercase"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="rise d4 lg:col-span-5">
          <figure className="film-frame relative overflow-hidden border border-white/20">
            <div className="scene relative aspect-[16/11] sm:aspect-[4/5]">
              <div className="scene-sky absolute inset-0" />
              <div className="scene-moon" />
              <div className="scene-water" />
              <div className="scene-lamp" />
              <div className="crosshair" />
              <div className="scan" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 font-mono text-[10px] tracking-[0.28em] text-white/75 uppercase">
                <span>Blue hour</span>
                <span className="live">Live</span>
              </div>
            </div>
            <figcaption className="flex items-center justify-between border-t border-white/15 px-3 py-3 text-[11px] tracking-[0.22em] text-[#c5d3e6] uppercase">
              <span>Web, on purpose</span>
              <span>24 fps</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

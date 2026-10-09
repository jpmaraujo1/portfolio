import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <Reveal>
        <div className="work-card rounded-3xl border border-white/35 p-6 text-[#f7fbff] md:p-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.28em] text-white/70 uppercase">03 — 紹介</p>
              <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl">About</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 md:border-l md:border-white/35 md:pl-8">
              <p className="font-poster text-4xl leading-none tracking-tight sm:text-5xl">{portfolio.aboutLabel}</p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-white/65 uppercase">Placeholder</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{portfolio.about}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {portfolio.disciplines.map((item) => (
                  <li key={item} className="border border-white/45 px-2.5 py-1 font-mono text-xs tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

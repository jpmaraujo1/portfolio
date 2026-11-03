import { portfolio, ui } from "@/content/portfolio";
import { T } from "@/components/t";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <Reveal>
        <div className="work-card rounded-3xl border border-white/35 p-6 text-[#f7fbff] md:p-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.28em] text-white/70 uppercase">03 — 紹介</p>
              <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl"><T v={ui.about} /></h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 md:border-l md:border-white/35 md:pl-8">
              <div className="max-w-xl space-y-4 text-lg leading-relaxed">
                {portfolio.about.map((paragraph) => (
                  <p key={paragraph.en.slice(0, 24)}><T v={paragraph} /></p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {portfolio.disciplines.map((item) => (
                  <li key={item.en} className="border border-white/45 px-2.5 py-1 font-mono text-xs tracking-wide">
                    <T v={item} />
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

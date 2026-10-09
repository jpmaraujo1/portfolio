import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <Reveal>
        <div className="grid gap-8 border-2 border-[#111111] bg-[#f7f4ee] p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.28em] text-[#5c564e] uppercase">03 — 紹介</p>
            <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl">About</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:border-l-2 md:border-[#111111] md:pl-8">
            <p className="font-poster text-4xl leading-none text-[#ff2d2d] sm:text-5xl">{portfolio.aboutLabel}</p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-[#5c564e] uppercase">Placeholder</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{portfolio.about}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {portfolio.disciplines.map((item) => (
                <li key={item} className="border border-[#111111] px-2.5 py-1 font-mono text-xs tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

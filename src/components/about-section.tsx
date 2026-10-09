import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
      <Reveal>
        <div className="grid gap-10 border-t border-[#10233f]/10 pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.32em] text-[#5c6f88] uppercase">03 — About</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-[#10233f] sm:text-6xl">About</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-script text-5xl leading-none text-[#1d4d8d] sm:text-6xl">
              {portfolio.aboutLabel}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.22em] text-[#8a6a32] uppercase">Placeholder</p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1c3354] md:text-xl">
              {portfolio.about}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm tracking-wide text-[#3d5270]">
              {portfolio.disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

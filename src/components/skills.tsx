import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.28em] text-[#5c564e] uppercase">04 — 技能</p>
        <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl">Where the work sits</h2>
      </Reveal>
      <ol className="mt-8 border-t-2 border-[#111111]">
        {portfolio.skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 60}>
            <li
              className={`grid gap-2 border-b-2 border-[#111111] py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6 ${
                skill.primary ? "bg-[#ff2d2d] px-3 text-white sm:px-4" : ""
              }`}
            >
              <p className="font-mono text-xs tracking-[0.2em] sm:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-poster text-3xl leading-none sm:col-span-5 sm:text-4xl">
                {skill.name}
                {skill.primary ? (
                  <span className="ml-3 align-middle font-sans text-[10px] tracking-[0.2em] uppercase">Primary</span>
                ) : null}
              </p>
              <p className={`text-base leading-relaxed sm:col-span-6 ${skill.primary ? "text-white" : "text-[#2a2a2a]"}`}>
                {skill.detail}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

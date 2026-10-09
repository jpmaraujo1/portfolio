import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="text-[11px] tracking-[0.32em] text-[#5c6f88] uppercase">04 — Skills</p>
        <h2 className="mt-3 font-serif text-5xl leading-none text-[#10233f] sm:text-6xl">Where the work sits</h2>
      </Reveal>
      <ul className="mt-10 border-t border-[#10233f]/10">
        {portfolio.skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 70}>
            <li
              className={`grid gap-2 border-b border-[#10233f]/10 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 ${
                skill.primary ? "skill-primary" : ""
              }`}
            >
              <p className="font-serif text-3xl text-[#10233f] sm:col-span-5 sm:text-4xl">
                {skill.name}
                {skill.primary ? (
                  <span className="ml-3 align-middle font-sans text-[10px] tracking-[0.22em] text-[#8a6a32] uppercase">
                    Primary
                  </span>
                ) : null}
              </p>
              <p className="text-base leading-relaxed text-[#24384f] sm:col-span-7">{skill.detail}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

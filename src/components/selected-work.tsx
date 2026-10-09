import { portfolio, type Project } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

function SampleCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const linked = project.link.href.length > 0;

  return (
    <article
      className={`work-card group relative flex flex-col border border-[#10233f]/10 bg-[#f7f5f0] p-6 sm:p-8 ${
        index === 1 ? "lg:mt-16" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-serif text-5xl leading-none text-[#10233f]/15 italic">{number}</p>
        {project.sample ? (
          <p className="border border-[#10233f]/15 px-2 py-1 text-[10px] tracking-[0.22em] text-[#3d5270] uppercase">
            Layout sample
          </p>
        ) : null}
      </div>
      <h3 className="mt-8 font-serif text-4xl leading-none tracking-tight text-[#10233f] sm:text-5xl">
        {project.title}
      </h3>
      <p className="mt-3 text-[10px] tracking-[0.22em] text-[#8a6a32] uppercase">Placeholder</p>

      <dl className="mt-8 space-y-5 text-[#10233f]">
        <div>
          <dt className="text-[11px] tracking-[0.22em] text-[#5c6f88] uppercase">Impact</dt>
          <dd className="mt-1 font-serif text-2xl leading-snug">{project.impact}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.22em] text-[#5c6f88] uppercase">Problem</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.22em] text-[#5c6f88] uppercase">What you did</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.contribution}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.22em] text-[#5c6f88] uppercase">Stack</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-[#10233f]/15 px-2.5 py-1 text-sm text-[#1c3354]"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-8 border-t border-[#10233f]/10 pt-4">
        {linked ? (
          <a
            href={project.link.href}
            className="nav-link inline-flex min-h-11 items-center text-sm tracking-[0.16em] text-[#10233f] uppercase"
          >
            {project.link.label}
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center text-sm tracking-[0.16em] text-[#5c6f88] uppercase">
            {project.link.label}
          </span>
        )}
      </div>
      <span className="card-sheen" aria-hidden />
    </article>
  );
}

export function SelectedWork() {
  const projects = portfolio.projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-[#5c6f88] uppercase">02 — Selected work</p>
          <h2 className="mt-3 font-serif text-5xl leading-none tracking-tight text-[#10233f] sm:text-6xl">
            Two pieces.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#24384f]">
            A pair, on purpose. Role and impact sit first. These cards are layout samples, not case studies.
          </p>
        </div>
      </Reveal>

      {projects.length === 0 ? (
        <Reveal delay={80}>
          <div className="mt-12 border border-dashed border-[#10233f]/25 bg-[#f7f5f0] px-6 py-14 sm:px-10">
            <p className="text-[10px] tracking-[0.22em] text-[#8a6a32] uppercase">Placeholder</p>
            <h3 className="mt-4 font-serif text-4xl text-[#10233f]">{portfolio.emptyWork.title}</h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#24384f]">
              {portfolio.emptyWork.body}
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <SampleCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

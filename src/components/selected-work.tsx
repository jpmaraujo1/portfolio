import { portfolio, type Project } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

function SampleCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const linked = project.link.href.length > 0;

  return (
    <article className="work-card relative flex h-full flex-col border-2 border-[#111111] bg-[#f7f4ee] p-5 text-[#111111] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <p className="num-outline font-poster text-5xl leading-none">{number}</p>
        {project.sample ? (
          <p className="stamp px-2 py-1 font-mono text-[10px] tracking-[0.18em] uppercase">見本 sample</p>
        ) : null}
      </div>
      <h3 className="mt-6 font-poster text-4xl leading-none tracking-tight sm:text-5xl">{project.title}</h3>
      <p className="ink-muted mt-2 font-mono text-[10px] tracking-[0.22em] text-[#8a5a12] uppercase">Placeholder</p>

      <dl className="mt-7 space-y-4">
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-[#5c564e] uppercase">Impact</dt>
          <dd className="mt-1 font-poster text-2xl leading-snug">{project.impact}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-[#5c564e] uppercase">Problem</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-[#5c564e] uppercase">What you did</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.contribution}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-[#5c564e] uppercase">Stack</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="border border-current px-2 py-1 font-mono text-xs tracking-wide">
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-auto border-t border-current/20 pt-4">
        {linked ? (
          <a href={project.link.href} className="nav-link inline-flex min-h-11 items-center font-mono text-xs tracking-[0.18em] uppercase">
            {project.link.label}
          </a>
        ) : (
          <span className="ink-muted inline-flex min-h-11 items-center font-mono text-xs tracking-[0.18em] text-[#5c564e] uppercase">
            {project.link.label}
          </span>
        )}
      </div>
    </article>
  );
}

export function SelectedWork() {
  const projects = portfolio.projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#111111] pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-[#5c564e] uppercase">02 — 作品</p>
            <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl">Two pieces.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#2a2a2a]">
            A pair, on purpose. Role and impact first. These are layout samples, not case studies.
          </p>
        </div>
      </Reveal>

      {projects.length === 0 ? (
        <Reveal>
          <div className="border-2 border-dashed border-[#111111] px-6 py-14">
            <p className="font-mono text-[10px] tracking-[0.22em] text-[#ff2d2d] uppercase">Placeholder</p>
            <h3 className="mt-3 font-poster text-4xl">{portfolio.emptyWork.title}</h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed">{portfolio.emptyWork.body}</p>
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <SampleCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

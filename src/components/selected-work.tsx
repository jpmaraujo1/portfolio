import { portfolio, type Project } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const linked = project.link.href.length > 0;

  return (
    <article className="work-card relative flex h-full flex-col rounded-3xl border border-white/35 p-5 text-[#f7fbff] sm:p-7">
      <p className="num-outline font-poster text-5xl leading-none">{number}</p>
      <h3 className="mt-6 font-poster text-4xl leading-none tracking-tight sm:text-5xl">{project.title}</h3>
      <p className="ink-muted mt-2 font-mono text-[10px] tracking-[0.22em] text-[#f4b390] uppercase">{project.tagline}</p>

      <dl className="mt-7 space-y-4">
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-white/65 uppercase">Impact</dt>
          <dd className="mt-1 font-poster text-2xl leading-snug">{project.impact}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-white/65 uppercase">Problem</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-white/65 uppercase">What I did</dt>
          <dd className="mt-1 text-base leading-relaxed">{project.contribution}</dd>
        </div>
        <div>
          <dt className="ink-muted font-mono text-[10px] tracking-[0.2em] text-white/65 uppercase">Stack</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="border border-current px-2 py-1 font-mono text-xs tracking-wide">
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {linked || project.note ? (
        <div className="mt-auto border-t border-current/20 pt-4">
          {linked ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="nav-link inline-flex min-h-11 items-center font-mono text-xs tracking-[0.18em] uppercase"
            >
              {project.link.label} ↗
            </a>
          ) : (
            <span className="ink-muted inline-flex min-h-11 items-center font-mono text-xs tracking-[0.18em] text-white/65 uppercase">
              {project.note}
            </span>
          )}
        </div>
      ) : null}
    </article>
  );
}

export function SelectedWork() {
  const projects = portfolio.projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/35 pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-white/65 uppercase">02 — 作品</p>
            <h2 className="mt-2 font-poster text-5xl leading-none sm:text-6xl">Projects</h2>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 90}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

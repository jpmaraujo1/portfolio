import { portfolio } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const email = portfolio.email.includes("@") ? portfolio.email : "";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-12 md:px-8 md:pb-16">
      <Reveal>
        <div className="poster work-card relative overflow-hidden p-6 sm:p-10">
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.28em] text-[#d5e4f7] uppercase">05 — 連絡</p>
            <h2 className="mt-2 font-poster text-5xl leading-none text-[#e8f0fa] sm:text-7xl">Contact</h2>
            {email ? (
              <p className="mt-6 font-poster text-3xl leading-none tracking-tight break-all text-white sm:text-5xl">{email}</p>
            ) : null}
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#e8f0fa]">
              Looking for a junior web development role, on-site in RS or remote.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {email ? (
                <Button asChild className="h-12 rounded-full! bg-white! px-6 tracking-[0.14em] text-[#10233f]! uppercase shadow-none hover:bg-white/90!">
                  <a href={`mailto:${email}`}>Send an email</a>
                </Button>
              ) : null}
              {portfolio.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link inline-flex min-h-11 items-center font-mono text-xs tracking-[0.2em] text-[#e8f0fa] uppercase"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

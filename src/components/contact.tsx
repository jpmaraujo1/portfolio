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
            <h2 className="mt-2 font-poster text-5xl leading-none text-[#e8f0fa] sm:text-7xl">Write.</h2>
            <p className="mt-6 font-poster text-4xl leading-none tracking-tight break-words text-white sm:text-5xl">{email || portfolio.emailLabel}</p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-[#e8f0fa]/70 uppercase">
              {email ? "Email" : "Placeholder"}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#e8f0fa]">
              {email
                ? "A note is enough. Role and impact are above."
                : "Add an address in the content file and this becomes a real link. Until then it is only a placeholder."}
            </p>
            <div className="mt-8">
              {email ? (
                <Button asChild className="h-12 rounded-full! bg-white! px-6 tracking-[0.14em] text-[#10233f]! uppercase shadow-none hover:bg-white/90!">
                  <a href={`mailto:${email}`}>{email}</a>
                </Button>
              ) : (
                <span className="inline-flex h-12 items-center rounded-full bg-white px-5 font-mono text-xs tracking-[0.18em] text-[#10233f] uppercase">
                  {portfolio.emailLabel}
                </span>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

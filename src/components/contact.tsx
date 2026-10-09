import { portfolio } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const email = portfolio.email.includes("@") ? portfolio.email : "";

  return (
    <section id="contact" className="relative bg-[#071428]">
      <div className="contact-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="text-[11px] tracking-[0.32em] text-[#c5d3e6] uppercase">05 — Contact</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-[#f7f3ea] sm:text-7xl">Write.</h2>
          <p className="mt-8 font-serif text-4xl text-[#f3e6c8] italic sm:text-6xl">
            {email || portfolio.emailLabel}
          </p>
          <p className="mt-3 text-[10px] tracking-[0.22em] text-[#f3e6c8]/80 uppercase">
            {email ? "Email" : "Placeholder"}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#d5e2f2]">
            {email
              ? "A note is enough. Role and impact are above."
              : "Add an address in the content file and this becomes a real link. Until then it is only a placeholder."}
          </p>
          <div className="mt-10">
            {email ? (
              <Button asChild className="h-12 rounded-sm px-6 text-base shadow-none">
                <a href={`mailto:${email}`}>{email}</a>
              </Button>
            ) : (
              <span className="inline-flex h-12 items-center border border-[#f3e6c8]/40 px-6 text-sm tracking-[0.16em] text-[#f3e6c8] uppercase">
                {portfolio.emailLabel}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

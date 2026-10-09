import { AboutSection } from "@/components/about-section";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="sky-wash pointer-events-none" aria-hidden />
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <AboutSection />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[#10233f]/20 px-5 py-6 text-center font-mono text-[11px] tracking-[0.18em] text-[#10233f] uppercase">
        編集 · src/content/portfolio.ts
      </footer>
    </>
  );
}

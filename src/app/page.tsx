import { AboutSection } from "@/components/about-section";
import { Atmosphere } from "@/components/atmosphere";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <div className="frame pointer-events-none fixed inset-3 z-40 hidden border border-white/10 md:block lg:inset-4" />
      <SiteHeader />
      <main>
        <Hero />
        <div className="sheet relative z-10">
          <SelectedWork />
          <AboutSection />
          <Skills />
        </div>
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs tracking-[0.18em] text-[#9eb0c9] uppercase">
        Edit the page in src/content/portfolio.ts
      </footer>
    </>
  );
}

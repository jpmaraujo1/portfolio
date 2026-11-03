"use client";

import type { Lang } from "@/lib/i18n";

function setLang(lang: Lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  root.lang = lang === "pt" ? "pt-BR" : "en";
  try {
    localStorage.setItem("lang", lang);
  } catch {
    // Storage blocked: the choice just won't be remembered.
  }
}

/** Styled like the nav links: active language in peach with the orange underline. */
export function LangToggle() {
  return (
    <div role="group" aria-label="Language / Idioma" className="lang-toggle flex min-h-11 items-center gap-1.5">
      <button type="button" data-for="pt" onClick={() => setLang("pt")} className="nav-link min-h-11 px-0.5 text-sm font-medium">
        PT
      </button>
      <span className="text-sm text-white/40" aria-hidden>
        /
      </span>
      <button type="button" data-for="en" onClick={() => setLang("en")} className="nav-link min-h-11 px-0.5 text-sm font-medium">
        EN
      </button>
      <span className="text-[11px] text-white/70" aria-hidden>
        言語
      </span>
    </div>
  );
}

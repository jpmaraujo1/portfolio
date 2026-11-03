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

export function LangToggle() {
  return (
    <div role="group" aria-label="Language / Idioma" className="lang-toggle flex rounded-full border border-white/45 p-0.5 font-mono text-[11px] tracking-[0.16em]">
      <button type="button" data-for="pt" onClick={() => setLang("pt")} className="min-h-9 rounded-full px-3">
        PT
      </button>
      <button type="button" data-for="en" onClick={() => setLang("en")} className="min-h-9 rounded-full px-3">
        EN
      </button>
    </div>
  );
}

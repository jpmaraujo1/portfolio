import type { L } from "@/lib/i18n";

/**
 * Renders both languages; CSS shows the one picked on <html data-lang>.
 * Keeps every component a server component and the page fully static.
 */
export function T({ v }: { v: L }) {
  return (
    <>
      <span data-l="en">{v.en}</span>
      <span data-l="pt" lang="pt-BR">
        {v.pt}
      </span>
    </>
  );
}

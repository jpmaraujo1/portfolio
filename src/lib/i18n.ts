/** A piece of text in both site languages. */
export type L = { en: string; pt: string };

export type Lang = keyof L;

/** Shorthand for writing bilingual strings inline. */
export const t = (en: string, pt: string): L => ({ en, pt });

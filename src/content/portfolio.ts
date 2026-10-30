/**
 * Owner-specific copy lives here. Everything on the page reads from this file.
 * Edit the strings below without touching the layout.
 */

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  /** Short line under the title, e.g. what kind of project it is. */
  tagline: string;
  impact: string;
  problem: string;
  contribution: string;
  stack: string[];
  /** Optional. Leave href empty for private projects. */
  link: ProjectLink;
  /** Shown instead of a link when the code is private. */
  note?: string;
};

export type Skill = {
  name: string;
  detail: string;
  /** Highlighted as the main skill. */
  primary?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Portfolio = {
  name: string;
  role: string;
  kicker: string;
  value: string;
  location: string;
  disciplines: string[];
  /** Leave empty to hide the email everywhere. */
  email: string;
  links: SocialLink[];
  about: string[];
  projects: Project[];
  skills: Skill[];
};

export const portfolio: Portfolio = {
  name: "João Pedro Araújo",
  role: "Web developer",
  kicker: "Portfolio",
  value:
    "Junior web developer focused on front-end. I also build automations and work with data.",
  location: "Rio Grande do Sul, Brazil · open to remote",
  disciplines: ["Web development", "Automation", "Data"],
  email: "",
  links: [{ label: "GitHub", href: "https://github.com/jpmaraujo1" }],
  about: [
    "I study at Unisinos and work as an administrative assistant at a school. I started programming there, when I built a system to generate the teachers' exams automatically.",
    "I like working on both the front-end and the back-end, and web design is my favorite part. I also work a lot with spreadsheets and data in my current job.",
  ],
  projects: [
    {
      title: "SAN",
      tagline: "Automated exam generator · in production",
      impact: "~150 exams generated. Made mandatory school-wide.",
      problem:
        "Teachers were assembling every exam by hand: copying questions, formatting, naming and organizing files. Slow, repetitive and easy to get wrong.",
      contribution:
        "Designed and built the whole system and its workflow, then improved it with feedback from the teachers using it every week.",
      stack: ["Google Apps Script", "Google Sheets", "Google Docs", "Google Drive"],
      link: { label: "", href: "" },
      note: "Private: runs inside the school's workspace",
    },
    {
      title: "This site",
      tagline: "Personal portfolio · design + build",
      impact: "Designed and built from scratch.",
      problem:
        "I wanted a portfolio with my own design instead of a template.",
      contribution:
        "Visual design (Japanese street-poster style over a cloud photo), responsive layout, animations that turn off for users with reduced-motion settings, and a single content file for all the text.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: { label: "Source on GitHub", href: "https://github.com/jpmaraujo1/portfolio" },
    },
  ],
  skills: [
    {
      name: "Web development",
      detail: "HTML, CSS, TypeScript, React, Next.js, Tailwind CSS. Learning back-end.",
      primary: true,
    },
    {
      name: "Automation",
      detail: "Google Apps Script, Google Sheets, Excel.",
    },
    {
      name: "Data",
      detail: "Spreadsheets and data analysis. Learning Python and SQL.",
    },
  ],
};

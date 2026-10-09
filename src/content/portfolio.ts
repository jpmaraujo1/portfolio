/**
 * Owner-specific copy lives here. Everything on the page reads from this file.
 * The strings below are placeholders on purpose — swap them for real details
 * without touching the layout.
 */

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  /** Layout samples show the card design. They are not case studies. */
  sample: boolean;
  impact: string;
  problem: string;
  contribution: string;
  stack: string[];
  link: ProjectLink;
};

export type Skill = {
  name: string;
  detail: string;
  /** The craft this site is meant to prove. */
  primary?: boolean;
};

export type Portfolio = {
  name: string;
  role: string;
  kicker: string;
  value: string;
  disciplines: string[];
  email: string;
  emailLabel: string;
  aboutLabel: string;
  about: string;
  projects: Project[];
  skills: Skill[];
  emptyWork: {
    title: string;
    body: string;
  };
};

export const portfolio: Portfolio = {
  name: "Your name",
  role: "Full-stack engineer",
  kicker: "blue hour",
  value:
    "Web development is the craft. Data science and machine learning sit beside it.",
  disciplines: ["Full-stack", "Data science", "Machine learning"],
  email: "",
  emailLabel: "Your email",
  aboutLabel: "Your bio",
  about:
    "Full-stack, data science, and machine learning. Read the web work first — this page is the proof.",
  projects: [
    {
      title: "Project one",
      sample: true,
      impact: "Your impact",
      problem: "The problem",
      contribution: "Your part",
      stack: ["Your stack"],
      link: { label: "Link", href: "" },
    },
    {
      title: "Project two",
      sample: true,
      impact: "Your impact",
      problem: "The problem",
      contribution: "Your part",
      stack: ["Your stack"],
      link: { label: "Link", href: "" },
    },
  ],
  skills: [
    {
      name: "Web development",
      detail: "The craft this page is here to prove.",
      primary: true,
    },
    {
      name: "Full-stack",
      detail: "From the interface through to the system behind it.",
    },
    {
      name: "Data science",
      detail: "Questions, data, and the judgment in between.",
    },
    {
      name: "Machine learning",
      detail: "Models in service of something a person can use.",
    },
  ],
  emptyWork: {
    title: "Your work",
    body: "Add two projects in the content file. The section is built as a pair, not a grid waiting for more.",
  },
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

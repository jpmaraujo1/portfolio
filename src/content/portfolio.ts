/**
 * Owner-specific copy lives here. Everything on the page reads from this file.
 * Every visible string is bilingual: t("English", "Português").
 * Edit the strings below without touching the layout.
 */

import { t, type L } from "@/lib/i18n";

export type ProjectLink = {
  label: L;
  href: string;
};

export type Project = {
  title: L;
  /** Short line under the title, e.g. what kind of project it is. */
  tagline: L;
  impact: L;
  problem: L;
  contribution: L;
  stack: string[];
  /** Optional. Leave href empty for private projects. */
  link: ProjectLink;
  /** Shown instead of a link when the code is private. */
  note?: L;
};

export type Skill = {
  name: L;
  detail: L;
  /** Highlighted as the main skill. */
  primary?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Portfolio = {
  name: string;
  /** The last word is highlighted in the hero. */
  role: L;
  kicker: L;
  value: L;
  location: L;
  disciplines: L[];
  /** Leave empty to hide the email everywhere. */
  email: string;
  links: SocialLink[];
  about: L[];
  projects: Project[];
  skills: Skill[];
};

export const portfolio: Portfolio = {
  name: "João Pedro Araujo",
  role: t("Web developer", "Desenvolvedor web"),
  kicker: t("Portfolio", "Portfólio"),
  value: t(
    "Junior web developer focused on front-end. I also build automations and work with data.",
    "Desenvolvedor web júnior com foco em front-end. Também crio automações e trabalho com dados.",
  ),
  location: t(
    "Rio Grande do Sul, Brazil · open to remote",
    "Rio Grande do Sul, Brasil · aberto a remoto",
  ),
  disciplines: [
    t("Web development", "Desenvolvimento web"),
    t("Automation", "Automação"),
    t("Data", "Dados"),
  ],
  email: "joaoparaujo.dev@gmail.com",
  links: [{ label: "GitHub", href: "https://github.com/jpmaraujo1" }],
  about: [
    t(
      "I study at Unisinos and work as an administrative assistant at a school. I started programming there, when I built a system to generate the teachers' exams automatically.",
      "Estudo na Unisinos e trabalho como assistente administrativo em uma escola. Comecei a programar lá, quando criei um sistema para gerar automaticamente as provas dos professores.",
    ),
    t(
      "I like working on both the front-end and the back-end, and web design is my favorite part. I also work a lot with spreadsheets and data in my current job.",
      "Gosto de trabalhar tanto no front-end quanto no back-end, e web design é a minha parte favorita. Também trabalho bastante com planilhas e dados no meu emprego atual.",
    ),
  ],
  projects: [
    {
      title: t("Named Exam System", "Sistema de Avaliações Nomeadas"),
      tagline: t(
        "Automated exam generator · in production",
        "Gerador automático de provas · em produção",
      ),
      impact: t(
        "~150 exams generated. Made mandatory school-wide.",
        "~150 provas geradas. Uso obrigatório em toda a escola.",
      ),
      problem: t(
        "Adapted exams stood out, exposing special ed students to mockery. Exams got mixed up, with regular students getting adapted ones and vice versa. And teachers' covers were inconsistent, often with broken formatting.",
        "Provas adaptadas se destacavam, expondo alunos do atendimento educacional especializado a deboche. Provas eram trocadas, com alunos regulares recebendo as adaptadas e vice-versa. Além disso, as capas dos professores eram inconsistentes, muitas vezes com a formatação quebrada.",
      ),
      contribution: t(
        "Designed and built the whole system: one form returns a print-ready PDF for the class, with a standardized named cover on every exam and the right version behind it, so adapted exams look like everyone else's. Improved it with weekly feedback from teachers.",
        "Projetei e desenvolvi o sistema inteiro: um único formulário gera um PDF da turma pronto para imprimir, com uma capa nominal padronizada em cada prova e a versão certa logo atrás, para que as provas adaptadas fiquem iguais às dos colegas. Aprimorei com o feedback semanal dos professores.",
      ),
      stack: ["Google Apps Script", "Google Forms", "Google Sheets", "pdf-lib"],
      link: { label: t("", ""), href: "" },
      note: t(
        "Private: runs inside the school's workspace",
        "Privado: roda no workspace da escola",
      ),
    },
    {
      title: t("This site", "Este site"),
      tagline: t(
        "Personal portfolio · design + build",
        "Portfólio pessoal · design + desenvolvimento",
      ),
      impact: t("Designed and built from scratch.", "Desenhado e desenvolvido do zero."),
      problem: t(
        "I wanted a portfolio with my own design instead of a template.",
        "Eu queria um portfólio com design próprio, em vez de um template.",
      ),
      contribution: t(
        "Visual design (Japanese street-poster style over a cloud photo), responsive layout, animations that turn off for users with reduced-motion settings, a PT/EN switch, and a single content file for all the text.",
        "Design visual (estilo cartaz de rua japonês sobre uma foto de nuvens), layout responsivo, animações que se desligam para quem prefere menos movimento, troca de idioma PT/EN e um único arquivo de conteúdo para todo o texto.",
      ),
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: {
        label: t("Source on GitHub", "Código no GitHub"),
        href: "https://github.com/jpmaraujo1/portfolio",
      },
    },
  ],
  skills: [
    {
      name: t("Web development", "Desenvolvimento web"),
      detail: t(
        "HTML, CSS, TypeScript, React, Next.js, Tailwind CSS. Learning back-end.",
        "HTML, CSS, TypeScript, React, Next.js, Tailwind CSS. Aprendendo back-end.",
      ),
      primary: true,
    },
    {
      name: t("Automation", "Automação"),
      detail: t(
        "Google Apps Script, Google Sheets, Excel.",
        "Google Apps Script, Google Sheets, Excel.",
      ),
    },
    {
      name: t("Data", "Dados"),
      detail: t(
        "Spreadsheets and data analysis. Learning Python and SQL.",
        "Planilhas e análise de dados. Aprendendo Python e SQL.",
      ),
    },
  ],
};

/** Interface labels that aren't owner content. */
export const ui = {
  forRecruiters: t("For recruiters", "Para recrutadores"),
  openToWork: t("Open to work", "Disponível"),
  viewWork: t("View selected work", "Ver projetos"),
  contact: t("Contact", "Contato"),
  index: t("Index", "Índice"),
  live: t("Live", "Ao vivo"),
  primary: t("Primary", "Principal"),
  projects: t("Projects", "Projetos"),
  impact: t("Impact", "Impacto"),
  problem: t("Problem", "Problema"),
  whatIDid: t("What I did", "O que fiz"),
  stack: t("Stack", "Stack"),
  about: t("About", "Sobre"),
  skills: t("Skills", "Habilidades"),
  lookingFor: t(
    "Looking for a junior web development role, on-site in RS or remote.",
    "Busco uma vaga de desenvolvedor web júnior, presencial no RS ou remota.",
  ),
  sendEmail: t("Send an email", "Enviar e-mail"),
  builtWith: t("Designed & built with Next.js", "Desenhado e desenvolvido com Next.js"),
  nav: {
    work: t("Work", "Projetos"),
    about: t("About", "Sobre"),
    skills: t("Skills", "Habilidades"),
    contact: t("Contact", "Contato"),
  },
};

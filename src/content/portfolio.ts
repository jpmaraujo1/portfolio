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
  role: t("Full-stack developer", "Desenvolvedor full-stack"),
  kicker: t("Portfolio", "Portfólio"),
  value: t(
    "Junior developer working across front-end and back-end. I build interfaces and the systems behind them: automations, integrations and data.",
    "Desenvolvedor júnior atuando no front-end e no back-end. Crio interfaces e os sistemas por trás delas: automações, integrações e dados.",
  ),
  location: t(
    "Rio Grande do Sul, Brazil · open to remote",
    "Rio Grande do Sul, Brasil · aberto a remoto",
  ),
  disciplines: [
    t("Web development", "Desenvolvimento web"),
    t("Back-end", "Back-end"),
    t("Automation & data", "Automação e dados"),
  ],
  email: "joaoparaujo.dev@gmail.com",
  links: [{ label: "GitHub", href: "https://github.com/jpmaraujo1" }],
  about: [
    t(
      "I study at Unisinos and work as an administrative assistant at a school. I started programming there, when I built a system to generate the teachers' exams automatically.",
      "Estudo na Unisinos e trabalho como assistente administrativo em uma escola. Comecei a programar lá, quando criei um sistema para gerar automaticamente as provas dos professores.",
    ),
    t(
      "I work on both ends: the interface people use, and the logic, integrations and data behind it. Web design is my favorite part. I also work a lot with spreadsheets and data in my current job.",
      "Trabalho nas duas pontas: a interface que as pessoas usam e a lógica, as integrações e os dados por trás dela. Web design é a minha parte favorita. Também trabalho bastante com planilhas e dados no meu emprego atual.",
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
  ],
  skills: [
    {
      name: t("Web development", "Desenvolvimento web"),
      detail: t(
        "HTML, CSS, TypeScript, React, Next.js, Tailwind CSS.",
        "HTML, CSS, TypeScript, React, Next.js, Tailwind CSS.",
      ),
      primary: true,
    },
    {
      name: t("Back-end", "Back-end"),
      detail: t(
        "Server-side JavaScript with Google Apps Script: event triggers, Google APIs (Drive, Docs, Gmail), PDF processing and input validation, running in production.",
        "JavaScript no servidor com Google Apps Script: gatilhos de eventos, APIs do Google (Drive, Docs, Gmail), processamento de PDF e validação de entradas, rodando em produção.",
      ),
    },
    {
      name: t("Automation & data", "Automação e dados"),
      detail: t(
        "Google Apps Script, Google Sheets and Excel for automating workflows and analyzing data. Learning Python and SQL.",
        "Google Apps Script, Google Sheets e Excel para automatizar processos e analisar dados. Aprendendo Python e SQL.",
      ),
    },
  ],
};

/** Interface labels that aren't owner content. */
export const ui = {
  forRecruiters: t("For recruiters", "Para recrutadores"),
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
    "I'm looking for a junior developer role, on-site in Rio Grande do Sul or remote. I work on both the front-end and the back-end, and I bring experience automating real workflows and working with data. If you have a role, a project or just a question, send me an email.",
    "Busco uma vaga de desenvolvedor júnior, presencial no Rio Grande do Sul ou remota. Trabalho tanto no front-end quanto no back-end, e trago experiência automatizando processos reais e trabalhando com dados. Se tiver uma vaga, um projeto ou só uma dúvida, me mande um e-mail.",
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

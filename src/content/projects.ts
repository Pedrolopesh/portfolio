/**
 * Fonte única dos projetos do portfólio — usada na landing /Project, na
 * prévia da Home e no rodapé. Pra adicionar um projeto, basta incluir um
 * item aqui (textos em PT e EN).
 *
 * Projetos que viraram post no blog apontam pra ele em `blogSlug`.
 * Toro, BLUE e Genesis Bank ficam só no blog (não aparecem aqui).
 */

export type ProjectCategory = "produtos" | "trabalho" | "pessoais" | "faculdade" | "design";

export type ProjectStatus = "live" | "dev" | "archived" | "concept";

type Localized = { pt: string; en: string };

export type Project = {
  slug: string;
  name: string;
  tagline: Localized;
  category: ProjectCategory;
  status: ProjectStatus;
  platforms: string[];
  stack: string[];
  /** site/app no ar ou case público (Behance etc.) */
  url?: string;
  /** post do blog com a história do projeto */
  blogSlug?: string;
  /** print do produto (cards grandes) */
  image?: string;
  /** ícone quadrado; sem ícone, o card mostra um monograma */
  icon?: string;
  /** cor do monograma / brilho do card */
  accent: string;
  isNew?: boolean;
  highlight?: boolean;
};

export const PROJECTS: Project[] = [
  // ---------- produtos (novos) ----------
  {
    slug: "next-journey",
    name: "Next Journey",
    tagline: {
      pt: "Lista de tarefas gamificada: diárias, tarefas e hábitos rendem EXP e moedas e fazem seu personagem em pixel art avançar numa história em capítulos.",
      en: "A gamified to-do list: dailies, tasks and habits earn EXP and coins and move your pixel art character through a story told in chapters.",
    },
    category: "produtos",
    status: "dev",
    platforms: ["iOS", "Android"],
    stack: ["Expo", "React Native", "NestJS", "Prisma", "PostgreSQL"],
    icon: "/img/projects/live/next-journey-icon.webp",
    accent: "#7C3AED",
    isNew: true,
    highlight: true,
  },
  {
    slug: "we-party",
    name: "We Party",
    tagline: {
      pt: "A rede social de quem ama eventos: descubra o que está rolando perto de você e conecte-se com quem também vai.",
      en: "The social network for people who love events: find what's happening near you and connect with who's going.",
    },
    category: "produtos",
    status: "live",
    platforms: ["Web"],
    stack: ["Vue 3", "Vuetify", "NestJS", "Prisma"],
    url: "https://www.wepartyapp.com",
    image: "/img/projects/live/we-party.webp",
    icon: "/img/projects/live/we-party-icon.webp",
    accent: "#FF6B57",
    isNew: true,
  },
  {
    slug: "lelume",
    name: "Lelume",
    tagline: {
      pt: "Biblioteca digital por assinatura: livros digitais, audiolivros e conteúdos educacionais num só lugar.",
      en: "A subscription digital library: ebooks, audiobooks and educational content in one place.",
    },
    category: "produtos",
    status: "live",
    platforms: ["Web"],
    stack: ["Next.js", "React", "Tailwind"],
    url: "https://lelume.com.br",
    image: "/img/projects/live/lelume.webp",
    accent: "#1E5BD8",
    isNew: true,
  },
  {
    slug: "bdr-app",
    name: "BDR APP",
    tagline: {
      pt: "A plataforma das batalhas de rima e poesia: da inscrição ao campeão, numa tela só — gratuita pra organizadores e participantes.",
      en: "The platform for rap battles and slam poetry: from sign-up to champion on a single screen — free for organizers and participants.",
    },
    category: "produtos",
    status: "live",
    platforms: ["Web"],
    stack: ["React", "Vite", "Express", "Prisma", "PostgreSQL"],
    url: "https://www.bdrapp.com.br/institucional",
    image: "/img/projects/live/bdr-app.webp",
    icon: "/img/projects/live/bdr-app-icon.webp",
    accent: "#E11D2E",
    isNew: true,
  },
  {
    slug: "atelie-maria-mariana",
    name: "Ateliê Maria Mariana",
    tagline: {
      pt: "E-commerce de têxteis artesanais para a mesa: jogos americanos e trilhos tecidos à mão.",
      en: "E-commerce for handmade table textiles: placemats and table runners woven by hand.",
    },
    category: "produtos",
    status: "live",
    platforms: ["Web"],
    stack: ["Next.js", "React"],
    url: "https://ateliemariamariana.com.br",
    image: "/img/projects/live/atelie-maria-mariana.webp",
    accent: "#1F3A6E",
    isNew: true,
  },

  // ---------- trabalho ----------
  {
    slug: "electrolux",
    name: "Electrolux",
    tagline: {
      pt: "Migração gradual da loja online para VTEX IO headless, página por página, de olho na conversão.",
      en: "Gradual migration of the online store to headless VTEX IO, page by page, watching conversion.",
    },
    category: "trabalho",
    status: "live",
    platforms: ["Web"],
    stack: ["VTEX IO", "React", "E-commerce"],
    url: "https://loja.electrolux.com.br/",
    blogSlug: "migrando-a-loja-da-electrolux-para-vtex-io",
    accent: "#3B5BDB",
  },

  // ---------- pessoais ----------
  {
    slug: "the-chat",
    name: "The Chat",
    tagline: {
      pt: "Chat em tempo real com Socket.IO, rotas protegidas por token e upload de imagens.",
      en: "Real-time chat with Socket.IO, token-protected routes and image uploads.",
    },
    category: "pessoais",
    status: "live",
    platforms: ["Web"],
    stack: ["Node.js", "Socket.IO", "Express"],
    url: "https://thechat-app.netlify.app",
    blogSlug: "the-chat-comunicacao-em-tempo-real-com-socket-io",
    accent: "#64748B",
  },
  {
    slug: "triper",
    name: "Triper",
    tagline: {
      pt: "Site de viagens feito para estudar Next.js, animações CSS e código limpo.",
      en: "A travel website built to study Next.js, CSS animations and clean code.",
    },
    category: "pessoais",
    status: "live",
    platforms: ["Web"],
    stack: ["Next.js", "React", "CSS"],
    url: "https://tripper-landing.netlify.app",
    blogSlug: "triper-estudando-nextjs-e-animacoes-css",
    accent: "#0EA5E9",
  },
  {
    slug: "pet-system",
    name: "PetSystem",
    tagline: {
      pt: "Meu primeiro projeto: um ERP de pet shop feito só com HTML, CSS e JavaScript.",
      en: "My first project: a pet shop ERP built with plain HTML, CSS and JavaScript.",
    },
    category: "pessoais",
    status: "archived",
    platforms: ["Web"],
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://pet-sytem.netlify.app/pet-system-website/home/home",
    blogSlug: "petsystem-meu-primeiro-projeto",
    accent: "#F59E0B",
  },

  // ---------- faculdade ----------
  {
    slug: "link-leito",
    name: "Link Leito",
    tagline: {
      pt: "Painel para medir e reduzir o tempo de espera em hospitais durante a pandemia.",
      en: "A dashboard to measure and reduce hospital waiting times during the pandemic.",
    },
    category: "faculdade",
    status: "archived",
    platforms: ["Web"],
    stack: ["Dashboard", "Dados", "Saúde"],
    url: "https://linkleitoweb.netlify.app/#/",
    blogSlug: "link-leito-tecnologia-contra-filas-em-hospitais",
    accent: "#14B8A6",
  },
  {
    slug: "quest-game",
    name: "Quest Game",
    tagline: {
      pt: "Quiz competitivo com ranking, login só com nickname e pontuação por dificuldade.",
      en: "A competitive quiz with a leaderboard, nickname-only sign-in and difficulty-based scoring.",
    },
    category: "faculdade",
    status: "live",
    platforms: ["Web"],
    stack: ["Vue.js", "Node.js", "Express"],
    url: "https://quest-game.netlify.app",
    blogSlug: "quest-game-pontuacao-por-dificuldade",
    accent: "#22C55E",
  },

  // ---------- design ----------
  {
    slug: "community-alert",
    name: "Community Alert",
    tagline: {
      pt: "App para alertar comunidades sobre catástrofes ecológicas, guiado pelas regras de Shneiderman.",
      en: "An app to alert communities about ecological disasters, guided by Shneiderman's golden rules.",
    },
    category: "design",
    status: "concept",
    platforms: ["Mobile", "Figma"],
    stack: ["UX/UI", "Design system"],
    url: "https://www.behance.net/gallery/127210581/Community-Alert",
    blogSlug: "community-alert-ux-para-alertas-de-catastrofes",
    accent: "#EC4899",
  },
  {
    slug: "match-coder",
    name: "Match Coder",
    tagline: {
      pt: "E se encontrar vaga em TI funcionasse como um match? Protótipo para devs e empresas.",
      en: "What if finding a tech job worked like a match? A prototype for devs and companies.",
    },
    category: "design",
    status: "concept",
    platforms: ["Mobile", "Figma"],
    stack: ["UX/UI", "Personas"],
    url: "https://www.behance.net/gallery/127211141/Match-Coder",
    blogSlug: "match-coder-um-tinder-para-vagas-de-ti",
    accent: "#DC2626",
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    tagline: {
      pt: "Sistema para ONGs de proteção animal, com alertas de animais abandonados e adoção.",
      en: "A system for animal protection NGOs, with abandoned-animal alerts and adoption.",
    },
    category: "design",
    status: "concept",
    platforms: ["Mobile", "Figma"],
    stack: ["UX/UI", "Requisitos"],
    url: "https://www.behance.net/gallery/127210829/Pet-care",
    blogSlug: "pet-care-ux-para-ongs-de-protecao-animal",
    accent: "#A855F7",
  },
];

export const CATEGORY_ORDER: ProjectCategory[] = [
  "produtos",
  "trabalho",
  "pessoais",
  "faculdade",
  "design",
];

export const highlightProject = PROJECTS.find((p) => p.highlight)!;
export const liveProducts = PROJECTS.filter(
  (p) => p.category === "produtos" && p.status === "live" && p.image
);

export type UseCase = {
  slug: string;
  emoji: string;
  title: string;
  subtitle?: string;
  summary: string;
  period?: string;
  languages?: string[];
  tools?: string[];
  skills?: string[];
  tags: string[];
  bullets?: string[];
  github?: string;
  githubSecondary?: string;
};

export const useCases: UseCase[] = [
  {
    slug: "escape-room",
    emoji: "🗝️",
    title: "Escape Room",
    subtitle: "Mini-projet Python",
    summary:
      "Projet orienté logique et programmation Python autour d’un univers type escape game, avec gestion de séquences, d’actions et de progression utilisateur.",
    period: "2023",
    languages: ["Python"],
    tools: ["Python", "VS Code", "GitHub"],
    skills: [
      "Problem solving",
      "Game logic",
      "Algorithmic thinking",
      "Code structuring",
    ],
    tags: ["Python", "Logic", "Game", "Problem Solving"],
    bullets: [
      "Conception d’une expérience type escape room en Python avec logique de progression et conditions d’accès.",
      "Structuration du code autour d’actions utilisateur, de règles métiers simples et de scénarios interactifs.",
      "Travail sur la lisibilité, la logique de séquencement et la gestion de cas d’usage dans un mini-projet orienté apprentissage.",
    ],
    github:
      "https://github.com/jmpbusiness2023-commits/Week-1-Mini-Project---Python-Quest",
  },
  {
    slug: "shark-attack-analysis",
    emoji: "🦈",
    title: "Shark Attack Analysis",
    subtitle: "Nettoyage & exploration de données",
    summary:
      "Travail d’exploration, de nettoyage et d’analyse de données à partir d’un dataset sur les attaques de requins, avec focus sur la structuration, la qualité et l’interprétation.",
    period: "2023",
    languages: ["Python"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    skills: [
      "Data cleaning",
      "Exploratory data analysis",
      "Data quality",
      "Insight extraction",
    ],
    tags: ["Python", "Pandas", "Data Cleaning", "EDA"],
    bullets: [
      "Nettoyage d’un dataset complexe avec traitement des valeurs manquantes, homogénéisation de colonnes et clarification des données exploitables.",
      "Exploration des tendances principales liées aux attaques de requins à partir d’une lecture structurée des variables.",
      "Mise en avant d’insights et de patterns via une approche d’analyse exploratoire orientée compréhension business.",
    ],
    github:
      "https://github.com/jmpbusiness2023-commits/Week-2-Mini-Project---Shark-Attacks",
  },
  {
    slug: "movie-market-analysis",
    emoji: "🎬",
    title: "Movie Market Analysis",
    subtitle: "Analyse marché cinéma",
    summary:
      "Analyse du marché du cinéma et de ses dynamiques de performance, avec une approche orientée business, visualisation et lecture des tendances sectorielles.",
    period: "2023",
    languages: ["Python", "SQL"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    skills: [
      "Market analysis",
      "Business thinking",
      "Data storytelling",
      "Visualization",
    ],
    tags: ["Data Analysis", "Visualization", "Business", "Market"],
    bullets: [
      "Étude des dynamiques du marché du cinéma à partir de jeux de données orientés performance et tendances sectorielles.",
      "Lecture analytique des facteurs pouvant influencer le succès ou la trajectoire commerciale d’un film.",
      "Construction d’une restitution claire pour transformer des données brutes en angles de lecture exploitables.",
    ],
    github:
      "https://github.com/jmpbusiness2023-commits/Week-3-Project--1",
    githubSecondary:
      "https://github.com/jmpbusiness2023-commits/Week-4--Mini-Project",
  },
  {
    slug: "vanguard-ab-test",
    emoji: "🧪",
    title: "Vanguard A/B Test",
    subtitle: "Expérimentation & statistique",
    summary:
      "Projet d’A/B testing avec analyse comparative de variantes, interprétation des résultats et lecture statistique orientée aide à la décision.",
    period: "2023",
    languages: ["Python", "SQL"],
    tools: ["Python", "Pandas", "Statistics", "GitHub"],
    skills: [
      "A/B testing",
      "Statistical reasoning",
      "Decision making",
      "Experiment analysis",
    ],
    tags: ["A/B Testing", "Statistics", "Experimentation", "Decision Making"],
    bullets: [
      "Analyse comparative de variantes dans une logique d’expérimentation produit ou marketing.",
      "Lecture statistique des écarts observés afin d’évaluer la pertinence d’un changement ou d’une optimisation.",
      "Traduction des résultats en recommandations orientées décision et performance.",
    ],
    github:
      "https://github.com/jmpbusiness2023-commits/Project-2--Week_5_6",
  },
  {
    slug: "final-project",
    emoji: "🎮",
    title: "Final Project",
    subtitle: "Video Game Market Analysis",
    summary:
      "Projet final de market analysis sur l’industrie du jeu vidéo, avec structuration des données, lecture de marché, angles d’analyse et restitution claire des insights.",
    period: "2023",
    languages: ["Python", "SQL"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    skills: [
      "Market analysis",
      "Data storytelling",
      "Strategic thinking",
      "Insight generation",
    ],
    tags: ["Final Project", "Market Analysis", "Data", "Storytelling"],
    bullets: [
      "Analyse du marché du jeu vidéo avec une approche data-driven centrée sur les tendances, volumes et dynamiques sectorielles.",
      "Structuration des données et sélection d’angles d’analyse pertinents pour dégager des insights compréhensibles.",
      "Restitution d’une vision claire et exploitable mêlant lecture marché, analyse et synthèse.",
    ],
    github:
      "https://github.com/jmpbusiness2023-commits/Final-Project--Video-Game-Market-Analysis",
  },
];

export function getUseCaseBySlug(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
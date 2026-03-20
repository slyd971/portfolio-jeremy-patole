export type UseCase = {
  slug: string;
  title: string;
  emoji: string;
  period: string;
  url: string;
  tags: string[];
  languages: string[];
  tools: string[];
  skills: string[];
  summary: string;
  bullets: string[];
};

export const useCases: UseCase[] = [
  {
    slug: "video-games-market-analysis",
    title: "Final Project",
    emoji: "🏁",
    period: "November 17, 2025 → December 1, 2025",
    url: "github.com/jmp...alysis",
    tags: ["Python", "CSV", "Canva", "Research", "API", "Tableau"],
    languages: ["Python", "English"],
    tools: ["Notion", "Trello", "Tableau", "Canva", "VS Code"],
    skills: ["Project Management", "Database", "No-Code"],
    summary:
      "Analyse du marché du jeu vidéo avec une approche data et business.",
    bullets: [
      "Analyse du marché via la base RAWG",
      "Exploration de +30 000 jeux",
      "Début d’un modèle prédictif sur le succès des jeux",
    ],
  },
  {
    slug: "vanguard-ab-test",
    title: "Vanguard A/B Test",
    emoji: "🧪",
    period: "November 3, 2025 → November 14, 2025",
    url: "github.com/jmp...ek_5_6",
    tags: ["Tableau", "Python", "CSV"],
    languages: ["Python", "English"],
    tools: ["GitHub", "VS Code", "Tableau"],
    skills: ["A/B Testing", "Data Analysis"],
    summary:
      "Comparaison de deux parcours clients pour valider un redesign.",
    bullets: [
      "Comparaison de 2 segments utilisateurs",
      "Analyse de performance",
      "Reco business",
    ],
  },
  {
    slug: "movies-industry-market-analysis",
    title: "Movies Market Analysis",
    emoji: "🎬",
    period: "October 20, 2025 → October 24, 2025",
    url: "github.com/jmp...ect--1",
    tags: ["Python", "CSV", "Research"],
    languages: ["English"],
    tools: ["Python", "VS Code"],
    skills: ["Market Analysis", "Insights"],
    summary:
      "Comprendre les facteurs de succès des films.",
    bullets: [
      "Analyse audience",
      "Identification des patterns de succès",
      "Lecture business des données",
    ],
  },
  {
    slug: "shark-attack-analysis",
    title: "Shark Attack Analysis",
    emoji: "🦈",
    period: "October 13, 2025 → October 17, 2025",
    url: "github.com/jmp...ttacks",
    tags: ["Python", "CSV"],
    languages: ["English"],
    tools: ["VS Code"],
    skills: ["Data Exploration"],
    summary:
      "Analyse d’un dataset pour générer des hypothèses business.",
    bullets: [
      "Exploration dataset",
      "Hypothèses data",
      "Projection usage business",
    ],
  },
  {
    slug: "escape-room-game-app",
    title: "Escape Room Game App",
    emoji: "🎮",
    period: "October 6, 2025 → October 10, 2025",
    url: "github.com/jmp...-Quest",
    tags: ["Python"],
    languages: ["Python", "English"],
    tools: ["VS Code"],
    skills: ["Development", "Logic"],
    summary:
      "Création d’un jeu type escape room en Python.",
    bullets: [
      "Développement logique du jeu",
      "Gestion des erreurs",
      "Tests et robustesse",
    ],
  },
];

export function getUseCaseBySlug(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
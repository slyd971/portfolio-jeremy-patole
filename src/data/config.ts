import type { PortfolioConfig, PortfolioUseCase } from "./schema";

const useCases: PortfolioUseCase[] = [
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

export const portfolioConfig: PortfolioConfig = {
  seo: {
    lang: "fr",
    title: "Jérémy-Morgan PATOLE | Data Analyst & Ingénieur aéronautique",
    description:
      "Portfolio de Jérémy-Morgan PATOLE, data analyst avec socle ingénierie aéronautique : Python, SQL, Power BI, Tableau et projets data.",
    siteUrl: "https://portfolio-jeremy-patole.vercel.app",
    keywords: [
      "Jérémy-Morgan PATOLE",
      "Data Analyst",
      "Data Analyste",
      "Ingénieur aéronautique",
      "Portfolio data analyst",
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Aéronautique",
    ],
  },
  identity: {
    fullName: "Jérémy-Morgan PATOLE",
    initials: "JP",
    title: "Data Analyste • Ingénieur aéronautique • DJ",
  },
  social: {
    email: "jerempatole@live.fr",
    linkedin: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/",
    resumeHref: "/cv-jeremy-morgan-patole-2026.pdf",
    phone: "07 69 28 00 57",
  },
  navigation: [
    { label: "Profil", href: "#profil" },
    { label: "Expertise", href: "#expertise" },
    { label: "Expériences", href: "#experiences" },
    { label: "Projets", href: "#projects" },
    { label: "Environnements", href: "#clients" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Disponible • Data analyst & ingénierie aéronautique",
    heading: {
      prefix: "“Transformer les données",
      muted: "et les contraintes techniques",
      accent: "en décisions claires.”",
    },
    description:
      "Profil data en montée d’expertise, construit sur un socle d’ingénierie aéronautique. J’allie analyse, rigueur technique et sens du terrain pour structurer l’information et fiabiliser la décision.",
    highlights: [
      "Analyse de données",
      "Ingénierie aéronautique",
      "Exécution terrain",
    ],
    trustStatement:
      "Une trajectoire qui combine rigueur technique, capacité d’analyse et montée en puissance vers la data et l’IA.",
    primaryCtaLabel: "Échanger par email",
    secondaryCtaLabel: "Voir LinkedIn",
    downloadCtaLabel: "Télécharger le CV",
    scrollLabel: "Découvrir le profil",
    scrollTarget: "#profil",
    stats: [
      { value: "3+", label: "années en environnement technique" },
      { value: "3", label: "domaines : data, aéronautique, industrie" },
      { value: "FR / EN", label: "anglais courant professionnel" },
      { value: "Hybrid", label: "analyse, rigueur, exécution" },
    ],
    profileCard: {
      overline: "Positionnement",
      title: "Profil hybride",
      focusLabel: "Focus",
      focusValue: "Data • Technique • Industrie",
    },
    pillars: [
      {
        icon: "vision",
        title: "Analyse",
        text: "Capacité à structurer l’information et faire émerger des insights utiles.",
      },
      {
        icon: "delivery",
        title: "Exécution",
        text: "Concrétisation des sujets dans des environnements normés et exigeants.",
      },
      {
        icon: "performance",
        title: "Évolution",
        text: "Montée en compétence continue entre ingénierie, data et IA.",
      },
    ],
    photo: {
      src: "/hero-jeremy.jpeg",
      alt: "Portrait de Jérémy-Morgan Patole",
    },
  },
  about: {
    id: "profil",
    label: "Profil",
    title: "Un socle ingénierie solide, prolongé par la data et l’IA",
    paragraphs: [
      "Issu d’un parcours en mécanique des structures composites orienté aéronautique, Jérémy-Morgan a développé une forte culture de la rigueur, de l’analyse et du respect des standards techniques.",
      "Aujourd’hui, il élargit ce socle avec une reconversion active vers la data et l’intelligence artificielle, en s’appuyant sur des outils comme Python, MySQL, Tableau et Power BI pour structurer, analyser et valoriser l’information afin de transformer des insights en décisions business claires.",
    ],
    highlights: [
      {
        icon: "dual",
        title: "Industrie de haut niveau",
        text: "Expériences chez DASSAULT AVIATION, ALTEN et STELLANTIS sur des environnements techniques exigeants.",
      },
      {
        icon: "transverse",
        title: "Data + technique",
        text: "Un profil qui combine logique d’ingénierie, outils data et vraie culture de la rigueur.",
      },
      {
        icon: "senior",
        title: "Profil évolutif",
        text: "Capable de passer de l’analyse à l’exécution avec une forte autonomie et une vraie discipline.",
      },
    ],
  },
  experiences: {
    id: "experiences",
    label: "Expériences",
    title: "Expériences professionnelles",
    items: [
      {
        period: "Octobre 2022 — Mars 2025",
        role: "Aménageur Électrique sur RAFALE",
        company: "ALTEN SA • DASSAULT AVIATION • Saint-Cloud",
        badge: "RAFALE • Harnais • PLM",
        summary:
          "Intervention sur l’aménagement électrique du RAFALE dans un environnement aéronautique exigeant, structuré autour des standards de conception DASSAULT AVIATION.",
        points: [
          "Aménagement minutieux des harnais de câblages et des équipements du RAFALE Marin, Monoplace et Biplace.",
          "Création et modification de supports dans le respect des standards et normes de conception propres au RAFALE, incluant les normes militaires.",
          "Mise et gestion de la liasse avion, configuration avion et suivi documentaire sur logiciel de PLM.",
        ],
      },
      {
        period: "Février 2022 — Août 2022",
        role: "Ingénieur d’étude stagiaire",
        company: "STELLANTIS • Centre Technique de Vélizy-Villacoublay",
        badge: "Calcul mécanique • Statistiques",
        summary:
          "Stage d’ingénieur d’étude centré sur l’analyse de calculs mécaniques et statistiques appliqués aux systèmes de direction automobile.",
        points: [
          "Analyse de calculs mécaniques et statistiques afin d’optimiser le dimensionnement mécanique des systèmes de direction.",
          "Travail sur la robustesse du modèle dans un contexte d’ingénierie automobile.",
          "Interprétation des résultats pour contribuer à l’amélioration technique des modèles de dimensionnement.",
        ],
      },
      {
        period: "Mai 2019 — Juil. 2019",
        role: "Ingénieur CAO stagiaire",
        company: "Laboratoire Énergétique Mécanique Électromagnétisme • UFR SITEC",
        badge: "CAO • Voilure",
        summary:
          "Stage orienté conception et modélisation CAO dans un environnement universitaire et technique spécialisé.",
        points: [
          "Modélisation CAO de la voilure du PILATUS Turbo-Porter.",
          "Application des bases de conception mécanique à une structure aéronautique.",
        ],
      },
    ],
  },
  skills: {
    id: "expertise",
    label: "Expertise",
    title: "Les briques du profil",
    badge: "Data • Technique • Industrie",
    groups: [
      {
        title: "Compétences clés",
        items: [
          "Analyse de données",
          "Python",
          "MySQL",
          "Tableau",
          "Power BI",
          "Visualisation de données",
        ],
      },
      {
        title: "Environnement technique",
        items: [
          "Études mécaniques",
          "Lecture d’environnements techniques",
          "Respect des normes & standards",
          "CAO / CATIA V5 / VPM",
          "Gestion documentaire / PLM",
          "Résolution de problèmes",
        ],
      },
    ],
  },
  projects: {
    id: "projects",
    label: "Projets / axes forts",
    title: "Quelques marqueurs du parcours",
    description:
      "Des marqueurs de parcours qui relient reconversion data, expérience industrielle et capacité d’analyse appliquée.",
    items: [
      {
        title: "Transition vers la Data & l’IA",
        category: "Reconversion",
        description:
          "Parcours de montée en compétences en Python, MySQL, Power BI, Tableau et développement orienté intelligence artificielle.",
        tags: ["Data", "IA", "Python", "Reconversion"],
        results: ["Montée en compétences structurée vers les métiers data."],
        ctaLabel: "Voir le projet",
      },
      {
        title: "Configuration & intégration RAFALE",
        category: "Aéronautique",
        description:
          "Intervention sur le cheminement de harnais, l’intégration d’équipements et la gestion de configuration dans un cadre normé.",
        tags: ["Aéronautique", "PLM", "Configuration", "Normes"],
        results: ["Intervention dans un programme critique hautement structuré."],
        ctaLabel: "Voir le projet",
      },
      {
        title: "Optimisation mécanique chez STELLANTIS",
        category: "Analyse",
        description:
          "Analyse de calculs mécaniques et statistiques pour fiabiliser le dimensionnement et la robustesse système.",
        tags: ["Analyse", "Statistiques", "Calcul", "Automobile"],
        results: ["Lecture analytique appliquée à des problématiques d’ingénierie."],
        ctaLabel: "Voir le projet",
      },
    ],
  },
  environments: {
    id: "clients",
    label: "Environnements",
    title: "Des contextes exigeants et structurants",
    description:
      "Industrie, aéronautique, automobile, formation technique et reconversion data : un parcours qui montre une vraie capacité d’adaptation et une forte culture du cadre.",
    items: [
      "DASSAULT AVIATION",
      "ALTEN",
      "STELLANTIS",
      "IRON HACK",
      "UFR SITEC",
    ],
  },
  useCases: {
    id: "use-cases",
    label: "Use Cases",
    title: "Cas concrets & projets data",
    description:
      "Une sélection de projets orientés analyse, expérimentation, exploration de données et restitution claire, avec accès direct aux repos GitHub.",
    ctaLabel: "Voir le détail",
    items: useCases,
  },
  stack: {
    id: "stack",
    label: "Stack",
    title: "Outils, logiciels et environnement de travail",
    badge: "Français • Anglais courant • Espagnol basique",
    items: [
      "Python",
      "VS Code",
      "MySQL",
      "Tableau",
      "Power BI",
      "MS Office",
      "Canva",
      "Notion",
      "Trello",
      "CATIA V5",
      "VPM",
      "PLM",
    ],
  },
  contact: {
    id: "contact",
    label: "Contact",
    title: "À la recherche d’un profil analytique, technique et adaptable ?",
    description:
      "Disponible pour échanger autour d’opportunités en data, analyse, coordination technique ou environnements industriels exigeants.",
    emailCtaLabel: "jerempatole@live.fr",
    linkedinCtaLabel: "Voir LinkedIn",
    resumeCtaLabel: "Télécharger CV",
    mobileCtaLabel: "Contact",
    phoneCtaLabel: "07 69 28 00 57",
    secondaryInfo: "Paris 11e • DJ en parallèle",
  },
};

export const useCaseItems = portfolioConfig.useCases?.items ?? [];

export function getUseCaseBySlug(slug: string) {
  return useCaseItems.find((item) => item.slug === slug);
}

export type NavigationItem = {
  label: string;
  href: string;
};

export type PortfolioUseCase = {
  slug: string;
  emoji?: string;
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

export type PortfolioConfig = {
  seo: {
    lang: string;
    title: string;
    description: string;
    siteUrl: string;
    keywords: string[];
  };
  identity: {
    fullName: string;
    initials: string;
    title: string;
  };
  social: {
    email: string;
    linkedin: string;
    resumeHref: string;
    phone?: string;
  };
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    heading: {
      prefix: string;
      muted: string;
      accent: string;
    };
    description: string;
    highlights: string[];
    trustStatement: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    downloadCtaLabel: string;
    scrollLabel: string;
    scrollTarget: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    profileCard: {
      overline: string;
      title: string;
      focusLabel: string;
      focusValue: string;
    };
    pillars: Array<{
      icon: "vision" | "delivery" | "performance";
      title: string;
      text: string;
    }>;
    photo?: {
      src?: string;
      alt: string;
    };
  };
  about: {
    id: string;
    label: string;
    title: string;
    paragraphs: string[];
    highlights: Array<{
      icon: "dual" | "transverse" | "senior";
      title: string;
      text: string;
    }>;
  };
  experiences: {
    id: string;
    label: string;
    title: string;
    items: Array<{
      period: string;
      role: string;
      company: string;
      badge: string;
      summary: string;
      points: string[];
    }>;
  };
  skills: {
    id: string;
    label: string;
    title: string;
    badge: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  projects: {
    id: string;
    label: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      category: string;
      description: string;
      tags: string[];
      results: string[];
      ctaLabel: string;
      link?: string;
    }>;
  };
  environments?: {
    id: string;
    label: string;
    title: string;
    description: string;
    items: string[];
  };
  useCases?: {
    id: string;
    label: string;
    title: string;
    description: string;
    ctaLabel?: string;
    items: PortfolioUseCase[];
  };
  stack: {
    id: string;
    label: string;
    title: string;
    badge: string;
    items: string[];
  };
  education?: {
    id: string;
    label: string;
    title: string;
    educationTitle: string;
    certificationsTitle: string;
    educationItems: Array<{
      period: string;
      title: string;
      school: string;
      description: string;
    }>;
    certificationItems: Array<{
      year: string;
      title: string;
      issuer: string;
      description: string;
    }>;
  };
  contact: {
    id: string;
    label: string;
    title: string;
    description: string;
    emailCtaLabel: string;
    linkedinCtaLabel: string;
    resumeCtaLabel: string;
    mobileCtaLabel: string;
    phoneCtaLabel?: string;
    secondaryInfo?: string;
  };
};

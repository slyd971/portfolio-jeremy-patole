"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCases } from "@/data/useCases";
import {
  Mail,
  Briefcase,
  BadgeCheck,
  Building2,
  Trophy,
  Sparkles,
  Cpu,
  Languages,
  Music2,
  Menu,
  X,
  Github,
  Linkedin,
} from "lucide-react";

export default function Page() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setIsHeaderVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY) < 8) {
        return;
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const stats = [
    { value: "3+", label: "années d’expérience en environnement technique" },
    { value: "3", label: "univers croisés : data, aéronautique, terrain" },
    { value: "FR / EN", label: "profil bilingue opérationnel" },
    { value: "Hybrid", label: "analyse, rigueur, exécution" },
  ];

  const highlights = [
    {
      icon: <Building2 size={18} />,
      title: "Industrie de haut niveau",
      text: "Expériences chez DASSAULT AVIATION, ALTEN et STELLANTIS sur des environnements techniques exigeants.",
    },
    {
      icon: <Cpu size={18} />,
      title: "Data + technique",
      text: "Un profil qui combine logique d’ingénierie, outils data et vraie culture de la rigueur.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Profil évolutif",
      text: "Capable de passer de l’analyse à l’exécution avec une forte autonomie et une vraie discipline.",
    },
  ];

  const expertise = [
    "Analyse de données",
    "Python",
    "MySQL",
    "Tableau",
    "Power BI",
    "Visualisation de données",
    "Études mécaniques",
    "Lecture d’environnements techniques",
    "Respect des normes & standards",
    "CAO / CATIA V5 / VPM",
    "Gestion documentaire / PLM",
    "Résolution de problèmes",
  ];

  const experiences = [
    {
      period: "Oct. 2022 — Mars 2025",
      role: "Aménageur Électrique sur RAFALE",
      company: "ALTEN SA • DASSAULT AVIATION",
      badge: "Aéronautique • Normes militaires • PLM",
      points: [
        "Aménagement des harnais de câblage et des équipements RAFALE selon les standards de conception DASSAULT AVIATION.",
        "Création et modification de supports avec respect des normes propres au programme RAFALE.",
        "Gestion de la liasse avion et travail sur logiciel PLM dans un environnement hautement structuré.",
      ],
    },
    {
      period: "Fév. 2022 — Août 2022",
      role: "Ingénieur d’étude stagiaire",
      company: "STELLANTIS",
      badge: "Calcul mécanique • Statistiques • Optimisation",
      points: [
        "Analyse de calculs mécaniques et statistiques pour optimiser le dimensionnement des systèmes de direction.",
        "Travail sur la robustesse des modèles dans un contexte d’ingénierie automobile.",
        "Contribution à une logique d’amélioration technique par l’analyse et l’interprétation des résultats.",
      ],
    },
    {
      period: "Mai 2019 — Juil. 2019",
      role: "Ingénieur CAO stagiaire",
      company: "Laboratoire Énergétique Mécanique Électromagnétisme",
      badge: "CAO • Aéronautique",
      points: [
        "Modélisation CAO de la voilure du PILATUS Turbo-Porter.",
        "Travail de conception appliqué dans un contexte technique spécialisé.",
      ],
    },
  ];

  const projects = [
    {
      slug: "transition-data",
      category: "Reconversion",
      title: "Transition vers la Data & l’IA",
      shortDescription:
        "Parcours de montée en compétences en Python, MySQL, Power BI, Tableau et développement orienté intelligence artificielle.",
    },
    {
      slug: "rafale",
      category: "Aéronautique",
      title: "Configuration & intégration RAFALE",
      shortDescription:
        "Intervention sur le cheminement de harnais, l’intégration d’équipements et la gestion de configuration dans un cadre normé.",
    },
    {
      slug: "stellantis",
      category: "Analyse",
      title: "Optimisation mécanique chez STELLANTIS",
      shortDescription:
        "Analyse de calculs mécaniques et statistiques pour fiabiliser le dimensionnement et la robustesse système.",
    },
  ];

  const clients = [
    "DASSAULT AVIATION",
    "ALTEN",
    "STELLANTIS",
    "IRON HACK",
    "UFR SITEC",
  ];

  const tools = [
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
  ];

  const navItems = [
    ["Profil", "#profil"],
    ["Expertise", "#expertise"],
    ["Expériences", "#experiences"],
    ["Projets", "#projects"],
    ["Environnements", "#clients"],
    ["Use Cases", "#use-cases"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white scroll-smooth">
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <header
  className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl transition-transform duration-500 ease-out ${
    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 lg:px-8 xl:px-10">
    <a href="#top" className="flex min-w-0 items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#60A5FA] shadow-[0_0_40px_rgba(96,165,250,0.15)]">
        JP
      </div>

      <div className="min-w-0">
        <p className="truncate text-[15px] font-semibold tracking-wide text-white">
          Jérémy-Morgan PATOLE
        </p>
        <p className="truncate text-[12px] text-white/50">
          Data Analyste • Ingénieur aéronautique • DJ
        </p>
      </div>
    </a>

    <nav className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
      {[
        ["Profil", "#profil"],
        ["Expertise", "#expertise"],
        ["Expériences", "#experiences"],
        ["Projets", "#projects"],
        ["Environnements", "#clients"],
        ["Use Cases", "#use-cases"],
        ["Stack", "#stack"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={href}
          href={href}
          className="whitespace-nowrap rounded-full px-5 py-2 text-[15px] font-medium text-white/72 transition hover:bg-[#2563EB]/20 hover:text-white"
        >
          {label}
        </a>
      ))}
    </nav>

    <div className="flex items-center gap-2">
      <a
        href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
        target="_blank"
        rel="noreferrer"
        className="group hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[15px] font-semibold text-white transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15"
      >
        <Linkedin
          size={16}
          className="text-white/65 transition group-hover:text-[#60A5FA]"
        />
        <span className="whitespace-nowrap">Profil LinkedIn</span>
      </a>

      <a
        href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/15 transition hover:bg-[#2563EB]/20 hover:text-white sm:inline-flex lg:hidden"
      >
        <Linkedin size={14} className="text-white/70" />
        LinkedIn
      </a>

      <button
        type="button"
        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white lg:hidden"
      >
        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>
  </div>

  {isMobileMenuOpen && (
    <div className="border-t border-white/10 bg-[#050816]/95 px-4 pb-4 pt-3 backdrop-blur-2xl lg:hidden">
      <div className="flex flex-col gap-2">
        {navItems.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-[#2563EB]/15 hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <a
          href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/15"
        >
          <Linkedin size={16} className="text-[#60A5FA]" />
          Voir le profil LinkedIn
        </a>

        <a
          href="mailto:jerempatole@live.fr"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          <Mail size={16} />
          Me contacter
        </a>
      </div>
    </div>
  )}
</header>

      <div className="h-[72px] sm:h-[78px]" />

      <section
        id="top"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-3 lg:px-10 lg:pb-1 lg:pt-4"
      >
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-[1.3rem] border border-white/10">
            <img
              src="/hero.jpg"
              alt="Hero"
              className="h-[260px] w-full object-cover object-[70%_20%]"
            />
          </div>

          <div className="mt-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70">
              <BadgeCheck size={12} className="text-[#60A5FA]" />
              Disponible • Profil hybride
            </div>

            <h1 className="text-[1.6rem] font-semibold leading-tight">
              J’analyse, je structure et j’exécute{" "}
              <span className="text-white/40">dans des contextes</span>{" "}
              <span className="text-[#60A5FA]">
                techniques, data et industriels.
              </span>
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Profil polyvalent à la croisée de l’ingénierie, de l’analyse de
              données et de l’exécution terrain.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:jerempatole@live.fr"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
              >
                <Mail size={16} />
                Me contacter
              </a>

              <a
                href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15 hover:text-white"
              >
                <Linkedin
                  size={16}
                  className="text-white/70 transition group-hover:text-[#60A5FA]"
                />
                <span>Voir le profil LinkedIn</span>
              </a>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[0.9rem] border border-white/10 bg-white/5 p-3"
                >
                  <div className="text-base font-semibold text-[#93C5FD]">
                    {item.value}
                  </div>
                  <div className="text-[10px] text-white/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
            <img
              src="/hero.jpg"
              alt="Hero"
              className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[66%_18%] opacity-80"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.96)_0%,rgba(5,8,22,0.90)_26%,rgba(5,8,22,0.62)_48%,rgba(5,8,22,0.22)_72%,rgba(5,8,22,0.12)_100%)]" />

            <div className="relative z-10 flex flex-col gap-8 p-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
              <div className="max-w-[820px]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                  <BadgeCheck size={14} className="text-[#60A5FA]" />
                  Disponible • Profil hybride data & ingénierie
                </div>

                <h1 className="max-w-[720px] text-[3.3rem] font-semibold leading-[1.05] tracking-tight xl:text-[3.7rem]">
                  <span className="text-white">
                    J’analyse, je structure et j’exécute
                  </span>
                  <span className="block text-white/40">
                    dans des contextes
                  </span>
                  <span className="block text-[#60A5FA]">
                    techniques, data
                  </span>
                  <span className="block text-[#60A5FA]">
                    et industriels.
                  </span>
                </h1>

                <p className="mt-5 max-w-[760px] text-[1.02rem] leading-8 text-white/72">
                  Profil polyvalent à la croisée de l’ingénierie, de l’analyse
                  de données et de l’exécution terrain.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:jerempatole@live.fr"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    <Mail size={17} />
                    Me contacter
                  </a>

                  <a
                    href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(96,165,250,0.15)] transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15"
                  >
                    <Linkedin
                      size={16}
                      className="text-white/70 transition group-hover:text-[#60A5FA]"
                    />
                    <span>Voir le profil LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xl font-semibold text-[#93C5FD]">
                      {item.value}
                    </div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="profil"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-3 sm:px-6 sm:py-5 lg:px-10 lg:py-6"
      >
        <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
              Profil
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Un socle ingénierie solide, prolongé par la data et l’IA
            </h2>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 text-white/75 shadow-[0_0_40px_rgba(37,99,235,0.06)] sm:rounded-[1.7rem] sm:p-6">
            <p className="text-sm leading-7 sm:text-base sm:leading-8">
              Issu d’un parcours en mécanique des structures composites orienté
              aéronautique, Jérémy-Morgan a développé une forte culture de la
              rigueur, de l’analyse et du respect des standards techniques.
            </p>
            <p className="mt-3 text-sm leading-7 sm:text-base sm:leading-8">
              Aujourd’hui, il élargit ce socle avec une reconversion active vers
              la data et l’intelligence artificielle, en s’appuyant sur des
              outils comme Python, MySQL, Tableau et Power BI pour structurer,
              analyser et valoriser l’information afin de transformer des
              insights en décisions business claires.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 sm:rounded-[1.5rem] sm:p-6"
            >
              <div className="flex items-center gap-3 text-[#60A5FA]">
                {item.icon}
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-6 text-white/68 sm:text-sm sm:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="expertise"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
              Expertise
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Les briques du profil
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
            <Sparkles size={16} className="text-[#60A5FA]" />
            Data • Technique • Industrie
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item}
              className="flex min-h-[72px] items-center rounded-[1rem] border border-white/10 bg-white/5 p-3 text-[12px] font-medium leading-5 text-white/78 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:min-h-[84px] sm:rounded-[1.2rem] sm:p-4 sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <div className="mb-4 sm:mb-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
            Expériences
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Un parcours technique, rigoureux et en évolution
          </h2>
        </div>

        <div className="relative space-y-3 sm:space-y-4">
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#60A5FA]/70 via-white/20 to-transparent md:block" />
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-6 -translate-x-1/2 bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_70%)] blur-md md:block" />

          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="relative rounded-[1.35rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(37,99,235,0.05)] sm:rounded-[1.7rem] sm:p-6 md:pl-16"
            >
              <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-[#BFDBFE]/60 bg-[#60A5FA] shadow-[0_0_0_6px_rgba(96,165,250,0.10),0_0_22px_rgba(96,165,250,0.55)] md:block" />

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">
                    {exp.period}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/65 sm:text-base">
                    {exp.company}
                  </p>
                </div>

                <div className="w-fit rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/15 px-3 py-2 text-xs text-[#BFDBFE] sm:px-4 sm:text-sm">
                  {exp.badge}
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 sm:mt-5">
                {exp.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3.5"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#60A5FA]" />
                    <p className="text-xs leading-6 text-white/74 sm:text-sm sm:leading-7">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <div className="mb-4 sm:mb-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
            Projets / axes forts
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Quelques marqueurs du parcours
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:rounded-[1.6rem] sm:p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#60A5FA]">
                {project.category}
              </p>
              <h3 className="mt-2.5 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                {project.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="clients"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
              Environnements
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Des contextes exigeants et structurants
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
              Industrie, aéronautique, automobile, formation technique et
              reconversion data : un parcours qui montre une vraie capacité
              d’adaptation et une forte culture du cadre.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client}
                className="group flex min-h-[82px] items-center rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-base font-semibold text-white/92 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:min-h-[100px] sm:rounded-[1.55rem] sm:p-5 sm:text-lg"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-6 sm:px-6 lg:px-10 lg:py-8"
      >
        <div className="mb-4 sm:mb-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
            Use Cases
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Cas concrets & projets data
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
            Une sélection de projets orientés analyse, expérimentation, exploration
            de données et restitution claire, avec accès direct aux repos GitHub.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.slug}
              className="group flex h-full flex-col rounded-[1.35rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#60A5FA]/35 hover:bg-white/10 sm:rounded-[1.6rem] sm:p-6"
            >
              <Link href={`/use-cases/${item.slug}`} className="block">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-2xl">
                    {item.emoji}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-1 text-sm text-white/55">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={`/use-cases/${item.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Voir le détail
                </Link>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#60A5FA]/20 bg-[#2563EB]/10 px-4 py-2 text-sm font-medium text-[#BFDBFE] transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/20"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}

                {item.githubSecondary && (
                  <a
                    href={item.githubSecondary}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    <Github size={16} />
                    Repo 2
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="stack"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(37,99,235,0.05)] sm:rounded-[1.7rem] sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
                Stack
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
                Outils, logiciels et environnement de travail
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-white/52 sm:text-sm">
              <Languages size={16} className="text-[#60A5FA]" />
              Français • Anglais courant • Espagnol basique
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:px-4 sm:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6 lg:px-10 lg:pb-16 lg:pt-8"
      >
        <div className="relative overflow-hidden rounded-[1.45rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-5 text-black sm:rounded-[1.9rem] sm:p-7 md:p-10">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/25 blur-3xl sm:h-36 sm:w-36" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#1D4ED8]/20 blur-3xl sm:h-36 sm:w-36" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.24em] text-black/55 sm:text-sm">
              Contact
            </p>
            <h2 className="mt-2.5 max-w-3xl text-2xl font-semibold leading-tight sm:mt-3 sm:text-3xl md:text-5xl md:leading-tight">
              À la recherche d’un profil analytique, technique et adaptable ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/72 sm:mt-4 sm:text-base sm:leading-8">
              Disponible pour échanger autour d’opportunités en data, analyse,
              coordination technique ou environnements industriels exigeants.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:jerempatole@live.fr"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] sm:px-6"
              >
                <Mail size={18} />
                jerempatole@live.fr
              </a>

              <a
                href="tel:+33769280057"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-6"
              >
                <Briefcase size={18} />
                07 69 28 00 57
              </a>

              <a
                href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-6"
              >
                <Linkedin size={18} />
                Voir LinkedIn
              </a>

              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black sm:px-6">
                <Music2 size={18} />
                Paris 11e • DJ en parallèle
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
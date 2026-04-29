import Link from "next/link";
import { Github } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

type UseCasesProps = {
  section: NonNullable<PortfolioConfig["useCases"]>;
};

export function UseCases({ section }: UseCasesProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mb-4 sm:mb-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">{section.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.slug}
            className="group flex h-full flex-col rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-[#60A5FA]/35 hover:bg-white/[0.075] sm:rounded-[1.6rem] sm:p-6"
          >
            <Link href={`/use-cases/${item.slug}`} className="block">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-2xl">
                  {item.emoji}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                  {item.subtitle ? <p className="mt-1 text-sm text-white/55">{item.subtitle}</p> : null}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">{item.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
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
                {section.ctaLabel || "Voir le détail"}
              </Link>

              {item.github ? (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#60A5FA]/20 bg-[#2563EB]/10 px-4 py-2 text-sm font-medium text-[#BFDBFE] transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/20"
                >
                  <Github size={16} />
                  GitHub
                </a>
              ) : null}

              {item.githubSecondary ? (
                <a
                  href={item.githubSecondary}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  <Github size={16} />
                  Repo 2
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

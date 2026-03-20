import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Link as LinkIcon,
  Languages,
  Wrench,
  Sparkles,
  FolderKanban,
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import { getUseCaseBySlug, useCases } from "@/data/useCases";

export function generateStaticParams() {
  return useCases.map((item) => ({
    slug: item.slug,
  }));
}
export async function generateMetadata({ params }) {
  const useCase = getUseCaseBySlug(params.slug);

  if (!useCase) {
    return {};
  }

  return {
    title: `${useCase.title} | Jérémy Morgan`,
    description: useCase.summary,
  };
}
export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {/* ===================== BACKGROUND ===================== */}
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.26),transparent_24%),radial-gradient(circle_at_82%_10%,rgba(96,165,250,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.20),transparent_22%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/#use-cases"
            className="inline-flex items-center gap-2 rounded-full border border-[#60A5FA]/20 bg-white/5 px-4 py-2 text-sm text-white/82 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/12 hover:text-white"
          >
            <ArrowLeft size={16} />
            Retour aux use cases
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#60A5FA]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_0_80px_rgba(37,99,235,0.10)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#2563EB]/22 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#60A5FA]/16 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[35%] h-28 w-28 rounded-full bg-[#1D4ED8]/16 blur-3xl" />

          <div className="relative z-10 px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-8 lg:px-10 lg:pb-10 lg:pt-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#60A5FA]/20 bg-[#2563EB]/12 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#BFDBFE]">
              <FolderKanban size={14} className="text-[#60A5FA]" />
              Use Case
            </div>

            <div className="text-4xl sm:text-5xl">{useCase.emoji}</div>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
              {/* ===================== HERO LEFT ===================== */}
              <div>
                <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {useCase.title}
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
                  {useCase.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {useCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#60A5FA]/18 bg-[#2563EB]/10 px-3 py-1.5 text-xs text-[#D6E8FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ===================== QUICK OVERVIEW ===================== */}
<div className="self-start rounded-[1.35rem] border border-[#60A5FA]/18 bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_0_40px_rgba(37,99,235,0.08)] backdrop-blur-xl">                <p className="text-sm font-semibold text-white">
                  Quick overview
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <CalendarDays size={15} className="text-[#60A5FA]" />
                      Date
                    </div>
                    <p className="mt-2 text-sm text-white/85 sm:text-base">
                      {useCase.period}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Languages size={15} className="text-[#60A5FA]" />
                      Languages
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {useCase.languages.map((language) => (
                        <span
                          key={language}
                          className="rounded-full border border-[#60A5FA]/15 bg-[#2563EB]/10 px-3 py-1.5 text-xs text-[#D6E8FF]"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <LinkIcon size={15} className="text-[#60A5FA]" />
                      URL
                    </div>
                    <a
                      href={`https://${useCase.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-[#93C5FD] underline underline-offset-4 hover:text-white sm:text-base"
                    >
                      {useCase.url}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECT DETAILS ===================== */}
      <section className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-[#60A5FA]/16 bg-white/5 p-5 shadow-[0_0_60px_rgba(37,99,235,0.06)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#60A5FA]" />
            <h2 className="text-lg font-semibold sm:text-xl">Project details</h2>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {useCase.bullets.map((bullet, index) => (
              <div
                key={bullet}
                className="flex gap-3 rounded-[1.15rem] border border-[#60A5FA]/14 bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(255,255,255,0.03))] px-4 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#60A5FA]/18 bg-[#2563EB]/18 text-xs font-semibold text-[#BFDBFE]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TOOLS + SKILLS ===================== */}
      <section className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* ===================== TOOLS ===================== */}
          <div className="rounded-[1.5rem] border border-[#60A5FA]/16 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <Wrench size={16} className="text-[#60A5FA]" />
              <h2 className="text-lg font-semibold">Tools</h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {useCase.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#60A5FA]/16 bg-[#2563EB]/10 px-3 py-1.5 text-xs text-[#D6E8FF]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ===================== SKILLS ===================== */}
          <div className="rounded-[1.5rem] border border-[#60A5FA]/16 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles size={16} className="text-[#60A5FA]" />
              <h2 className="text-lg font-semibold">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {useCase.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#93C5FD]/14 bg-[#60A5FA]/10 px-3 py-1.5 text-xs text-[#DBEAFE]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SUMMARY / POSITIONING ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[1.5rem] border border-[#60A5FA]/16 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(255,255,255,0.03))] p-5 shadow-[0_0_60px_rgba(37,99,235,0.07)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mb-5 flex items-center gap-2">
            <Layers3 size={16} className="text-[#60A5FA]" />
            <h2 className="text-lg font-semibold">Why this project matters</h2>
          </div>

          <p className="max-w-4xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
            {useCase.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {useCase.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-xs text-white/78"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
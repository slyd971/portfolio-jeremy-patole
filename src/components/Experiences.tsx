import type { PortfolioConfig } from "@/data/schema";

type ExperiencesProps = {
  section: PortfolioConfig["experiences"];
};

export function Experiences({ section }: ExperiencesProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mb-4 sm:mb-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#60A5FA]/70 via-white/20 to-transparent md:block" />
        <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-6 -translate-x-1/2 bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_70%)] blur-md md:block" />

        {section.items.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="relative rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.16)] transition hover:border-[#60A5FA]/24 hover:bg-white/[0.065] sm:rounded-[1.7rem] sm:p-6 md:pl-16"
          >
            <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-[#BFDBFE]/60 bg-[#60A5FA] shadow-[0_0_0_6px_rgba(96,165,250,0.10),0_0_22px_rgba(96,165,250,0.55)] md:block" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">{exp.period}</p>
                <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                <p className="mt-1.5 text-sm text-white/65 sm:text-base">{exp.company}</p>
              </div>

              <div className="w-fit rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/15 px-3 py-2 text-xs text-[#BFDBFE] sm:px-4 sm:text-sm">
                {exp.badge}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">{exp.summary}</p>

            <div className="mt-4 grid gap-2.5 sm:mt-5">
              {exp.points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3.5 transition hover:border-white/14 hover:bg-black/26">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#60A5FA]" />
                  <p className="text-xs leading-6 text-white/74 sm:text-sm sm:leading-7">{point}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

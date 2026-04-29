import type { PortfolioConfig } from "@/data/schema";

type ProjectsProps = {
  section: PortfolioConfig["projects"];
};

export function Projects({ section }: ProjectsProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mb-4 sm:mb-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
      </div>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((project) => (
          <div
            key={project.title}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-[#60A5FA]/36 hover:bg-[#2563EB]/12 sm:rounded-[1.6rem] sm:p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#60A5FA]">{project.category}</p>
            <h3 className="mt-2.5 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/68">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

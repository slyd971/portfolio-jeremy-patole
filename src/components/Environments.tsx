import type { PortfolioConfig } from "@/data/schema";

type EnvironmentsProps = {
  section: NonNullable<PortfolioConfig["environments"]>;
};

export function Environments({ section }: EnvironmentsProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">{section.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
          {section.items.map((item) => (
            <div
              key={item}
              className="group flex min-h-[82px] items-center rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-4 text-base font-semibold text-white/92 shadow-[0_16px_48px_rgba(15,23,42,0.13)] transition hover:-translate-y-0.5 hover:border-[#60A5FA]/36 hover:bg-[#2563EB]/12 sm:min-h-[100px] sm:rounded-[1.55rem] sm:p-5 sm:text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

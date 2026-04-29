import { Sparkles } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

type SkillsProps = {
  section: PortfolioConfig["skills"];
};

export function Skills({ section }: SkillsProps) {
  const items = section.groups.flatMap((group) => group.items);

  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
          <Sparkles size={16} className="text-[#60A5FA]" />
          {section.badge}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex min-h-[72px] items-center rounded-[1rem] border border-white/10 bg-white/[0.045] p-3 text-[12px] font-medium leading-5 text-white/80 shadow-[0_14px_42px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:border-[#60A5FA]/36 hover:bg-[#2563EB]/12 hover:text-white sm:min-h-[84px] sm:rounded-[1.2rem] sm:p-4 sm:text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

import { Languages } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

type StackProps = {
  section: PortfolioConfig["stack"];
};

export function Stack({ section }: StackProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.16)] backdrop-blur sm:rounded-[1.7rem] sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-white/52 sm:text-sm">
            <Languages size={16} className="text-[#60A5FA]" />
            {section.badge}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {section.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/74 transition hover:border-[#60A5FA]/36 hover:bg-[#2563EB]/12 hover:text-white sm:px-4 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

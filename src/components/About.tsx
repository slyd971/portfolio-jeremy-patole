import { Building2, Cpu, Trophy } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

const highlightIcons = {
  dual: Building2,
  transverse: Cpu,
  senior: Trophy,
} as const;

type AboutProps = {
  section: PortfolioConfig["about"];
};

export function About({ section }: AboutProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-3 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">{section.label}</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{section.title}</h2>
        </div>

        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5 text-white/76 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur sm:rounded-[1.7rem] sm:p-6">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7 first:mt-0 sm:text-base sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3">
        {section.highlights.map((item) => {
          const Icon = highlightIcons[item.icon];
          return (
            <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-[#60A5FA]/30 hover:bg-white/[0.065] sm:rounded-[1.5rem] sm:p-6">
              <div className="flex items-center gap-3 text-[#60A5FA]">
                <Icon size={18} />
                <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-6 text-white/68 sm:text-sm sm:leading-7">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

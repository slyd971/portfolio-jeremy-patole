import { Briefcase, Linkedin, Mail } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

type ContactProps = {
  section: PortfolioConfig["contact"];
  social: PortfolioConfig["social"];
};

export function Contact({ section, social }: ContactProps) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6 lg:px-10 lg:pb-16 lg:pt-8">
      <div className="relative overflow-hidden rounded-[1.45rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-5 text-black sm:rounded-[1.9rem] sm:p-7 md:p-10">
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/25 blur-3xl sm:h-36 sm:w-36" />
        <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#1D4ED8]/20 blur-3xl sm:h-36 sm:w-36" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.24em] text-black/55 sm:text-sm">{section.label}</p>
          <h2 className="mt-2.5 max-w-3xl text-2xl font-semibold leading-tight sm:mt-3 sm:text-3xl md:text-5xl md:leading-tight">
            {section.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-black/72 sm:mt-4 sm:text-base sm:leading-8">{section.description}</p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] sm:px-6"
            >
              <Mail size={18} />
              {section.emailCtaLabel}
            </a>

            {social.phone ? (
              <a
                href={`tel:${social.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-6"
              >
                <Briefcase size={18} />
                {section.phoneCtaLabel}
              </a>
            ) : null}

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-6"
            >
              <Linkedin size={18} />
              {section.linkedinCtaLabel}
            </a>

            {section.secondaryInfo ? (
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black sm:px-6">
                {section.secondaryInfo}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

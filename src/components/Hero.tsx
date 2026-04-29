import { BadgeCheck, Download, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import type { PortfolioConfig } from "@/data/schema";

type HeroProps = {
  section: PortfolioConfig["hero"];
  identity: PortfolioConfig["identity"];
  social: PortfolioConfig["social"];
};

export function Hero({ section, identity, social }: HeroProps) {
  const mobileTitle = identity.title.replace(/\s*•\s*DJ\b/, "");

  return (
    <section id="top" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 pb-3 pt-2 sm:px-6 sm:pb-4 sm:pt-3 lg:px-10 lg:pb-2 lg:pt-5">
      <div className="lg:hidden">
        <div className="hero-copy-enter text-center">
          <p className="mx-auto max-w-[24rem] text-[1.45rem] font-black uppercase leading-[1.05] text-white sm:text-[1.9rem]">{mobileTitle}</p>

          {section.photo?.src ? (
            <div className="relative mt-5 aspect-[4/5] overflow-hidden rounded-[1.3rem] border border-white/10 shadow-[0_24px_70px_rgba(15,23,42,0.32)]">
              <Image src={section.photo.src} alt={section.photo.alt} fill priority sizes="100vw" className="object-cover object-[66%_18%]" />
            </div>
          ) : null}

          <h1 className="mx-auto mt-5 max-w-[22ch] text-[1.72rem] font-black uppercase leading-[1] text-white sm:max-w-[24ch] sm:text-[2.2rem]">
            <span className="block">{section.heading.prefix}</span>
            <span className="block text-white/78">{section.heading.muted}</span>
            <span className="block bg-gradient-to-r from-[#BFDBFE] via-[#60A5FA] to-[#38BDF8] bg-clip-text text-transparent">{section.heading.accent}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[34rem] text-[0.95rem] leading-7 text-white/76 sm:text-base sm:leading-8">{section.description}</p>

          <div className="mt-5 flex flex-col gap-2.5">
            <a href={`mailto:${social.email}`} className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_16px_42px_rgba(255,255,255,0.13)] transition hover:scale-[1.01] hover:bg-[#EFF6FF]">
              <Mail size={16} />
              {section.primaryCtaLabel}
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15 hover:text-white"
            >
              <Linkedin size={16} className="text-white/70 transition group-hover:text-[#60A5FA]" />
              <span>{section.secondaryCtaLabel}</span>
            </a>

            <a
              href={social.resumeHref}
              download
              className="flex items-center justify-center gap-2 rounded-full border border-[#60A5FA]/35 bg-[#2563EB]/18 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#60A5FA]/55 hover:bg-[#2563EB]/28"
            >
              <Download size={16} className="text-[#93C5FD]" />
              {section.downloadCtaLabel}
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {section.stats.map((item) => (
              <div key={item.label} className="rounded-[0.9rem] border border-white/10 bg-white/[0.045] p-3 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                <div className="text-base font-semibold text-[#BFDBFE]">{item.value}</div>
                <div className="mt-1 text-[10px] leading-4 text-white/64">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid min-h-[620px] grid-cols-[minmax(0,1fr)_minmax(380px,0.72fr)] items-stretch gap-8">
          <div className="hero-copy-enter flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/18 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-[0_18px_48px_rgba(255,255,255,0.12)]">
              <BadgeCheck size={14} className="text-[#60A5FA]" />
              {section.eyebrow}
            </div>

            <h1 className="max-w-[820px] text-[2.95rem] font-black uppercase leading-[0.98] text-white xl:text-[3.55rem]">
              <span className="block">{section.heading.prefix}</span>
              <span className="block text-white/78">{section.heading.muted}</span>
              <span className="block bg-gradient-to-r from-[#BFDBFE] via-[#60A5FA] to-[#38BDF8] bg-clip-text text-transparent">{section.heading.accent}</span>
            </h1>

            <p className="mt-6 max-w-[590px] text-[1.05rem] font-medium leading-8 text-white/78 xl:text-[1.1rem] xl:leading-9">{section.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${social.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_48px_rgba(255,255,255,0.13)] transition hover:scale-[1.015] hover:bg-[#EFF6FF]">
                <Mail size={17} />
                {section.primaryCtaLabel}
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(96,165,250,0.12)] transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15"
              >
                <Linkedin size={16} className="text-white/70 transition group-hover:text-[#60A5FA]" />
                <span>{section.secondaryCtaLabel}</span>
              </a>

              <a
                href={social.resumeHref}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#60A5FA]/35 bg-[#2563EB]/18 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(96,165,250,0.12)] transition hover:border-[#60A5FA]/55 hover:bg-[#2563EB]/28"
              >
                <Download size={16} className="text-[#93C5FD]" />
                <span>{section.downloadCtaLabel}</span>
              </a>
            </div>

            <div className="mt-11 grid grid-cols-4 gap-3 xl:gap-4">
              {section.stats.map((item) => (
                <div key={item.label} className="rounded-[1.1rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_20px_55px_rgba(15,23,42,0.20)] backdrop-blur transition hover:border-[#60A5FA]/28 hover:bg-white/[0.065]">
                  <div className="text-xl font-semibold text-[#BFDBFE]">{item.value}</div>
                  <div className="mt-1.5 text-sm leading-5 text-white/64">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {section.photo?.src ? (
            <div className="relative isolate overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <Image src={section.photo.src} alt={section.photo.alt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[62%_16%]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050816]/82 via-[#050816]/18 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050816]/18 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1rem] border border-white/12 bg-[#050816]/48 p-4 backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">{identity.fullName}</div>
                <div className="mt-1 text-xs leading-5 text-white/68">{identity.title}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

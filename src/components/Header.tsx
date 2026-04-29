"use client";

import { useEffect, useState } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import type { PortfolioConfig } from "@/data/schema";

type HeaderProps = {
  config: PortfolioConfig;
};

export function Header({ config }: HeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setIsHeaderVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY) < 8) {
        return;
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const { identity, navigation, social } = config;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl transition-transform duration-500 ease-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 lg:px-8 xl:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#60A5FA] shadow-[0_0_40px_rgba(96,165,250,0.15)]">
            {identity.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold tracking-wide text-white">{identity.fullName}</p>
            <p className="truncate text-[12px] text-white/50">{identity.title}</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-5 py-2 text-[15px] font-medium text-white/72 transition hover:bg-[#2563EB]/20 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[15px] font-semibold text-white transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/15"
          >
            <Linkedin size={16} className="text-white/65 transition group-hover:text-[#60A5FA]" />
            <span className="whitespace-nowrap">Profil LinkedIn</span>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/15 transition hover:bg-[#2563EB]/20 hover:text-white sm:inline-flex lg:hidden"
          >
            <Linkedin size={14} className="text-white/70" />
            LinkedIn
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[#050816]/95 px-4 pb-4 pt-3 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-[#2563EB]/15 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/15"
            >
              <Linkedin size={16} className="text-[#60A5FA]" />
              Voir le profil LinkedIn
            </a>

            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              <Mail size={16} />
              Me contacter
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

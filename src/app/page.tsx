import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Environments } from "@/components/Environments";
import { Experiences } from "@/components/Experiences";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stack } from "@/components/Stack";
import { UseCases } from "@/components/UseCases";
import { portfolioConfig } from "@/data/config";

const sectionBands = {
  hero: "relative overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(96,165,250,0.18),transparent_28%),linear-gradient(180deg,#030712_0%,#050816_58%,#07101B_100%)]",
  profile: "relative border-y border-white/[0.055] bg-[linear-gradient(180deg,#08111E_0%,#0B1524_48%,#070B14_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.035),inset_0_-1px_0_rgba(255,255,255,0.03)]",
  expertise: "relative bg-[linear-gradient(180deg,#050816_0%,#09131F_50%,#060A13_100%)]",
  experience: "relative border-y border-white/[0.055] bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#07101C_0%,#0B1220_56%,#070A12_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
  proof: "relative bg-[linear-gradient(180deg,#06111C_0%,#0A1826_46%,#050816_100%)]",
  systems: "relative border-y border-white/[0.055] bg-[linear-gradient(180deg,#0B1020_0%,#070B14_48%,#050816_100%)]",
  contact: "relative bg-[linear-gradient(180deg,#050816_0%,#07101C_100%)]",
} as const;

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.siteUrl,
    mainEntity: {
      "@type": "Person",
      name: portfolioConfig.identity.fullName,
      jobTitle: "Data Analyste et ingénieur aéronautique",
      email: portfolioConfig.social.email,
      url: portfolioConfig.seo.siteUrl,
      sameAs: [portfolioConfig.social.linkedin],
      knowsAbout: [
        "Data analysis",
        "Python",
        "SQL",
        "Power BI",
        "Tableau",
        "Ingénierie aéronautique",
        "PLM",
      ],
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <Header config={portfolioConfig} />
      <div className="h-[72px] sm:h-[78px]" />

      <div className={sectionBands.hero}>
        <Hero section={portfolioConfig.hero} identity={portfolioConfig.identity} social={portfolioConfig.social} />
      </div>

      <div className={sectionBands.profile}>
        <About section={portfolioConfig.about} />
      </div>

      <div className={sectionBands.expertise}>
        <Skills section={portfolioConfig.skills} />
      </div>

      <div className={sectionBands.experience}>
        <Experiences section={portfolioConfig.experiences} />
      </div>

      <div className={sectionBands.proof}>
        <Projects section={portfolioConfig.projects} />
        {portfolioConfig.environments ? <Environments section={portfolioConfig.environments} /> : null}
      </div>

      <div className={sectionBands.systems}>
        {portfolioConfig.useCases ? <UseCases section={portfolioConfig.useCases} /> : null}
        <Stack section={portfolioConfig.stack} />
      </div>

      <div className={sectionBands.contact}>
        <Contact section={portfolioConfig.contact} social={portfolioConfig.social} />
      </div>
    </main>
  );
}

import { HomeScrollReset } from "@/components/layout/home-scroll-reset";
import { AboutSection } from "@/components/sections/about";
import { ArchitectureSection } from "@/components/sections/architecture";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TechnicalSection } from "@/components/sections/technical";
import { TerminalSection } from "@/components/sections/terminal";

export default function Home() {
  return (
    <>
      <HomeScrollReset />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <TechnicalSection />
      <CertificationsSection />
      <GithubSection />
      <TerminalSection />
      <ContactSection />
    </>
  );
}

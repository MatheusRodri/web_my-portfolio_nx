import { AboutSection } from "@/sections/aboutSection";
import AcademicSection from "@/sections/academySection";
import { ContactSection } from "@/sections/contactSection";
import ExperienceSection from "@/sections/experienceSection";
import InitialSection from "@/sections/InitialSection";
import ProjectsSection from "@/sections/projectsSection";
import SkillSection from "@/sections/skillSection";

export default function Home() {
  return (
    <main>
      <InitialSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <AcademicSection/>
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
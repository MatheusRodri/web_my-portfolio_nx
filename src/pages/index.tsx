import { AboutSection } from "@/sections/aboutSection";
import AcademicSection from "@/sections/academySection";
import { ContactSection } from "@/sections/contactSection";
import ExperienceSection from "@/sections/experienceSection";
import InitialSection from "@/sections/InitialSection";
import ProjectsSection from "@/sections/projectsSection";
import SkillSection from "@/sections/skillSection";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {

    const initializeScrollReveal = async () => {
      const ScrollRevealModule = (await import('scrollreveal')).default;
      if (typeof window !== 'undefined') {
        if (!window.sr) {
          window.sr = ScrollRevealModule();
        }
        window.sr.reveal('.reveal-on-scroll', {
          delay: 200,
          distance: '50px',
          origin: 'bottom',
          easing: 'ease-in-out',
          duration: 500,
          interval: 100,
          reset: true
        });

        window.sr.reveal('.scroll-to-text', {
          delay: 500,
          distance: '50px',
          origin: 'left',
          easing: 'ease-in-out',
          duration: 500,
          interval: 0,
          reset: true
        });

        
        
      }
    };

    initializeScrollReveal();

  }, []); 




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
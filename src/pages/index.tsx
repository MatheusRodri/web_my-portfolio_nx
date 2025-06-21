import { AboutSection } from "@/components/Sections/aboutSection";
import InitialSection from "@/components/Sections/InitialSection";
import SkillSection from "@/components/Sections/skillSection";

export default function Home() {
  return (
    <main>
      <InitialSection />
      <AboutSection />
      <SkillSection/>
    </main>
  );
}
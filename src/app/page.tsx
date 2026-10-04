import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import EducationExperience from "@/components/sections/education-experience/education-experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects/projects";
import SkillsCertifications from "@/components/sections/skills-certifications/skills-certifications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EducationExperience />
        <Projects />
        <SkillsCertifications />
      </main>
      <Footer />
    </>
  );
}

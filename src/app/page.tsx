import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about/about";
import Certifications from "@/components/sections/certifications/certifications";
import EducationExperience from "@/components/sections/education-experience/education-experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationExperience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

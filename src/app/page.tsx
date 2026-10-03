import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about/about";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

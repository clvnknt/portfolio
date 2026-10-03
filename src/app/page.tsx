import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about/about";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

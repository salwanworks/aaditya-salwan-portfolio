import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Drdo from "@/components/sections/Drdo";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import EducationLeadership from "@/components/sections/EducationLeadership";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        {/* "Experience" nav item targets this wrapper: DRDO feature + full experience list */}
        <div id="experience">
          <Drdo />
          <Experience />
        </div>
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <EducationLeadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

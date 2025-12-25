import { NAV_LINKS } from "../lib/data";
import ImpactTicker from "../components/ImpactTicker";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // Changed bg-white to a dark slate-950 to make the Glass Nav and Circuits pop
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <ImpactTicker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
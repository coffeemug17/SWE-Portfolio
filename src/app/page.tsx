import { NAV_LINKS } from "../lib/data";
import ImpactTicker from "../components/ImpactTicker";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Navigation - Logic-driven from data.ts */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">MP<span className="text-blue-600">.dev</span></span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
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
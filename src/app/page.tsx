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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 font-mono text-[10px]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-black text-sm tracking-tighter">MITUL_PANDEY</span>
            <span className="text-slate-300">|</span>
            <span className="text-green-600 animate-pulse">● LIVE</span>
          </div>
          <div className="hidden md:flex gap-8 uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                ./{link.name.toLowerCase()}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">PWR</span>
            <div className="w-8 h-4 border border-slate-300 p-0.5 rounded-sm">
              <div className="w-full h-full bg-blue-500" />
            </div>
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
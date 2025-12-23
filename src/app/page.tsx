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
    // Changed bg-white to a dark slate-950 to make the Glass Nav and Circuits pop
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      
      {/* --- GLASS HUD NAVIGATION --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 
                      bg-slate-900/40 backdrop-blur-xl
                      border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
                      rounded-2xl transition-all duration-300">
        <div className="px-6 h-14 flex items-center justify-between">
          
          {/* System Identity */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-black text-xs tracking-tighter leading-none">MITUL_PANDEY</span>
              <span className="text-[8px] font-mono text-blue-500 tracking-widest mt-1">SYS_OP_v4.0</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-mono text-green-500">LIVE_SIGNAL</span>
            </div>
          </div>

          {/* Logic-driven Navigation */}
          <div className="hidden md:flex gap-8 uppercase font-mono text-[10px] tracking-widest">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-white/50 hover:text-blue-400 transition-colors relative group"
              >
                ./{link.name.toLowerCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* System Power Metric */}
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex flex-col items-end gap-1">
               <span className="text-[8px] font-mono text-slate-500">PWR_LVL</span>
               <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                 <div className="w-[95%] h-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
               </div>
             </div>
             <a 
               href="/Mitul_Pandey_Resume.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="font-mono text-[9px] px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded hover:bg-blue-500/20 transition-all uppercase"
             >
               [ fetch_cv ]
             </a>
          </div>
        </div>
      </nav>

      {/* --- PAGE MODULES --- */}
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
import { NAV_LINKS, IMPACT_METRICS, PROJECTS } from "../lib/data";
import ImpactTicker from "../components/ImpactTicker";

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

      {/* Hero Section - The "High Impact" Hook */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Available for New Grad May 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            I turn <span className="text-blue-600 italic">100-minute</span> problems into <span className="text-green-600">70-minute</span> solutions.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Electrical & Computer Engineering at UBC. Specialized in automation and full-stack systems across legal tech, healthcare, and agriculture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              View My Work
            </a>
            <a href="mailto:mitulpandey2@gmail.com" className="border border-slate-200 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Data-driven from data.ts */}
      <ImpactTicker />

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-blue-50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="font-semibold text-sm underline underline-offset-4">View Case Study →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
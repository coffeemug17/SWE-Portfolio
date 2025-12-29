import { PROJECTS } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative bg-[var(--background)] transition-colors duration-700 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.03] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-blue-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-3 block">
              ./build/systems/featured
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              Featured <span className="italic text-blue-600">Projects</span>
            </h2>
          </div>
          
          <a 
            href="https://github.com/coffeemug17" 
            target="_blank" 
            className="group font-mono text-xs text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2"
          >
            <span className="text-blue-600">//</span> VIEW_GITHUB_REPOS
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative">
              {/* Subtle Glow behind active card */}
              <div className="absolute -inset-2 bg-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                
                {/* IDE-style Window Bar */}
                <div className="bg-slate-900/60 border-b border-slate-800 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                    src/bin/{project.title.toLowerCase().replace(/\s+/g, '_')}.go
                  </span>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base font-medium">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags as "Dependencies" */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono font-bold text-slate-500 border border-slate-800 px-3 py-1 rounded bg-slate-950 uppercase group-hover:text-blue-400 group-hover:border-blue-900/50 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Link */}
                  <div className="mt-8 flex justify-end">
                    <div className="text-[10px] font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                       READY_TO_FORK <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
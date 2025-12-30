import { PROJECTS } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative bg-[var(--background)] transition-colors duration-700 overflow-hidden border-b border-slate-900">
      {/* Background Decorative Grid - Optimized for depth */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.05] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header: Confident & Large */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <p className="text-blue-500 font-mono text-xs font-black tracking-[0.4em] mb-4 uppercase flex items-center gap-4">
              <span className="h-px w-10 bg-blue-500/40" />
              03_projects_showcase
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              Featured <br /><span className="italic text-blue-600">Projects</span>
            </h2>
          </div>
          
          <a 
            href="https://github.com/coffeemug17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group font-mono text-sm font-black text-slate-500 hover:text-blue-500 transition-all flex items-center gap-3 uppercase tracking-widest border-b-2 border-transparent hover:border-blue-500 pb-1"
          >
            <span className="text-blue-500">//</span> VIEW_ALL_REPOS
            <span className="group-hover:translate-x-2 transition-transform font-black">→</span>
          </a>
        </div>
        
        {/* Project Grid: Increased spacing for focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative">
              {/* External Glow on Hover */}
              <div className="absolute -inset-1 bg-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-800 bg-slate-950/40 backdrop-blur-xl group-hover:border-blue-500/40 transition-all duration-500 shadow-2xl">
                
                {/* IDE-style Window Bar: Taller & Bolder */}
                <div className="bg-slate-900/80 border-b-2 border-slate-800 px-6 py-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/30 group-hover:bg-amber-500 transition-colors shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/30 group-hover:bg-green-500 transition-colors shadow-inner" />
                  </div>
                  
                  <span className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">
                    src/bin/{project.title.toLowerCase().replace(/\s+/g, '_')}.exe
                  </span>
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white group-hover:text-blue-500 transition-colors uppercase italic leading-none">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-10 leading-relaxed text-base md:text-lg font-medium">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags: Bigger & More Contrast */}
                  <div className="flex flex-wrap gap-3 pt-8 border-t-2 border-slate-900">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] md:text-xs font-mono font-black text-slate-400 border-2 border-slate-800 px-4 py-2 rounded-lg bg-slate-950 uppercase group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer: Tactical Action Button */}
                  <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center font-mono text-xs font-black text-blue-500 border-2 border-blue-600/50 px-8 py-4 rounded-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 group/btn shadow-[6px_6px_0px_0px_rgba(37,99,235,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                      [ ACCESS_REPOSITORY ]
                      <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                    </a>
                    
                    <div className="flex items-center gap-2 text-[10px] font-mono font-black text-slate-700 uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-green-500/20" />
                      Status: Deployed
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
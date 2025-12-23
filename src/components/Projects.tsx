import { PROJECTS } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative grid bg-white bg-grid-slate">
      <div className="max-w-6xl mx-auto">
        {/* Header with a "System Log" feel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.3em] mb-2 block">
              ./build/portfolio/projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              FEATURED <span className="italic text-slate-400">PROJECTS</span>
            </h2>
          </div>
          <a 
            href="https://github.com/coffeemug17" 
            target="_blank" 
            className="font-mono text-sm hover:text-blue-600 transition-colors flex items-center gap-2 group"
          >
            <span className="opacity-50 group-hover:opacity-100">[</span>
            VIEW_GITHUB
            <span className="opacity-50 group-hover:opacity-100">]</span>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative">
              {/* The "Terminal Window" Frame */}
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white hover:border-blue-400 transition-all duration-500 hover:shadow-[20px_20px_0px_0px_rgba(37,99,235,0.05)]">
                
                {/* IDE-style Header Bar */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    project_0{index + 1}.sys
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags as "Parameters" */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">
                        {t}
                      </span>
                    ))}
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
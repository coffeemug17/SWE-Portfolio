import { PROJECTS } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <a href="https://github.com/coffeemug17" target="_blank" className="text-blue-600 font-medium hover:underline">View GitHub →</a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
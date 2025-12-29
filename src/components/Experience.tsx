import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[var(--background)] transition-colors duration-700 relative overflow-hidden border-b border-slate-900">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.5em] mb-4 uppercase flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600/30" />
            02_experience_history
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] break-words">
            Technical <span className="text-blue-600 italic">Benchmarks</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Rail */}
          {/* Mobile: Pinned to left | Desktop: Centered */}
          <div className="absolute left-1 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-ml-px">
            <div className="sticky top-1/2 h-32 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-sm opacity-50" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                {/* Timeline Solder Point */}
                <div className="absolute left-0 md:left-1/2 top-2 w-2 h-2 rounded-full bg-slate-900 border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500 shadow-[0_0_0_4px_var(--background)] md:-ml-[4px] z-20" />

                {/* Container: Stacks on mobile, splits on desktop */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 pl-8 md:pl-0`}>
                  
                  {/* Content Module */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex flex-col space-y-2 mb-6">
                      <span className="font-mono text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                        {job.period}
                      </span>
                      <h3 className="text-3xl font-black tracking-tight text-[var(--foreground)] leading-none">
                        {job.role}
                      </h3>
                      <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">
                        {job.company}
                      </p>
                    </div>
                    
                    {/* The "Shielded" Glass Card */}
                    <div className="p-6 md:p-8 rounded-xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-md group-hover:border-blue-500/30 group-hover:bg-slate-900/60 transition-all duration-500 relative shadow-2xl overflow-hidden">
                      {/* Scanning Line Animation */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[200px] transition-all duration-[1.5s]" />
                      
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base relative z-10 text-left">
                        {job.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className={`flex flex-wrap gap-2 mt-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {job.stack.map(tech => (
                        <span key={tech} className="text-[9px] font-mono font-bold text-slate-500 border border-slate-800 px-3 py-1 rounded-full bg-slate-900/50 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
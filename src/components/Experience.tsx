import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[var(--background)] transition-colors duration-700 relative overflow-hidden border-b border-slate-900">
      
      {/* Background Grid Accent - Slightly higher opacity for structure */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.06] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24">
          <p className="text-blue-500 font-mono text-xs font-black tracking-[0.4em] mb-4 uppercase flex items-center gap-4">
            <span className="h-px w-10 bg-blue-500/50" />
            02_experience_history
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] break-words text-white">
            Technical <br /><span className="text-blue-600 italic">Benchmarks</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Rail - Thicker for mobile visibility */}
          <div className="absolute left-1 md:left-1/2 top-0 bottom-0 w-1 bg-slate-900 md:-ml-[2px] rounded-full">
            <div className="sticky top-1/2 h-40 w-full bg-gradient-to-b from-transparent via-blue-600 to-transparent blur-md opacity-60" />
          </div>

          <div className="space-y-32 md:space-y-48">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Point - Larger and Glowing */}
                <div className="absolute left-[-2px] md:left-1/2 top-3 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_#3b82f6] transition-all duration-500 md:-ml-[8px] z-20" />

                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-24 pl-10 md:pl-0`}>
                  
                  {/* Content Module */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex flex-col space-y-3 mb-8">
                      <span className="font-mono text-xs font-black text-blue-500 uppercase tracking-widest">
                        {job.period}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-sm md:text-base font-mono font-black text-slate-500 uppercase tracking-[0.3em] italic">
                        // {job.company}
                      </p>
                    </div>
                    
                    {/* The Card - Increased Padding & Text Size */}
                    <div className="p-8 md:p-10 rounded-2xl border-2 border-slate-800 bg-slate-900/40 backdrop-blur-xl group-hover:border-blue-500/40 transition-all duration-500 relative shadow-2xl overflow-hidden">
                      {/* Thicker Scanning Line */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[300px] transition-all duration-[2s] ease-in-out" />
                      
                      <p className="text-slate-300 leading-relaxed text-base md:text-lg font-medium relative z-10 text-left">
                        {job.description}
                      </p>
                    </div>

                    {/* Tech Stack - Larger Pills */}
                    <div className={`flex flex-wrap gap-3 mt-10 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {job.stack.map(tech => (
                        <span key={tech} className="text-[10px] md:text-xs font-mono font-black text-slate-400 border-2 border-slate-800 px-4 py-2 rounded-lg bg-slate-950 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-all uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty Spacer */}
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
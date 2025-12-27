import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#030712] text-slate-100 relative overflow-hidden">
      {/* Subtle Hardware Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24">
          <p className="text-blue-500 font-mono text-[10px] tracking-[0.5em] mb-3 uppercase">
            // STORAGE_CLASS: EXPERIENCE_LOG
          </p>
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">
            Career <span className="text-slate-700">Benchmarks</span>
          </h2>
        </div>

        <div className="relative">
          {/* Main Central Bus - Now a darker, recessed line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800 md:left-1/2 md:-ml-px">
            <div className="sticky top-1/2 h-32 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-sm opacity-50" />
          </div>

          <div className="space-y-32">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                {/* Logic Node - Acts like a solder point */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-900 border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500 shadow-[0_0_0_4px_rgba(2,6,23,1)] md:left-1/2 md:-ml-[4px] z-20" />

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24`}>
                  {/* Content Module */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block font-mono text-[10px] font-bold text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded bg-blue-500/5 mb-4`}>
                      {job.period}
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      {job.role}
                    </h3>
                    
                    <p className="text-xs font-mono font-bold text-slate-500 mt-2 uppercase tracking-widest">
                      {job.company}
                    </p>
                    
                    {/* The "Shielded" Card */}
                    <div className="mt-6 p-8 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm group-hover:border-blue-500/30 group-hover:bg-slate-900/60 transition-all duration-500 relative overflow-hidden">
                      {/* Interactive Pulse Line */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-24 transition-all duration-1000" />
                      
                      <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                        {job.description}
                      </p>
                    </div>

                    {/* Tech Sub-Modules with a darker, metallic feel */}
                    <div className={`flex flex-wrap gap-2 mt-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {job.stack.map(tech => (
                        <span key={tech} className="text-[9px] font-mono font-bold text-slate-600 border border-slate-800 px-2 py-1 rounded bg-black/20 group-hover:border-blue-900 group-hover:text-blue-400 transition-all">
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
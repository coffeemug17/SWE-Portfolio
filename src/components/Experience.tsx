import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header with Serial Code aesthetic */}
        <div className="mb-20">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.5em] mb-2 uppercase">
            // EXECUTION_HISTORY_LOG
          </p>
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">
            Career <span className="text-slate-300">Benchmarks</span>
          </h2>
        </div>

        <div className="relative">
          {/* Main Bus Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100 md:left-1/2 md:-ml-px" />

          <div className="space-y-24">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                {/* Logic Node */}
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:scale-150 transition-all md:left-1/2 md:-ml-[6px] z-10" />

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24`}>
                  {/* Content Module */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-mono text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">
                      {job.period}
                    </span>
                    <h3 className="text-3xl font-black mt-4 tracking-tight group-hover:text-blue-600 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-sm font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">
                      {job.company}
                    </p>
                    
                    <div className={`mt-6 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 group-hover:bg-white group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-500`}>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {job.description}
                      </p>
                    </div>

                    {/* Technical Sub-Modules */}
                    <div className={`flex flex-wrap gap-3 mt-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {job.stack.map(tech => (
                        <span key={tech} className="text-[9px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded group-hover:border-blue-300 group-hover:text-blue-500 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty Spacer for alternating layout */}
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
import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Work Experience</h2>
        <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
            {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative group">
                {/* The Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors" />
                
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">{job.period}</span>
                    <h3 className="text-2xl font-bold">{job.role} @ {job.company}</h3>
                    <p className="text-slate-600 max-w-2xl mt-2 leading-relaxed">{job.description}</p>
                    
                    <div className="flex gap-3 mt-4">
                    {job.stack.map(s => (
                        <span key={s} className="text-[10px] font-mono bg-slate-100 px-2 py-1 rounded">#{s}</span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
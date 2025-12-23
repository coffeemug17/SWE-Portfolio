import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Work Experience</h2>
        <div className="grid gap-8">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-sm text-slate-500 font-mono">{job.period}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md uppercase">
                    {tech}
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
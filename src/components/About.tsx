import { courses } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-slate-50 bg-grid-slate">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            01_system_overview
          </span>
          <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">
            The Efficiency <span className="text-blue-600 italic">Mindset</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I am an Electrical and Computer Engineering student at the University of British Columbia. 
            My career is defined by a simple goal: removing friction from complex systems.
          </p>
          <p className="text-slate-600 mb-8">
            Whether it is reducing tech debt at Clio or automating workflows for 100+ employees 
            at Emcon Services, I build tools that save time and optimize performance.
          </p>
          <div className="inline-block bg-slate-900 text-white p-4 rounded-lg font-mono">
            <span className="text-blue-400">const</span> graduation = <span className="text-amber-300">"May_2026"</span>;
          </div>
        </div>
        
        {/* ECE Serial Monitor / Terminal */}
        <div className="relative">
          <div className="absolute -inset-2 bg-blue-500/10 rounded-xl blur-lg"></div>
          <div className="relative bg-[#0d1117] rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                tty.usbserial-ubc_ece
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-[11px] md:text-xs leading-relaxed">
              <div className="space-y-1">
                <p className="text-blue-400">[{">"}] Initializing Academic_Kernel_v4.0...</p>
                <p className="text-slate-500">Reading ROM sectors...</p>
                <p className="text-green-400">[OK] CPU: UBC ECE Core detected</p>
                <p className="text-green-400">[OK] RAM: System_Stability_High</p>
                <p className="text-amber-400 mt-4 underline uppercase tracking-wider">Loading_Kernel_Modules:</p>
                
                <div className="grid grid-cols-1 gap-1 pl-4 mt-2">
                  {courses.map((course, i) => (
                    <p key={i} className="text-slate-300">
                      <span className="text-blue-500">mod_{i}:</span> {course.replace(/\s+/g, '_')}
                    </p>
                  ))}
                </div>

                <p className="text-white mt-6 pt-4 border-t border-slate-800">
                  <span className="animate-pulse inline-block w-2 h-4 bg-blue-500 align-middle mr-2"></span>
                  System status: <span className="text-green-400 uppercase">Production_Ready</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
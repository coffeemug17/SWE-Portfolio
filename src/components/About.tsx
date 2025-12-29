import { courses } from "../lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[var(--background)] transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: IDENTITY & IMAGE */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                01_system_overview
              </span>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none">
                About <span className="text-blue-600 italic underline decoration-blue-500/30">Me</span>
              </h2>
            </div>

            {/* THE PIXEL PHOTO FRAME */}
            <div className="relative group max-w-md">
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 z-20" />
              
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/5] shadow-2xl">
                <Image 
                  src="/Mitul_pixel.jpg" 
                  alt="Mitul Pandey - System Operator"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 scale-110 group-hover:scale-100"
                />
                
                {/* HUD Overlay on Photo */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="font-mono text-[9px] text-blue-400">
                      <p>UID: MP_UBC_2026</p>
                      <p>STATUS: OPTIMIZING...</p>
                    </div>
                    <div className="px-2 py-1 border border-green-500/50 rounded text-[8px] font-mono text-green-500 animate-pulse">
                      SENSORS_ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400 font-medium">
              <p className="leading-relaxed">
                I am an Electrical and Computer Engineering student at the University of British Columbia. 
                My career is defined by a simple goal: removing friction from complex systems.
              </p>
              <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-500 px-4 py-2 rounded-md font-mono text-xs">
                const graduation = <span className="text-amber-500">"May_2026"</span>;
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TERMINAL & SPECS */}
          <div className="relative pt-12 md:pt-20">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-xl blur-2xl"></div>
            
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
              <div className="p-6 font-mono text-[11px] leading-relaxed">
                <div className="space-y-1">
                  <p className="text-blue-400">[{">"}] Initializing Academic_Kernel_v4.0...</p>
                  <p className="text-slate-500">Reading ROM sectors...</p>
                  <p className="text-green-400">[OK] CPU: UBC ECE Core detected</p>
                  <p className="text-green-400">[OK] RAM: System_Stability_High</p>
                  
                  <p className="text-amber-400 mt-6 underline uppercase tracking-wider">Loading_Kernel_Modules:</p>
                  <div className="grid grid-cols-1 gap-1 pl-4 mt-2">
                    {courses.map((course, i) => (
                      <p key={i} className="text-slate-300">
                        <span className="text-blue-500">mod_{i}:</span> {course.replace(/\s+/g, '_')}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800">
                    <p className="text-white">
                      <span className="animate-pulse inline-block w-2 h-4 bg-blue-500 align-middle mr-2"></span>
                      System status: <span className="text-green-400 uppercase">Production_Ready</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
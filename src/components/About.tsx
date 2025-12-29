import { courses } from "../lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden bg-[var(--background)] transition-colors duration-700">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* LEFT COLUMN: IDENTITY & IMAGE */}
          <div className="space-y-10">
            <div>
              <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
                01_system_overview
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none text-[var(--foreground)]">
                About <span className="text-blue-600 italic underline decoration-blue-500/30">Me</span>
              </h2>
            </div>

            {/* PHOTO FRAME - Centered on Mobile */}
            <div className="relative group w-full max-w-[320px] md:max-w-md mx-auto md:mx-0">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-blue-500 z-20" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-blue-500 z-20" />
              
              <div className="relative rounded-xl overflow-hidden border-2 border-slate-800 bg-slate-900 aspect-[4/5] shadow-2xl">
                <Image 
                  src="/Mitul_pixel.jpg" 
                  alt="Mitul Pandey"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-100"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                  <div className="flex justify-between items-end font-mono">
                    <div className="text-[10px] md:text-xs text-blue-400 font-black space-y-0.5">
                      <p>UID: MP_UBC_2026</p>
                      <p>AUTH: PGWP_SCAN_OK</p>
                    </div>
                    <div className="px-2 py-1 border-2 border-green-500 rounded font-black text-[9px] md:text-xs text-green-500 animate-pulse bg-green-500/10 whitespace-nowrap">
                      LIVE_SIGNAL
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BIO TEXT */}
            <div className="space-y-8 text-slate-300 font-medium text-lg md:text-xl">
              <p className="leading-relaxed">
                I am an <span className="text-white font-bold tracking-tight">Electrical and Computer Engineering</span> student at UBC graduating in May 2026. 
              </p>
              
              {/* IMMIGRATION CHIP - Mobile Responsive Layout */}
              <div className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-blue-500/5 border-2 border-blue-600/30 shadow-xl w-full">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                   <span className="text-[10px] md:text-xs font-mono font-black text-blue-500 uppercase tracking-widest italic">// Work_Authorization</span>
                </div>
                
                {/* Canada Block */}
                <div className="flex flex-col gap-1">
                   <span className="text-slate-500 font-black text-[10px] md:text-xs font-mono uppercase tracking-widest">Region: Canada</span>
                   <span className="text-white font-black text-lg md:text-xl font-mono tracking-tight uppercase leading-tight">
                     PGWP / Unrestricted
                   </span>
                </div>

                {/* US Block - Slightly smaller/dimmer */}
                <div className="flex flex-col gap-1 border-t border-slate-800/50 pt-4">
                   <span className="text-slate-600 font-black text-[10px] font-mono uppercase tracking-widest">Region: US_Markets</span>
                   <span className="text-slate-400 font-bold text-sm md:text-base font-mono tracking-tight italic">
                     Sponsorship Required
                   </span>
                </div>

                {/* Availability Badge */}
                <div className="mt-2 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center md:text-left">
                  <p className="text-[10px] md:text-xs text-slate-500 font-mono font-black uppercase tracking-widest">
                    Available: <span className="text-blue-500">May_2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TERMINAL - Adjusted for mobile screens */}
          <div className="relative pt-6 md:pt-20">
            <div className="absolute -inset-2 bg-blue-500/5 rounded-2xl blur-3xl" />
            
            <div className="relative bg-[#0d1117] rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <div className="bg-[#161b22] px-4 md:px-6 py-4 border-b-2 border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[9px] md:text-xs font-mono text-slate-500 font-black uppercase tracking-[0.1em] md:tracking-widest">
                  sys.log: ubc_kernel
                </span>
              </div>

              <div className="p-5 md:p-8 font-mono text-sm md:text-lg leading-relaxed">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-blue-400 font-black leading-tight">[{">"}] Initializing Academic_Kernel...</p>
                  
                  <div>
                    <p className="text-amber-500 font-black uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-slate-800 pb-3 mb-6">
                      Loaded_Modules:
                    </p>
                    {/* Courses Grid: Prevents text overflow on small phones */}
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {courses.map((course, i) => (
                        <div key={i} className="flex items-start gap-3 md:gap-4 group">
                          <span className="text-blue-900 font-black text-[10px] md:text-xs pt-1">0{i}</span> 
                          <span className="text-slate-100 group-hover:text-blue-400 transition-colors tracking-tighter font-bold break-words leading-tight">
                            {course.toUpperCase().replace(/\s+/g, '_')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-slate-800/80">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="animate-pulse inline-block w-3 h-6 md:w-4 md:h-8 bg-blue-600 shadow-[0_0_15px_#2563eb]"></span>
                      <p className="text-white font-black text-lg md:text-xl uppercase italic tracking-widest">
                        Status: <span className="text-green-500">Stable</span>
                      </p>
                    </div>
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
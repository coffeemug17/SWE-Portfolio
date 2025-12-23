export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
      {/* HUD Accents */}
      <div className="absolute top-24 left-6 hidden md:block font-mono text-[10px] text-slate-400 space-y-1">
        <p>LATENCY: 12ms</p>
        <p>NODE: VAN_BC_CA</p>
      </div>
      <div className="absolute top-24 right-6 hidden md:block font-mono text-[10px] text-slate-400 text-right">
        <p>VERSION: 2026.12.23</p>
        <p>ENV: PRODUCTION</p>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
            Seeking New Grad Roles — May 2026
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
          Architecting <br />
          <span className="text-blue-600">Efficiency</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          UBC Electrical & Computer Engineering. Specialized in 
          <span className="text-slate-900 font-bold"> full-stack automation </span> 
          and eliminating technical debt in high-scale systems.
        </p>

        {/* Action HUD */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#projects" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-sm font-mono text-sm hover:bg-blue-600 transition-all">
                <span>[ RUN_PROJECTS ]</span>
            </a>
            <a 
                href="/Mitul_Pandey_Resume.pdf" 
                target="_blank"             /* Opens in new tab */
                rel="noopener noreferrer"   /* Security best practice */
                className="font-mono text-xs text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                >
                // Fetch_Resume.pdf
            </a>
        </div>
      </div>
    </section>
  );
}
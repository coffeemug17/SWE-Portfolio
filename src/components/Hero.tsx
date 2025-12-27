export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-32 md:pt-40 pb-20 px-6 relative overflow-hidden transition-colors duration-700">
      
      {/* HUD Accents - Repositioned for better screen fit */}
      <div className="absolute top-32 left-8 hidden lg:block font-mono text-[10px] text-blue-500/50 space-y-2 uppercase tracking-widest">
        <p className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full animate-ping" /> LATENCY: 12ms</p>
        <p className="pl-3">NODE: VAN_BC_CA</p>
      </div>
      
      <div className="absolute top-32 right-8 hidden lg:block font-mono text-[10px] text-blue-500/50 text-right space-y-2 uppercase tracking-widest">
        <p>VERSION: 2026.12.23</p>
        <p>ENV: <span className="text-green-500">PRODUCTION</span></p>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
            Seeking New Grad Roles — May 2026
          </span>
        </div>

        {/* Responsive Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
          Architecting <br />
          <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">Efficiency</span>
        </h1>
        
        {/* Fixed Text Color: Uses foreground variable so it swaps with theme */}
        <p className="text-base md:text-lg text-[var(--foreground)] opacity-70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          UBC Electrical & Computer Engineering. Specialized in 
          <span className="text-blue-500 font-bold"> full-stack automation </span> 
          and eliminating technical debt in high-scale systems.
        </p>

        {/* Action HUD */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#projects" className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-sm font-mono text-xs hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <span>[ RUN_PROJECTS ]</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a 
            href="/Mitul_Pandey_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group font-mono text-[10px] text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <span className="text-blue-500 group-hover:animate-pulse">//</span> Fetch_Resume.pdf
          </a>
        </div>
      </div>

      {/* Background Decorative Element - ECE Waveform */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 100">
          <path 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="2" 
            d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1440,50" 
          />
        </svg>
      </div>
    </section>
  );
}
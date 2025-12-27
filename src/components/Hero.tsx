export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-32 md:pt-40 pb-20 px-6 relative overflow-hidden transition-colors duration-700">
      
      {/* Background HUD - Subtle branding of your location/status */}
      <div className="absolute top-32 left-8 hidden lg:block font-mono text-[10px] text-blue-500/30 space-y-2 uppercase tracking-widest">
        <p className="flex items-center gap-2">STATUS: READY_TO_DEPLOY</p>
        <p>LOC: VANCOUVER_BC</p>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* The "Hand-Shake" Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">
            Nice to meet you. I&apos;m Mitul.
          </span>
        </div>

        {/* The Bold Hook: Focus on the HUMAN IMPACT of Software */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
          Building Software <br />
          <span className="text-blue-600 relative inline-block">
            That Matters.
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        {/* The Narrative: Technical + Warm + Goal-Oriented */}
        <p className="text-base md:text-lg text-[var(--foreground)] opacity-80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          I&apos;m an Electrical and Computer Engineering student at UBC graduating in May 2026. 
          I don&apos;t just write code; I engineer full-stack solutions that are 
          <span className="text-blue-500 font-bold"> resilient, scalable, </span> and 
          <span className="text-blue-500 font-bold"> built with purpose. </span> 
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#projects" className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-sm font-mono text-xs hover:bg-blue-500 transition-all shadow-[4px_4px_0px_0px_rgba(37,99,235,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            <span>[ VIEW_PROJECTS ]</span>
          </a>
          
          <a 
            href="mailto:mitulpandey2@gmail.com" 
            className="group font-mono text-[10px] text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <span className="text-blue-500">//</span> Let&apos;s_Chat.exe
          </a>
        </div>

        {/* The "Trust" Footer */}
        <div className="mt-16 opacity-30 select-none hidden sm:block">
           <span className="font-mono text-[9px] tracking-[0.3em] uppercase underline decoration-blue-500/50 underline-offset-8">
             React • Next.js • Django • PostgreSQL • System Design 
           </span>
        </div>
      </div>
    </section>
  );
}
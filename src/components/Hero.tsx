export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden bg-[var(--background)] transition-colors duration-700">
      
      {/* Background HUD - Scaled up for readability */}
      <div className="absolute top-40 left-10 hidden xl:block font-mono text-xs text-blue-500/20 space-y-3 uppercase tracking-[0.3em] vertical-text">
        <p className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse" /> 
          SYS_READY
        </p>
        <p>LOC: VAN_BC // 49.2827° N</p>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* The "Hand-Shake" Badge - Bigger font, higher contrast */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/5 border-2 border-blue-500/20 mb-10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs md:text-sm font-mono font-black text-green-500 uppercase tracking-widest">
            Nice to meet you. I&apos;m Mitul.
          </span>
        </div>

        {/* The Bold Hook: Massive & High-Readability */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.85] uppercase text-[var(--foreground)]">
          Building Software <br />
          <span className="text-blue-600 relative inline-block italic">
            That Matters.
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/10 -z-10 skew-x-[-12deg]" />
          </span>
        </h1>
        
        {/* The Narrative: Bolder, larger text */}
        <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed px-4">
          I&apos;m a <span className="text-white font-bold decoration-blue-500/50 underline-offset-4">Full-Stack Developer</span> studying Electrical and Computer Engineering at UBC. 
          I specialize in engineering resilient systems that are 
          <span className="text-blue-500 font-black"> scalable</span> and 
          <span className="text-blue-500 font-black"> purpose-built.</span> 
        </p>

        {/* CTA Section - Mobile Optimized Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20">
          <a href="#projects" className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-sm font-mono text-sm font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_0px_rgba(37,99,235,0.2)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
            <span>[ VIEW_PROJECTS ]</span>
          </a>
          
          <a 
            href="mailto:mitulpandey2@gmail.com" 
            className="group font-mono text-xs md:text-sm font-bold text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-[0.3em] flex items-center gap-3"
          >
            <span className="text-blue-500 text-lg font-black">{">"}</span> Let&apos;s_Chat.exe
          </a>
        </div>

        {/* The "Trust" Footer - Re-engineered as a System Log */}
        <div className="mt-12 py-6 border-y border-slate-900/50 max-w-4xl mx-auto opacity-50 overflow-hidden hidden sm:block">
           <div className="flex justify-around items-center gap-8 whitespace-nowrap px-4 font-mono text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">
              <span className="hover:text-blue-500 transition-colors">TypeScript</span>
              <span className="text-slate-800">/</span>
              <span className="hover:text-blue-500 transition-colors">Go</span>
              <span className="text-slate-800">/</span>
              <span className="hover:text-blue-500 transition-colors">React</span>
              <span className="text-slate-800">/</span>
              <span className="hover:text-blue-500 transition-colors">Distributed Systems</span>
              <span className="text-slate-800">/</span>
              <span className="hover:text-blue-500 transition-colors">PostgreSQL</span>
           </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-20" />
    </section>
  );
}
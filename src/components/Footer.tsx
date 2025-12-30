export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-[#0a0f1a] py-32 px-6 relative overflow-hidden border-t-2 border-slate-900">
      {/* Structural Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: System Status */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-500/5 border-2 border-blue-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-[0.2em]">
                  Port_Status: Listening_For_Signals
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic leading-none">
                Ready to <span className="text-blue-600">Initialize?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-lg font-medium leading-relaxed">
                Seeking <span className="text-white">New Grad SWE</span> roles for May 2026. 
                Optimized for relocation and high-complexity challenges.
              </p>
            </div>
            
            <div className="flex">
              <a 
                href="mailto:mitulpandey2@gmail.com" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-black px-10 py-5 rounded-sm transition-all shadow-[6px_6px_0px_0px_rgba(37,99,235,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 uppercase tracking-widest"
              >
                [ SEND_ENCRYPTED_SIGNAL ]
              </a>
            </div>
          </div>

          {/* Right Side: Contact Connections */}
          <div className="grid gap-6">
            <ContactLink label="NETWORK: LINKEDIN" value="mitul-pandey" href="https://linkedin.com/in/mitul-pandey" />
            <ContactLink label="REPOSITORY: GITHUB" value="coffeemug17" href="https://github.com/coffeemug17" />
            <ContactLink label="DOCS: RESUME" value="Mitul_Pandey_Resume.pdf" href="/Mitul_Pandey_Resume.pdf" isNewTab />
          </div>
        </div>

        {/* Bottom Bar: System Specs */}
        <div className="mt-32 pt-10 border-t-2 border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[11px] md:text-xs font-black text-slate-500 uppercase tracking-widest">
          <div className="flex flex-wrap justify-center gap-8">
            <p className="flex items-center gap-2 italic"><span className="text-blue-900">LAT:</span> 49.2827° N</p>
            <p className="flex items-center gap-2 italic"><span className="text-blue-900">LONG:</span> 123.1207° W</p>
          </div>
          
          <p className="text-slate-400">© {currentYear} MP_SYSTEMS // KERNEL_v4.0.2</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-600 underline underline-offset-4 decoration-blue-500/20">Uptime_Stable:</span>
            <div className="w-20 h-3 bg-slate-900 rounded-full border border-slate-800 p-0.5">
              <div className="w-full h-full bg-green-500/40 animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({ label, value, href, isNewTab }: any) {
  return (
    <a 
      href={href} 
      target={isNewTab ? "_blank" : "_self"}
      rel={isNewTab ? "noopener noreferrer" : ""}
      className="group flex items-center justify-between p-6 bg-slate-900/40 border-2 border-slate-800 rounded-2xl hover:border-blue-600/50 transition-all duration-300 shadow-xl active:scale-[0.98]"
    >
      <div className="flex flex-col gap-1">
        <span className="text-[10px] md:text-xs text-blue-500 font-black tracking-[0.3em] uppercase">{label}</span>
        <span className="text-lg md:text-xl text-slate-200 group-hover:text-blue-400 transition-colors font-mono font-bold tracking-tight">{value}</span>
      </div>
      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300 shadow-inner">
        <svg className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
}
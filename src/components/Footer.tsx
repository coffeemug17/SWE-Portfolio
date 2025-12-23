export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-[#0a0f1a] py-24 px-6 relative overflow-hidden">
      {/* Blueprint Grid Overlay (matching the Arsenal) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: System Status */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                Port_Status: Listening
              </span>
            </div>
            <h2 className="text-5xl font-black text-white tracking-tighter mb-6 uppercase italic">
              Ready to <span className="text-blue-500">Initialize?</span>
            </h2>
            <p className="text-slate-400 max-w-sm mb-8 font-medium">
              Currently seeking New Grad Software Engineering opportunities for May 2026. Open to relocation and complex challenges.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="mailto:mitulpandey2@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-6 py-3 rounded transition-all"
              >
                [ SEND_SIGNAL ]
              </a>
            </div>
          </div>

          {/* Right Side: Contact "Connections" */}
          <div className="space-y-4">
            <ContactLink label="LINKEDIN" value="mitul-pandey" href="https://linkedin.com/in/mitul-pandey" />
            <ContactLink label="GITHUB" value="coffeemug17" href="https://github.com/coffeemug17" />
            <ContactLink label="RESUME" value="Mitul_Pandey_Resume.pdf" href="/Mitul_Pandey_Resume.pdf" isNewTab />
          </div>
        </div>

        {/* Bottom Bar: System Specs */}
        <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-slate-500">
          <div className="flex gap-6">
            <p>LAT: 49.2827° N</p>
            <p>LONG: 123.1207° W</p>
          </div>
          <p>© {currentYear} MP_SYSTEMS // ALL_RIGHTS_RESERVED</p>
          <div className="flex items-center gap-2">
            <span>Uptime:</span>
            <div className="w-12 h-2 bg-slate-900 rounded-full overflow-hidden">
              <div className="w-full h-full bg-green-500/50 animate-pulse" />
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
      className="group flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/50 transition-all"
    >
      <div className="flex flex-col">
        <span className="text-[9px] text-slate-500 font-bold tracking-[0.2em] mb-1">{label}</span>
        <span className="text-sm text-slate-200 group-hover:text-blue-400 transition-colors font-mono">{value}</span>
      </div>
      <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all">
        <svg className="w-4 h-4 text-slate-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
}
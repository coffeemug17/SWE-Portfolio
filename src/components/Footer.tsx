import { NAV_LINKS } from "../lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter italic">
          Let's build something <span className="text-blue-600">faster.</span>
        </h2>
        
        <p className="text-slate-600 mb-12 text-lg max-w-xl mx-auto">
          Seeking New Grad Software Engineering roles for May 2026. 
          Based in Vancouver, BC — open to relocation.
        </p>

        <div className="flex flex-wrap justify-center gap-12 mb-20">
          <a href="mailto:mitulpandey2@gmail.com" className="group flex flex-col items-center gap-2">
            <span className="text-sm font-mono text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Email</span>
            <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-blue-600 transition-all">mitulpandey2@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/mitul-pandey" target="_blank" className="group flex flex-col items-center gap-2">
            <span className="text-sm font-mono text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">LinkedIn</span>
            <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-blue-600 transition-all">mitul-pandey</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-mono">
            © 2024 Mitul Pandey — Engineered for Performance.
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-600">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
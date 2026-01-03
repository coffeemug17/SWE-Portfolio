"use client";
import { useState } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { NAV_LINKS } from "../lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- SCROLL PHYSICS ---
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 15, stiffness: 200 });
  const blur = useTransform(smoothVelocity, [-3000, 0, 3000], [1, 0, 1]);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl z-[100] 
                      bg-slate-950/40 backdrop-blur-[24px] 
                      border border-white/10 border-t-white/20
                      rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all">
        
        <div className="px-4 xl:px-10 h-20 flex items-center justify-between relative gap-2">
          
          {/* Identity - shrink-0 and min-w-max prevents your name from squishing */}
          <div className="flex items-center gap-4 shrink-0 min-w-max">
            <div className="flex flex-col">
              <span className="font-black text-base xl:text-xl tracking-tighter leading-none text-white uppercase italic">
                MITUL <span className="text-blue-600">PANDEY</span>
              </span>
              <span className="text-[8px] xl:text-[10px] font-mono font-bold text-blue-500 uppercase tracking-[0.3em] mt-1.5">
                SYS_KERNEL_v4.0
              </span>
            </div>
          </div>

          {/* Desktop Links - Optimized for high density
              Using flex-1 and justify-center to fill the middle space perfectly.
              Scaling gaps and tracking based on screen width. */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-2 xl:gap-8 uppercase font-mono text-[10px] xl:text-xs font-black tracking-tighter xl:tracking-widest px-2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-200/80 hover:text-blue-400 transition-all hover:scale-105 whitespace-nowrap px-1"
              >
                <span className="text-blue-600 mr-1 font-black opacity-60">/</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Tools - Set to shrink-0 so it stays fixed to the right */}
          <div className="flex items-center justify-end shrink-0">
            {/* Resume Button */}
            <div className="hidden sm:block">
              <a 
                href="/Mitul_Pandey_Resume.pdf" 
                target="_blank" 
                className="font-mono text-[10px] xl:text-[11px] font-black px-4 xl:px-6 py-2.5 xl:py-3 bg-blue-600/20 backdrop-blur-md border border-blue-500/50 text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all uppercase shadow-[4px_4px_0px_0px_rgba(37,99,235,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none whitespace-nowrap"
              >
                [ FETCH_RESUME ]
              </a>
            </div>

            {/* Mobile Burger */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-2 lg:hidden z-[110] p-2"
            >
              <div className={`w-7 h-1 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
              <div className={`w-7 h-1 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-7 h-1 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`absolute top-[calc(100%+12px)] left-0 w-full lg:hidden transition-all duration-500 origin-top
                        ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="bg-[#0a0f1a] border-2 border-slate-800 rounded-2xl p-8 flex flex-col gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            {NAV_LINKS.map((link, i) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-base font-black uppercase tracking-[0.3em] text-slate-200 hover:text-blue-500 flex items-center gap-6"
              >
                <span className="text-blue-900">0{i}</span>
                {link.name}
              </a>
            ))}
            <a 
              href="/Mitul_Pandey_Resume.pdf" 
              className="text-center font-mono text-sm font-black py-5 bg-blue-600 text-white rounded-xl uppercase tracking-widest active:scale-95 transition-transform"
            >
              [ DOWNLOAD_RESUME ]
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../lib/data";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle 'light-mode' class on the HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (!isDarkMode) {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[100] 
                    bg-slate-900/40 backdrop-blur-xl border border-white/10 
                    rounded-2xl transition-all duration-300">
      <div className="px-6 h-14 flex items-center justify-between relative">
        
        {/* System Identity */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-black text-xs tracking-tighter leading-none text-white">MITUL_PANDEY</span>
            <span className="text-[8px] font-mono text-blue-500 tracking-widest mt-1">SYS_OP_v4.0</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 uppercase font-mono text-[10px] tracking-widest">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white/50 hover:text-blue-400 transition-colors">
              ./{link.name.toLowerCase()}
            </a>
          ))}
        </div>

        {/* THE PULL STRING (ECE Theme Toggle) */}
        <div 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute right-10 top-full group cursor-pointer flex flex-col items-center"
        >
          {/* The Wire */}
          <div className={`w-[1px] transition-all duration-500 bg-slate-400 group-hover:h-24 h-16 ${!isDarkMode ? 'bg-blue-600' : 'bg-slate-400'}`} />
          
          {/* The Capacitor/Handle */}
          <div className={`w-3 h-7 rounded-b-sm -mt-px transition-all duration-300 
            ${isDarkMode ? 'bg-slate-800 border-x border-b border-slate-700' : 'bg-blue-500 shadow-[0_0_15px_#3b82f6] border-x border-b border-blue-400'}`}>
            <div className="w-full h-1 bg-black/20 mt-1" />
            <div className="w-full h-1 bg-black/20 mt-1" />
          </div>

          <span className="mt-2 opacity-0 group-hover:opacity-100 font-mono text-[8px] text-blue-500 uppercase transition-opacity">
            {isDarkMode ? "PULL_FOR_BLUEPRINT" : "PULL_FOR_DARK"}
          </span>
        </div>

        {/* Fetch CV Button */}
        <div className="hidden sm:block ml-12">
          <a 
            href="/Mitul_Pandey_Resume.pdf" 
            target="_blank" 
            className="font-mono text-[9px] px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded hover:bg-blue-500/20 transition-all uppercase"
          >
            [ fetch_cv ]
          </a>
        </div>
      </div>
    </nav>
  );
}
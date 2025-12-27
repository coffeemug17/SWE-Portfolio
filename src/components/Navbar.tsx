"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { NAV_LINKS } from "../lib/data";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- PHYSICAL MOTION LOGIC ---
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Transform velocity into a rotation degree (-10 to 10 degrees)
  // useSpring smooths out the movement so it doesn't look "jittery"
  const smoothVelocity = useSpring(scrollVelocity, { damping: 15, stiffness: 200 });
  const rotation = useTransform(smoothVelocity, [-3000, 3000], [45, -45]);
  const blur = useTransform(smoothVelocity, [-3000, 0, 3000], [2, 0, 2]);

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
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl z-[100] 
                      bg-slate-900/40 backdrop-blur-xl border border-white/10 
                      rounded-xl md:rounded-2xl transition-all duration-300">
        
        <div className="px-4 md:px-6 h-14 flex items-center justify-between relative">
          
          {/* System Identity */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-black text-xs tracking-tighter leading-none text-white">MITUL_PANDEY</span>
              <span className="text-[8px] font-mono text-blue-500 tracking-widest mt-1">SYS_OP_v4.0</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 uppercase font-mono text-[10px] tracking-widest">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-white/50 hover:text-blue-400 transition-colors"
              >
                ./{link.name.toLowerCase()}
              </a>
            ))}
          </div>

          {/* Right Side: Pull String & Mobile Toggle */}
          <div className="flex items-center gap-4">
            
            {/* THE HANGING PULL STRING (Swinging Pendulum) */}
            <motion.div 
              style={{ 
                rotate: rotation, 
                originY: 0,
                filter: useTransform(blur, (v) => `blur(${v}px)`) // Blurs as it swings
              }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="absolute right-12 md:right-16 top-full cursor-pointer flex flex-col items-center group"
            >
              {/* The Wire */}
              <div className={`w-[1px] transition-all duration-500 group-hover:h-20 h-14 ${!isDarkMode ? 'bg-blue-600 shadow-[0_0_8px_#3b82f6]' : 'bg-slate-500'}`} />
              
              {/* The Capacitor Handle */}
              <div className={`w-3 h-7 rounded-b-sm -mt-px transition-all duration-300 
                ${isDarkMode ? 'bg-slate-800 border-x border-b border-slate-700' : 'bg-blue-500 shadow-[0_0_15px_#3b82f6] border-x border-b border-blue-400'}`}>
                <div className="w-full h-1 bg-black/20 mt-1" />
                <div className="w-full h-1 bg-black/20 mt-1" />
              </div>

              {/* Status Tooltip */}
              <span className="mt-2 opacity-0 group-hover:opacity-100 font-mono text-[8px] text-blue-500 uppercase transition-opacity whitespace-nowrap">
                {isDarkMode ? "PULL_FOR_BLUEPRINT" : "PULL_FOR_DARK"}
              </span>
            </motion.div>

            {/* Mobile Menu Toggle (The 3 Lines) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 md:hidden z-[110] p-2"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Fetch CV Button (Desktop Only) */}
            <div className="hidden sm:block ml-4">
              <a 
                href="/Mitul_Pandey_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[9px] px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded hover:bg-blue-500/20 transition-all uppercase"
              >
                [ fetch_cv ]
              </a>
            </div>
          </div>
        </div>

        {/* --- MOBILE EXPANDED MENU (Glass Pane Overlay) --- */}
        <div className={`absolute top-full left-0 w-full mt-2 md:hidden transition-all duration-500 origin-top
                        ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-xl p-6 flex flex-col gap-6 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 hover:text-blue-400 transition-colors"
              >
                ./{link.name.toLowerCase()}
              </a>
            ))}
            <a 
              href="/Mitul_Pandey_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-mono text-[10px] py-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg uppercase"
            >
              [ Download Resume ]
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
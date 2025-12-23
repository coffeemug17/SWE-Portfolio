"use client";
import { useState } from "react";
import { SKILLS } from "../lib/data";

export default function Skills() {
  const [openSwitches, setOpenSwitches] = useState<string[]>([]);

  const toggleSwitch = (id: string) => {
    setOpenSwitches(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Logic Calculations
  const systemEfficiency = Math.round(((3 - openSwitches.length) / 3) * 100);
  const activeVoltage = ((3 - openSwitches.length) * 1.1).toFixed(1);

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0f1a] text-white relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. System Monitor Dashboard */}
        <div className="mb-16 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-8">
          <div className="flex gap-8">
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">System_Output</p>
              <p className={`text-3xl font-black font-mono transition-colors ${systemEfficiency === 0 ? 'text-red-500' : 'text-blue-500'}`}>
                {systemEfficiency}%
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Logic_Voltage</p>
              <p className="text-3xl font-black font-mono text-slate-200">{activeVoltage}V</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Core_Status</p>
            <p className={`text-xs font-bold font-mono ${systemEfficiency > 0 ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {systemEfficiency > 0 ? '>>> SIGNALS_NOMINAL' : '!!! CRITICAL_HALT'}
            </p>
          </div>
        </div>

        {/* 2. Interactive Rails */}
        <div className="space-y-8">
          <SkillCircuit 
            id="BUS_01" title="Systems & Languages" items={SKILLS.languages} 
            isOpen={openSwitches.includes("BUS_01")} onToggle={() => toggleSwitch("BUS_01")}
          />
          <SkillCircuit 
            id="BUS_02" title="Frameworks & Web" items={SKILLS.frameworks} 
            isOpen={openSwitches.includes("BUS_02")} onToggle={() => toggleSwitch("BUS_02")}
          />
          <SkillCircuit 
            id="BUS_03" title="Infrastructure & Tools" items={SKILLS.tools} 
            isOpen={openSwitches.includes("BUS_03")} onToggle={() => toggleSwitch("BUS_03")}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCircuit({ id, title, items, isOpen, onToggle }: any) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 group">
      {/* Category Switch */}
      <button 
        onClick={onToggle}
        className={`w-full md:w-64 p-5 rounded-xl border font-mono transition-all duration-500 text-left relative overflow-hidden ${
          isOpen ? "bg-red-500/5 border-red-900/50 shadow-none" : "bg-blue-600/5 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-slate-500">{id}</span>
          <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-red-500" : "bg-blue-400 animate-pulse"}`} />
        </div>
        <h3 className={`text-sm font-black tracking-tight ${isOpen ? "text-slate-600" : "text-white"}`}>{title}</h3>
      </button>

      {/* 3. Oscilloscope Signal Path */}
      <div className="hidden md:block h-12 w-24 relative">
        <svg className="w-full h-full" viewBox="0 0 100 40">
          <path 
            d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,20" 
            fill="none" 
            stroke={!isOpen ? "#3b82f6" : "#1e293b"} 
            strokeWidth="1.5"
            className={!isOpen ? "animate-signal-flow" : ""}
            style={{ strokeDasharray: "5,3" }}
          />
        </svg>
      </div>

      {/* Skills Series */}
      <div className="flex flex-wrap gap-2 flex-grow">
        {items.map((item: string) => (
          <div key={item} className="group/node relative">
            <span className={`px-4 py-1.5 rounded-md border font-mono text-[11px] transition-all duration-500 block ${
              !isOpen 
                ? "border-blue-500/30 text-blue-100 bg-blue-500/5 hover:border-blue-400 hover:bg-blue-500/10" 
                : "border-slate-800/50 text-slate-800 opacity-20 scale-95"
            }`}>
              {item}
            </span>
            {!isOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/node:block bg-blue-600 text-[9px] px-2 py-1 rounded-sm whitespace-nowrap z-50 font-bold uppercase tracking-tighter">
                Logic: Nominal
              </div>
            )}
          </div>
        ))}
      </div>

      {/* The Bulb (Load Out) */}
      <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-700 ${
        isOpen ? "bg-slate-900 border border-slate-800" : "bg-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.4)] border-amber-200"
      }`}>
        <span className={`text-xl transition-opacity ${isOpen ? "opacity-10" : "opacity-100"}`}>💡</span>
      </div>
    </div>
  );
}
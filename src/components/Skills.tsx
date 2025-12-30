"use client";
import { useState } from "react";
import { SKILLS } from "../lib/data";

export default function Skills() {
  const [offlineNodes, setOfflineNodes] = useState<string[]>([]);

  const toggleNode = (id: string) => {
    setOfflineNodes((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const totalSystems = 4;
  const activeSystems = totalSystems - offlineNodes.length;
  const throughput = Math.round((activeSystems / totalSystems) * 100);

  return (
    <section id="skills" className="py-32 px-6 bg-[var(--background)] transition-colors duration-700 relative overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 bg-grid-slate-900/[0.05] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 0. Section Header - Consistent High-Impact Style */}
        <div className="mb-20">
          <p className="text-blue-500 font-mono text-xs font-black tracking-[0.4em] mb-4 uppercase flex items-center gap-4">
            <span className="h-px w-10 bg-blue-500/40" />
            04_capability_matrix
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            Technical <br /><span className="text-blue-600 italic">Arsenal</span>
          </h2>
        </div>

        {/* 1. Cluster Health Dashboard - Responsive Layout */}
        <div className="mb-16 p-6 md:p-10 bg-slate-950/60 backdrop-blur-xl border-2 border-slate-800 rounded-3xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-10 shadow-2xl">
          
          {/* Stats Grid: Stacks on mobile, Rows on desktop */}
          <div className="grid grid-cols-2 md:flex md:gap-16 w-full md:w-auto">
            <div className="border-r md:border-r-0 border-slate-900 pr-4 md:pr-0">
              <p className="text-[10px] md:text-xs font-mono font-black text-slate-500 uppercase tracking-widest mb-3 italic leading-none">
                // Throughput
              </p>
              <p className={`text-4xl md:text-6xl font-black font-mono transition-colors tracking-tighter tabular-nums ${throughput < 50 ? 'text-amber-500' : 'text-blue-500'}`}>
                {throughput}%
              </p>
            </div>
            
            <div className="pl-6 md:pl-0">
              <p className="text-[10px] md:text-xs font-mono font-black text-slate-500 uppercase tracking-widest mb-3 italic leading-none">
                // Nodes_Online
              </p>
              <p className="text-4xl md:text-6xl font-black font-mono text-white tracking-tighter tabular-nums">
                {activeSystems}<span className="text-slate-800">/</span>{totalSystems}
              </p>
            </div>
          </div>
          
          {/* Stability Footer: Full width on mobile */}
          <div className="w-full md:w-auto border-t-2 md:border-t-0 md:border-l-2 border-slate-900 pt-6 md:pt-0 md:pl-12">
            <p className="text-[10px] md:text-xs font-mono font-black text-slate-500 uppercase tracking-widest mb-3 italic">Stability_Protocol</p>
            <p className={`text-base md:text-lg font-black font-mono uppercase tracking-tight ${activeSystems > 0 ? 'text-green-500' : 'text-red-600 animate-pulse'}`}>
              {activeSystems === totalSystems ? '>>> LOGIC_NOMINAL' : activeSystems > 0 ? '>>> DEGRADED_STATE' : '!!! CRITICAL_HALT'}
            </p>
          </div>
        </div>

        {/* 2. System Buses */}
        <div className="space-y-10">
          <SkillBus 
            id="BUS_01" title="Core Languages" items={SKILLS.languages} 
            isOffline={offlineNodes.includes("BUS_01")} onToggle={() => toggleNode("BUS_01")}
          />
          <SkillBus 
            id="BUS_02" title="Frameworks & Libraries" items={SKILLS.frameworks} 
            isOffline={offlineNodes.includes("BUS_02")} onToggle={() => toggleNode("BUS_02")}
          />
          <SkillBus 
            id="BUS_03" title="Cloud & Architecture" items={SKILLS.tools} 
            isOffline={offlineNodes.includes("BUS_03")} onToggle={() => toggleNode("BUS_03")}
          />
          <SkillBus 
            id="BUS_04" title="Testing & QA" items={SKILLS.testing} 
            isOffline={offlineNodes.includes("BUS_04")} onToggle={() => toggleNode("BUS_04")}
          />
        </div>
      </div>
    </section>
  );
}

function SkillBus({ id, title, items, isOffline, onToggle }: any) {
  return (
    <div className={`group flex flex-col lg:flex-row items-stretch lg:items-center gap-6 p-4 rounded-3xl transition-all duration-500 ${isOffline ? 'opacity-40 grayscale' : 'opacity-100'}`}>
      
      {/* Node Controller Button - Chunkier & Tactile */}
      <button 
        onClick={onToggle}
        className={`w-full lg:w-80 p-8 rounded-2xl border-2 font-mono transition-all duration-500 text-left relative overflow-hidden active:scale-95 ${
          isOffline 
            ? "bg-slate-900/20 border-slate-800" 
            : "bg-slate-900 border-blue-600/40 shadow-xl hover:border-blue-500 shadow-[4px_4px_0px_0px_rgba(37,99,235,0.1)]"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-black text-blue-500 tracking-widest">{id}</span>
          <div className={`w-3 h-3 rounded-full ${isOffline ? "bg-slate-800" : "bg-green-500 shadow-[0_0_12px_#22c55e] animate-pulse"}`} />
        </div>
        <h3 className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">{title}</h3>
        <p className={`text-[10px] font-black mt-4 font-mono uppercase tracking-[0.2em] ${isOffline ? 'text-slate-600' : 'text-blue-400'}`}>
          STATUS: {isOffline ? 'OFFLINE' : 'BROADCASTING'}
        </p>
      </button>

      {/* Signal Link (Larger desktop connection) */}
      <div className="hidden lg:flex items-center px-4">
        <div className={`h-1 w-16 transition-colors duration-700 ${isOffline ? 'bg-slate-900' : 'bg-blue-600/30'}`} />
        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${isOffline ? 'border-slate-800' : 'border-blue-500 bg-blue-500 shadow-[0_0_15px_#3b82f6]'}`} />
      </div>

      {/* Process Tags - Larger & Readable */}
      <div className="flex flex-wrap gap-3 flex-grow p-6 bg-slate-950/40 lg:bg-transparent rounded-2xl border-2 border-slate-900 lg:border-0">
        {items.map((item: string) => (
          <div key={item} className="relative">
            <span className={`px-5 py-3 rounded-lg border-2 font-mono text-sm md:text-base font-bold transition-all duration-500 block ${
              !isOffline 
                ? "border-slate-800 text-slate-200 bg-slate-900 hover:border-blue-500/50 hover:text-white hover:-translate-y-1" 
                : "border-slate-950 text-slate-700 scale-95"
            }`}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { SKILLS } from "../lib/data";

export default function Skills() {
  // Track which "Nodes" (skill categories) are offline
  const [offlineNodes, setOfflineNodes] = useState<string[]>([]);

  const toggleNode = (id: string) => {
    setOfflineNodes((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const totalSystems = 3;
  const activeSystems = totalSystems - offlineNodes.length;
  const throughput = Math.round((activeSystems / totalSystems) * 100);

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--background)] transition-colors duration-700 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.03] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 0. Section Header - Consistent with Experience Section */}
        <div className="mb-16 md:mb-20">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase flex items-center gap-2 md:gap-3">
            <span className="h-px w-6 md:w-8 bg-blue-600/30" />
            04_capability_matrix
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] break-words">
            Technical <span className="text-blue-600 italic">Arsenal</span>
          </h2>
        </div>

        {/* 1. Cluster Health Dashboard */}
        <div className="mb-12 p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex gap-12 w-full md:w-auto justify-between md:justify-start">
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Cluster_Throughput</p>
              <p className={`text-4xl font-black font-mono transition-colors ${throughput < 50 ? 'text-amber-500' : 'text-blue-500'}`}>
                {throughput}%
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Nodes_Online</p>
              <p className="text-4xl font-black font-mono text-slate-200">{activeSystems}/{totalSystems}</p>
            </div>
          </div>
          
          <div className="w-full md:w-auto text-center md:text-right border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Network_Stability</p>
            <p className={`text-xs font-bold font-mono uppercase tracking-tighter ${activeSystems > 0 ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {activeSystems === totalSystems ? '>>> LOGIC_STABLE' : activeSystems > 0 ? '>>> DEGRADED_PERFORMANCE' : '!!! TOTAL_SYSTEM_HALT'}
            </p>
          </div>
        </div>

        {/* 2. System Buses */}
        <div className="space-y-6 md:space-y-4">
          <SkillBus 
            id="BUS_01" title="Core Languages" items={SKILLS.languages} 
            isOffline={offlineNodes.includes("BUS_01")} onToggle={() => toggleNode("BUS_01")}
          />
          <SkillBus 
            id="BUS_02" title="Full Stack Frameworks" items={SKILLS.frameworks} 
            isOffline={offlineNodes.includes("BUS_02")} onToggle={() => toggleNode("BUS_02")}
          />
          <SkillBus 
            id="BUS_03" title="Cloud & Architecture" items={SKILLS.tools} 
            isOffline={offlineNodes.includes("BUS_03")} onToggle={() => toggleNode("BUS_03")}
          />
        </div>
      </div>
    </section>
  );
}

function SkillBus({ id, title, items, isOffline, onToggle }: any) {
  return (
    <div className={`group flex flex-col lg:flex-row items-stretch lg:items-center gap-4 p-2 rounded-2xl transition-all duration-500 ${isOffline ? 'opacity-50 grayscale' : 'opacity-100'}`}>
      
      {/* Node Controller Button */}
      <button 
        onClick={onToggle}
        className={`w-full lg:w-72 p-6 rounded-xl border font-mono transition-all duration-500 text-left relative overflow-hidden ${
          isOffline 
            ? "bg-slate-900/20 border-slate-800" 
            : "bg-slate-900/60 border-blue-500/30 shadow-lg hover:border-blue-500"
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-[9px] font-bold text-blue-500 tracking-tighter">{id}</span>
          <div className={`w-1.5 h-1.5 rounded-full ${isOffline ? "bg-slate-700" : "bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"}`} />
        </div>
        <h3 className="text-sm font-black tracking-tight text-white uppercase italic">{title}</h3>
        <p className="text-[8px] text-slate-500 mt-2 font-mono uppercase">
          Status: {isOffline ? 'Terminated' : 'Broadcasting'}
        </p>
      </button>

      {/* Signal Link (Desktop Only) */}
      <div className="hidden lg:flex items-center px-2">
        <div className={`h-px w-12 transition-colors duration-700 ${isOffline ? 'bg-slate-800' : 'bg-blue-500/50'}`} />
        <div className={`w-2 h-2 rounded-full border transition-all duration-700 ${isOffline ? 'border-slate-800' : 'border-blue-500 bg-blue-500/20 shadow-[0_0_10px_#3b82f6]'}`} />
      </div>

      {/* Process Tags */}
      <div className="flex flex-wrap gap-2 flex-grow p-4 bg-slate-900/20 lg:bg-transparent rounded-xl">
        {items.map((item: string) => (
          <div key={item} className="relative">
            <span className={`px-4 py-2 rounded border font-mono text-[10px] md:text-[11px] transition-all duration-500 block ${
              !isOffline 
                ? "border-slate-800 text-slate-300 bg-slate-900/40 hover:border-blue-500/50 hover:text-white" 
                : "border-slate-900 text-slate-700 scale-95"
            }`}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
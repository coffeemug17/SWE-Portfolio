import { IMPACT_METRICS } from "../lib/data";

export default function ImpactTicker() {
  return (
    <div className="w-full bg-[#0a0f1a] py-16 overflow-hidden border-y-2 border-slate-900 relative">
      
      {/* Edge Fading for the "Infinite" look */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {[...IMPACT_METRICS, ...IMPACT_METRICS].map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center gap-10 px-20 min-w-[450px] group"
          >
            {/* LARGE READABLE VALUE */}
            <span className="text-6xl md:text-7xl font-black text-blue-600 tracking-tighter tabular-nums transition-colors duration-300 group-hover:text-white">
              {metric.value}
            </span>
            
            <div className="flex flex-col gap-2">
              {/* STANDARDIZED LABEL */}
              <span className="text-sm md:text-base font-black text-slate-100 uppercase tracking-[0.3em] leading-none">
                {metric.label}
              </span>
              
              {/* STANDARDIZED CONTEXT */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-900 group-hover:bg-blue-500 transition-colors duration-300" />
                <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest font-mono">
                  {metric.context}
                </span>
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="ml-10 text-slate-900 font-black text-3xl select-none">
              ///
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
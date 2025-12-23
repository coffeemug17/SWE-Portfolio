import { IMPACT_METRICS } from "../lib/data";

export default function ImpactTicker() {
  return (
    <div className="w-full bg-slate-900 py-10 overflow-hidden border-y border-slate-800">
      {/* Container for the scroll */}
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {/* We map the metrics twice to create the seamless loop effect */}
        {[...IMPACT_METRICS, ...IMPACT_METRICS].map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-6 px-12 min-w-[350px] whitespace-nowrap"
          >
            <span className="text-4xl font-black text-blue-400 tracking-tighter">
              {metric.value}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] leading-none">
                {metric.label}
              </span>
              <span className="text-[10px] text-slate-500 font-medium italic mt-1">
                {metric.context}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
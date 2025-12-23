import { SKILLS } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Languages" items={SKILLS.languages} />
          <SkillCard title="Frameworks" items={SKILLS.frameworks} />
          <SkillCard title="DevOps & Tools" items={SKILLS.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
      <h3 className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6">{title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {items.map((skill) => (
          <span key={skill} className="text-lg font-medium group-hover:text-blue-200 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
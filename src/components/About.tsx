import { courses } from "../lib/data";

export default function About() {

  return (
    <section id="about" className="py-24 px-6 border-b border-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 tracking-tight">The Efficiency Mindset</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I am an Electrical and Computer Engineering student at the University of British Columbia. 
            My career is defined by a simple goal: removing friction from complex systems.
          </p>
          <p className="text-slate-600 mb-8">
            Whether it is reducing tech debt at Clio or automating workflows for 100+ employees 
            at Emcon Services, I build tools that save time and optimize performance.
          </p>
          <div className="flex gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <span className="block text-blue-600 font-bold text-xl italic">May 2026</span>
              <span className="text-xs text-blue-400 uppercase font-semibold tracking-wider">Expected Graduation</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-slate-400">Core Academic Foundation</h3>
          <ul className="grid grid-cols-1 gap-4">
            {courses.map((course) => (
              <li key={course} className="flex items-center gap-3 text-slate-700 font-medium group">
                <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
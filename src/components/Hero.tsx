export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            Status: Seeking New Grad Roles — May 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          I build <span className="text-blue-600 italic">autonomous</span> systems that solve <span className="text-green-600">complex</span> bottlenecks.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Electrical & Computer Engineering at UBC. Specialized in full-stack engineering and CI/CD automation with experience at Clio, LGI, and MacDon.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform text-center">
            View My Work
          </a>
          <a 
            href="/Mitul_Pandey_Resume.pdf" 
            target="_blank"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
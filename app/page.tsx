import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col relative justify-end h-[100vh]">
        <div className="bg-slate-50 [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px),radial-gradient(circle_at_center,#cbd5e1_2px,transparent_2px)] [background-size:6rem_6rem] h-[90%] rounded-t-[50px]">

        
          <div className="h-[40%] relative p-10 flex items-end">
            <h1 className="text-3xl mt-10 font-bold mix-blend-difference md:text-7xl">
              // FULL STACK DEVELOPER
            </h1>
          </div>
          <div className="h-[60%] flex justify-end items-center px-2 md:px-10">
              <div className="mix-blend-difference text-right bg-blue-400/15 backdrop-blur-xs p-1 max-w-[80vw] md:text-lg md:max-w-[50vw]">
                  Hi, I'm Atif, a web developer based in Pune, India. I love building websites that look sharp, feel smooth, and leave a lasting impression. My work focuses on clean design, dark and cinematic aesthetics, and user-friendly experiences that turn ideas into real, working products. I'm passionate about learning, improving with every project, and creating digital work that is both meaningful and visually striking. Always open to new opportunities and collaborations.
              </div>
          </div>
          

      {/* // ---------------------------------------------------------------------------------------------------------
      // about
      // --------------------------------------------------------------------------------------------------------- */}

    <div className="bg-[0A0A0A] flex h-[100vh]">
        <div className="w-[40%] border border-red-500 flex justify-center items-center">
          <div className="bg-white h-[50%] w-[60%]"></div>
        </div>

        <div className="w-[60%] border border-red-500 flex justify-center items-end pb-40">
          <div className="h-[50%] w-[80%] bg-white p-6">
            <p className="text-black text-lg">
              I got into code the unconventional way no laptop, no formal courses, just a phone screen and a relentless need to figure out how things work. That origin shaped how I build: I don't write code to look clever, I write it to solve real constraints, because every constraint I've worked around (time, resources, access) taught me that the best solutions are usually the simplest ones that actually hold up under pressure.
              That's my core belief good code isn't about showing off, it's about removing friction. For the user, for the next developer touching the codebase, and for future-me debugging at 2am.
            </p>
          </div>
        </div>
    </div>

    <div className="h-[100vh] w-full bg-[#fafafa] flex justify-center items-center">

      <div className="h-[70%] w-[70%] bg-[#0A0A0A]/95 overflow-hidden border border-white/10 rounded rounded-2xl">

        <section className="bg-[#0A0A0A] px-5 h-[10%] flex items-center justify-between border-b border-white/10">
          <p className="text-white/70 font-mono text-sm tracking-wide">TECH-STACK.JSON</p>
          <div className="flex gap-5">
            <p className="text-white/50 hover:text-white/90 cursor-pointer transition-colors">X</p>
          </div>
        </section>

        <section className="overflow-y-scroll h-[90%] flex flex-col gap-8 p-8">

          <div className="text-lg text-white/80 pl-10 m-2 font-mono">
            // CORE
            <div className="pl-5 flex flex-wrap gap-3 m-2">
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#F7DF1E] hover:text-black hover:border-[#F7DF1E] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(247,223,30,0.35)] active:translate-y-0">JAVASCRIPT</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#E34F26] hover:text-black hover:border-[#E34F26] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(227,79,38,0.35)] active:translate-y-0">HTML</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#2965F1] hover:text-black hover:border-[#2965F1] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(41,101,241,0.35)] active:translate-y-0">CSS</button>
            </div>
          </div>

          <div className="text-lg text-white/80 pl-10 m-2 font-mono">
            // FRONTEND
            <div className="pl-5 flex flex-wrap gap-3 m-2">
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] active:translate-y-0">NEXT JS</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#61DAFB] hover:text-black hover:border-[#61DAFB] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(97,218,251,0.35)] active:translate-y-0">REACT</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#38BDF8] hover:text-black hover:border-[#38BDF8] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] active:translate-y-0">TAILWIND CSS</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#88CE02] hover:text-black hover:border-[#88CE02] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(136,206,2,0.35)] active:translate-y-0">GSAP</button>
            </div>
          </div>

          <div className="text-lg text-white/80 pl-10 m-2 font-mono">
            // BACKEND / TOOLS
            <div className="pl-5 flex flex-wrap gap-3 m-2">
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] active:translate-y-0">EXPRESS JS</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#539E43] hover:text-black hover:border-[#539E43] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(83,158,67,0.35)] active:translate-y-0">NODE JS</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#F05032] hover:text-black hover:border-[#F05032] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(240,80,50,0.35)] active:translate-y-0">GIT / GITHUB</button>
            </div>
          </div>

          <div className="text-lg text-white/80 pl-10 m-2 font-mono">
            // ADDITIONAL / AI-TOOLS
            <div className="pl-5 flex flex-wrap gap-3 m-2">
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#A259FF] hover:text-black hover:border-[#A259FF] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(162,89,255,0.35)] active:translate-y-0">FIGMA</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#FF6C37] hover:text-black hover:border-[#FF6C37] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,108,55,0.35)] active:translate-y-0">POSTMAN</button>
              <button className="px-3 py-2 border border-white/30 bg-[#0a0a0a] text-white/90 font-bold text-sm transition-all duration-300 ease-out hover:bg-[#D97757] hover:text-black hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(217,119,87,0.35)] active:translate-y-0">CLAUDE CODE</button>
            </div>
          </div>

        </section>
      </div>
    </div>


      {/* // ---------------------------------------------------------------------------------------------------------
      // work
      // --------------------------------------------------------------------------------------------------------- */}


        </div>
      </div>
    </main>
  );
}

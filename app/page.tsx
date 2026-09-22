import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col relative justify-end h-[100vh]">
        <div className="bg-slate-50 [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px),radial-gradient(circle_at_center,#cbd5e1_2px,transparent_2px)] [background-size:6rem_6rem] h-[90%] rounded-t-[50px]">

        
          <div className="h-[40%] relative p-10 flex items-end">
            <h1 className="text-3xl mt-10 font-bold mix-blend-difference md:text-8xl">
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
          <div className="h-[50%] w-[80%] bg-white p-8">
            <p className="font-bold text-black">
              I got into code the unconventional way no laptop, no formal courses, just a phone screen and a relentless need to figure out how things work. That origin shaped how I build: I don't write code to look clever, I write it to solve real constraints, because every constraint I've worked around (time, resources, access) taught me that the best solutions are usually the simplest ones that actually hold up under pressure.
              That's my core belief good code isn't about showing off, it's about removing friction. For the user, for the next developer touching the codebase, and for future-me debugging at 2am.
            </p>
          </div>
        </div>
    </div>

    <div className="w-[100%] flex flex-col gap-5 items-center text-[#fff]/40 bg-[#000]">
          <div>
            <p>// Languages</p>
            <div></div>
          </div>

          <div>
            <p>// Markup & Styling</p>
            <div></div>
          </div>

          <div>
            <p>// Frontend Frameworks/Libraries</p>
            <div></div>
          </div>

          <div>
            <p>// Backend</p>
            <div></div>
          </div>

          <div>
            <p>// Database</p>
            <div></div>
          </div>

          <div>
            <p>// Design Tools</p>
            <div></div>
          </div>

          <div>
            <p>// Dev Tools & Version Control</p>
            <div></div>
          </div>

          <div>
            <p>// Deployment/Hosting</p>
            <div></div>
          </div>

          <div>
            <p>// API Testing</p>
            <div></div>
          </div>

          <div>
            <p>// AI Coding Tool</p>
            <div></div>
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

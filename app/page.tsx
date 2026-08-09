import Image from "next/image";
import Link from 'next/link';
import { Inter, Cinzel, Playfair_Display_SC } from 'next/font/google';
import { FaLocationDot, FaCode } from "react-icons/fa6";
import TechStack from '@/components/Techstack';
import Work from '@/components/work';
import Footer from "@/components/footer";
import Connect from '@/components/connectsection'


export default function Home() {

  return (
    <main>
      <div className=" p-5 h-[100vh] w-[100vw] bg-linear-160 from-[#000]/20 to-[75%] to-[#000]">

        <h1 className=" font-[Serif] leading-none mix-blend-difference pl-5 pt-[80] text-white text-[60px] font-bold md:w-[60vw] md:text-[80px] lg:w-[60vw] lg:text-[100px]">
          FULL STACK DEVELOPER
        </h1>
        <h2 className="font-[Serif] flex justify-self-end text-right leading-none mix-blend-difference pt-[20vh] text-white text-[50px] font-bold md:w-[60vw] md:text-[70px] lg:w-[60vw] lg:text-[80px]">
          making clean and high end web experiences
        </h2>

        <div className="flex w-fill gap-5 justify-center pt-20">
          <Link href="#work">
            <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center hover:border-[#00FF00] hover:text-[#00FF00] active:bg-[#00FF00] active:border-[#000] active:text-[#000] cursor-pointer">view work</div>
          </Link>
          <Link href="#connect">
            <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center hover:border-[#00FF00] hover:text-[#00FF00] active:bg-[#00FF00] active:border-[#000] active:text-[#000] cursor-pointer">connect</div>
          </Link>
        </div>
      </div>

      <div id="about" className="h-[50vh] lg:h-[80vh] w-full bg-linear-180 from-[#000] from-[50%] to-[#000]/20">
       <div className="flex font-[Cinzel] flex-col lg:flex-row md:flex-row text-white justify-around items-center gap-5 p-5 px-18 md:p-8 mt-10 lg:p-10">
        <div className="flex justify-center mt-10 items-center flex-col lg:text-[19px] text-md text-center min-h-[40vh] lg:h-[50vh] w-full lg:w-[20vw] md:w-[30vw] bg-[#222]/5 border backdrop-blur-xs border-[#fff]/30 transition-all duration-700 hover:scale-102 hover:shadow-2xl hover:shadow-[#3A2FE9]/20 hover:bg-linear-180 hover:from-[#0A0A0A]/5 hover:from-[60%] hover:to-[#3A2FE9]/8 rounded-2xl p-6">
          <p>
            Based in{" "}
            <span className="inline-flex items-center bg-black/40 hover:bg-[#00FF00] hover:text-black px-2 rounded-[999] border border-[#00FF00]/30 gap-1 font-medium">
              <FaLocationDot className="size-3" /> Pune
            </span>
            , India, I'm constantly inspired by the city's growing tech community. I
            enjoy learning, meeting like minded developers, attending events, and
            building projects that challenge me to improve every day.
          </p>
        </div>

        <div className="flex justify-center mt-10 items-center flex-col lg:text-[19px] text-md text-center min-h-[40vh] lg:h-[50vh] w-full lg:w-[20vw] md:w-[30vw] bg-[#222]/5 border backdrop-blur-xs border-[#fff]/30 transition-all duration-700 hover:scale-102 hover:shadow-2xl hover:shadow-[#3A2FE9]/20 hover:bg-linear-180 hover:from-[#0A0A0A]/5 hover:from-[60%] hover:to-[#3A2FE9]/8 rounded-2xl p-6">
          <p>
            I'm always open to <span className="bg-black/40 px-2 py-1 items-center hover:bg-[#00FF00] hover:text-black px-2 rounded-[999] border border-[#00FF00]/30 gap-1">collaborate</span> on exciting ideas, hackathons,
            open source projects, or freelance work. I enjoy learning from others,
            sharing knowledge, and building products that solve real problems
            together.
          </p>
        </div>

        <div className="flex justify-center mt-10 items-center flex-col lg:text-[19px] text-md text-center min-h-[40vh] lg:h-[50vh] w-full lg:w-[20vw] md:w-[30vw] bg-[#222]/5 border backdrop-blur-xs border-[#fff]/30 transition-all duration-700 hover:scale-102 hover:shadow-2xl hover:shadow-[#3A2FE9]/20 hover:bg-linear-180 hover:from-[#0A0A0A]/5 hover:from-[60%] hover:to-[#3A2FE9]/8 rounded-2xl p-6">
          <p>
            I'm a <span className="bg-black/40 px-2 py-1 items-center hover:bg-[#00FF00] hover:text-black px-2 rounded-[999] border border-[#00FF00]/30 gap-1">full-stack developer</span> passionate about creating clean, responsive,
            and user friendly web applications. I love turning ideas into real
            products while continuously learning new technologies and improving my
            development skills.
          </p>
        </div>
      </div>

          <TechStack />

          <div id="work">
            <Work />
          </div>

          <div id="connect">
              <Connect />
          </div>

          <Footer />
      </div>
    </main>
  );
}

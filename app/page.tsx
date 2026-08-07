import Image from "next/image";
import Link from 'next/link'
import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google';
import { FaLocationDot, FaCode } from "react-icons/fa6";
import TechStack from "@/components/Techstack";

export default function Home() {

  return (
    <main>
      <div className=" p-5 h-[100vh] w-[100vw] bg-linear-160 from-[#000]/20 to-[75%] to-[#000]">

        <h1 className="font-[playfair_Display] leading-none mix-blend-difference pl-5 pt-[80] text-white text-[60px] font-bold md:w-[60vw] md:text-[80px] lg:w-[60vw] lg:text-[100px]">
          FULL STACK DEVELOPER
        </h1>
        <h2 className="font-[playfair_Display] flex justify-self-end text-right leading-none mix-blend-difference pt-[20vh] text-white text-[50px] font-bold md:w-[60vw] md:text-[70px] lg:w-[60vw] lg:text-[80px]">
          making clean and high end web experiences
        </h2>

        <div className="flex w-fill gap-5 justify-center pt-20">
          <Link href="/work">
            <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center hover:border-[#00FF00] hover:text-[#00FF00] active:bg-[#00FF00] active:border-[#000] active:text-[#000] cursor-pointer">view work</div>
          </Link>
          <Link href="/connect">
            <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center hover:border-[#00FF00] hover:text-[#00FF00] active:bg-[#00FF00] active:border-[#000] active:text-[#000] cursor-pointer">connect</div>
          </Link>
        </div>
      </div>

      <div className="h-[50vh] lg:h-[80vh] w-full bg-linear-180 from-[#000] from-[50%] to-[#000]/20">
       <div className="flex text-white justify-around text-center h-full items-center gap-5 p-5 md:p-8 lg:p-10">
        <div className="flex justify-center text-sm text-center h-[50vh]" >
          Based in <FaLocationDot className="size-20" /> <p>pune</p>, India, I'm constantly inspired by the city's growing tech community. I enjoy learning, meeting like-minded developers, attending events, and building projects that challenge me to improve every day.
        </div>

        <div>
          I'm always open to collaborate on exciting ideas, hackathons, open-source projects, or freelance work. I enjoy learning from others, sharing knowledge, and building products that solve real problems together.
        </div>

        <div>
          I'm a full-stack developer passionate about creating clean, responsive, and user-friendly web applications. I love turning ideas into real products while continuously learning new technologies and improving my development skills.
        </div>
       </div>

          <TechStack />

            <div className="h-[100vh]">

            </div>
      </div>

    </main>
  );
}

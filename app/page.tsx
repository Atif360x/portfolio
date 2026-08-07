import Image from "next/image";
import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google';

export default function Home() {
  return (
    <main>
      <div className=" h-[100vh] w-[100vw] bg-linear-160 from-[#000]/20 to-[75%] to-[#000]">

        <h1 className="font-[playfair_Display] leading-none mix-blend-difference pl-5 pt-[80] text-white text-[60px] font-bold md:w-[60vw] md:text-[80px] lg:w-[60vw] lg:text-[100px]">
          FULL STACK DEVELOPER
        </h1>
        <h2 className="font-[playfair_Display] flex justify-self-end text-right leading-none mix-blend-difference pt-[20vh] text-white text-[50px] font-bold md:w-[60vw] md:text-[70px] lg:w-[60vw] lg:text-[80px]">
          making clean and heigh end web experince
        </h2>

        <div className="flex w-fill gap-5 justify-center pt-20">
          <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center ">view work</div>
          <div className="text-white py-5 px-10 w-[40vw] h-[60] border-1 rounded-[999px] flex items-center justify-center text-center ">connect</div>
        </div>
      </div>


    </main>
  );
}

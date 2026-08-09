import { Jaro, Playfair_Display } from 'next/font/google';
import Link from 'next/link'

const jaro = Jaro({ 
  subsets: ['latin'],
  weight: ['400']
});

export default function Footer () {

    return (
        <footer className="h-70 flex flex-col w-[100vw] gap- bg-black overflow-hidden">
            <div className="bg-[#0A0A0A] flex flex-col justify-between md:flex-row lg:flex-row font-[Helvetica] p-8 text-white h-[50%]">
                <p className='text-xl'>© 2026 • Built with precision & caffeine.</p>
                <div className='flex gap-5'>
                    <a href="https://github.com/Atif360x">
                        <img className="h-5 w-5 corsor-pointer" src="github.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/atif-mansuri-331132421/">
                        <img className="h-5 w-5 corsor-pointer" src="linkedin.svg" />
                    </a>
                    <a href="https://x.com/Atif360x">
                        <img className="h-5 w-5 corsor-pointer" src="x.svg" />
                    </a>
                    <a href="https://www.instagram.com/notsoatif/">
                        <img className="h-5 w-5 corsor-pointer" src="insta.svg" />
                    </a>           
                </div>
            </div>
            <div className=" flex justify-end items-center px-8 gap-5 h-[10%] font-[Helvetica] bg-[#0A0A0A]" >
                    <Link className="px-4 py-1 text-white transition-all duration-700 hover:text-black rounded-md hover:rounded-[999] bg-transparent border border-white hover:bg-[#00FF00]" href="#work">work</Link>
                    <Link className="px-4 py-1 text-white transition-all duration-700 hover:text-black rounded-md hover:rounded-[999] bg-transparent border border-white hover:bg-[#00FF00]" href="#about">about</Link>
                    <Link className="px-4 py-1 text-white transition-all duration-700 hover:text-black rounded-md hover:rounded-[999] bg-transparent border border-white hover:bg-[#00FF00]" href="#connect">connect</Link>
                    <Link className="px-6 py-1 text-white transition-all duration-700 hover:text-black rounded-md hover:rounded-[999] bg-transparent border border-white hover:bg-[#00FF00]" href="#top">back to top</Link>
            </div>



            <div>
                <div aria-hidden="true" className="mt-10 flex flex-row gap-2 select-none whitespace-nowrap text-[25vw] font-black leading-[0.55] tracking-tighter text-white/80 sm:text-[16vw]">
                    ATIF 
                </div>
            </div>
            
        </footer>
    )
}
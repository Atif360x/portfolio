'use client'
import next from "next";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { IBM_Plex_Mono } from 'next/font/google'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})


export default function Nav() {

    const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleString());

    update(); // set immediately so there's no 1s blank
    const id = setInterval(update, 1000);

    return () => clearInterval(id); // cleanup on unmount
  }, []);

  return (
    <main className="z-10">
        <nav className="fixed text-lg flex w-[100vw] justify-between px-8 py-5 font-[plexMono] bg-black/15 backdrop-blur-md font-bold">
            <div className="text-xl mix-blend-difference">
                {`<ATIF />`}
            </div>
            <div className="hidden md:flex gap-3 corsur-pointer mix-blend-difference">
                <Link href="">ABOUT</Link>
                <p>|</p>
                <Link href="">WORK</Link>
                <p>|</p>
                <Link href="">COLLAB</Link>
            </div>
        </nav>

        <nav className="fixed inset-x-0 bottom-0 h-[8vh] bg-black flex items-center justify-between px-5">
            <div className="hidden border border-white h-[60%] md:flex justify-center items-center rounded-full">
                <p className="px-10 text-md">pune mh | IST {`${time}`}</p>
            </div>

            <div className=" border border-white h-[60%] flex justify-center items-center rounded-full">
                <Link className="px-10 text-md" href="">Hire me</Link>
            </div>
        </nav>
    </main>
  );
}

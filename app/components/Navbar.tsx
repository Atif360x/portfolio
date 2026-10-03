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

  return (
    <main className="fixed">
        <nav className="w-[100vw] p-2 pt-5 md:px-8 flex justify-between text-lg">
            <div className="bg-white text-blue-500 py-1 px-2 font-bold">
                <p className="mix-blend-difference">{`<ATIF />`}</p>
            </div>

            <div className="flex gap-4 items-center mix-blend-difference">
                <Link className="text-white transition-colors duration-400 hover:text-blue-500" href="#">{`[ WORK ]`}</Link>
                <Link className="text-white transition-colors duration-400 hover:text-blue-500" href="#">{`[ ABOUT ]`}</Link>
                <Link className="text-white transition-colors duration-400 hover:text-blue-500" href="#">{`[ COLLAB ]`}</Link>
            <div className="bg-white text-blue-500 py-1 px-2 cursor-pointer hover:underline mix-blend-difference">
                <Link href="#">
                    <p className="mix-blend-difference">{`<HIRE ME />`}</p>
                </Link>
            </div>
            </div>
            
        </nav>
    </main>
  );
}

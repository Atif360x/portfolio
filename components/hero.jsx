"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero () {
  return (
    <div className="hero">
        <div className="intro">
            <h1 className="heading">
                FULL-STACK DEVELOPER
            </h1>
            <h2  className="subheading">
                BUILDING HEIGH-PERFORMENCE WEB SOLUTIONS
            </h2>
        </div>
        <div className="parentCard">
            {/* <div className="imgcard">
                <img className="imgcard" src="\hero.jpg" alt="" />
            </div> */}
            <div className="svgcard">
                <h3 className="svgCardhead">tech stack</h3>
                <img className="icon" src="/html5.svg" alt="HTML5" />
                <img className="icon" src="/css_old.svg" alt="CSS" />
                <img className="icon" src="/javascript.svg" alt="JavaScript" />
                <img className="icon" src="/typescript.svg" alt="TypeScript" />
                <img className="icon" src="/react_light.svg" alt="React" />
                <img className="icon" src="/nextjs_logo_dark.svg" alt="Next.js" />
                <img className="icon" src="/tailwindcss.svg" alt="Tailwind CSS" />
                <img className="icon" src="/nodejs.svg" alt="Node.js" />
                <img className="icon" src="/expressjs_dark.svg" alt="Express" />
                <img className="icon" src="/git.svg" alt="Git" />
            </div>
            <div className="introCard">
                <h3 className="introCardhead">introduction</h3>
                <p>Passionate Full Stack Developer focused on building modern, scalable, and user-friendly web experiences with clean code and thoughtful design.</p>
            </div>
            <div>

            </div>
            <div></div>
        </div>
    </div>
  )
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { name: "JavaScript", src: "/javascript.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "HTML5", src: "/html5.svg" },
    { name: "CSS", src: "/css_old.svg" },
    { name: "React", src: "/react_dark.svg" },
    { name: "Next.js", src: "/nextjs_icon_dark.svg" },
    { name: "Node.js", src: "/nodejs.svg" },
    { name: "Express.js", src: "/expressjs_dark.svg" },
    { name: "postman", src: "/postman.svg"},
    { name: "MongoDB", src: "/mongodb-icon-dark.svg" },
    { name: "MySQL", src: "/mysql-icon-dark.svg" },
    { name: "PostgreSQL", src: "/postgresql.svg" },
    { name: "Socket.io", src: "/socketio-icon-dark.svg" },
    { name: "Tailwind CSS", src: "/tailwindcss.svg" },
    { name: "Git", src: "/git.svg" },
    { name: "Figma", src: "/figma.svg" },
    { name: "Vercel", src: "/vercel.svg" },
    { name: "Antigravity", src: "/antigravity.svg" },
    { name: "Cursor", src: "/cursor_dark.svg" },
    { name: "Claude", src: "/claude-ai-icon.svg" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".tech-icon", {
        x: "-1900%",
        duration: "1",
        delay: 0.77,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 0%",
          end: "top -700%",
          pin: true,
          scrub: 4,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex items-center h-[100vh] w-[100vw] bg-black">
      <div className="flex items-center gap-10 lg:gap-15 gap-4 p-5 overflow-hidden">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-icon text-white shrink-0 px-15 py-15 border rounded-[999] hover:border-[#00FF00]/20 hover:shadow-lg hover:shadow-[#3A2FE9]/40 gap-5 lg:gap-10 cursor-pointer"
          >
            <img src={tech.src} alt={tech.name} className="w-35 h-35 lg:w-52 lg:h-52 " />
          </div>
        ))}
      </div>
    </main>
  );
}
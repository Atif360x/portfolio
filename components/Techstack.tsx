"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { name: "JavaScript", src: "/javascript.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "HTML5", src: "/html5.svg" },
    { name: "CSS", src: "/css_old.svg" },
    { name: "React", src: "/react_dark.svg" },
    { name: "Next.js", src: "/nextjs_icon_dark.svg" },
    { name: "Node.js", src: "/nodejs.svg" },
    { name: "Express.js", src: "/expressjs_dark.svg" },
    { name: "postman", src: "/postman.svg" },
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

  useGSAP(
    () => {
      if (!trackRef.current || !containerRef.current) return;

      const totalDistance = trackRef.current.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -totalDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalDistance * 1.5}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="flex items-center h-[100vh] w-[100vw] bg-black overflow-hidden"
    >
      <div
        ref={trackRef}
        className="relative flex items-center gap-32 lg:gap-44 p-5 lg:pl-[50vw] md:pl-[50vw] -translate-x-[calc(50%-3.5rem)] lg:-translate-x-[calc(50%-4.5rem)] shrink-0"
      >
        {/* Continuous single white line running across all items */}
        <div className="absolute left-0 right-0 top-[110px] lg:top-[140px] h-[2px] bg-white opacity-80 z-0" />

        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center shrink-0 gap-8 z-10"
          >
            {/* Icon Box */}
            <div className="tech-icon text-white p-6 lg:p-8 border rounded-full hover:border-[#00FF00]/20 hover:shadow-lg hover:shadow-[#3A2FE9]/40 cursor-pointer bg-black transition-all duration-300">
              <img
                src={tech.src}
                alt={tech.name}
                className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
              />
            </div>

            {/* Icon Name */}
            <span className="text-white text-sm lg:text-base font-medium tracking-wide bg-black px-2 mt-2">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

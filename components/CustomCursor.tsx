'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' });

    const moveCursor = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const growRing = () => {
      gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power2.out' });
    };

    const shrinkRing = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    const hideCursor = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const showCursor = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    // Grow cursor on interactive elements
    const interactiveEls = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    );
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', growRing);
      el.addEventListener('mouseleave', shrinkRing);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', growRing);
        el.removeEventListener('mouseleave', shrinkRing);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 mix-blend-difference bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 mix-blend-difference border border-white/60 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
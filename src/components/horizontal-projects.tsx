"use client";

import { useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";

export default function HorizontalProjects({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const measure = () => {
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setScrollDistance(distance);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useLenis(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || scrollDistance === 0) return;

    const rect = section.getBoundingClientRect();
    const availableScroll = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / availableScroll));

    track.style.transform = `translate3d(${-progress * scrollDistance}px, 0, 0)`;
  }, [scrollDistance]);

  return (
    <div
      ref={sectionRef}
      style={{ height: `calc(100svh + ${scrollDistance}px)` }}
      className="relative -mx-6"
    >
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-svh items-center overflow-hidden px-6"
        aria-label="Featured projects"
      >
        <div
          ref={trackRef}
          className="flex w-max gap-8 will-change-transform sm:gap-12"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

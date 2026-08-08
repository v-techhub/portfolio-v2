"use client";

import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./scroll-controls.module.css";

const SCROLL_DURATION_SECONDS = 1.2;

export default function ScrollControls() {
  const pathname = usePathname();
  const lenis = useLenis();
  const endSentinelRef = useRef<HTMLSpanElement>(null);
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis, pathname]);

  useEffect(() => {
    const sentinel = endSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsAtPageEnd(entry.isIntersecting),
      { rootMargin: "0px 0px 160px", threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: SCROLL_DURATION_SECONDS });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <span ref={endSentinelRef} aria-hidden="true" className="block h-px" />
      <button
        type="button"
        aria-label="Scroll to top"
        title="Scroll to top"
        onClick={scrollToTop}
        tabIndex={isAtPageEnd ? 0 : -1}
        className={`fixed bottom-4 right-4 z-[70] grid size-11 place-items-center rounded-full border border-border/80 bg-background/75 text-foreground shadow-[0_8px_28px_hsl(var(--foreground)/.1)] backdrop-blur-xl transition-[opacity,transform,background-color,border-color,box-shadow] duration-300 ease-out hover:scale-105 hover:border-foreground/20 hover:bg-background/95 hover:shadow-[0_10px_34px_hsl(var(--foreground)/.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-opacity sm:bottom-6 sm:right-6 ${
          isAtPageEnd
            ? `${styles.visible} translate-y-0 opacity-100`
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-[18px]" strokeWidth={1.8} />
      </button>
    </>
  );
}

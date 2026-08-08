"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./mode-toggle.module.css";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = mounted
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Switch colour theme";

  return (
    <button
      type="button"
      className={`${styles.toggle} ${mounted ? styles.ready : ""} ${isDark ? styles.dark : ""}`}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className={styles.iconStage} aria-hidden="true">
        <svg className={styles.sun} viewBox="0 0 24 24" fill="none">
          <circle className={styles.sunCore} cx="12" cy="12" r="3.5" />
          <g className={styles.sunRays}>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
          </g>
        </svg>
        <svg className={styles.moon} viewBox="0 0 24 24" fill="none">
          <path d="M20.3 15.2A8.5 8.5 0 0 1 8.8 3.7 8.5 8.5 0 1 0 20.3 15.2Z" />
        </svg>
      </span>
    </button>
  );
}

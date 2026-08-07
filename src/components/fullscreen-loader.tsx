"use client";

import { useEffect, useState } from "react";
import styles from "./fullscreen-loader.module.css";

const WIPE_MS = 1100;
const DONE_MS = 2200;

export default function FullscreenLoader() {
  const [phase, setPhase] = useState<"enter" | "wipe" | "done">("enter");

  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const wipeTimer = window.setTimeout(() => setPhase("wipe"), WIPE_MS);
    const doneTimer = window.setTimeout(() => setPhase("done"), DONE_MS);

    return () => {
      window.clearTimeout(wipeTimer);
      window.clearTimeout(doneTimer);
      document.documentElement.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.documentElement.style.overflow = "";
    }
  }, [phase]);

  if (phase === "done") return null;

  const wiping = phase === "wipe";

  return (
    <div
      className={styles.root}
      role="status"
      aria-live="polite"
      aria-label="Loading Victor Adeshina portfolio"
    >
      <div className={`${styles.panel} ${wiping ? styles.panelWipe : ""}`}>
        <div className={`${styles.content} ${wiping ? styles.contentOut : ""}`}>
          <div className={styles.wordmark}>
            <span className={styles.wordmarkIndex}>VA / 2026</span>
            <span className={styles.wordmarkPrimary}>Victor Adeshina</span>
          </div>

          <p className={styles.tagline}>Selected work &amp; digital experiences</p>

          <div className={styles.barTrack}>
            <div className={styles.barFill} />
          </div>
        </div>
      </div>
    </div>
  );
}

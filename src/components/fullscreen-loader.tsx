"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./fullscreen-loader.module.css";

const WIPE_MS = 1400;
const DONE_MS = 3200;

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
      <div className={`${styles.band} ${styles.band5} ${wiping ? styles.band5Wipe : ""}`} />
      <div className={`${styles.band} ${styles.band4} ${wiping ? styles.band4Wipe : ""}`} />
      <div className={`${styles.band} ${styles.band3} ${wiping ? styles.band3Wipe : ""}`} />
      <div className={`${styles.band} ${styles.band2} ${wiping ? styles.band2Wipe : ""}`} />
      <div className={`${styles.band} ${styles.band1} ${wiping ? styles.band1Wipe : ""}`} />

      <div className={`${styles.panel} ${wiping ? styles.panelWipe : ""}`}>
        <div className={`${styles.content} ${wiping ? styles.contentOut : ""}`}>
          <div className={styles.logoWrap}>
            <div className={styles.ringOuter} />
            <div className={styles.ring} />
            <Image
              src="/victor.jpg"
              alt="Victor Adeshina"
              width={56}
              height={56}
              priority
              className={styles.logoImage}
            />
          </div>

          <div className={styles.wordmark}>
            <span className={styles.statusPill}>
              <span className={styles.statusDot} />
              Loading portfolio
            </span>
            <span className={styles.wordmarkPrimary}>Victor Adeshina</span>
            <div className={styles.wordmarkDivider} />
            <span className={styles.wordmarkSecondary}>Full-stack engineer</span>
          </div>

          <p className={styles.tagline}>Building premium digital experiences</p>

          <div className={styles.barTrack}>
            <div className={styles.barFill} />
          </div>
        </div>
      </div>
    </div>
  );
}

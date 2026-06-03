"use client";

import Lottie from "lottie-react";
import waveData from "@/assets/lottie/wave.json";

export default function WavingHand() {
  return (
    <Lottie
      animationData={waveData}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

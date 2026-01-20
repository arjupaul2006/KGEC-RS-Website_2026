"use client";

import Spline from "@splinetool/react-spline";

export default function Animation() {
  return (
    <div className="w-full max-w-[580px] h-[420px] rounded-2xl overflow-hidden flex items-center justify-center md:max-w-[580px] md:h-[420px] sm:max-w-[450px] sm:h-[350px]">
      <Spline
        scene="https://prod.spline.design/KOemdt8CluNTfaup/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}



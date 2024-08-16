"use client";

import { useEffect, useRef, useState } from "react";

export function AudioEgg() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playCount, setPlayCount] = useState(0);

  return (
    <>
      <video
        className="opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out object-cover absolute w-full h-full"
        src="/img/moshed-banner.mp4"
        loop
        playsInline
        autoPlay
        muted
        onMouseEnter={() => {
          //   if (playCount === 0) {
          audioRef.current?.play();
          // setPlayCount((prev) => prev + 1);
          //   }
        }}
        preload="auto"
      ></video>
      <audio
        ref={audioRef}
        src="/audio/its-in-the-game.mp3"
        className="hidden"
      ></audio>
    </>
  );
}

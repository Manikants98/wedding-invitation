"use client";

import { useEffect, useRef } from "react";
import { weddingData } from "@/lib/wedding-data";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(weddingData.music.url);
    audioRef.current.loop = true;
    audioRef.current.muted = false;

    // Attempt autoplay (might be blocked)
    audioRef.current
      .play()
      .then(() => {
        isPlayingRef.current = true;
      })
      .catch(() => {
        isPlayingRef.current = false;
      });

    const tryPlayOnFirstInteraction = () => {
      if (!audioRef.current || isPlayingRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          isPlayingRef.current = true;
        })
        .catch(() => {
          isPlayingRef.current = false;
        });
    };

    window.addEventListener("click", tryPlayOnFirstInteraction, { once: true });
    window.addEventListener("touchstart", tryPlayOnFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", tryPlayOnFirstInteraction);
      window.removeEventListener("touchstart", tryPlayOnFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}

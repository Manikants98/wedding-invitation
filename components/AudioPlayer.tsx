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
    audioRef.current.autoplay = true;
    (audioRef.current as any).playsInline = true;
    audioRef.current.preload = "auto";

    // Attempt autoplay (might be blocked)
    const attemptPlay = () => {
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

    attemptPlay();

    // Try on first interaction
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

    // Multiple listeners to catch first interaction
    window.addEventListener("click", tryPlayOnFirstInteraction, { once: true });
    window.addEventListener("touchstart", tryPlayOnFirstInteraction, { once: true });
    window.addEventListener("keydown", tryPlayOnFirstInteraction, { once: true });

    // Fallback: retry every 2s for up to 10s (very aggressive browsers)
    const retryInterval = setInterval(() => {
      if (isPlayingRef.current) {
        clearInterval(retryInterval);
        return;
      }
      attemptPlay();
    }, 2000);
    const retryTimeout = setTimeout(() => clearInterval(retryInterval), 10000);

    return () => {
      window.removeEventListener("click", tryPlayOnFirstInteraction);
      window.removeEventListener("touchstart", tryPlayOnFirstInteraction);
      window.removeEventListener("keydown", tryPlayOnFirstInteraction);
      clearInterval(retryInterval);
      clearTimeout(retryTimeout);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}

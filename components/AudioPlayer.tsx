"use client";

import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/lib/wedding-data";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingData.music.url);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try silent autoplay first (muted always works)
    audio.muted = true;
    audio.play()
      .then(() => {
        // Autoplay worked muted — now try to unmute
        audio.muted = false;
        isPlayingRef.current = true;
      })
      .catch(() => {
        // Autoplay blocked entirely — wait for interaction
        setShowPrompt(true);
      });

    const unlockAudio = () => {
      if (isPlayingRef.current) {
        setShowPrompt(false);
        return;
      }

      audio.muted = false;
      audio.play()
        .then(() => {
          isPlayingRef.current = true;
          setShowPrompt(false);
        })
        .catch(() => { });
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  if (!showPrompt) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
                 bg-white/90 backdrop-blur-sm text-gray-700 
                 px-5 py-3 rounded-full shadow-lg text-sm 
                 animate-bounce cursor-pointer border border-gray-200"
      onClick={() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.muted = false;
        audio.play()
          .then(() => {
            isPlayingRef.current = true;
            setShowPrompt(false);
          })
          .catch(() => { });
      }}
    >
      🎵 Tap anywhere to play music
    </div>
  );
}
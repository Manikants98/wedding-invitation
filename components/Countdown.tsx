"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { weddingData } from "@/lib/wedding-data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const weddingDate = new Date(weddingData.countdown.targetDate);
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-gradient-to-br from-maroon to-red-900 border-2 border-gold w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mb-2 shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20" />
        <span className="text-2xl md:text-3xl font-bold text-gold font-serif relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-maroon font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <SectionWrapper className="py-12 flex justify-center w-full">
      <div className="flex flex-wrap justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </SectionWrapper>
  );
}

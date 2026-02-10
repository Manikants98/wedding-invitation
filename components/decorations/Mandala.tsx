"use client";

import { motion } from "framer-motion";
import { usePrint } from "@/contexts/PrintContext";

export default function Mandala({
  className = "",
  opacity = 0.1,
}: {
  className?: string;
  opacity?: number;
}) {
  const isPrint = usePrint();

  if (isPrint) {
    return (
      <div
        className={`absolute pointer-events-none ${className}`}
        style={{ opacity }}
      >
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          className="fill-current text-gold"
        >
          {/* Center */}
          <circle cx="100" cy="100" r="10" />

          {/* Inner Petals */}
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(0 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(45 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(90 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(135 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(180 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(225 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(270 100 100)"
          />
          <path
            d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
            transform="rotate(315 100 100)"
          />

          {/* Outer Ring */}
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />

          {/* Outer Petals */}
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M100 40 Q115 20 100 5 Q85 20 100 40 Z"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}

          {/* Dots */}
          {[...Array(24)].map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="15"
              r="1"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="fill-current text-gold"
      >
        {/* Center */}
        <circle cx="100" cy="100" r="10" />

        {/* Inner Petals */}
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(0 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(45 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(90 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(135 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(180 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(225 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(270 100 100)"
        />
        <path
          d="M100 80 Q110 60 100 40 Q90 60 100 80 Z"
          transform="rotate(315 100 100)"
        />

        {/* Outer Ring */}
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Outer Petals */}
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d="M100 40 Q115 20 100 5 Q85 20 100 40 Z"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}

        {/* Dots */}
        {[...Array(24)].map((_, i) => (
          <circle
            key={i}
            cx="100"
            cy="15"
            r="1"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
      </svg>
    </motion.div>
  );
}

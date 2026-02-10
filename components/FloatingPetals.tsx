"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100; // Random start position %
  const duration = 10 + Math.random() * 10; // Random duration between 10-20s

  return (
    <motion.div
      initial={{ y: -20, x: `${randomX}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: "100vh",
        opacity: [0, 1, 1, 0],
        rotate: 360,
        x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="fixed top-0 pointer-events-none z-0"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#FFD700"
        className="text-gold/30 drop-shadow-sm"
        style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))" }}
      >
        <path d="M12 2C12 2 14 8 20 12C14 16 12 22 12 22C12 22 10 16 4 12C10 8 12 2 12 2Z" />
      </svg>
    </motion.div>
  );
};

export default function FloatingPetals() {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Create 20 petals with random delays
    setPetals(Array.from({ length: 20 }, (_, i) => i * 0.5));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((delay, i) => (
        <Petal key={i} delay={delay} />
      ))}
    </div>
  );
}

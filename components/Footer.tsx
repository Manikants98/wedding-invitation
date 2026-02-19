"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/lib/useLanguage";
import DividerPattern from "./decorations/DividerPattern";
import { Flower2 } from "lucide-react";

export default function Footer() {
  const { weddingData } = useLanguage();

  return (
    <footer className="py-12 px-6 text-center">
      <SectionWrapper>
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <Flower2
              className="w-12 h-12 text-maroon/80 animate-spin-slow"
              strokeWidth={1}
            />
          </div>

          <h2 className="text-3xl md:text-3xl text-maroon font-hindi-text mb-6 drop-shadow-sm">
            {weddingData.footer.message}
          </h2>

          <DividerPattern className="my-6" />

          <div className="font-serif space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-widest">
              With Love
            </p>
            <p className="text-xl md:text-2xl text-maroon font-bold">
              {weddingData.footer.signature}
            </p>
          </div>
        </div>
      </SectionWrapper>

    </footer>
  );
}

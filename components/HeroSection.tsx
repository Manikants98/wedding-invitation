"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/lib/useLanguage";

export default function HeroSection() {
  const { weddingData } = useLanguage();

  return (
    <div className="relative pt-20 pb-12 px-6 text-center overflow-hidden">
      {/* Decorative Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mb-8"
      >
        <div className="flex justify-center mb-2">
          <Heart
            className="w-16 h-16 text-maroon/80 fill-gold/20"
            strokeWidth={1}
          />
        </div>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </motion.div>

      <SectionWrapper delay={0.2}>
        <p className="text-maroon/80 italic text-lg mb-8 md:mb-12 font-hindi-text max-w-2xl mx-auto">
          {weddingData.intro.text}
        </p>
      </SectionWrapper>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Bride */}
        <SectionWrapper delay={0.4} className="w-full max-w-md">
          <div className="relative p-8 border-4 border-double border-gold/40 bg-white/40 backdrop-blur-sm rounded-lg hover:bg-white/50 transition-colors duration-300 shadow-lg">
            <h2 className="text-4xl md:text-5xl text-maroon mb-4 drop-shadow-sm font-name">
              {weddingData.bride.name}
            </h2>
            <div className="text-sm md:text-base text-gray-800 space-y-2 font-hindi-text">
              <p className="uppercase tracking-widest text-xs text-gold-dark font-bold">{weddingData.bride.title}</p>
              <p className="font-bold text-maroon text-lg">
                {weddingData.bride.parents}
              </p>
              <div className="w-16 h-px bg-gold/30 mx-auto my-2" />
              <p className="text-xs text-maroon/80 mt-3 font-medium">
                Resident: {weddingData.bride.residence}
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.6} className="my-4 md:my-0">
          <div className="text-6xl md:text-8xl text-gold-gradient font-script drop-shadow-md">&</div>
        </SectionWrapper>

        {/* Groom */}
        <SectionWrapper delay={0.8} className="w-full max-w-md">
          <div className="relative p-8 border-4 border-double border-gold/40 bg-white/40 backdrop-blur-sm rounded-lg hover:bg-white/50 transition-colors duration-300 shadow-lg">
            <h2 className="text-4xl md:text-5xl text-maroon mb-4 drop-shadow-sm font-name">
              {weddingData.groom.name}
            </h2>
            <div className="text-sm md:text-base text-gray-800 space-y-2 font-hindi-text">
              <p className="uppercase tracking-widest text-xs text-gold-dark font-bold">{weddingData.groom.title}</p>
              <p className="font-bold text-maroon text-lg">
                {weddingData.groom.parents}
              </p>

              <p className="text-xs text-maroon/80 mt-3 font-medium">
                Resident: {weddingData.groom.residence}
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}

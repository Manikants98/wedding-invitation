"use client";

import { PrintProvider } from "@/contexts/PrintContext";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import { weddingData } from "@/lib/wedding-data";
import Mandala from "@/components/decorations/Mandala";
import CornerPattern from "@/components/decorations/CornerPattern";
import DividerPattern from "@/components/decorations/DividerPattern";

export default function PrintableInvitation() {
  return (
    <PrintProvider isPrint={true}>
      <div
        id="print-container"
        className="fixed top-0 left-0 w-[800px] bg-cream overflow-hidden z-[-100] invisible"
      >
        {/* Background Elements - Simplified for Print */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `url('${weddingData.background.textureUrl}')`,
          }}
        />

        {/* Static Mandalas */}
        <Mandala
          className="absolute -left-20 top-20 w-[500px] h-[500px] text-gold/10"
          opacity={0.1}
        />
        <Mandala
          className="absolute -right-20 bottom-20 w-[600px] h-[600px] text-maroon/5"
          opacity={0.05}
        />

        {/* Main Content Card - Fixed Width, No Blur for better compression */}
        <div className="relative z-10 w-full mx-auto shadow-none bg-white/90 border-[6px] border-double border-gold/30 rounded-none overflow-hidden">
          {/* Corner Ornaments */}
          <CornerPattern position="top-left" />
          <CornerPattern position="top-right" />
          <CornerPattern position="bottom-left" />
          <CornerPattern position="bottom-right" />

          <HeroSection />

          {/* Excluded Countdown */}

          <Timeline />

          <DividerPattern className="my-4" />

          <Venue />

          <DividerPattern className="my-4" />

          <Footer />
        </div>
      </div>
    </PrintProvider>
  );
}

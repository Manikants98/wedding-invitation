import AudioPlayer from "@/components/AudioPlayer";
import Countdown from "@/components/Countdown";
import FloatingPetals from "@/components/FloatingPetals";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ShareButton from "@/components/ShareButton";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import { weddingData } from "@/lib/wedding-data";
import Mandala from "@/components/decorations/Mandala";
import CornerPattern from "@/components/decorations/CornerPattern";
import DividerPattern from "@/components/decorations/DividerPattern";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream relative overflow-x-hidden">
      {/* Background Elements */}
      <div
        className="fixed inset-0 opacity-40 pointer-events-none z-0"
        style={{ backgroundImage: `url('${weddingData.background.textureUrl}')` }}
      />
      <div className="fixed inset-0 bg-linear-to-b from-cream via-transparent to-cream opacity-80 pointer-events-none z-0" />

      {/* Rotating Mandala Background */}
      <Mandala className="fixed -left-20 top-20 w-125 h-125 text-gold/10" opacity={0.1} />
      <Mandala className="fixed -right-20 bottom-20 w-150 h-150 text-maroon/5" opacity={0.05} />

      {/* Interactive Elements */}
      <FloatingPetals />
      <AudioPlayer />
      <ShareButton />

      {/* Main Content Card */}
      <div className="relative z-10 w-full md:max-w-4xl mx-auto min-h-screen shadow-2xl bg-white/40 backdrop-blur-md border-[6px] border-double border-gold/30 my-0 md:my-8 rounded-none md:rounded-xl overflow-hidden">

        {/* Corner Ornaments */}
        <CornerPattern position="top-left" />
        <CornerPattern position="top-right" />
        <CornerPattern position="bottom-left" />
        <CornerPattern position="bottom-right" />

        <HeroSection />

        <DividerPattern className="my-4" />

        <Countdown />

        <DividerPattern className="my-4" />

        <Timeline />

        <DividerPattern className="my-4" />

        <Venue />

        <DividerPattern className="my-4" />

        <Footer />
      </div>
    </main>
  );
}

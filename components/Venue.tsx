"use client";

import { MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { weddingData } from "@/lib/wedding-data";

export default function Venue() {
  return (
    <SectionWrapper className="py-12 px-6 text-center max-w-3xl mx-auto">
      <div className="flex flex-col items-center p-8 border-4 border-double border-gold/30 rounded-lg bg-white/30 backdrop-blur-sm shadow-lg">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-red-900 text-gold border-2 border-gold flex items-center justify-center mb-6 shadow-lg">
          <MapPin size={32} />
        </div>

        <h2 className="text-4xl text-maroon mb-6 font-script drop-shadow-sm">
          {weddingData.venue.title}
        </h2>

        <div className="space-y-3 mb-8 text-lg text-gray-800 font-serif">
          <p className="font-bold text-2xl text-maroon">
            {weddingData.venue.name}
          </p>
          <p className="italic">{weddingData.venue.addressLine1}</p>
          <p className="italic">{weddingData.venue.addressLine2}</p>
        </div>

        <a
          href={weddingData.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-maroon to-red-900 text-gold rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gold/50"
        >
          <MapPin size={18} />
          View on Google Maps
        </a>
      </div>
    </SectionWrapper>
  );
}

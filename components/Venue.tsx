"use client";

import { MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { weddingData } from "@/lib/wedding-data";

export default function Venue() {
  return (
    <SectionWrapper className="py-16 px-6 text-center bg-white/50 backdrop-blur-sm rounded-3xl mx-4 md:mx-auto my-8 border border-gold/20 shadow-xl max-w-3xl">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-maroon text-gold flex items-center justify-center mb-6 shadow-lg">
          <MapPin size={32} />
        </div>

        <h2 className="text-4xl text-maroon mb-6">{weddingData.venue.title}</h2>

        <div className="space-y-2 mb-8 text-lg text-gray-800">
          <p className="font-bold text-xl text-maroon">
            {weddingData.venue.name}
          </p>
          <p>{weddingData.venue.addressLine1}</p>
          <p>{weddingData.venue.addressLine2}</p>
        </div>

        <a
          href={weddingData.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-maroon to-red-900 text-gold rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gold/30"
        >
          <MapPin size={18} />
          View on Google Maps
        </a>
      </div>
    </SectionWrapper>
  );
}

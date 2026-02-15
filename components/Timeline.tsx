"use client";

import SectionWrapper from "./SectionWrapper";
import { Calendar, Heart, Music, Sun, Car, Utensils, Flower } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function Timeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case "sun": return <Sun className="w-6 h-6 text-white" />;
      case "heart": return <Heart className="w-6 h-6 text-white" />;
      case "music": return <Music className="w-6 h-6 text-white" />;
      case "car": return <Car className="w-6 h-6 text-white" />;
      case "utensils": return <Utensils className="w-6 h-6 text-white" />;
      case "flower": return <Flower className="w-6 h-6 text-white" />;
      default: return <Calendar className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl text-center text-maroon mb-12">{weddingData.timeline.title}</h2>
      </SectionWrapper>

      <div className="relative space-y-16">
        {weddingData.timeline.events.map((event, index) => (
          <SectionWrapper key={index} delay={index * 0.2}>
            <div className={`relative flex items-center ${event.position === 'left' ? 'md:flex-row-reverse' : ''
              }`}>

              {/* Center Line and Icon */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                {/* Timeline Line */}
                <div className="w-0.5 h-16 bg-linear-to-b from-transparent via-gold to-transparent"></div>
                {/* Icon */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-cream shadow-lg z-10 ${event.color}`}>
                  {getIcon(event.iconType)}
                </div>
                {/* Timeline Line */}
                <div className="w-0.5 h-16 bg-linear-to-b from-transparent via-gold to-transparent"></div>
              </div>

              {/* Card */}
              <div className={`w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 bg-gradient-to-br from-white/90 to-cream/90 backdrop-blur-md rounded-lg border border-gold/40 shadow-lg hover:shadow-xl hover:border-gold transition-all duration-300 relative overflow-hidden ${event.position === 'left' ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                {/* Decorative corner inside card */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="fill-maroon"><path d="M0 0 L100 0 L100 100 Q50 50 0 0" /></svg>
                </div>

                <div className="flex items-center justify-between space-x-2 mb-2">
                  <span className="font-bold text-maroon text-xl font-serif">{event.title}</span>
                </div>
                <div className="flex items-center text-gold-dark font-medium mb-3 border-b border-gold/20 pb-2">
                  <Calendar size={16} className="mr-2" />
                  <time>{event.date}</time>
                </div>
                <p className="text-gray-700 text-sm font-serif italic leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}

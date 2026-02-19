"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, Music, Sun, Car, Utensils, Flower } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/lib/useLanguage";

export default function Timeline() {
  const { weddingData } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case "sun": return <Sun className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      case "heart": return <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      case "music": return <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      case "car": return <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      case "utensils": return <Utensils className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      case "flower": return <Flower className="w-5 h-5 md:w-6 md:h-6 text-white" />;
      default: return <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />;
    }
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl text-center text-maroon mb-12 font-serif">
          {weddingData.timeline.title}
        </h2>
      </SectionWrapper>

      <div className="relative">
        {/* Vertical Timeline Line - Mobile & Desktop */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20 md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {weddingData.timeline.events.map((event, index) => (
            <SectionWrapper key={index} delay={index * 0.15}>
              <div className={`relative flex items-start md:items-center ${event.position === 'left'
                ? 'md:flex-row-reverse'
                : 'md:flex-row'
                }`}>

                {/* Timeline Icon Container */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-cream shadow-xl ${event.color} transition-transform hover:scale-110 duration-300`}>
                    {getIcon(event.iconType)}
                  </div>
                </div>

                {/* Connecting Line from Icon to Card (Desktop only) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gold/40 ${event.position === 'left'
                  ? 'right-1/2 mr-7'
                  : 'left-1/2 ml-7'
                  }`} />

                {/* Card Content */}
                <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-4rem)] ${event.position === 'left'
                  ? 'md:mr-auto md:pr-0'
                  : 'md:ml-auto md:pl-0'
                  }`}>
                  <div className="group relative p-5 md:p-6 bg-gradient-to-br from-white via-white to-cream/50 backdrop-blur-sm rounded-xl border-2 border-gold/30 shadow-lg hover:shadow-2xl hover:border-gold/60 transition-all duration-300">

                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none overflow-hidden rounded-tr-xl">
                      <svg viewBox="0 0 100 100" className="fill-maroon">
                        <path d="M0 0 L100 0 L100 100 Q50 50 0 0" />
                      </svg>
                    </div>

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="font-bold text-maroon text-lg md:text-xl font-serif mb-3">
                        {event.title}
                      </h3>

                      {/* Date */}
                      <div className="flex items-center text-gold-dark font-medium text-sm md:text-base mb-3 pb-3 border-b border-gold/20">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <time>{event.date}</time>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm md:text-base font-serif leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
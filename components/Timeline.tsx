"use client";

import SectionWrapper from "./SectionWrapper";
import { Calendar, Heart, Music, Sun } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";
import { usePrint } from "@/contexts/PrintContext";

export default function Timeline() {
  const isPrint = usePrint();

  const getIcon = (type: string) => {
    switch (type) {
      case "sun":
        return <Sun className="w-6 h-6 text-white" />;
      case "heart":
        return <Heart className="w-6 h-6 text-white" />;
      case "music":
        return <Music className="w-6 h-6 text-white" />;
      default:
        return <Calendar className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl text-center text-maroon mb-12">
          {weddingData.timeline.title}
        </h2>
      </SectionWrapper>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold before:to-transparent">
        {weddingData.timeline.events.map((event, index) => (
          <SectionWrapper key={index} delay={index * 0.2}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 ${event.color}`}
              >
                {getIcon(event.iconType)}
              </div>

              {/* Card */}
              <div
                className={`
                  w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg 
                  ${
                    isPrint
                      ? "bg-white border border-gold shadow-sm"
                      : "bg-gradient-to-br from-white/90 to-cream/90 backdrop-blur-md border border-gold/40 shadow-lg hover:shadow-xl hover:border-gold transition-all duration-300"
                  } 
                  relative overflow-hidden
                `}
              >
                {/* Decorative corner inside card */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="fill-maroon">
                    <path d="M0 0 L100 0 L100 100 Q50 50 0 0" />
                  </svg>
                </div>

                <div className="flex items-center justify-between space-x-2 mb-2">
                  <span className="font-bold text-maroon text-xl font-serif">
                    {event.title}
                  </span>
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

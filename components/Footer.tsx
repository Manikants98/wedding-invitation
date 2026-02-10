"use client";

import SectionWrapper from "./SectionWrapper";
import { Flower2 } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-maroon/5 mt-12">
      <SectionWrapper>
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <Flower2 className="w-16 h-16 text-maroon/80" strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-4xl text-maroon mb-6">
            {weddingData.footer.message}
          </h2>
          <div className="h-px w-24 bg-gold mx-auto mb-6" />
          <p className="text-sm text-gray-500 font-serif">
            With Love
            <br />
            {weddingData.footer.signature}
          </p>
        </div>
      </SectionWrapper>

      <div className="mt-12 text-xs text-gray-400">
        <p>Digitally Crafted with ❤️</p>
      </div>
    </footer>
  );
}

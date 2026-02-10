"use client";

import SectionWrapper from "./SectionWrapper";
import { Flower2 } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";
import DividerPattern from "./decorations/DividerPattern";

export default function Footer() {
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

          <h2 className="text-3xl md:text-5xl text-maroon mb-6 font-script drop-shadow-sm">
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

      <div className="mt-16 text-xs text-maroon/40 font-serif tracking-wider">
        <p>Digitally Crafted with Divyansh | {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";

export default function DownloadPDFButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      // Target the hidden printable container
      const element = document.getElementById("print-container");

      if (!element) {
        console.error("Printable container not found");
        return;
      }

      // Temporarily make visible and bring to top for capture
      // We use a high z-index and visibility: visible
      // Since it's fixed at top-0 left-0, it will cover the screen, which is fine for a split second.
      const originalZIndex = element.style.zIndex;
      const originalVisibility = element.style.visibility;

      element.style.zIndex = "9999";
      element.style.visibility = "visible";

      try {
        // Generate JPEG with high quality
        const dataUrl = await toJpeg(element, {
          quality: 0.95, // Higher quality for text sharpness
          cacheBust: true,
          pixelRatio: 3, // Increase resolution for better text clarity
          backgroundColor: "#FFF5E1",
        });

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [element.offsetWidth * 2, element.offsetHeight * 2],
        });

        pdf.addImage(
          dataUrl,
          "JPEG",
          0,
          0,
          element.offsetWidth * 2,
          element.offsetHeight * 2,
        );
        pdf.save("Mansi-Nirbhay-Wedding-Invitation.pdf");
      } finally {
        // Restore hidden state
        element.style.zIndex = originalZIndex;
        element.style.visibility = originalVisibility;
      }
    } catch (error: any) {
      console.error("Error generating PDF:", error);
      alert(`Failed to generate PDF: ${error.message || error}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={handleDownload}
      disabled={isGenerating}
      className="fixed top-6 left-6 z-50 p-3 rounded-full bg-maroon/90 text-gold border border-gold shadow-lg backdrop-blur-sm hover:bg-maroon transition-colors flex items-center gap-2 group"
      aria-label="Download PDF"
    >
      <Download size={20} className={isGenerating ? "animate-bounce" : ""} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium">
        {isGenerating ? "Generating..." : "Download PDF"}
      </span>
    </motion.button>
  );
}

"use client";

import { Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { weddingData } from "@/lib/wedding-data";

export default function ShareButton() {
  const shareText = weddingData.share.message;

  // In a real scenario, this would be the actual deployed URL
  // For now we'll use window.location.href if available, or a placeholder
  const getUrl = () =>
    typeof window !== "undefined" ? window.location.href : weddingData.meta.url;

  const handleShare = async () => {
    const url = getUrl();

    if (navigator.share) {
      try {
        await navigator.share({
          title: weddingData.meta.title,
          text: shareText,
          url: url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback to WhatsApp
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText + url)}`,
        "_blank",
      );
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleShare}
        className="p-3 rounded-full bg-maroon/90 text-gold border border-gold shadow-lg backdrop-blur-sm hover:bg-maroon transition-colors"
        aria-label="Share"
      >
        <Share2 size={20} />
      </motion.button>
    </div>
  );
}

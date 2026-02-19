"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/lib/wedding-data";
import { weddingDataEn } from "@/lib/wedding-data-en";

export default function LanguageSwitcher() {
  const [showModal, setShowModal] = useState(false);
  const [currentLang, setCurrentLang] = useState<'hi' | 'en'>('hi');

  const handleLanguageSelect = (lang: 'hi' | 'en') => {
    setCurrentLang(lang);
    setShowModal(false);
    // Store preference in localStorage
    localStorage.setItem('preferred-language', lang);
    // Reload page to apply language change
    window.location.reload();
  };

  return (
    <>
      {/* Language Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-maroon text-cream rounded-lg shadow-lg hover:bg-maroon/80 transition-colors duration-300 font-medium text-sm"
      >
        {currentLang === 'hi' ? 'हिंदी' : 'English'}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border-4 border-gold/40 overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-maroon to-maroon/80 text-cream p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold">Choose Language / भाषा चुनें</h3>
                  <p className="text-cream/80 text-sm mt-2">Select your preferred language</p>
                </div>

                {/* Language Options */}
                <div className="p-6 space-y-4">
                  <button
                    onClick={() => handleLanguageSelect('hi')}
                    className="w-full p-4 border-2 border-gold/30 rounded-lg hover:border-gold hover:bg-gold/10 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-maroon text-lg font-hindi-text">हिंदी</h4>
                        <p className="text-gray-600 text-sm">Hindi</p>
                      </div>
                      <div className="text-2xl">🇮🇳</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className="w-full p-4 border-2 border-gold/30 rounded-lg hover:border-gold hover:bg-gold/10 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-maroon text-lg">English</h4>
                        <p className="text-gray-600 text-sm">English</p>
                      </div>
                      <div className="text-2xl">🇬🇧</div>
                    </div>
                  </button>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 text-center border-t border-gold/20">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-maroon transition-colors duration-200 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

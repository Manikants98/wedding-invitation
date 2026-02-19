"use client";

import { useState, useEffect } from 'react';
import { weddingData } from './wedding-data';
import { weddingDataEn } from './wedding-data-en';

export type Language = 'hi' | 'en';

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState<Language>('hi');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && (savedLang === 'hi' || savedLang === 'en')) {
      setCurrentLang(savedLang);
    }
  }, []);

  const currentWeddingData = currentLang === 'hi' ? weddingData : weddingDataEn;

  return {
    currentLang,
    setCurrentLang,
    weddingData: currentWeddingData,
    isHindi: currentLang === 'hi',
    isEnglish: currentLang === 'en'
  };
}

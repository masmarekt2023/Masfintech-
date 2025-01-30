"use client"

import { useLanguage } from '@/app/lib/context/LanguageContext';
import { useMemo } from 'react';

import { translation } from "./data"

type NestedTranslation = { [key: string]: string | NestedTranslation };

export function useTranslation() {
  const { language } = useLanguage(); // Use language from context

  const memoizedTranslations = useMemo(() => translation[language], [language]);

  const t = (key: string, fallback: string): string => {
    const keys = key.split('.');
    let translation: NestedTranslation | string = memoizedTranslations;

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k] as NestedTranslation;
      } else {
        return fallback;
      }
    }

    return typeof translation === 'string' ? translation : fallback;
  };

  return { t };
}

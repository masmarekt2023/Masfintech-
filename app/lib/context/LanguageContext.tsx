"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the shape of the context state
interface LanguageContextState {
  language: 'en' | 'ar';
  setLanguage: (language: 'en' | 'ar') => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextState | undefined>(undefined);

// Define the props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create a provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the LanguageContext
export const useLanguage = (): LanguageContextState => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

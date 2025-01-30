import React, { ReactNode } from 'react';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import { LoadingProvider } from './LoadingContext';

interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default ProviderWrapper;

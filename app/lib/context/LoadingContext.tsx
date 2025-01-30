"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context state
interface LoadingContextState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

// Create the context with a default value
const isLoadingContext = createContext<LoadingContextState | undefined>(undefined);

// Define the props for the provider component
interface LoadingProviderProps {
  children: ReactNode;
}

// Create a provider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </isLoadingContext.Provider>
  );
};

// Create a custom hook to use the isLoadingContext
export const useLoading = (): LoadingContextState => {
  const context = useContext(isLoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

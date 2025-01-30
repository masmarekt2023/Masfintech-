"use client"

import React, { useEffect } from "react";
import { useLanguage } from "../lib/context/LanguageContext";

const CarouselButton = ({ direction, onClick, isRTL }: { direction: 'prev' | 'next', onClick: () => void, isRTL: boolean }) => (
  <button
    type="button"
    className={`absolute top-0 ${direction === 'prev' ? (isRTL ? 'right-0' : 'left-0') : (isRTL ? 'left-0' : 'right-0')} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
    onClick={onClick}
    data-carousel={direction}
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 dark:bg-gray-900/40 group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-700/70">
      <svg className="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={direction === 'prev' ? 'M5 1 1 5l4 4' : 'm1 9 4-4-4-4'} />
      </svg>
      <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
    </span>
  </button>
);

const CarouselIndicator = ({ index, currentIndex, setCurrentIndex }: { index: number, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) => (
  <button
    type="button"
    className={`w-3 h-3 rounded-full transition-opacity duration-300 ${index === currentIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}
    aria-current={index === currentIndex}
    aria-label={`Slide ${index + 1}`}
    onClick={() => setCurrentIndex(index)}
    data-carousel-slide-to={index}
  ></button>
);

export default function Carousel({ children, currentIndex, setCurrentIndex, slidesLength }: { children: React.ReactNode, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, slidesLength: number }) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesLength - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slidesLength - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    setTouchStartX(touchStartX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (isRTL) {
      if (touchDiff > 50) {
        goToPrevious();
        setTouchStartX(null);
      } else if (touchDiff < -50) {
        goToNext();
        setTouchStartX(null);
      }
    } else {
      if (touchDiff > 50) {
        goToNext();
        setTouchStartX(null);
      } else if (touchDiff < -50) {
        goToPrevious();
        setTouchStartX(null);
      }
    }
  };

  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      id="default-carousel"
      className={`relative w-full rounded-lg ${isRTL ? 'rtl' : ''}`}
      data-carousel="slide"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Carousel wrapper */}
      {children}
      {/* Slider controls */}
      <CarouselButton direction="prev" onClick={goToPrevious} isRTL={isRTL} />
      <CarouselButton direction="next" onClick={goToNext} isRTL={isRTL} />
      {/* Slider indicators */}
      <div className="z-30 flex justify-center p-4 space-x-3 rounded-b-lg rtl:space-x-reverse bg-gray-900">
        {Array.from({ length: slidesLength }).map((_, index) => (
          <CarouselIndicator key={index} index={index} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        ))}
      </div>
    </div>
  );
}
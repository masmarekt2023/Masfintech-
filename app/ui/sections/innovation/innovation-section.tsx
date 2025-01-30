"use client"

import { motion } from "framer-motion";
import LinkButton from "../../link-button";
import { useTranslation } from "@/app/lib/translation";
import Carousel from "../../Carousel";
import Card from "./card";
import getCards from "./data"
import { useState } from "react";

export default function InnovationSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = getCards();

  return (
    <motion.section
      id="innovation"
      className="scroll-mt-[102px] lg:min-h-[70vh] p-6 flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-8 md:items-center justify-center md:flex-row">
        <div className="md:w-[40%]">
          <h6 className="md:text-3xl text-xl font-semibold text-secondary">
            {t('innovation.portfolio', 'Portfolio')}
          </h6>
          <h1 className="md:text-4xl text-3xl font-bold mt-2">
            {t('innovation.heading', 'Innovation is the core of everything we do.')}
          </h1>
        </div>
        <div className="md:w-1/2 flex flex-col items-start">
          <p>
            {t('innovation.description', 'The Driving Force at the Heart of Our Endeavors – Pioneering Creative Solutions and Redefining Industries for a Dynamic Future Focused on Excellence and Progress')}
          </p>
          <LinkButton href="/contact-us" />
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mt-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="md:hidden mt-8">
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} slidesLength={cards.length}>
          <div className="relative h-56 overflow-hidden rounded-t-lg md:h-96">
            {cards.map(({ imageUrl, title, description }, index) => (
              <div
                key={index}
                className={`relative duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'} h-full`}
                data-carousel-item
              >
                <div className={`absolute inset-0 bg-cover bg-center ${imageUrl} opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                <div className="relative z-10 p-6">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
}

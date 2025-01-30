"use client"

import { motion } from 'framer-motion';
import { useTranslation } from '@/app/lib/translation';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});
import discover from "../../../public/discover.json";
import free from "../../../public/free.json";
import experience from "../../../public/experience.json";
import innovation from "../../../public/innovation.json";
import Carousel from '../Carousel';
import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  visual: object;
}

function Card({ title, description, visual }: CardProps) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: visual
          }}
          width="80%"
          height="80%"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      title: t('howItWorks.cards.discoverProduct.title', 'Discover the product'),
      description: t('howItWorks.cards.discoverProduct.description', 'Dive into the unique features and benefits with our &lsquo;Discover the Product&lsquo; experience'),
      visual: discover
    },
    {
      title: t('howItWorks.cards.freeConsultations.title', 'Free Consultations'),
      description: t('howItWorks.cards.freeConsultations.description', 'Benefit from expert advice and tailored solutions through our complimentary free consultations'),
      visual: free
    },
    {
      title: t('howItWorks.cards.wireframeProduction.title', 'Wireframe & Production'),
      description: t('howItWorks.cards.wireframeProduction.description', 'Our precise wireframing and expert production bring your vision to life seamlessly'),
      visual: experience
    },
    {
      title: t('howItWorks.cards.prototypeApplication.title', 'Prototype Application'),
      description: t('howItWorks.cards.prototypeApplication.description', 'Our prototype application turns concepts into dynamic realities, providing a visual preview of innovation'),
      visual: innovation
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-[102px] lg:min-h-[80vh] p-6 relative flex flex-col items-center justify-center">
      <h1 className="text-secondary text-3xl md:text-5xl font-bold text-center mb-8">{t('howItWorks.heading', 'HOW IT WORKS')}</h1>
      <p className="text-center mb-8">{t('howItWorks.subheading', 'Discover our streamlined approach to boost your brand’s success through innovative strategies and advanced technologies')}</p>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} visual={card.visual} />
        ))}
      </div>
      <div className="md:hidden lg:mt-8">
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} slidesLength={cardData.length}>
          <div className="relative overflow-hidden rounded-t-lg sm:h-[430px] h-[300px]">
            {cardData.map(({ description, title, visual }, index) => (
              <div
                key={index}
                className={`p-6 rounded-t-lg text-center bg-white bg-opacity-20 backdrop-blur-md relative duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'} h-full`}
              >
                <div>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: visual
                    }}
                    width="50%"
                    height="50%"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
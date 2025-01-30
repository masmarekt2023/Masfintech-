"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/lib/translation';
// import dynamic from 'next/dynamic';
// const Lottie = dynamic(() => import("react-lottie"), {
//   ssr: false,
// });
// import responsive from '../../../public/responsive.json';
// import design from '../../../public/design.json';

type CardProps = {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  hoverFrom: string;
  hoverTo: string;
};

const Card: React.FC<CardProps> = ({ title, description, gradientFrom, gradientTo, hoverFrom, hoverTo }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`md:mt-4 p-6 rounded-lg bg-gradient-to-r from-${gradientFrom} to-${gradientTo} hover:from-${hoverFrom} hover:to-${hoverTo}`}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </motion.div>
);

// const defaultOptionsResponsive = {
//   loop: true,
//   autoplay: true,
//   animationData: responsive,
// };

// const defaultOptionsDesign = {
//   loop: true,
//   autoplay: true,
//   animationData: design,
// };

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: t('whyChooseUs.cards.smartSecureSystem.title', 'Smart & secure system'),
      description: t('whyChooseUs.cards.smartSecureSystem.description', 'A smart, secure system ensures efficient and protected operations'),
      gradientFrom: "green-500",
      gradientTo: "blue-600",
      hoverFrom: "green-600",
      hoverTo: "blue-700",
    },
    {
      title: t('whyChooseUs.cards.professionalTeam.title', 'Professional team'),
      description: t('whyChooseUs.cards.professionalTeam.description', 'A skilled team delivering tailored solutions with professionalism.'),
      gradientFrom: "purple-500",
      gradientTo: "pink-600",
      hoverFrom: "purple-600",
      hoverTo: "pink-700",
    },
    {
      title: t('whyChooseUs.cards.certifiedExpert.title', 'Certified Expert'),
      description: t('whyChooseUs.cards.certifiedExpert.description', 'A certified expert delivering precision and excellence through specialized knowledge and skills.'),
      gradientFrom: "yellow-500",
      gradientTo: "red-600",
      hoverFrom: "yellow-600",
      hoverTo: "red-700",
    },
    {
      title: t('whyChooseUs.cards.premiumSupport.title', '24/7 Premium Support'),
      description: t('whyChooseUs.cards.premiumSupport.description', 'Get round-the-clock premium support for peace of mind and swift issue resolution.'),
      gradientFrom: "blue-500",
      gradientTo: "cyan-600",
      hoverFrom: "blue-600",
      hoverTo: "cyan-700",
    },
  ];

  return (
    <section id="why-choose-us" className="scroll-mt-[102px] min-h-[60vh] p-6 relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50">
        {/* <motion.div
          className="w-full"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie options={defaultOptionsResponsive} width="25%" height="25%" />
        </motion.div>
        <motion.div
          className="w-full absolute top-[92%] md:top-[70%] md:hidden"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie options={defaultOptionsDesign} width="25%" height="25%" />
        </motion.div> */}
      </div>
      <div className="relative z-10">
        <h1 className="text-secondary text-3xl md:text-5xl font-bold text-center mb-8">{t('whyChooseUs.heading', 'WHY CHOOSE US')}</h1>
        <p className="text-center mb-8">{t('whyChooseUs.subheading', 'Let us change the way you think about technology.')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
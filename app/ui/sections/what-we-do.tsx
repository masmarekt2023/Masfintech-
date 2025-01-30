"use client"

import Image from "next/image";
import SpecialGraphic from "../SpecialGraphic";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/lib/translation";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  gradientFrom: string;
  gradientTo: string;
}

const Card = ({ title, description, imageSrc, gradientFrom, gradientTo }: CardProps) => (
  <motion.div
    className={`p-6 rounded-lg bg-gradient-to-r from-${gradientFrom} to-${gradientTo} hover:from-${gradientFrom}-600 hover:to-${gradientTo}-700`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
    {imageSrc && (
      <Image
        src={imageSrc}
        layout="responsive"
        width={200}
        height={200}
        alt={title}
      />
    )}
  </motion.div>
);

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();

  const cardData: CardProps[] = [
    {
      title: t('whatWeDo.mobileAppTitle', 'Mobile Application Development'),
      description: t('whatWeDo.mobileAppDescription', 'Mobile application development involves the design, coding, testing, and deployment of software specifically tailored for mobile devices, encompassing the entire development lifecycle.'),
      imageSrc: "/homepage/mobile_app.png",
      gradientFrom: "green-500",
      gradientTo: "blue-600"
    },
    {
      title: t('whatWeDo.desktopAppTitle', 'Desktop Application Development & Website'),
      description: t('whatWeDo.desktopAppDescription', 'Desktop application development creates software for computers, while website development focuses on online platforms accessible through web browsers.'),
      imageSrc: "/homepage/desktop.png",
      gradientFrom: "purple-500",
      gradientTo: "pink-600"
    }
  ];

  return (
    <motion.section
      id="what-we-do"
      className="relative scroll-mt-[102px] min-h-[90vh] p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-secondary text-3xl md:text-5xl font-bold text-center mb-8">
          {t('whatWeDo.heading', 'WHAT WE DO')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
          <motion.div
            className="relative p-6 rounded-lg bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SpecialGraphic className="hidden rounded-lg md:block absolute inset-0 opacity-20" />
            <h3 className="relative text-lg font-semibold mb-2">
              {t('whatWeDo.digitalMarketingTitle', 'Digital Marketing & Branding')}
            </h3>
            <p className="relative text-sm">
              {t('whatWeDo.digitalMarketingDescription', 'Digital marketing and branding use online channels to promote products, establish a brand identity, and engage with a target audience.')}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhatWeDo;
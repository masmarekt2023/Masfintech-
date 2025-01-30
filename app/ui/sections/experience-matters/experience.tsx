"use client"

import ProgressSection from "./progress";
import { motion } from "framer-motion";
import { useTranslation } from '@/app/lib/translation';
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";
import { FiTarget } from "react-icons/fi";

function Card({ title, description, bgColor, icon: Icon }: { title: string, description: string, bgColor: string, icon: IconType }) {
  return (
    <motion.div
      className={`p-[18px] rounded-lg shadow-md ${bgColor} transform transition-transform hover:scale-105 flex flex-col items-center`} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl mb-4">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-center flex-grow text-lg">{description}</p>
    </motion.div>
  );
}

export default function Experience({ flag }: { flag?: boolean }) {
  const { t } = useTranslation();

  const cardData = [
    { title: t('experienceMatters.cards.creativeTeam.title', 'Creative Team'), description: t('experienceMatters.cards.creativeTeam.description', 'Explore the Dynamic Energy of Our Creative Team.'), bgColor: "bg-red-500", icon: FaLightbulb },
    { title: t('experienceMatters.cards.smartSolutions.title', 'Smart Solutions'), description: t('experienceMatters.cards.smartSolutions.description', 'Navigating Tomorrow with Our Smart Solutions.'), bgColor: "bg-blue-500", icon: FaGears },
    { title: t('experienceMatters.cards.workSmartReliable.title', 'Work smart & Reliable'), description: t('experienceMatters.cards.workSmartReliable.description', 'Working Smart, Ensuring Reliability in Every Endeavor.'), bgColor: "bg-green-500", icon: MdWork },
    { title: t('experienceMatters.cards.focusOnTarget.title', 'Focus on target'), description: t('experienceMatters.cards.focusOnTarget.description', 'Sharpen Your Aim, Directing Efforts Towards the Bullseye.'), bgColor: "bg-yellow-500", icon: FiTarget }
  ];

  return (
    <>
      {
        flag ? (
          <div className="relative h-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center flex-col lg:flex-row items-start p-6 gap-6 relative z-10 h-full">
              <ProgressSection />
              <div className="grid grid-cols-2 gap-4 h-full">
                {cardData.map((card, index) => (
                  <Card key={index} title={card.title} description={card.description} bgColor={card.bgColor} icon={card.icon} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-col lg:flex-row items-start p-6 gap-6 h-full">
            <ProgressSection />
            <div className="grid grid-cols-2 gap-4 h-full">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} bgColor={card.bgColor} icon={card.icon} />
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}
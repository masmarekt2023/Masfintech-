"use client"

import { FaBullhorn, FaMicrophone } from "react-icons/fa";
import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { useInView } from "react-intersection-observer"; // Import useInView
import { useTranslation } from '@/app/lib/translation';

interface CardProps {
  title: string;
  description: string;
  bgGradient: string;
  bgImage: string;
  icon?: ReactNode;
}

const Card = ({ title, description, bgGradient, bgImage, icon }: CardProps) => (
  <div className={`p-6 rounded-lg ${bgGradient} hover:${bgGradient.replace('500', '600')} relative`}>
    <div className={`absolute rounded-lg inset-0 ${bgImage} opacity-20 ${icon ? 'flex items-end justify-end' : ''}`}>
      {icon && <div className="text-7xl m-4">{icon}</div>}
    </div>
    <div className="relative z-10">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  </div>
);

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('ourServices.cards.graphicDesign.title', 'Graphic Design'),
      description: t('ourServices.cards.graphicDesign.description', 'Graphic design visually communicates ideas through skilled use of elements like typography and imagery.'),
      bgGradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
      bgImage: "bg-[url(/background.png)] bg-right",
    },
    {
      title: t('ourServices.cards.onlineMarketing.title', 'Online Marketing'),
      description: t('ourServices.cards.onlineMarketing.description', 'Digital marketing promotes products online to engage audiences and achieve business objectives.'),
      bgGradient: "bg-gradient-to-r from-green-500 to-teal-500",
      bgImage: "bg-black",
      icon: <FaBullhorn />,
    },
    {
      title: t('ourServices.cards.mobileAppDevelopment.title', 'Mobile App Developments'),
      description: t('ourServices.cards.mobileAppDevelopment.description', 'Creating mobile apps involves designing, coding, testing, and deploying software for smartphones and tablets.'),
      bgGradient: "bg-gradient-to-r from-pink-500 to-red-500",
      bgImage: "bg-[url(/homepage/mobile_app.png)]",
    },
    {
      title: t('ourServices.cards.voiceOver.title', 'Voice Over'),
      description: t('ourServices.cards.voiceOver.description', 'Voice-overing is delivering scripted content with a skilled, engaging voice artist.'),
      bgGradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
      bgImage: "bg-black",
      icon: <FaMicrophone />,
    },
    {
      title: t('ourServices.cards.websiteDevelopment.title', 'Website Development'),
      description: t('ourServices.cards.websiteDevelopment.description', 'Web development creates and maintains websites through coding and design for online functionality.'),
      bgGradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      bgImage: "bg-[url(/homepage/imac.png)] bg-cover",
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="services"
      className="scroll-mt-[102px] min-h-[70vh] p-6 flex flex-col items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 1 }}
    >
      <h1 className="hidden md:block text-secondary text-3xl md:text-5xl font-bold text-center mb-8">{t('ourServices.heading', 'OUR SERVICES')}</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-5">
          {services.slice(0, 2).map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
        <Card {...services[2]} />
        <div className="flex flex-col gap-5">
          {services.slice(3).map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
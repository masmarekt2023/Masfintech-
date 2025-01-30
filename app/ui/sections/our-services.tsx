"use client"

import Image from "next/image";
import { FaBullhorn, FaLightbulb, FaMicrochip } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from '@/app/lib/translation';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OurServices() {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaLightbulb className="text-2xl text-secondary" />,
      title: t("ourServices.creativeSolutionsTitle", "Creative Solutions"),
      description: t("ourServices.creativeSolutionsDescription", "Creative solutions involve thinking beyond conventional boundaries to address challenges in novel and innovative ways.")
    },
    {
      icon: <FaBullhorn className="md:text-3xl text-5xl -mt-2 md:mt-0 text-secondary" />,
      title: t("ourServices.digitalMarketingTitle", "Digital Marketing"),
      description: t("ourServices.digitalMarketingDescription", "Digital marketing involves utilizing electronic channels and digital strategies to promote products or services and establish communication with the target audience in the digital space.")
    },
    {
      icon: <FaMicrochip className="md:text-2xl text-3xl text-secondary" />,
      title: t("ourServices.iotProgrammingTitle", "IOT & Programming"),
      description: t("ourServices.iotProgrammingDescription", "IOT and programming involve connecting and programming devices for intelligent communication and interaction in a network of smart devices.")
    }
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} id="our-services" className="scroll-mt-[102px] p-6 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-secondary text-3xl md:text-5xl font-bold text-center mb-8">{t("ourServices.heading", "OUR SERVICES")}</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">{t("ourServices.subheading", "Let us do the work, so you can focus on what matters.")}</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.div key={index} className="mb-6 flex space-x-2 rtl:space-x-reverse" variants={itemVariants}>
                {service.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className='text-sm'>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image className="hidden md:block rtl:transform rtl:-scale-x-[1]" src="/homepage/imac.png" layout="responsive" width={400} height={400} alt="IMac Image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LinkButton from "../link-button";
import { useTranslation } from '@/app/lib/translation';

export default function ITSolutions() {
  const { t } = useTranslation();
  const title = t('itSolutions.title', 'Delivering IT solutions that enable you to work smarter.');
  const description = t('itSolutions.description', 'IT can streamline processes, enhance efficiency, and facilitate communication, making tasks and operations easier and more effective.');
  const contactLink = "/contact-us";

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id="it-solutions"
      className="
      relative
      bg-[url(/homepage/khaleeji-coding.jpg)] bg-cover md:bg-fixed bg-center
        scroll-mt-[102px]
        md:h-[calc(80vh-103px)]
        lg:px-72
        p-6
        flex
        flex-col
        justify-center
        items-start
        lg:items-center
        lg:text-center
      "
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10
      flex
        flex-col
        justify-center
        items-start
        lg:items-center
        lg:text-center
      ">
        <h6 className="text-3xl md:text-5xl rtl:md:leading-[60px] rtl:leading-[40px] font-bold mb-8 text-primary">
          {title}
        </h6>
        <p className="text-lg">
          {description}
        </p>
        <LinkButton href={contactLink} />
      </div>
    </motion.section>
  )
}
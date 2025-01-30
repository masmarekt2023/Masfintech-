"use client"

import { useTranslation } from '@/app/lib/translation';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import React from 'react';

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});
import coding from "../../../public/landing.json";
import overlay from "../../../public/overlay.json";
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '@/app/lib/context/LanguageContext';

export default function Landing() {
  const { t } = useTranslation();
  const { language } = useLanguage()

  const headingText = t('landing.headingText', "START YOUR DIGITAL BUSINESS");
  const headingText1 = t('landing.headingText1', "START YOUR DIGITAL BUSINESS");
  const headingText2 = t('landing.headingText2', "START YOUR DIGITAL BUSINESS");
  const titleText = t('landing.titleText', "We make IT simple, faster\nand less expensive.");
  const paragraphText = t('landing.paragraphText', "Discover our streamlined approach to boost your brand’s success through innovative strategies and advanced technologies");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  const defaultOptionsOverlay = {
    loop: true,
    autoplay: true,
    animationData: overlay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-[#1f092e]">
      <div className="absolute inset-0 opacity-[20%] min-h-screen">
        <Lottie options={defaultOptionsOverlay} width="100%" height="100%" style={{ position: "absolute" }} />
      </div>
      <div className="relative z-10 md:text-left min-h-screen rtl:md:text-right scroll-mt-[102px] grid grid-cols-1 md:grid-cols-2 gap-6 text-center p-6 md:pt-0 md:bg-cover md:bg-center">
        <motion.div
          className="flex flex-col justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {language === "ar" ? <h6 className="md:text-4xl text-xl font-semibold text-secondary">
            {headingText}
          </h6> :
            <TypeAnimation
              className="md:text-4xl text-xl text-secondary text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
              cursor={true}
              sequence={[
                headingText,
                2000,
                headingText1,
                2000,
                headingText2,
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />}
          <h1 className="md:text-5xl text-3xl rtl:md:leading-[60px] rtl:leading-[40px] font-bold mt-2">
            {titleText}
          </h1>
          <p className="text-base mt-4">
            {paragraphText}
          </p>
        </motion.div>
        <motion.div
          className="w-full hidden md:flex md:flex-col md:justify-center md:items-end"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie options={defaultOptions} width="100%" height="90%" />
        </motion.div>
      </div >
    </section>
  );
}

// <section className="mt-[20px] md:text-left rtl:md:text-right scroll-mt-[102px] grid grid-cols-1 md:grid-cols-2 gap-6 text-center min-h-screen p-6 md:pt-0 md:bg-cover md:bg-center">
// <div className="flex flex-col justify-center relative">
//   {language === "ar" ? <h6 className="mb-4 text-2xl ltr:font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
//     {headingText}
//   </h6> :
//     <TypeAnimation
//       className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
//       cursor={true}
//       sequence={[
//         headingText,
//         2000,
//         headingText1,
//         2000,
//         headingText2,
//         2000,
//       ]}
//       wrapper="div"
//       repeat={Infinity}
//     />}
//   <h1 className="mb-4 text-4xl ltr:font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//     {titleText}
//   </h1>
//   <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//     {paragraphText}
//   </p>
// </div>
// <motion.div
//   className="w-full hidden md:flex md:flex-col md:justify-center md:items-end"
//   initial={{ x: "100vw" }}
//   animate={{ x: 0 }}
//   transition={{ duration: 1 }}
// >
//   <Lottie options={defaultOptions} width="100%" height="90%" />
// </motion.div>
// </section >

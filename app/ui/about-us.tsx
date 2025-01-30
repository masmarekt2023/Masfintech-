"use client"

import { motion } from 'framer-motion';
import { useTranslation } from '@/app/lib/translation';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

import overlay from "../../public/background.json"

const defaultOptionsOverlay = {
  loop: true,
  autoplay: true,
  animationData: overlay,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function AboutUsLanding() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="flex flex-col justify-center items-center min-h-[50vh] p-6 bg-[url(/background.png)] bg-cover bg-center relative w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <Lottie options={defaultOptionsOverlay} width="100%" height="100%" style={{ position: "absolute", opacity: "20%"  }} />
      </div>
      <div className="relative z-10 text-center ">
        <h1 className="text-4xl font-bold mb-4">{t('aboutUs.heading', 'About us')}</h1>
        <p className="text-lg">{t('aboutUs.paragraph', 'Our mission is to make your business better through technology')}</p>
      </div>
    </motion.section>
  )
}
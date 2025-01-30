"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useEffect } from "react";
import { useTranslation } from '@/app/lib/translation';

function ProgressBar({ label, percentage }: { label: string, percentage: number }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1 text-secondary">
        <span className="text-gray-300">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5 relative">
        <motion.div
          className="bg-secondary h-2.5 rounded-full"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { width: `${percentage}%` },
            hidden: { width: 0 }
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-xs font-semibold text-primary"></span>
      </div>
    </div>
  );
}

export default function ProgressSection() {
  const { t } = useTranslation();

  return (
    <section className="p-6 bg-secondary relative rounded-lg">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('experienceMatters.heading', 'Express everything and feel everything.')}</h2>
        <p className="mb-6">{t('experienceMatters.subheading', 'A Journey to Express and Feel Every Experience, Where Every Moment Matters.')}</p>
        <ProgressBar label={t('experienceMatters.progress.design', 'Design Graphics & 3D Design')} percentage={87} />
        <ProgressBar label={t('experienceMatters.progress.marketing', 'Marketing')} percentage={64} />
        <ProgressBar label={t('experienceMatters.progress.animations', 'Animations')} percentage={72} />
        <ProgressBar label={t('experienceMatters.progress.programming', 'Programming')} percentage={91} />
      </div>
    </section>
  );
}
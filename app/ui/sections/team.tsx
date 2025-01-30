"use client"

import Image from "next/image";
import LinkButton from "../link-button";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/lib/translation";

export default function Team() {
  const { t } = useTranslation();
  const title = t("team.title", "Get the Business IT Service That Your Company Needs");
  const description = t("team.description", "Unlocking Optimal Performance, Streamlining Operations, Enhancing Productivity, and Driving Sustainable Growth for Long-Term Success in the Ever-Evolving Digital Landscape");
  const imageUrl = "/homepage/team.png";
  const imageAlt = "Team Image";

  return (
    <motion.section
      id="business"
      className="scroll-mt-[102px] p-6 bg-[url(/background.png)] bg-cover bg-center relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 p-6 flex flex-col items-start justify-center">
          <h1 className="text-secondary rtl:md:leading-[60px] rtl:leading-[40px] text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-base">{description}</p>
          <LinkButton />
        </div>
        <div className="md:w-1/2 p-6 hidden md:flex items-center justify-end">
          <Image src={imageUrl}  width={500} height={500} alt={imageAlt} />
        </div>
      </div>
    </motion.section>
  )
}
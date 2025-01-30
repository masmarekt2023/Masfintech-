"use client"

import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

export default function WhatsappIcon() {
  return (
    <motion.a
      className="animate-bounce z-40 fixed bottom-4 left-4 p-4 bg-secondary text-[#190031] rounded-full flex items-center justify-center"
      href="https://wa.me/905365439850"
      target="_blank"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BsWhatsapp size={34} />
    </motion.a>
  )
}
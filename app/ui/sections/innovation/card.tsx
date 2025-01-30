"use client"

import { motion } from "framer-motion"

// Card component
type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function Card({ imageUrl, title, description }: CardProps) {
  return (
    <motion.div
      className="card bg-transparent hover:bg-opacity-50 relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`absolute inset-0 bg-cover bg-center ${imageUrl} opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
      <div className="relative z-10 p-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
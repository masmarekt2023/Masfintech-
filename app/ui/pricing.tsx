"use client"

import { motion } from "framer-motion"
import { useTranslation } from '@/app/lib/translation';
import React from "react";
import Link from "next/link";
import { useLoading } from "../lib/context/LoadingContext";

interface PricingCardProps {
  title: string;
  description?: string;
  price: string;
  features: string[];
}

const PricingCard = ({ title, description, price, features }: PricingCardProps) => {
  const { t } = useTranslation();
  const { setIsLoading } = useLoading();
  return (
    <motion.div
      className="p-6 bg-[url(/background.png)] rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center flex flex-col justify-between relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <h3 className="text-3xl font-bold text-purple-600 mt-2">{price}</h3>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
        <div className="mt-4">
          <ul className="list-none list-inside text-gray-700">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <li>{feature}</li>
                <div className="border-b-2 my-2 border-gray-500/20" />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 relative z-10">
        <Link onClick={() => setIsLoading(true)} href={"/contact-us"} className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
          {t('pricing.learnMore', 'Learn More')}
        </Link>
      </div>
    </motion.div>
  )
}

export default function PricingPlans() {
  const { t } = useTranslation();
  const pricingPlans: PricingCardProps[] = [
    {
      title: t('pricing.webDevelopment.title', 'Web Development'),
      description: t('pricing.webDevelopment.description', 'Our company specializes in website design and development High quality'),
      price: t('pricing.webDevelopment.price', '$500 starting price'),
      features: [
        t('pricing.webDevelopment.features.responsiveDesign', 'Responsive Design'),
        t('pricing.webDevelopment.features.intuitiveNavigation', 'Intuitive Navigation'),
        t('pricing.webDevelopment.features.security', 'Security'),
        t('pricing.webDevelopment.features.cmsIntegration', 'CMS Integration'),
        t('pricing.webDevelopment.features.seoOptimization', 'SEO Optimization'),
      ],
    },
    {
      title: t('pricing.visualIdentity.title', 'Creating visual identity and professional designs'),
      description: t('pricing.visualIdentity.description', 'We work to create a distinctive visual identity and professional designs'),
      price: t('pricing.visualIdentity.price', '$1000 by identity'),
      features: [
        t('pricing.visualIdentity.features.logoDesign', 'Logo Design'),
        t('pricing.visualIdentity.features.colorPalette', 'Color Palette and Typography'),
        t('pricing.visualIdentity.features.graphicElements', 'Graphic Elements'),
        t('pricing.visualIdentity.features.consistency', 'Consistency Across Platforms'),
        t('pricing.visualIdentity.features.brandGuidelines', 'Brand Guidelines'),
      ],
    },
    {
      title: t('pricing.onlineShops.title', 'Creating online shops'),
      description: t('pricing.onlineShops.description', 'We build the shop and make connections with your bank'),
      price: t('pricing.onlineShops.price', '$750 starting price'),
      features: [
        t('pricing.onlineShops.features.userFriendlyInterface', 'User-Friendly Interface'),
        t('pricing.onlineShops.features.securePayment', 'Secure Payment Options'),
        t('pricing.onlineShops.features.productShowcase', 'High-Quality Product Showcase'),
        t('pricing.onlineShops.features.responsiveDesign', 'Responsive Design'),
        t('pricing.onlineShops.features.inventoryManagement', 'Inventory Management and Order Tracking'),
      ],
    },
    {
      title: t('pricing.mobileAppDevelopment.title', 'Mobile Applications Design and Development'),
      description: t('pricing.mobileAppDevelopment.description', 'We build your application using the latest technology'),
      price: t('pricing.mobileAppDevelopment.price', '$3500 starting price'),
      features: [
        t('pricing.mobileAppDevelopment.features.uiDesign', 'Intuitive UI Design'),
        t('pricing.mobileAppDevelopment.features.crossPlatform', 'Cross-Platform Compatibility'),
        t('pricing.mobileAppDevelopment.features.scalability', 'Scalability and Performance Optimization'),
        t('pricing.mobileAppDevelopment.features.security', 'Security Measures'),
        t('pricing.mobileAppDevelopment.features.userCentric', 'User-Centric Design'),
      ],
    },
    {
      title: t('pricing.digitalAdvertising.title', 'Creating and Managing Digital Advertising Campaigns'),
      price: t('pricing.digitalAdvertising.price', '$1000'),
      features: [
        t('pricing.digitalAdvertising.features.targetedAdvertising', 'Targeted Advertising'),
        t('pricing.digitalAdvertising.features.analyticalTools', 'Analytical Tools'),
        t('pricing.digitalAdvertising.features.multichannelIntegration', 'Multichannel Integration'),
        t('pricing.digitalAdvertising.features.adCreative', 'Ad Creative Optimization'),
        t('pricing.digitalAdvertising.features.budgetManagement', 'Budget Management and ROI Analysis'),
      ],
    },
    {
      title: t('pricing.voiceOver.title', 'Voice Over'),
      description: t('pricing.voiceOver.description', 'We also can voice over your videos'),
      price: t('pricing.voiceOver.price', '$50 min'),
      features: [
        t('pricing.voiceOver.features.professionalTalent', 'Professional Voice Talent'),
        t('pricing.voiceOver.features.scriptAdaptation', 'Script Adaptation'),
        t('pricing.voiceOver.features.highQualityRecording', 'High-Quality Recording Equipment'),
        t('pricing.voiceOver.features.postProduction', 'Post-Production Editing'),
        t('pricing.voiceOver.features.versatility', 'Versatility Across Platforms'),
      ],
    },
  ]
  return (
    <section className=" p-8 text-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          {t('pricing.heading', 'Delivering business solutions for the web and mobile world.')}
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          {t('pricing.description', 'Digital transformation improves efficiency, enhances customer experiences, and enables data-driven decision-making. It fosters innovation, reduces costs, and facilitates global expansion, all while promoting sustainability and continuous improvement.')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}
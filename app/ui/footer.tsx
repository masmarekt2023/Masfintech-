"use client"

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import MasLogo from "@/app/ui/mas-logo";
import { links } from '../lib/links';
import Link from 'next/link';
import SocialLinks from './social-links';
import { useTranslation } from '../lib/translation';
import { useLoading } from '../lib/context/LoadingContext';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const handleLinkClick = (href: string) => {
    if (href !== pathname)
      setIsLoading(true);
  }

  return (
    <motion.footer
      className="z-40 bg-[#190031] py-10"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animated state
      transition={{ duration: 1 }} // Animation duration
    >
      <div className="container px-6 flex flex-col lg:flex-row justify-between mb-6">
        <Link href="/" className="w-fit rtl:-mr-3 mb-6 flex-1 cursor-pointer" onClick={handleLinkClick?.bind(null, '/')}>
          <MasLogo width={200} height={200} />
        </Link>
        <div className="  mb-6 lg:mb-0 flex-grow">
          <h2 className="text-lg font-semibold mb-2">{t('footer.navigation', 'Navigation')}</h2>
          <ul className="grid grid-cols-2 gap-1">
            {
              links.map(({ path, key, fallback }) => (
                <li key={path}>
                  <Link onClick={handleLinkClick?.bind(null, path)} href={path} className='hover:text-[#7E52A0]'>
                    {t(key, fallback)}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">{t('footer.contactInfo', 'Contact Info')}</h2>
          <a href="tel:+905365439850" className='inline'>{t('footer.contactUs', 'Contact us: +905365439850')}</a>
          <p className="text-secondary">{t('footer.support', '24/7 Support')}</p>
        </div>
        <SocialLinks />
      </div>
      <div className="w-full text-primary bg-[#2e004f] p-2 mb-[-2.5rem]">
        <p dangerouslySetInnerHTML={{ __html: t('footer.copyright', `&copy; ${new Date().getFullYear()} Mas development. All rights reserved.`).replace('{year}', new Date().getFullYear().toString()) }} />
      </div>
    </motion.footer>
  );
};

export default Footer;

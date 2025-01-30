"use client"

import Link from 'next/link';
import MasLogo from './mas-logo';
import NavigationLinks from './navigation-links';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../lib/context/LanguageContext';
import { useLoading } from '../lib/context/LoadingContext';

const MenuButton = () => {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    </svg>
  )
}

const CloseButton = () => {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(false);
  }, [pathname])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const handleLinkClick = (href: string) => {
    if (pathname !== href) {
      setIsLoading(true);
    }
    setIsMenuOpen(false);
  };

  const handleOnLogoClick = () => {
    if (pathname !== '/') {
      setIsLoading(true);
    }
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 top-0 start-0 transition-all duration-300 ${isScrolled ? 'md:bg-gradient-to-r rtl:md:bg-gradient-to-l bg-[#190031] from-[#190031] to-[#8A00C1]' : 'bg-transparent'}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition-all duration-300">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleOnLogoClick}>
          <MasLogo width={160} height={70} />
        </Link>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* <Link
            onClick={() => setIsMenuOpen(false)}
            href="/contact-us"
            className="bg-transparent border-2 hover:bg-[#2E004D] focus:bg-[#190031] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300"
          >
            Contact Us
          </Link> */}
            <button onClick={toggleLanguage} className="bg-transparent border-2 hover:bg-[#2E004D] focus:bg-[#190031] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 flex items-center">
              <FaGlobe className="ltr:mr-2 rtl:ml-2" />
              <span>{language === "en" ? 'EN' : 'AR'}</span>
            </button>
          </motion.div>
          <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300" aria-controls="navbar-sticky">
            <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isMenuOpen ? <CloseButton /> : <MenuButton />}
          </button>
        </div>
        <NavigationLinks isMenuOpen={isMenuOpen} onLinkClick={handleLinkClick} />
      </div>
    </motion.nav>
  )
}

// <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//       <MasLogo />
//     </Link>
//     <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
//       <button onClick={toggleLanguage} type="button" className="flex justify-center items-center space-x-2 rtl:space-x-reverse text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <FaGlobe />
//         <span>{language === "en" ? 'EN' : 'AR'}</span>
//       </button>
//       <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
//         {isMenuOpen ? <CloseButton /> : <MenuButton />}
//       </button>
//     </div>
//     <NavigationLinks isMenuOpen={isMenuOpen} onLinkClick={handleLinkClick} />
//   </div>
// </nav>
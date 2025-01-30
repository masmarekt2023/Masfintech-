"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { links } from '@/app/lib/links';
import { useTranslation } from '../lib/translation';

type NavigationLinksProps = {
  isMenuOpen?: boolean;
  onLinkClick?: (href: string) => void;
};

export default function NavigationLinks({ isMenuOpen, onLinkClick }: NavigationLinksProps) {
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
      {/* Navigation links */}
      <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#190031] lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-inherit">
        {links.map(({ path, key, fallback }) => (
          <li key={path}>
            <Link href={path}
              className={`block py-2 px-3 my-1 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:p-0 lg:hover:text-[#D295BF] border-gray-700 ${pathname === path ? 'bg-secondary lg:bg-transparent lg:text-[#D295BF]' : ''}`}
              onClick={onLinkClick?.bind(null, path)}
            >
              {t(key, fallback)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





// <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
//   <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
//     {links.map(({ path, key, fallback }) => (
//       <li key={path}>
//         <Link href={path}
//           className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${pathname === path ? '' : ''}`}
//           onClick={onLinkClick}
//           aria-current="page"
//         >
//           {t(key, fallback)}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </div>
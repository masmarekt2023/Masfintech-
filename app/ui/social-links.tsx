"use client"

import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslation } from '../lib/translation';


export default function SocialLinks() {
  const { t } = useTranslation();
  return (
    <div className="mb-6 lg:mb-0 flex-1">
      <h2 className="text-lg font-semibold mb-2">{t("footer.followUs", "Follow Us")}</h2>
      <div className="flex gap-1">
        <a href="https://facebook.com/masmarkeating" target="_blank" rel="noopener noreferrer" className="hover:text-[#7E52A0]">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com/mas_digital_marketing" target="_blank" rel="noopener noreferrer" className="hover:text-[#7E52A0]">
          <FaInstagram size={24} />
        </a>
        <a href="https://tiktok.com/@masdigitalmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-[#7E52A0]">
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  )
}
"use client"

import SocialLinks from '../ui/social-links';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useTranslation } from '@/app/lib/translation';

function Card({ title, description, bgColor, icon: Icon, link }: { title: string, description: string, bgColor: string, icon: IconType, link: string }) {
  return (
    <a href={link} target='_blank' className={`block p-4 rounded-lg shadow-md ${bgColor} transform transition-transform hover:scale-105 min-h-32 cursor-pointer`}>
      <div className="flex items-center mb-2">
        <Icon className="mr-2 rtl:ml-2" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p>{description}</p>
    </a>
  );
}

export default function ContactInfo() {
  const { t } = useTranslation();

  const cardData = [
    { title: t('contactInfo.headOffice', 'Head Office'), description: t('contactInfo.address', 'istanbul-fatih akdeniz cd. no.61\nTÜRKİYE-İSTANBUL'), bgColor: "bg-red-500", icon: FaMapMarkerAlt, link: 'https://www.bing.com/maps?where=%C4%B1stanbul%2C+%C4%B1stanbul++34000%2C+TR&cp=41.00963%7E28.946104&lvl=10.1' },
    { title: t('contactInfo.emailUs', 'Email Us'), description: t('contactInfo.email', 'info@masfintech.com'), bgColor: "bg-blue-500", icon: FaEnvelope, link: 'mailto:info@masfintech.com' },
    { title: t('contactInfo.callUs', 'Call us'), description: t('contactInfo.phone', 'Phone : +905365439850'), bgColor: "bg-green-500", icon: FaPhone, link: 'tel:+905365439850' },
    { title: t('contactInfo.freeConsultations', 'Free Consultations'), description: t('contactInfo.phone', 'Phone : +905365439850'), bgColor: "bg-yellow-500", icon: FaComments, link: 'https://wa.me/905365439850' }
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[70vh] bg-gradient-to-r rtl:bg-gradient-to-l from-[#190031] to-[var(--secondary-color)] p-6 md:pt-0">
      <div className="flex flex-col justify-center text-left rtl:text-right">
        <h6 className="md:text-4xl text-xl font-semibold text-secondary">
          {t('contactInfo.getInTouch', 'Get in touch')}
        </h6>
        <h1 className="md:text-5xl text-3xl font-bold mt-2">
          {t('contactInfo.contactUsInfo', "Don't hesitate to contact us for more information.")}
        </h1>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} bgColor={card.bgColor} icon={card.icon} link={card.link} />
        ))}
      </div>
    </section>
  )
}
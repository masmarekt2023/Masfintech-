"use client"

import { useTranslation } from "@/app/lib/translation";

export default function PortfolioData() {
  const { t } = useTranslation();
  const mob = t('innovation.mobileApplication', 'Mobile application');
  const web = t('innovation.webSite', 'Web site');
  const cards = [
    { imageUrl: "bg-[url('/homepage/portfolio/goldmall.png')]", title: "Goldmall", description: mob },
    { imageUrl: "bg-[url('/homepage/portfolio/soul.png')]", title: "SOUL", description: mob },
    { imageUrl: "bg-[url('/homepage/portfolio/siraj.png')]", title: "SIRAJ", description: mob },
    { imageUrl: "bg-[url('/homepage/portfolio/alsaad.png')]", title: "Alsaad Group", description: web },
    { imageUrl: "bg-[url('/homepage/portfolio/royal.png')]", title: "Royal.rtu", description: web },
    { imageUrl: "bg-[url('/homepage/portfolio/taizer.png')]", title: "Taizer shop", description: web },
  ];
  return cards;
}
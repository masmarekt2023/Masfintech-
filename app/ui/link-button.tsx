"use client"

import Link from "next/link";
import { useLanguage } from "../lib/context/LanguageContext";
import { useLoading } from "../lib/context/LoadingContext";

export default function LinkButton({ href }: { href?: string }) {
  const { language } = useLanguage()
  const { setIsLoading } = useLoading();
  return (
    <Link
      href={href || "/contact-us"}
      onClick={() => setIsLoading(true)}
      className="
          bg-secondary
          hover:bg-[#D295BF]
          focus:ring-4
          focus:outline-none
          font-medium
          rounded-lg
          text-sm
          px-4
          py-2
          text-center
          transition
          duration-300
          mt-4
        "
    >
      {language === "en" ? "Contact Us" : "تواصل معنا"}
    </Link>
  )
}
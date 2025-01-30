"use client"

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdSend } from "react-icons/md";
import { useTranslation } from '@/app/lib/translation';
import { useLanguage } from "../lib/context/LanguageContext";

const InputField = ({ type, name, id, placeholder, required }: { type: string, name: string, id: string, placeholder: string, required: boolean }) => (
  <>
    <label className="text-gray-700 font-semibold">{placeholder}</label>
    <input
      className="bg-white w-full border border-gray-300 p-3 rounded-md focus:ring-2 outline-none focus:ring-[#8A00C1] transition-all duration-300 text-gray-900"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  </>
);

const sendEmail = (form: HTMLFormElement, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  console.log("sendEmail");
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Message has been sent",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to send your message",
          text: "Please try again later.",
          showConfirmButton: true,
        });
        setLoading(false);
      }
    );
};

const Contact = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    sendEmail(form.current, setLoading);
    console.log("pass");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">{t('contact.heading', 'Send us a message')}</span>
            <span className="absolute inset-0 bg-[#8A00C1] transform -skew-x-6 -skew-y-6 z-0"></span>
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center relative">
          <div className="h-screen md:w-1/2 p-8 bg-cover bg-center rounded-lg shadow-lg mb-4 md:mb-0 hidden md:flex flex-col justify-center items-center relative z-10" style={{ backgroundImage: "url('/contact.jpg')" }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <p className="text-white text-center md:text-left text-lg">
                {language === 'ar' ? 'يسرنا ان نسمع منكم. يرجى ملء النموذج وسنتواصل معكم قريبًا.' : t('contact.description', 'We would love to hear from you. Please fill out the form and we will get in touch with you shortly.')}
              </p>
            </div>
          </div>
          <form ref={form} onSubmit={handleSend} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg text-gray-900 relative z-20 ltr:md:-ml-16 rtl:md:-mr-16 md:mt-16">
            <div className="mb-4">
              <InputField type="text" name="name" id="name" placeholder={t('contact.name', 'Name')} required />
            </div>
            <div className="mb-4">
              <InputField type="email" name="email" id="email" placeholder={t('contact.email', 'Email')} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <InputField type="text" name="company" id="company" placeholder={t('contact.company', 'Company')} required />
              </div>
              <div className="mb-4">
                <InputField type="text" name="phone" id="phone" placeholder={t('contact.phone', 'Phone')} required />
              </div>
            </div>
            <div className="mb-4">
              <InputField type="text" name="subject" id="subject" placeholder={t('contact.subject', 'Subject')} required />
            </div>
            <div className="mb-6">
              <textarea
                className="bg-white w-full border border-gray-300 p-3 rounded-md focus:ring-2 outline-none focus:ring-[#8A00C1] transition-all duration-300 text-gray-900"
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder={t('contact.message', 'Message')}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send Message"
              className="space-x-2 space-x-reverse w-full outline-none p-3 rounded-md flex items-center justify-center bg-[#8A00C1] text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              disabled={loading}
            >
              <span>{loading ? t('contact.sending', 'Sending...') : t('contact.send', 'Send')}</span>
              {!loading && <span>
                <MdSend className="rtl:transform rtl:-scale-x-[1]" />
              </span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
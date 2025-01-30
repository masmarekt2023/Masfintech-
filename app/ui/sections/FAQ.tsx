"use client"

import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/lib/translation';

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

import questionMark from "../../../public/FAQ.json"

const defaultOptionsQuestionMark = {
  loop: true,
  autoplay: true,
  animationData: questionMark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = [
    {
      question: t('faq.question1', 'What services does your development company offer?'),
      answer: t('faq.answer1', 'We offer a range of services including web development, mobile app development, custom software development, UI/UX design, and quality assurance.')
    },
    {
      question: t('faq.question2', 'What technologies do you specialize in?'),
      answer: t('faq.answer2', 'We specialize in a wide range of technologies including but not limited to JavaScript, Python, Ruby on Rails, Swift, Java, and more.')
    },
    {
      question: t('faq.question3', 'How long does it take to develop a typical website or mobile app?'),
      answer: t('faq.answer3', 'The timeline for development can vary depending on the complexity of the project. We typically provide a project timeline after the initial consultation and requirements gathering.')
    },
    {
      question: t('faq.question4', 'Can you help with maintaining and updating existing software or websites?'),
      answer: t('faq.answer4', 'Yes, we offer maintenance and support services for existing software and websites. This can include updates, bug fixes, and security enhancements.')
    },
    {
      question: t('faq.question5', 'What is your approach to ensuring the security of the developed software?'),
      answer: t('faq.answer5', 'We follow industry best practices for security, including regular security audits, code reviews, and adherence to security standards and protocols.')
    }
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r rtl:bg-gradient-to-l from-[#190031] to-[#8A00C1] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:pt-0">
        <motion.div
          className="flex flex-col md:text-left rtl:text-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <h6 className="md:text-4xl text-xl font-semibold text-secondary">
              {t('faq.heading', 'FAQs')}
            </h6>
            <h1 className="md:text-5xl text-3xl font-bold mt-2">
              {t('faq.subheading', 'Frequently Asked Questions')}
            </h1>
            <p className="text-base mt-4">
              {t('faq.description', 'Here are some questions that you ask a lot about')}
            </p>
          </div>
          <div className="-mt-10 hidden md:block ">
            <Lottie options={defaultOptionsQuestionMark} width="90%" />
          </div>
        </motion.div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 rounded ${activeIndex === index ? 'bg-white text-[#190031]' : 'bg-gradient-to-r rtl:bg-gradient-to-l from-[#8A00C1] to-[#190031]'}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {activeIndex === index ? <BiMinus /> : <BiPlus />}
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default FAQ;

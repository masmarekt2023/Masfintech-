import { Metadata } from 'next';
import ITSolutions from '../ui/sections/it-solutions';
import WhatWeDo from '../ui/sections/what-we-do';
import WhyChooseUs from '../ui/sections/why-choose-us';
import Experience from '../ui/sections/experience-matters/experience';
import AboutUsLanding from '../ui/about-us';
import { Suspense } from 'react';
import Loader from '../ui/loader';

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <AboutUsLanding />
        <WhatWeDo />
        <ITSolutions />
        <WhyChooseUs />
        <Experience />
      </main>
    </Suspense>
  );
}

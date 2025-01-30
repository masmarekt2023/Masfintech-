import React, { Suspense } from 'react';
import Landing from './ui/sections/landing';
import WhatWeDo from './ui/sections/what-we-do';
import OurServices from './ui/sections/our-services';
import HowItWorks from './ui/sections/how-it-works';
import WhyChooseUs from './ui/sections/why-choose-us';
import Team from './ui/sections/team';
import SectionsSidebar from './ui/section/sections-sidebar';
import ITSolutions from './ui/sections/it-solutions';
import ServicesSection from './ui/sections/services-section';
import InnovationSection from './ui/sections/innovation/innovation-section';
import Loader from './ui/loader';

export default function Home() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="flex min-h-screen mt-[-103px]">
        <SectionsSidebar />
        <div className="min-h-screen">
          <Landing />
          <WhatWeDo />
          <InnovationSection />
          <OurServices />
          <ServicesSection />
          <ITSolutions />
          <WhyChooseUs />
          <HowItWorks />
          <Team />
        </div>
      </main>
    </Suspense>
  );
}

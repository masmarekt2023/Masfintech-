import { Metadata } from 'next';
import ServicesLanding from '../ui/services-landing';
import OurServices from '../ui/sections/our-services';
import ServicesSection from '../ui/sections/services-section';
import WhyChooseUs from '../ui/sections/why-choose-us';
import ITSolutions from '../ui/sections/it-solutions';
import FAQ from '../ui/sections/FAQ';
import { Suspense } from 'react';
import Loader from '../ui/loader';

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <ServicesLanding />
        <OurServices />
        <ServicesSection />
        <WhyChooseUs />
        <ITSolutions />
        <FAQ />
      </main>
    </Suspense>
  );
}

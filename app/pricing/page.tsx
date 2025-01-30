import { Metadata } from 'next';
import PricingLanding from '../ui/pricing-landing';
import PricingPlans from '../ui/pricing';
import Experience from '../ui/sections/experience-matters/experience';
import FAQ from '../ui/sections/FAQ';
import { Suspense } from 'react';
import Loader from '../ui/loader';

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Pricing() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Loader />
    </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <PricingLanding />
        <PricingPlans />
        <Experience flag={true} />
        <FAQ />
      </main>
    </Suspense>
  );
}

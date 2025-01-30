import { Metadata } from 'next';
import PortfolioLanding from '../ui/portfolio-landing';
import InnovationSection from '../ui/sections/innovation/innovation-section';
import Experience from '../ui/sections/experience-matters/experience';
import { Suspense } from 'react';
import Loader from '../ui/loader';
import ITSolutions from '../ui/sections/it-solutions';

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <PortfolioLanding />
        <InnovationSection />
        <ITSolutions />
        <Experience flag={true} />
      </main>
    </Suspense>
  );
}

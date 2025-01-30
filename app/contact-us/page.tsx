import { Metadata } from 'next';
import Contact from '../ui/form';
import { Suspense } from 'react';
import ContactUsLanding from '../ui/contactus-landing';
import ContactInfo from '../ui/contact-info';
import Loader from '../ui/loader';

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactUs() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <ContactUsLanding />
        <ContactInfo />        
        <Contact />
      </main>
    </Suspense>
  );
}

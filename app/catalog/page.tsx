import { Metadata } from 'next';
import { PDFCanvas } from './ui';
import { Suspense } from 'react';
import Loader from '../ui/loader';
import ProfileLanding from '../ui/profile-landing';

export const metadata: Metadata = {
  title: "Profile",
};

export default function OurProfile() {

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="mt-[-103px]">
        <ProfileLanding />
        <PDFCanvas />
      </main>
    </Suspense>
  );
}

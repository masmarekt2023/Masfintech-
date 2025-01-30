import BlogDetails from '@/app/ui/blogs/blog-details';
import Loader from '@/app/ui/loader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Blog Post",
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <div className="flex min-h-screen flex-col p-6">
        <BlogDetails slug={slug} />
      </div>
    </Suspense>
  );
}

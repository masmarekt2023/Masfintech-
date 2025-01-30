import { Metadata } from 'next';
import BlogPosts from '../ui/blogs/blog-posts';
import BlogsLanding from '../ui/blogs-landing';
import { Suspense } from 'react';
import Loader from '../ui/loader';

export const metadata: Metadata = {
  title: "Blog",
};


export default function Blog() {

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>}>
      <main className="min-h-screen top-margin mt-[-103px]">
        <BlogsLanding />
        <BlogPosts />
      </main>
    </Suspense>
  );
}

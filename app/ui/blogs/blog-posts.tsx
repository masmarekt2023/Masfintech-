"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from '@/app/lib/translation';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useLoading } from '@/app/lib/context/LoadingContext';

const blogPosts = [
  { id: 1, title: "First Blog Post", summary: "This is the summary of the first blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.", link: "/blog/first-blog-post", category: "Marketing", date: "2023-01-15" },
  { id: 2, title: "Second Blog Post", summary: "This is the summary of the second blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.", link: "/blog/second-blog-post", category: "Marketing", date: "2023-02-20" },
  { id: 3, title: "Third Blog Post", summary: "This is the summary of the third blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.", link: "/blog/third-blog-post", category: "Marketing", date: "2023-03-10" },
  { id: 4, title: "Fourth Blog Post", summary: "This is the summary of the fourth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.", link: "/blog/fourth-blog-post", category: "Digital Marketing", date: "2023-04-05" },
  { id: 5, title: "Fifth Blog Post", summary: "This is the summary of the fifth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.", link: "/blog/fifth-blog-post", category: "Content Marketing", date: "2023-05-25" },
  { id: 6, title: "Sixth Blog Post", summary: "This is the summary of the sixth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/sixth-blog-post", category: "Analytics", date: "2023-06-30" },
  { id: 7, title: "Seventh Blog Post", summary: "This is the summary of the seventh blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.", link: "/blog/seventh-blog-post", category: "Marketing", date: "2023-07-15" },
  { id: 8, title: "Eighth Blog Post", summary: "This is the summary of the eighth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.", link: "/blog/eighth-blog-post", category: "Marketing", date: "2023-08-20" },
  { id: 9, title: "Ninth Blog Post", summary: "This is the summary of the ninth blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.", link: "/blog/ninth-blog-post", category: "Marketing", date: "2023-09-10" },
  { id: 10, title: "Tenth Blog Post", summary: "This is the summary of the tenth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.", link: "/blog/tenth-blog-post", category: "Digital Marketing", date: "2023-10-05" },
  { id: 11, title: "Eleventh Blog Post", summary: "This is the summary of the eleventh blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.", link: "/blog/eleventh-blog-post", category: "Content Marketing", date: "2023-11-25" },
  { id: 12, title: "Twelfth Blog Post", summary: "This is the summary of the twelfth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/twelfth-blog-post", category: "Analytics", date: "2023-12-30" },
  { id: 13, title: "Thirteenth Blog Post", summary: "This is the summary of the thirteenth blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.", link: "/blog/thirteenth-blog-post", category: "Marketing", date: "2023-01-15" },
  { id: 14, title: "Fourteenth Blog Post", summary: "This is the summary of the fourteenth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.", link: "/blog/fourteenth-blog-post", category: "Marketing", date: "2023-02-20" },
  { id: 15, title: "Fifteenth Blog Post", summary: "This is the summary of the fifteenth blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.", link: "/blog/fifteenth-blog-post", category: "Marketing", date: "2023-03-10" },
  { id: 16, title: "Sixteenth Blog Post", summary: "This is the summary of the sixteenth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.", link: "/blog/sixteenth-blog-post", category: "Digital Marketing", date: "2023-04-05" },
  { id: 17, title: "Seventeenth Blog Post", summary: "This is the summary of the seventeenth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.", link: "/blog/seventeenth-blog-post", category: "Content Marketing", date: "2023-05-25" },
  { id: 18, title: "Eighteenth Blog Post", summary: "This is the summary of the eighteenth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/eighteenth-blog-post", category: "Analytics", date: "2023-06-30" },
  { id: 19, title: "Nineteenth Blog Post", summary: "This is the summary of the nineteenth blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.", link: "/blog/nineteenth-blog-post", category: "Marketing", date: "2023-07-15" },
  { id: 20, title: "Twentieth Blog Post", summary: "This is the summary of the twentieth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.", link: "/blog/twentieth-blog-post", category: "Marketing", date: "2023-08-20" },
  { id: 21, title: "Twenty-First Blog Post", summary: "This is the summary of the twenty-first blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.", link: "/blog/twenty-first-blog-post", category: "Marketing", date: "2023-09-10" },
  { id: 22, title: "Twenty-Second Blog Post", summary: "This is the summary of the twenty-second blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.", link: "/blog/twenty-second-blog-post", category: "Digital Marketing", date: "2023-10-05" },
  { id: 23, title: "Twenty-Third Blog Post", summary: "This is the summary of the twenty-third blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.", link: "/blog/twenty-third-blog-post", category: "Content Marketing", date: "2023-11-25" },
  { id: 24, title: "Twenty-Fourth Blog Post", summary: "This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/twenty-fourth-blog-post", category: "Analytics", date: "2023-12-30" },
  { id: 25, title: "Twenty-Fourth Blog Post", summary: "This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/twenty-fourth-blog-post", category: "Analytics", date: "2023-12-30" },
  { id: 26, title: "Twenty-Fourth Blog Post", summary: "This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/twenty-fourth-blog-post", category: "Analytics", date: "2023-12-30" },
  { id: 27, title: "Twenty-Fourth Blog Post", summary: "This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.", link: "/blog/twenty-fourth-blog-post", category: "Analytics", date: "2023-12-30" },
];

const categories = ["All", "Marketing", "Digital Marketing", "Content Marketing", "Analytics"];
const dates = ["All", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];

const POSTS_PER_PAGE = 6;

export default function BlogPosts() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
    const dateMatch = selectedDate === "All" || post.date.startsWith(selectedDate);
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && dateMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const renderPaginationButtons = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === index + 1 ? 'bg-[#8A00C1] text-white' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
        >
          {index + 1}
        </button>
      ));
    }

    const buttons = [];
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
      );
    }

    buttons.push(
      <button
        key={1}
        onClick={() => setCurrentPage(1)}
        className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === 1 ? 'bg-[#8A00C1] text-white' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      buttons.push(<span key="start-ellipsis" className="mx-1 px-4 py-2">...</span>);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === i ? 'bg-[#8A00C1] text-white' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      buttons.push(<span key="end-ellipsis" className="mx-1 px-4 py-2">...</span>);
    }

    buttons.push(
      <button
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === totalPages ? 'bg-[#8A00C1] text-white' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
      >
        {totalPages}
      </button>
    );

    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white'}`}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      );
    }

    return buttons;
  };
  const { setIsLoading } = useLoading();

  return (
    <section className="p-6">
      <div className="mb-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_5fr] gap-4 w-full">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('blog.category', 'Category')}</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="mt-1 block w-full p-2 border rounded bg-[#8A00C1]">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('blog.date', 'Date')}</label>
            <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="mt-1 block w-full p-2 border rounded bg-[#8A00C1]">
              {dates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
          </motion.div>
          <motion.div
            className="relative w-full md:w-fit justify-self-end"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('blog.search', 'Search')}</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-1 block w-full p-2 border rounded bg-[#8A00C1] pl-10"
              placeholder={t('blog.searchPlaceholder', 'Search by title or summary')}
            />
            <FaSearch className="absolute top-[45px] left-3 transform -translate-y-1/2 text-gray-400" />
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.length === 0
          ? (
            <div className="text-left text-white">{t('blog.noPosts', 'No posts found. Please try a different search.')}</div>
          ) : (
            paginatedPosts.map(({ id, title, summary, link, category, date }) => (
              <motion.div
                key={id}
                className="p-4 border rounded shadow-md bg-gradient-to-r from-[#190031] to-[#8A00C1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{summary}</p>
                <p className="text-sm text-gray-400">{category}</p>
                <p className="text-sm text-gray-400">{format(new Date(date), 'yyyy-MM-dd')}</p>
                <Link onClick={() => setIsLoading(true)} href={link} className="text-yellow-300 hover:underline">{t('blog.readMore', 'Read more')}</Link>
              </motion.div>
            )))}
      </div>
      <div className="mt-4 flex justify-center">
        {renderPaginationButtons()}
      </div>
    </section>
  )
}
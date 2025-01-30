"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/app/lib/translation';
import { useLoading } from '@/app/lib/context/LoadingContext';
import { FaPrint, FaFacebook, FaTwitter } from 'react-icons/fa';

const blogPosts = [
  { slug: "first-blog-post", title: "First Blog Post", content: "This is the content of the first blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness. Marketing strategies should be tailored to the target audience to maximize effectiveness. Utilizing various channels such as social media, email marketing, and content marketing can significantly boost your reach and engagement.", category: "Marketing", date: "2023-01-15" },
  { slug: "second-blog-post", title: "Second Blog Post", content: "This is the content of the second blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing. Social media campaigns can help in creating brand awareness and engaging with your audience. Email marketing is a powerful tool for nurturing leads and converting them into customers. Content marketing involves creating valuable content to attract and retain a clearly defined audience.", category: "Marketing", date: "2023-02-20" },
  { slug: "third-blog-post", title: "Third Blog Post", content: "This is the content of the third blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences. Conducting market research can provide valuable insights into your audience's behavior and preferences. Use this information to create personalized marketing campaigns that resonate with your audience and drive conversions.", category: "Marketing", date: "2023-03-10" },
  { slug: "fourth-blog-post", title: "Fourth Blog Post", content: "This is the content of the fourth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence. SEO helps in improving your website's visibility on search engines, driving organic traffic. PPC campaigns can provide immediate results by placing your ads in front of potential customers. Social media platforms offer a great opportunity to engage with your audience and build a community around your brand.", category: "Digital Marketing", date: "2023-04-05" },
  { slug: "fifth-blog-post", title: "Fifth Blog Post", content: "This is the content of the fifth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools. High-quality content can help in establishing your brand as an authority in your industry. It also provides value to your audience, encouraging them to engage with your brand and share your content with others.", category: "Content Marketing", date: "2023-05-25" },
  { slug: "sixth-blog-post", title: "Sixth Blog Post", content: "This is the content of the sixth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions. Tracking key metrics such as website traffic, conversion rates, and engagement levels can provide insights into what's working and what's not. Use this data to optimize your marketing strategies and achieve better results.", category: "Analytics", date: "2023-06-30" },
  { slug: "seventh-blog-post", title: "Seventh Blog Post", content: "This is the content of the seventh blog post. Marketing automation can streamline your marketing efforts and improve efficiency. Use tools to automate repetitive tasks such as email campaigns, social media posting, and lead nurturing. Automation allows you to focus on more strategic activities and ensures consistent communication with your audience.", category: "Marketing Automation", date: "2023-07-10" },
  { slug: "eighth-blog-post", title: "Eighth Blog Post", content: "This is the content of the eighth blog post. Influencer marketing can help in reaching a larger audience and building trust. Collaborate with influencers who align with your brand values and have a strong following. Influencers can create authentic content that resonates with their audience and promotes your products or services.", category: "Influencer Marketing", date: "2023-08-15" },
  { slug: "ninth-blog-post", title: "Ninth Blog Post", content: "This is the content of the ninth blog post. Video marketing is a powerful tool for engaging your audience. Create high-quality videos that provide value and entertain your audience. Use platforms like YouTube, Instagram, and TikTok to share your videos and reach a wider audience. Video content can help in building brand awareness and driving conversions.", category: "Video Marketing", date: "2023-09-05" },
  { slug: "tenth-blog-post", title: "Tenth Blog Post", content: "This is the content of the tenth blog post. Email marketing remains one of the most effective marketing channels. Build a strong email list and segment your audience to send personalized messages. Use compelling subject lines and valuable content to increase open rates and engagement. Email marketing can help in nurturing leads and driving conversions.", category: "Email Marketing", date: "2023-10-10" },
  { slug: "eleventh-blog-post", title: "Eleventh Blog Post", content: "This is the content of the eleventh blog post. Social media marketing is essential for building brand awareness and engaging with your audience. Create a social media strategy that aligns with your business goals and target audience. Use platforms like Facebook, Instagram, Twitter, and LinkedIn to share content, interact with your audience, and run paid campaigns.", category: "Social Media Marketing", date: "2023-11-05" },
  { slug: "twelfth-blog-post", title: "Twelfth Blog Post", content: "This is the content of the twelfth blog post. Search engine optimization (SEO) is crucial for improving your website's visibility on search engines. Conduct keyword research to identify relevant keywords and optimize your content accordingly. Use on-page and off-page SEO techniques to improve your rankings and drive organic traffic to your website.", category: "SEO", date: "2023-12-01" },
  { slug: "thirteenth-blog-post", title: "Thirteenth Blog Post", content: "This is the content of the thirteenth blog post. Pay-per-click (PPC) advertising can provide immediate results by placing your ads in front of potential customers. Create compelling ad copy and use targeted keywords to reach your audience. Monitor your campaigns and optimize them based on performance data to achieve better results.", category: "PPC Advertising", date: "2023-12-10" },
  { slug: "fourteenth-blog-post", title: "Fourteenth Blog Post", content: "This is the content of the fourteenth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools. High-quality content can help in establishing your brand as an authority in your industry. It also provides value to your audience, encouraging them to engage with your brand and share your content with others.", category: "Content Marketing", date: "2023-12-15" },
  { slug: "fifteenth-blog-post", title: "Fifteenth Blog Post", content: "This is the content of the fifteenth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions. Tracking key metrics such as website traffic, conversion rates, and engagement levels can provide insights into what's working and what's not. Use this data to optimize your marketing strategies and achieve better results.", category: "Analytics", date: "2023-12-20" },
  { slug: "sixteenth-blog-post", title: "Sixteenth Blog Post", content: "This is the content of the sixteenth blog post. Marketing automation can streamline your marketing efforts and improve efficiency. Use tools to automate repetitive tasks such as email campaigns, social media posting, and lead nurturing. Automation allows you to focus on more strategic activities and ensures consistent communication with your audience.", category: "Marketing Automation", date: "2023-12-25" },
  { slug: "seventeenth-blog-post", title: "Seventeenth Blog Post", content: "This is the content of the seventeenth blog post. Influencer marketing can help in reaching a larger audience and building trust. Collaborate with influencers who align with your brand values and have a strong following. Influencers can create authentic content that resonates with their audience and promotes your products or services.", category: "Influencer Marketing", date: "2023-12-26" },
  { slug: "eighteenth-blog-post", title: "Eighteenth Blog Post", content: "This is the content of the eighteenth blog post. Video marketing is a powerful tool for engaging your audience. Create high-quality videos that provide value and entertain your audience. Use platforms like YouTube, Instagram, and TikTok to share your videos and reach a wider audience. Video content can help in building brand awareness and driving conversions.", category: "Video Marketing", date: "2023-12-27" },
  { slug: "nineteenth-blog-post", title: "Nineteenth Blog Post", content: "This is the content of the nineteenth blog post. Email marketing remains one of the most effective marketing channels. Build a strong email list and segment your audience to send personalized messages. Use compelling subject lines and valuable content to increase open rates and engagement. Email marketing can help in nurturing leads and driving conversions.", category: "Email Marketing", date: "2023-12-28" },
  { slug: "twentieth-blog-post", title: "Twentieth Blog Post", content: "This is the content of the twentieth blog post. Social media marketing is essential for building brand awareness and engaging with your audience. Create a social media strategy that aligns with your business goals and target audience. Use platforms like Facebook, Instagram, Twitter, and LinkedIn to share content, interact with your audience, and run paid campaigns.", category: "Social Media Marketing", date: "2023-12-29" },
  { slug: "twenty-first-blog-post", title: "Twenty-First Blog Post", content: "This is the content of the twenty-first blog post. Search engine optimization (SEO) is crucial for improving your website's visibility on search engines. Conduct keyword research to identify relevant keywords and optimize your content accordingly. Use on-page and off-page SEO techniques to improve your rankings and drive organic traffic to your website.", category: "SEO", date: "2023-12-30" },
  { slug: "twenty-second-blog-post", title: "Twenty-Second Blog Post", content: "This is the content of the twenty-second blog post. Pay-per-click (PPC) advertising can provide immediate results by placing your ads in front of potential customers. Create compelling ad copy and use targeted keywords to reach your audience. Monitor your campaigns and optimize them based on performance data to achieve better results.", category: "PPC Advertising", date: "2023-12-31" },
  { slug: "twenty-third-blog-post", title: "Twenty-Third Blog Post", content: "This is the content of the twenty-third blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools. High-quality content can help in establishing your brand as an authority in your industry. It also provides value to your audience, encouraging them to engage with your brand and share your content with others.", category: "Content Marketing", date: "2023-12-30" },
  { slug: "twenty-fourth-blog-post", title: "Twenty-Fourth Blog Post", content: "This is the content of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions. Tracking key metrics such as website traffic, conversion rates, and engagement levels can provide insights into what's working and what's not. Use this data to optimize your marketing strategies and achieve better results.", category: "Analytics", date: "2023-12-30" },
];


const getLatestPosts = () => {
  return blogPosts.slice(-5).reverse();
};

const saveComment = (slug: string, comment: string) => {
  const comments = JSON.parse(localStorage.getItem(slug) || '[]');
  comments.push({ text: comment, likes: 0, replies: [], date: new Date().toISOString() });
  localStorage.setItem(slug, JSON.stringify(comments));
};

const getComments = (slug: string) => {
  return JSON.parse(localStorage.getItem(slug) || '[]');
};

const likeComment = (slug: string, index: number) => {
  const comments = getComments(slug);
  comments[index].likes += 1;
  localStorage.setItem(slug, JSON.stringify(comments));
};

const deleteComment = (slug: string, index: number) => {
  const comments = getComments(slug);
  comments.splice(index, 1);
  localStorage.setItem(slug, JSON.stringify(comments));
};

const replyToComment = (slug: string, index: number, reply: string) => {
  const comments = getComments(slug);
  comments[index].replies.push({ text: reply, date: new Date().toISOString() });
  localStorage.setItem(slug, JSON.stringify(comments));
};

export default function BlogDetails({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const { setIsLoading } = useLoading();
  const post = blogPosts.find((post) => post.slug === slug);
  interface Comment {
    text: string;
    likes: number;
    replies: { text: string; date: string }[];
    date: string;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replies, setReplies] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    setComments(getComments(slug));
  }, [slug]);

  useEffect(() => {
    const printButton = document.querySelector('.print-button');
    const facebookButtons = document.querySelectorAll('.facebook-button');
    const twitterButtons = document.querySelectorAll('.twitter-button');

    facebookButtons.forEach(button => {
      button.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
    });

    twitterButtons.forEach(button => {
      button.setAttribute('href', `https://twitter.com/intent/tweet?url=${window.location.href}`);
    });

    if (printButton) {
      printButton.addEventListener('click', handlePrint);
    }

    return () => {
      if (printButton) {
        printButton.removeEventListener('click', handlePrint);
      }
    };
  }, []);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      saveComment(slug, newComment);
      setComments(getComments(slug));
      setNewComment('');
    }
  };

  const handleLike = (index: number) => {
    likeComment(slug, index);
    setComments(getComments(slug));
  };

  const handleDelete = (index: number) => {
    deleteComment(slug, index);
    setComments(getComments(slug));
  };

  const handleReplyChange = (index: number, value: string) => {
    setReplies((prevReplies) => ({ ...prevReplies, [index]: value }));
  };

  const handleReplySubmit = (index: number) => {
    if (replies[index]?.trim()) {
      replyToComment(slug, index, replies[index]);
      setComments(getComments(slug));
      setReplies((prevReplies) => ({ ...prevReplies, [index]: '' }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!post) {
    return <div>{t('blog.postNotFound', 'Post not found')}</div>;
  }
  return (
    <div className="">
      <div className="container mx-auto relative bg-[url(/background.png)] shadow-md rounded-lg p-6">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={postVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <Link onClick={() => setIsLoading(true)} href="/blog" className="text-primary hover:underline">{t('blog.backToPosts', 'Back to Blog Posts')}</Link>
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-4">{post.category} | {new Date(post.date).toLocaleDateString()}</p>
          <p className="mb-6">{post.content}</p>
          <div className="flex space-x-2 mb-6">
            <button className="print-button p-2 bg-secondary hover:bg-[#D295BF] ml-2 text-white rounded-lg shadow-md transition duration-300 sm:hidden">
              <FaPrint />
            </button>
            <a target='_blank' className="facebook-button p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300 sm:hidden">
              <FaFacebook />
            </a>
            <a target='_blank' className="twitter-button p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300 sm:hidden">
              <FaTwitter />
            </a>
            <button onClick={handlePrint} className="p-2 bg-secondary hover:bg-[#D295BF] ml-2 text-white rounded-lg shadow-md transition duration-300 hidden sm:block">
              {t('blog.print', 'Print')}
            </button>
            <a target='_blank' className="facebook-button p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300 hidden sm:block">
              {t('blog.shareOnFacebook', 'Share on Facebook')}
            </a>
            <a target='_blank' className="twitter-button p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300 hidden sm:block">
              {t('blog.shareOnTwitter', 'Share on Twitter')}
            </a>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{comments?.length || ""} {t('blog.comments', 'Comments')}</h2>
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                  <p className="text-secondary">{t('blog.anonymous', 'Anonymous')}</p>
                  <p>{comment.text}</p>
                  <p className="text-sm text-gray-400">{new Date(comment.date).toLocaleString()}</p>
                  <div className="flex space-x-2">
                    <button onClick={() => handleLike(index)} className="text-secondary ml-2 hover:text-[#7E52A0] transition duration-300">{t('blog.like', 'Like')} ({comment.likes})</button>
                    <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-700 transition duration-300">{t('blog.delete', 'Delete')}</button>
                  </div>
                  <div className="mt-2">
                    <textarea
                      value={replies[index] || ''}
                      onChange={(e) => handleReplyChange(index, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded bg-transparent"
                      placeholder={t('blog.replyPlaceholder', 'Reply to this comment')}
                    />
                    <button onClick={() => handleReplySubmit(index)} className="mt-2 p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300">{t('blog.reply', 'Reply')}</button>
                  </div>
                  <div className="ml-4 mt-2 space-y-2">
                    {comment.replies?.map((reply, replyIndex) => (
                      <div key={replyIndex} className="py-2">
                        <p className="text-secondary">{t('blog.anonymous', 'Anonymous')}</p>
                        <p>{reply.text}</p>
                        <p className="text-sm text-gray-400">{new Date(reply.date).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border border-gray-300 mt-2 rounded bg-transparent"
              placeholder={t('blog.addComment', 'Add a comment')}
            />
            <button onClick={handleCommentSubmit} className="mt-2 p-2 bg-secondary hover:bg-[#D295BF] text-white rounded-lg shadow-md transition duration-300">{t('blog.submit', 'Submit')}</button>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{t('blog.latestPosts', 'Latest Posts')}</h2>
            <ul className="space-y-2">
              {getLatestPosts().map((latestPost) => (
                <li key={latestPost.slug}>
                  <Link onClick={() => setIsLoading(true)} href={`/blog/${latestPost.slug}`} className="text-secondary hover:text-[#D295BF] transition duration-300">{latestPost.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
import React from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

interface EditorialBlogCardProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
}

export const EditorialBlogCard: React.FC<EditorialBlogCardProps> = ({ post, onReadPost }) => {
  const editorialLabel = post.editorialType || (post.category.includes('Research') ? 'Research' : post.category.includes('Offensive') ? 'Thinking' : 'News');
  const fallbackBg = post.accentBg || '#CAD8DF';

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onReadPost(post)}
      data-cursor="read"
      className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-[#121622] p-3 sm:p-3.5 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:border-neutral-700/80 border border-neutral-200/70 dark:border-neutral-800 transition-all duration-300 cursor-pointer overflow-hidden text-left"
    >
      {/* Top Visual Area */}
      <div
        className="relative w-full aspect-4/3 rounded-2xl overflow-hidden flex items-center justify-center p-3 select-none"
        style={{ backgroundColor: fallbackBg }}
      >
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md shadow-xs border border-white/60 dark:border-neutral-700/60">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[11px] font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
            {editorialLabel}
          </span>
        </div>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Content Area */}
      <div className="px-3 pt-5 pb-3 flex flex-col justify-between grow">
        <div>
          <div className="text-[12px] font-normal text-neutral-400 dark:text-neutral-500 mb-1.5 font-sans">
            {post.publishDate}
          </div>
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 dark:text-neutral-400 line-clamp-3 leading-relaxed">
            {post.subtitle || post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-2 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/60">
          <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            {post.readTime}
          </span>
          <div
            className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent group-hover:bg-neutral-900 dark:group-hover:bg-white text-neutral-800 dark:text-neutral-200 group-hover:text-white dark:group-hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105"
          >
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

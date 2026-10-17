import React from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { ArrowUpRight, Clock, Calendar, Sparkles } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onReadPost, featured = false }) => {
  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cybersecurity':
        return {
          gradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
          accent: 'text-emerald-600 dark:text-emerald-400',
          badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
        };
      case 'offensive security':
        return {
          gradient: 'from-rose-600/20 via-orange-500/10 to-transparent',
          accent: 'text-rose-600 dark:text-rose-400',
          badge: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20',
        };
      case 'penetration testing':
        return {
          gradient: 'from-indigo-600/20 via-violet-500/10 to-transparent',
          accent: 'text-indigo-600 dark:text-indigo-400',
          badge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20',
        };
      case 'research & policy':
        return {
          gradient: 'from-amber-600/20 via-yellow-500/10 to-transparent',
          accent: 'text-amber-600 dark:text-amber-400',
          badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
        };
      default:
        return {
          gradient: 'from-neutral-600/20 via-neutral-500/10 to-transparent',
          accent: 'text-neutral-700 dark:text-neutral-300',
          badge: 'bg-neutral-500/10 text-neutral-700 dark:text-neutral-300 border-neutral-500/20',
        };
    }
  };

  const styles = getCategoryStyles(post.category);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      onClick={() => onReadPost(post)}
      className={`group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#121622] border border-neutral-200/90 dark:border-neutral-800/80 shadow-xs hover:shadow-xl dark:hover:shadow-2xl dark:hover:border-neutral-700/80 transition-all duration-300 cursor-pointer overflow-hidden text-left ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div
        className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${styles.gradient} opacity-40 dark:opacity-30 pointer-events-none transition-opacity group-hover:opacity-70`}
      />
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-neutral-100 dark:bg-[#0D1018] border-b border-neutral-100 dark:border-neutral-800/60 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
        />
        <div className="relative z-10 w-full max-w-xs flex flex-col items-center justify-center text-center p-3">
          <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10 shadow-xs flex items-center justify-center mb-2.5 backdrop-blur-xs group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
            {post.category === 'Cybersecurity' ? (
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ) : post.category === 'Offensive Security' ? (
              <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            ) : post.category === 'Penetration Testing' ? (
              <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )}
          </div>
          <div className="font-mono text-[10px] tracking-wider uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900/80 dark:bg-neutral-800/90 text-white text-[10px] font-medium backdrop-blur-xs shadow-xs border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Featured</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2.5">
            <span className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.publishDate}</span>
            </span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300/90 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              AA
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-semibold text-neutral-900 dark:text-white truncate">
                {post.author.name.split(' ')[0]} {post.author.name.split(' ').slice(-1)[0]}
              </span>
              <span className="block text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                Security Researcher
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            <span className="hidden sm:inline text-xs">Read Article</span>
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300 shadow-xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

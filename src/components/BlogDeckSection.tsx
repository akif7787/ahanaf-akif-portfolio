import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Calendar, Sparkles, Layers } from 'lucide-react';

interface BlogDeckSectionProps {
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
}

export const BlogDeckSection: React.FC<BlogDeckSectionProps> = ({ posts, onReadPost }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!posts || posts.length === 0) return null;

  const total = posts.length;
  const currentPost = posts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const getCategoryTheme = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cybersecurity':
        return {
          pillBg: 'bg-emerald-500/15 dark:bg-emerald-500/20',
          pillText: 'text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
          gradientBg: 'from-emerald-950/80 via-[#0e1726] to-[#0b101b]',
          glow: 'from-emerald-500/20 to-teal-500/0',
          accent: 'text-emerald-400',
        };
      case 'offensive security':
        return {
          pillBg: 'bg-rose-500/15 dark:bg-rose-500/20',
          pillText: 'text-rose-700 dark:text-rose-300 border-rose-500/30',
          gradientBg: 'from-rose-950/80 via-[#18101e] to-[#0f0b18]',
          glow: 'from-rose-500/20 to-orange-500/0',
          accent: 'text-rose-400',
        };
      case 'penetration testing':
        return {
          pillBg: 'bg-indigo-500/15 dark:bg-indigo-500/20',
          pillText: 'text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
          gradientBg: 'from-indigo-950/80 via-[#121427] to-[#0a0d18]',
          glow: 'from-indigo-500/20 to-purple-500/0',
          accent: 'text-indigo-400',
        };
      case 'research & policy':
        return {
          pillBg: 'bg-amber-500/15 dark:bg-amber-500/20',
          pillText: 'text-amber-700 dark:text-amber-300 border-amber-500/30',
          gradientBg: 'from-amber-950/70 via-[#1a150e] to-[#0e0c08]',
          glow: 'from-amber-500/20 to-yellow-500/0',
          accent: 'text-amber-400',
        };
      default:
        return {
          pillBg: 'bg-cyan-500/15 dark:bg-cyan-500/20',
          pillText: 'text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
          gradientBg: 'from-cyan-950/70 via-[#0d1622] to-[#080d16]',
          glow: 'from-cyan-500/20 to-blue-500/0',
          accent: 'text-cyan-400',
        };
    }
  };

  const theme = getCategoryTheme(currentPost.category);

  return (
    <div className="relative w-full mb-16 select-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Digest · All News & Posts</span>
            </span>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              [{currentIndex + 1} / {total}]
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Curated Insights Deck
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Browse through the latest intelligence reports, exploit walkthroughs, and research papers stacked together.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-end shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous article"
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-[11px] font-mono text-neutral-600 dark:text-neutral-300">
            <span className="font-bold text-neutral-900 dark:text-white">{currentIndex + 1}</span>
            <span className="opacity-40">/</span>
            <span>{total}</span>
          </div>
          <button
            onClick={handleNext}
            aria-label="Next article"
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center shadow-xs cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[440px] sm:h-[400px] md:h-[370px]">
        {total > 2 && (
          <div
            className="absolute inset-x-8 sm:inset-x-12 top-6 bottom-0 rounded-3xl bg-neutral-200/70 dark:bg-neutral-800/50 border border-neutral-300/60 dark:border-neutral-700/40 shadow-xs pointer-events-none transform scale-[0.94] transition-all duration-300"
            style={{ opacity: 0.4 }}
          />
        )}
        {total > 1 && (
          <div
            className="absolute inset-x-4 sm:inset-x-6 top-3 bottom-0 rounded-3xl bg-neutral-100/90 dark:bg-neutral-850/80 border border-neutral-300/80 dark:border-neutral-700/60 shadow-md pointer-events-none transform scale-[0.97] transition-all duration-300"
            style={{ opacity: 0.7 }}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPost.id}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-xl dark:shadow-2xl border border-neutral-200/90 dark:border-neutral-700/80 bg-gradient-to-br ${
              'from-white via-neutral-50 to-neutral-100/80 dark:' + theme.gradientBg
            }`}
          >
            <div
              className={`absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br ${theme.glow} blur-3xl pointer-events-none opacity-60 dark:opacity-40`}
            />
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${theme.pillBg} ${theme.pillText}`}
                >
                  {currentPost.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentPost.readTime}</span>
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentPost.publishDate}</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-[11px] font-mono text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-white/10">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>Featured Dossier</span>
              </div>
            </div>

            <div className="relative z-10 my-auto py-3">
              <h4
                onClick={() => onReadPost(currentPost)}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2"
              >
                {currentPost.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {currentPost.subtitle || currentPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 mt-4">
                {currentPost.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-neutral-200/70 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-emerald-500/30 overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
                  <div className="w-full h-full flex items-center justify-center font-bold text-xs bg-emerald-600 text-white">
                    AA
                  </div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                    {currentPost.author.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                    {currentPost.author.role.split(' ')[0].trim()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onReadPost(currentPost)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all cursor-pointer shadow-md active:scale-95"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === currentIndex
                ? 'w-7 bg-emerald-500 dark:bg-emerald-400'
                : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

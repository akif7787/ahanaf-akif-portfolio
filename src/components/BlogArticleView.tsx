import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  Bookmark,
  Heart,
  ChevronRight,
  BookOpen,
  Terminal,
  Shield,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface BlogArticleViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenContact: () => void;
}

export const BlogArticleView: React.FC<BlogArticleViewProps> = ({
  post,
  onBack,
  onSelectPost,
  onOpenContact,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [claps, setClaps] = useState<number>(() => {
    const saved = localStorage.getItem(`ahanaf_blog_claps_${post.id}`);
    return saved ? parseInt(saved, 10) : post.clapsCount;
  });
  const [showClapAnimation, setShowClapAnimation] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const savedBookmark = localStorage.getItem(`ahanaf_blog_bookmark_${post.id}`);
    setIsBookmarked(savedBookmark === 'true');
    const savedClaps = localStorage.getItem(`ahanaf_blog_claps_${post.id}`);
    if (savedClaps) {
      setClaps(parseInt(savedClaps, 10));
    } else {
      setClaps(post.clapsCount);
    }
  }, [post.id, post.clapsCount]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = post.tableOfContents.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSectionId(item.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.tableOfContents]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#article/${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleToggleBookmark = () => {
    const next = !isBookmarked;
    setIsBookmarked(next);
    localStorage.setItem(`ahanaf_blog_bookmark_${post.id}`, String(next));
  };

  const handleClap = () => {
    const next = claps + 1;
    setClaps(next);
    setShowClapAnimation(true);
    setTimeout(() => setShowClapAnimation(false), 1000);
    localStorage.setItem(`ahanaf_blog_claps_${post.id}`, String(next));
  };

  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'larger':
        return 'text-xl sm:text-2xl leading-relaxed';
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 transition-colors pb-24 text-left">
      {/* STICKY TOP ARTICLE SUB-NAV */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-[#0B0E14]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 sm:px-8 lg:px-12 py-3 transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/60 transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-0.5 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg p-0.5 border border-neutral-200/60 dark:border-neutral-700/60 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                title="Normal text"
                className={`px-2 py-1 rounded font-medium ${
                  fontSize === 'normal'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-2xs'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                title="Larger text"
                className={`px-2 py-1 rounded font-semibold text-sm ${
                  fontSize === 'large'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-2xs'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                A+
              </button>
            </div>

            <button
              onClick={handleToggleBookmark}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark this article'}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                  : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleCopyLink}
              title="Copy share link"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <header className="w-full px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-mono">
          <button onClick={onBack} className="hover:underline">Home</button>
          <span>/</span>
          <button onClick={onBack} className="hover:underline">Articles</button>
          <span>/</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{post.category}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
          <span className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px] px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            {post.category}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span>{post.publishDate}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.2] mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 font-normal">
          {post.subtitle}
        </p>

        <div className="py-4 border-y border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
              AA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-neutral-900 dark:text-white">
                  {post.author.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Author
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {post.author.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.tryHackMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>TryHackMe</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY & TWO-COLUMN DESKTOP LAYOUT */}
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
        <main className="lg:col-span-8">
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mb-10 rounded-2xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-12">
            {post.contentSections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-3">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraphs && (
                  <div className={`space-y-4 text-neutral-700 dark:text-neutral-300 ${getFontSizeClass()}`}>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {section.quote && (
                  <blockquote className="my-8 pl-6 border-l-2 border-emerald-500 dark:border-emerald-400 bg-neutral-50/60 dark:bg-neutral-900/40 py-4 pr-4 rounded-r-xl">
                    <p className="text-base sm:text-lg italic font-medium text-neutral-900 dark:text-white leading-relaxed mb-2">
                      "{section.quote.text}"
                    </p>
                    {section.quote.author && (
                      <cite className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 not-italic">
                        — {section.quote.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                {section.codeBlock && (
                  <div className="my-8 rounded-2xl bg-[#0F131D] border border-neutral-800 overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#171D2D] border-b border-neutral-800 text-xs font-mono text-neutral-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{section.codeBlock.filename || section.codeBlock.language}</span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(section.codeBlock!.code, section.id)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800/80 hover:bg-neutral-700 text-[11px] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCodeId === section.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {section.callout && (
                  <div
                    className={`my-6 p-5 rounded-xl border ${
                      section.callout.type === 'warning'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                        : section.callout.type === 'tip'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                        : 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">{section.callout.text}</p>
                  </div>
                )}

                {section.statsGrid && (
                  <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.statsGrid.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200 dark:border-neutral-800 text-left"
                      >
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">
                          {stat.label}
                        </span>
                        <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 dark:text-white block">
                          {stat.value}
                        </span>
                        {stat.note && (
                          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block mt-1">
                            {stat.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.bulletPoints && (
                  <ul className="my-6 space-y-2.5">
                    {section.bulletPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleClap}
                className="relative group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-neutral-200 dark:border-neutral-700 hover:border-rose-300 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Heart
                  className={`w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform ${
                    claps > post.clapsCount ? 'fill-rose-500' : ''
                  }`}
                />
                <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white">
                  {claps}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Applauds
                </span>
                <AnimatePresence>
                  {showClapAnimation && (
                    <motion.span
                      initial={{ opacity: 1, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -28, scale: 1.2 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-rose-500 pointer-events-none"
                    >
                      +1
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={handleToggleBookmark}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all cursor-pointer text-xs font-semibold ${
                  isBookmarked
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                    : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>{isBookmarked ? 'Saved to Library' : 'Bookmark Post'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
              AA
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  Written by {PERSONAL_INFO.fullName}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {PERSONAL_INFO.heroHeadline}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold hover:border-emerald-500 transition-colors"
                >
                  Connect on LinkedIn
                </a>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <div
                onClick={() => onSelectPost(prevPost)}
                className="group p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121622] hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Article</span>
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {prevPost.title}
                </h4>
              </div>
            ) : <div />}

            {nextPost && (
              <div
                onClick={() => onSelectPost(nextPost)}
                className="group p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121622] hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between text-right"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center justify-end gap-1">
                  <span>Next Article</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {nextPost.title}
                </h4>
              </div>
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>Recommended Further Reading</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectPost(rel)}
                  className="group p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121622] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-1">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-20 space-y-6">
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <span>Table of Contents</span>
              </h4>
              <nav className="space-y-1">
                {post.tableOfContents.map((item) => {
                  const isActive = activeSectionId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const elem = document.getElementById(item.id);
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block py-1.5 px-2.5 rounded-lg text-xs transition-colors leading-tight ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold'
                          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60'
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500">Read Time</span>
                <span className="font-mono font-semibold text-neutral-900 dark:text-white">{post.readTime}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500">Published</span>
                <span className="font-semibold text-neutral-900 dark:text-white">{post.publishDate}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500">Community Claps</span>
                <span className="font-mono font-bold text-rose-500">{claps}</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1.5">Topic Tags</span>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 text-left">
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                Collaborate with Ahanaf
              </h4>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
                Looking for security architecture consultation, research collaboration, or offensive lab walkthroughs?
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer shadow-xs"
              >
                Send Direct Inquiry
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

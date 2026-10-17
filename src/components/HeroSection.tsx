import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  ArrowRight,
  ListFilter
} from 'lucide-react';
import { MakroHeroPortrait } from './MakroHeroPortrait';
import { MakroDashboard } from './MakroDashboard';
import { Magnetic } from './Magnetic';
import { HeroHeaderCapsule } from './HeroHeaderCapsule';
import { HeroBrandPill } from './HeroBrandPill';
import { HeroOption4Interactive } from './HeroOption4Interactive';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenCV?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenCV }) => {
  // 1, 2, 3, or 4 options (defaults to Option 4 as requested)
  const [heroOption, setHeroOptionState] = useState<1 | 2 | 3 | 4>(() => {
    const saved = localStorage.getItem('ahanaf_akif_hero_option');
    if (saved && (saved === '1' || saved === '2' || saved === '3' || saved === '4')) {
      return Number(saved) as 1 | 2 | 3 | 4;
    }
    return 4;
  });

  const setHeroOption = (opt: 1 | 2 | 3 | 4) => {
    setHeroOptionState(opt);
    localStorage.setItem('ahanaf_akif_hero_option', String(opt));
  };

  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem('ahanaf_akif_hero_chair_photo') ||
      localStorage.getItem('ahanaf_akif_portrait');
    if (saved) {
      setCustomPhoto(saved);
    }

    const handleStorageChange = () => {
      const updated =
        localStorage.getItem('ahanaf_akif_hero_chair_photo') ||
        localStorage.getItem('ahanaf_akif_portrait');
      setCustomPhoto(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handlePhotoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setCustomPhoto(base64);
      localStorage.setItem('ahanaf_akif_hero_chair_photo', base64);
      localStorage.setItem('ahanaf_akif_portrait', base64);
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('ahanaf_akif_hero_chair_photo');
    localStorage.removeItem('ahanaf_akif_portrait');
  };

  // ---------------------------------------------------------------------------
  // SUBTLE PARALLAX & AMBIENT FLOATING MOTION
  // ---------------------------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 28, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background Ambient Parallax
  const bgGlow1X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const bgGlow1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const bgGlow2X = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const bgGlow2Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const gridLineX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const gridLineY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Portrait Inverse Parallax
  const portraitParallaxX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const portraitParallaxY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full pt-2 sm:pt-3 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden flex flex-col select-none bg-white dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND: CIKON CIKON DAG (SUBTLE FINE LINES) WITH AMBIENT BLUR & PARALLAX */}
      {/* ========================================================================= */}
      {heroOption !== 4 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Soft Ambient Radial Glow 1 */}
          <motion.div
            style={{ x: bgGlow1X, y: bgGlow1Y }}
            animate={{
              scale: [1, 1.08, 0.98, 1],
              opacity: [0.8, 1, 0.85, 0.8],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-sky-300/25 via-blue-200/20 to-transparent dark:from-sky-900/15 dark:via-blue-900/10 rounded-full blur-[100px] will-change-transform"
          />

          {/* Soft Ambient Radial Glow 2 */}
          <motion.div
            style={{ x: bgGlow2X, y: bgGlow2Y }}
            animate={{
              scale: [1, 0.96, 1.07, 1],
              opacity: [0.75, 0.95, 0.8, 0.75],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/3 left-1/6 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-300/20 via-teal-200/15 to-transparent dark:from-emerald-900/15 dark:via-teal-900/10 rounded-full blur-[90px] will-change-transform"
          />

          {/* Fine Architectural SVG Grid Lines with Radial Fade & Subtle Drift */}
          <motion.div
            style={{ x: gridLineX, y: gridLineY }}
            className="absolute inset-0 w-full h-full"
          >
            <svg
              className="w-full h-full opacity-40 dark:opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="fine-grid-pattern" width="44" height="44" patternUnits="userSpaceOnUse">
                  <path
                    d="M 44 0 L 0 0 0 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    className="text-neutral-400/50 dark:text-neutral-700/60"
                  />
                </pattern>
                <radialGradient id="grid-fade" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="60%" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <mask id="grid-mask">
                  <rect width="100%" height="100%" fill="url(#grid-fade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#fine-grid-pattern)" mask="url(#grid-mask)" />
            </svg>
          </motion.div>

          {/* Fine Glowing Trace Lines with Soft Laser Blur & Gentle Floating Shimmer */}
          <motion.div
            style={{ x: gridLineX, y: gridLineY }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ opacity: [0.55, 0.9, 0.55], x: [0, 8, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/5 left-1/4 w-[480px] h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 dark:via-sky-400/40 to-transparent blur-[1px] rotate-[-22deg]"
            />
            <motion.div
              animate={{ opacity: [0.45, 0.85, 0.45], x: [0, -10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 right-1/5 w-[520px] h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 dark:via-emerald-400/35 to-transparent blur-[1.5px] rotate-[16deg]"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], x: [0, 7, 0] }}
              transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-2/3 left-1/3 w-[440px] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/45 dark:via-indigo-400/30 to-transparent blur-[2px] rotate-[-10deg]"
            />
            {/* Delicate Vertical Cyber Pinstripes with Subtle Blur */}
            <div className="absolute top-0 bottom-0 left-[18%] w-[1px] bg-gradient-to-b from-transparent via-neutral-300/40 dark:via-neutral-800/60 to-transparent blur-[0.5px]" />
            <div className="absolute top-0 bottom-0 right-[22%] w-[1px] bg-gradient-to-b from-transparent via-neutral-300/40 dark:via-neutral-800/60 to-transparent blur-[0.5px]" />
            <div className="absolute top-0 bottom-0 right-[42%] w-[1px] bg-gradient-to-b from-transparent via-neutral-300/30 dark:via-neutral-800/40 to-transparent blur-[0.5px]" />
          </motion.div>
        </div>
      )}

      {/* --- MAIN HERO CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-12 sm:pt-14 lg:pt-14">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* OPTION 1: EDITORIAL SPLIT WITH INLINE PILL LOCKUP & PORTRAIT              */}
          {/* ========================================================================= */}
          {heroOption === 1 && (
            <motion.div
              key="option-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
            >
              {/* Left Content Column */}
              <div className="lg:col-span-6 xl:col-span-6 text-left space-y-3.5 sm:space-y-4">
                {/* --- HEADER OPTIONS SWITCHER + CATEGORY BADGE GROUPED CLOSE TOGETHER --- */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#141824] border border-neutral-200/90 dark:border-neutral-800 text-[11px] font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs">
                    <ListFilter className="w-3.5 h-3.5 text-neutral-500" />
                    <span>CYBERSECURITY · SOFTWARE ENGINEERING</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-[#151923] border border-neutral-200/90 dark:border-neutral-800 shadow-2xs backdrop-blur-md">
                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Hero options:
                    </span>
                    <div className="flex items-center gap-1">
                      {([1, 2, 3, 4] as const).map((num) => {
                        const isActive = heroOption === num;
                        return (
                          <button
                            key={num}
                            onClick={() => setHeroOption(num)}
                            className={`w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                              isActive
                                ? 'bg-[#D2F824] text-black shadow-xs scale-105'
                                : 'bg-neutral-800 text-neutral-400 hover:text-white dark:bg-neutral-800 dark:text-neutral-400'
                            }`}
                            title={`Switch to Hero Option ${num}`}
                          >
                            {num}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* --- HEADLINE --- */}
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.1rem] leading-[1.08] sm:leading-[1.08] tracking-tight text-neutral-950 dark:text-white">
                    <span className="font-extrabold text-neutral-950 dark:text-white">
                      Building
                    </span>
                    <HeroHeaderCapsule />
                    <span className="font-normal text-neutral-400 dark:text-neutral-500">
                      Security
                    </span>
                    <br />
                    <span className="font-normal text-neutral-400 dark:text-neutral-500">
                      for
                    </span>
                    <HeroBrandPill />
                    <span className="font-extrabold text-neutral-950 dark:text-white">
                      Solid Systems
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Pursuing MSc in Software Engineering with a major in Cyber Security. Passionate about offensive penetration testing, perimeter hardening, and building thoughtful, resilient digital experiences.
                </p>

                {/* CTA Button */}
                <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
                  <Magnetic strength={0.3}>
                    <a
                      href="#projects"
                      data-cursor="explore"
                      className="inline-flex items-center pl-1.5 pr-6 py-1.5 rounded-full bg-[#18191E] dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-lg group cursor-pointer active:scale-95"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#D2F824] dark:bg-[#D2F824] text-black flex items-center justify-center font-bold mr-3 shadow-sm group-hover:scale-105 transition-transform">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <span>Explore My Projects</span>
                    </a>
                  </Magnetic>
                </div>

                {/* Secondary Fast Action Buttons */}
                <div className="pt-0.5 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <button
                    onClick={onOpenContact}
                    className="hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Get in touch
                  </button>
                  <span>·</span>
                  <a
                    href={PERSONAL_INFO.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right Portrait */}
              <motion.div
                style={{ x: portraitParallaxX, y: portraitParallaxY }}
                className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center will-change-transform"
              >
                <MakroHeroPortrait
                  customPhoto={customPhoto}
                  onPhotoUpload={handlePhotoUpload}
                  onResetPhoto={handleResetPhoto}
                />
              </motion.div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* OPTION 2: CENTERED EDITORIAL MINIMAL                                      */}
          {/* ========================================================================= */}
          {heroOption === 2 && (
            <motion.div
              key="option-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-3.5 sm:space-y-4 pt-0"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#141824] border border-neutral-200/90 dark:border-neutral-800 text-[11px] font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs">
                  <ListFilter className="w-3.5 h-3.5 text-neutral-500" />
                  <span>CYBERSECURITY & ENGINEERING</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-[#151923] border border-neutral-200/90 dark:border-neutral-800 shadow-2xs backdrop-blur-md">
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                    Hero options:
                  </span>
                  <div className="flex items-center gap-1">
                    {([1, 2, 3, 4] as const).map((num) => (
                      <button
                        key={num}
                        onClick={() => setHeroOption(num)}
                        className={`w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                          heroOption === num
                            ? 'bg-[#D2F824] text-black shadow-xs scale-105'
                            : 'bg-neutral-800 text-neutral-400 hover:text-white dark:bg-neutral-800 dark:text-neutral-400'
                        }`}
                        title={`Switch to Hero Option ${num}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
                <span>Building</span>
                <HeroHeaderCapsule />
                <span className="font-normal text-neutral-400 dark:text-neutral-500">
                  Security
                </span>
                <br />
                <span className="font-normal text-neutral-400 dark:text-neutral-500">
                  for
                </span>
                <HeroBrandPill />
                <span>Solid Systems</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-xl mx-auto">
                Stay on top of every vulnerability, endpoint audit, and threat mitigation in one cohesive view.
              </p>

              <div className="pt-1 flex flex-col items-center justify-center gap-3.5 sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center pl-1.5 pr-6 py-1.5 rounded-full bg-[#18191E] dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-lg group cursor-pointer active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D2F824] text-black flex items-center justify-center font-bold mr-3 shadow-sm group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <span>Explore My Projects</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 font-mono">
                    Top 5% TryHackMe · 45+ Cleared Labs
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* OPTION 3: 3D COMMAND DASHBOARD SPLIT                                      */}
          {/* ========================================================================= */}
          {heroOption === 3 && (
            <motion.div
              key="option-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
            >
              <div className="lg:col-span-5 text-left space-y-3.5 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#141824] border border-neutral-200/90 dark:border-neutral-800 text-[11px] font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs">
                    <ListFilter className="w-3.5 h-3.5 text-neutral-500" />
                    <span>COMMAND CONSOLE</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-[#151923] border border-neutral-200/90 dark:border-neutral-800 shadow-2xs backdrop-blur-md">
                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Hero options:
                    </span>
                    <div className="flex items-center gap-1">
                      {([1, 2, 3, 4] as const).map((num) => (
                        <button
                          key={num}
                          onClick={() => setHeroOption(num)}
                          className={`w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                            heroOption === num
                              ? 'bg-[#D2F824] text-black shadow-xs scale-105'
                              : 'bg-neutral-800 text-neutral-400 hover:text-white dark:bg-neutral-800 dark:text-neutral-400'
                          }`}
                          title={`Switch to Hero Option ${num}`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
                    <span>Building</span>
                    <br />
                    <span className="font-normal text-neutral-400 dark:text-neutral-500">
                      for
                    </span>{' '}
                    <HeroBrandPill />{' '}
                    <span>Solid Systems.</span>
                  </h1>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-md">
                  Live metrics, offensive CVE exploitation exercises, and Linux kernel forensics in real-time view.
                </p>

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center pl-1.5 pr-6 py-1.5 rounded-full bg-[#18191E] dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-lg group cursor-pointer active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D2F824] text-black flex items-center justify-center font-bold mr-3 shadow-sm group-hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span>Explore My Projects</span>
                  </a>
                </div>
              </div>

              {/* Right Full Dashboard Area */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                <MakroDashboard />
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* OPTION 4: MINIMAL EDITORIAL WITH GIANT HEADER & 3D INTERACTIVE PORTRAIT   */}
          {/* ========================================================================= */}
          {heroOption === 4 && (
            <motion.div
              key="option-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <HeroOption4Interactive
                heroOption={heroOption}
                setHeroOption={setHeroOption}
                customPhoto={customPhoto}
                onPhotoUpload={handlePhotoUpload}
                onResetPhoto={handleResetPhoto}
                onOpenContact={onOpenContact}
                onOpenCV={onOpenCV}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- BOTTOM QUICK STATS STRIP --- */}
      <div className="max-w-7xl mx-auto w-full pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            OFFENSIVE SECURITY & LAB ARSENAL
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Top 5% TryHackMe</span>
          <span>100% Security Verified</span>
          <span>45+ Cleared Rooms</span>
        </div>
      </div>
    </section>
  );
};

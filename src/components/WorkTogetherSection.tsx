import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import { Repeat, Mail, ArrowUpRight, ShieldCheck, UserCheck } from 'lucide-react';
import { WorkTogetherBlurredEmojis } from './BlurredBackgroundEmojis';
import { Magnetic } from './Magnetic';

interface WorkTogetherSectionProps {
  onOpenContact: () => void;
}

export const WorkTogetherSection: React.FC<WorkTogetherSectionProps> = ({ onOpenContact }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem('ahanaf_akif_portrait') ||
      localStorage.getItem('ahanaf_akif_hero_chair_photo');
    if (saved) setCustomPhoto(saved);

    const handleStorageChange = () => {
      const updated =
        localStorage.getItem('ahanaf_akif_portrait') ||
        localStorage.getItem('ahanaf_akif_hero_chair_photo');
      setCustomPhoto(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative overflow-hidden bg-[#FFFFFF]/95 dark:bg-[#090C12]/95 backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 dark:bg-emerald-400/5 blur-3xl rounded-full pointer-events-none" />
      <WorkTogetherBlurredEmojis />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-start text-left relative z-10"
      >
        <div className="mb-4 sm:mb-6">
          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <BrandLogo size={16} className="shrink-0" />
            <span>{PERSONAL_INFO.linkedInHandle}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </a>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 sm:mb-8 text-left">
          <span className="overflow-hidden inline-block py-1">
            <motion.span
              initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
              whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Let's Work
            </motion.span>
          </span>{' '}
          <span className="overflow-hidden inline-block py-1">
            <motion.span
              initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
              whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent"
            >
              Together
            </motion.span>
          </span>
        </h2>

        <div className="relative flex items-center justify-start gap-3 sm:gap-5 mb-8 sm:mb-10">
          {/* Akif's Portrait Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-[32px] sm:rounded-[40px] bg-neutral-950 p-2 shadow-2xl border-2 border-neutral-800/80 transform -rotate-3 transition-transform overflow-hidden flex items-end justify-center group"
          >
            {customPhoto ? (
              <img
                src={customPhoto}
                alt={PERSONAL_INFO.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-[28px] sm:rounded-[36px]"
              />
            ) : (
              <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-neutral-900 to-black rounded-[28px] sm:rounded-[36px] overflow-hidden">
                <svg viewBox="0 0 200 220" className="w-full h-full object-cover">
                  <path d="M15 220 C35 155 75 140 100 140 C125 140 165 155 185 220 Z" fill="#18191C" />
                  <path d="M70 140 C80 155 120 155 130 140 Z" fill="#0E0F12" />
                  <path d="M84 100 L84 135 Q100 140 116 135 L116 100 Z" fill="#D49E7C" />
                  <ellipse cx="100" cy="80" rx="34" ry="40" fill="#E6B595" />
                  <path d="M66 70 C64 35 78 20 100 20 C122 20 136 35 134 70 C132 50 120 38 100 38 C80 38 68 50 66 70 Z" fill="#1A1512" />
                  <path d="M78 55 Q90 64 100 56 M95 54 Q108 62 120 55" stroke="#120E0B" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="88" cy="78" rx="2.8" ry="2" fill="#1C140F" />
                  <ellipse cx="112" cy="78" rx="2.8" ry="2" fill="#1C140F" />
                  <circle cx="89" cy="77" r="0.7" fill="#FFFFFF" />
                  <circle cx="113" cy="77" r="0.7" fill="#FFFFFF" />
                  <path d="M92 98 Q100 104 108 98" stroke="#94533C" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            )}
            <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-neutral-700 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Akif</span>
            </div>
          </motion.div>

          <div className="relative z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-800 dark:text-neutral-100">
            <Repeat className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* Collaborator / Team */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-900 p-2 shadow-2xl border-2 border-white/60 dark:border-neutral-700/80 transform rotate-3 transition-transform overflow-hidden flex items-end justify-center group"
          >
            <div className="w-full h-full flex flex-col items-center justify-end rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-neutral-100/90 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden pb-1">
              <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-neutral-600/70 dark:bg-neutral-400/40 mb-2" />
              <div className="w-28 sm:w-36 h-14 sm:h-18 rounded-t-full bg-neutral-800/80 dark:bg-neutral-300/40" />
            </div>
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-[10px] font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-blue-500" />
              <span>You / Team</span>
            </div>
          </motion.div>
        </div>

        <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg mb-8">
          Ready to architect secure systems, conduct penetration testing, or collaborate on Red Team research? Just reach out!
        </p>

        <div className="flex flex-wrap items-center justify-start gap-3.5">
          <Magnetic strength={0.3}>
            <button
              onClick={onOpenContact}
              data-cursor="explore"
              className="px-7 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs sm:text-sm shadow-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Send a Message</span>
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="explore"
              className="px-7 py-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-xs sm:text-sm shadow-sm hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};

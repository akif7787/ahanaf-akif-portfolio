import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import {
  Upload,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [promptMessage, setPromptMessage] = useState('');
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);
  const [, setActiveSticker] = useState<string | null>(null);

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenContact();
  };

  const triggerStickerClick = (id: string) => {
    setActiveSticker(id);
    setTimeout(() => setActiveSticker(null), 800);
  };

  return (
    <footer className="w-full mt-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-[#F4F5F7]/95 dark:bg-[#07090E]/95 backdrop-blur-md text-neutral-900 dark:text-neutral-100 transition-colors relative overflow-hidden select-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-amber-500/5 via-emerald-500/3 to-transparent blur-3xl pointer-events-none" />

      {/* UPPER SECTION */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-24 pb-14 relative z-10 max-w-5xl mx-auto text-center">
        {/* Cultural Architectural Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative group cursor-pointer" onClick={() => triggerStickerClick('dome')}>
            <svg
              viewBox="0 0 160 85"
              className="w-28 sm:w-36 h-auto drop-shadow-md transition-transform group-hover:scale-105 duration-300"
            >
              <defs>
                <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="50%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0F766E" />
                </linearGradient>
                <linearGradient id="roofTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EA580C" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>
              </defs>
              <path d="M80 4 L82 14 L78 14 Z" fill="#FBBF24" />
              <circle cx="80" cy="14" r="3" fill="#F59E0B" />
              <path
                d="M80 16 C105 20 135 24 150 42 C125 38 100 37 80 37 C60 37 35 38 10 42 C25 24 55 20 80 16 Z"
                fill="url(#domeGrad)"
                stroke="#042F2E"
                strokeWidth="1.5"
              />
              <path d="M80 16 L80 37 M95 18 L98 38 M112 21 L120 40 M65 18 L62 38 M48 21 L40 40" stroke="#CCFBF1" strokeWidth="1" opacity="0.6" />
              <path
                d="M8 41 C35 36 65 35 80 35 C95 35 125 36 152 41 C158 40 156 46 150 48 C125 43 95 41 80 41 C65 41 35 43 10 48 C4 46 2 40 8 41 Z"
                fill="url(#roofTrim)"
              />
              <rect x="25" y="47" width="110" height="20" rx="3" fill="#99F6E4" stroke="#0F766E" strokeWidth="1.5" />
              <path d="M35 67 L35 55 Q42 50 50 55 L50 67 Z" fill="#134E4A" />
              <path d="M60 67 L60 53 Q70 48 80 53 L80 67 Z" fill="#042F2E" />
              <path d="M70 67 L70 53 Q80 48 90 53 L90 67 Z" fill="#042F2E" />
              <path d="M100 67 L100 55 Q108 50 115 55 L115 67 Z" fill="#134E4A" />
              <rect x="20" y="67" width="120" height="6" rx="2" fill="#FBBF24" />
            </svg>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2"
        >
          Let's make your systems secure
        </motion.h2>

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
          Need an offensive security assessment, penetration test, or research collaboration? Drop your project thoughts below.
        </p>

        {/* PROMPT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto rounded-3xl bg-white dark:bg-[#121622] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 sm:p-6 text-left transition-all focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:border-teal-500"
        >
          <form onSubmit={handleSendPrompt} className="space-y-4">
            <textarea
              rows={3}
              value={promptMessage}
              onChange={(e) => setPromptMessage(e.target.value)}
              placeholder="I'm planning a security audit for our web application in October. Need vulnerability scanning, privilege escalation testing, and want clear mitigation reports..."
              className="w-full text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 bg-transparent resize-none focus:outline-hidden leading-relaxed"
            />
            <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
                title="Attach specification or file"
              >
                <Upload className="w-4 h-4" />
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2DD4BF] via-[#14B8A6] to-[#0D9488] hover:from-[#34D399] hover:to-[#0F766E] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Plan consultation</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          <div className="md:col-span-5 space-y-3">
            <h3
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white lowercase"
            >
              ahanaf
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              Offensive security, vulnerability research & resilient systems. Proudly based in Dhaka, Bangladesh.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for 2026 security roles</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-xs">
            <div className="space-y-3">
              <span className="font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold text-[11px] block">
                EXPLORE
              </span>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <a href="#journey" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Career Journey
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Selected Projects
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span>Articles & Field Notes</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono">
                      Blog
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#monthly-log" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Monthly Chronicle
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Education Train
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold text-[11px] block">
                CREDENTIALS
              </span>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <a href="#certifications" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Verified Badges
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.tryHackMeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>TryHackMe Top 5%</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn Network</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Direct Email
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold text-[11px] block">
                ETHICS & TRUST
              </span>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <span className="text-neutral-500 dark:text-neutral-400">Responsible Disclosure</span>
                </li>
                <li>
                  <span className="text-neutral-500 dark:text-neutral-400">OWASP Top 10 Standards</span>
                </li>
                <li>
                  <span className="text-neutral-500 dark:text-neutral-400">Human Rights (CHTAP)</span>
                </li>
                <li>
                  <span className="text-neutral-500 dark:text-neutral-400">Privacy & Data Ethics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: BANGLADESH STICKERS */}
      <div className="w-full relative pt-12 pb-6 overflow-hidden">
        <div className="text-center mb-6 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bangladesh Heritage & Scenario Stickers · Hover to Explore</span>
          </div>
        </div>

        <div className="h-7 text-center mb-2">
          {hoveredSticker && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-semibold shadow-md"
            >
              📍 {hoveredSticker}
            </motion.span>
          )}
        </div>

        <div className="relative w-full max-w-[1500px] mx-auto h-[260px] sm:h-[300px] flex items-end justify-center px-4 overflow-x-auto no-scrollbar">
          <div className="relative w-full min-w-[950px] sm:min-w-[1200px] h-[250px] sm:h-[280px]">
            {/* STICKER 1: JATIYO SRITI SOUDHO */}
            <motion.div
              whileHover={{ scale: 1.12, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Jatiyo Sriti Soudho · Savar, Dhaka")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('sriti_soudho')}
              className="absolute left-[2%] bottom-3 z-20 cursor-pointer transform -rotate-3 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 140 180" className="w-28 sm:w-36 h-36 sm:h-46 rounded-2xl">
                  <defs>
                    <linearGradient id="savarSky" x1="0%" y1="0%" x2="0%" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="70%" stopColor="#BAE6FD" />
                      <stop offset="100%" stopColor="#FEF08A" />
                    </linearGradient>
                  </defs>
                  <rect width="140" height="180" rx="16" fill="url(#savarSky)" />
                  <circle cx="70" cy="50" r="22" fill="#F59E0B" opacity="0.85" />
                  <polygon points="70,18 20,165 35,165" fill="#94A3B8" />
                  <polygon points="70,18 120,165 105,165" fill="#CBD5E1" />
                  <polygon points="70,18 36,165 52,165" fill="#64748B" />
                  <polygon points="70,18 104,165 88,165" fill="#E2E8F0" />
                  <polygon points="70,18 53,165 70,165" fill="#475569" />
                  <polygon points="70,18 87,165 70,165" fill="#F8FAFC" />
                  <line x1="70" y1="18" x2="70" y2="165" stroke="#334155" strokeWidth="1.5" />
                  <rect x="0" y="150" width="140" height="30" fill="#0284C7" opacity="0.8" />
                  <path d="M0 160 Q70 155 140 160 L140 180 L0 180 Z" fill="#15803D" />
                  <circle cx="25" cy="168" r="2.5" fill="#EF4444" />
                  <circle cx="32" cy="172" r="2" fill="#EF4444" />
                  <circle cx="115" cy="169" r="2.5" fill="#EF4444" />
                  <circle cx="122" cy="172" r="2" fill="#EF4444" />
                </svg>
              </div>
            </motion.div>

            {/* STICKER 2: DHAKA RICKSHAW ART */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Colorful Dhaka Rickshaw Art")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('rickshaw')}
              className="absolute left-[13%] bottom-1 z-30 cursor-pointer transform rotate-2 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 150 150" className="w-32 sm:w-40 h-32 sm:h-40 rounded-2xl bg-gradient-to-tr from-[#FEF08A] to-[#FED7AA]">
                  <path
                    d="M30 75 Q45 25 90 28 Q115 32 118 75 Z"
                    fill="#EF4444"
                    stroke="#B91C1C"
                    strokeWidth="2"
                  />
                  <path d="M42 65 Q58 35 90 35" stroke="#FDE047" strokeWidth="4" fill="none" />
                  <path d="M52 68 Q68 45 92 45" stroke="#38BDF8" strokeWidth="3" fill="none" />
                  <path d="M60 70 Q75 55 94 55" stroke="#22C55E" strokeWidth="3" fill="none" />
                  <rect x="75" y="70" width="45" height="18" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
                  <path d="M75 88 L35 95 L25 80 L35 80 L45 88 Z" fill="#F59E0B" />
                  <line x1="35" y1="80" x2="25" y2="120" stroke="#475569" strokeWidth="3" />
                  <circle cx="45" cy="115" r="5" fill="#334155" />
                  <circle cx="25" cy="122" r="18" fill="none" stroke="#0F172A" strokeWidth="4" />
                  <circle cx="25" cy="122" r="14" fill="#E2E8F0" />
                  <circle cx="25" cy="122" r="3" fill="#EF4444" />
                  <circle cx="105" cy="120" r="22" fill="none" stroke="#0F172A" strokeWidth="5" />
                  <circle cx="105" cy="120" r="17" fill="#FDE047" stroke="#EA580C" strokeWidth="1.5" />
                  <circle cx="105" cy="120" r="4" fill="#15803D" />
                  <line x1="105" y1="100" x2="105" y2="140" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="85" y1="120" x2="125" y2="120" stroke="#64748B" strokeWidth="1.5" />
                  <path d="M35 78 L20 75" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="20" cy="74" r="3" fill="#FACC15" />
                  <circle cx="120" cy="85" r="6" fill="#F43F5E" />
                  <circle cx="120" cy="85" r="2.5" fill="#FEF08A" />
                </svg>
              </div>
            </motion.div>

            {/* STICKER 3: AHSAN MANZIL */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Ahsan Manzil (Pink Palace) · Old Dhaka")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('ahsan_manzil')}
              className="absolute left-[27%] bottom-4 z-20 cursor-pointer transform -rotate-1 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 170 150" className="w-36 sm:w-44 h-32 sm:h-40 rounded-2xl bg-gradient-to-b from-[#BAE6FD] via-[#E0F2FE] to-[#FCE7F3]">
                  <path d="M30 25 Q35 22 40 25 Q45 22 50 25" stroke="#475569" strokeWidth="1.2" fill="none" />
                  <path d="M120 30 Q124 28 128 30 Q132 28 136 30" stroke="#475569" strokeWidth="1.2" fill="none" />
                  <path
                    d="M85 30 C95 30 102 38 102 52 L68 52 C68 38 75 30 85 30 Z"
                    fill="#F472B6"
                    stroke="#DB2777"
                    strokeWidth="1.5"
                  />
                  <line x1="85" y1="20" x2="85" y2="30" stroke="#BE185D" strokeWidth="2" />
                  <circle cx="85" cy="20" r="2" fill="#FACC15" />
                  <rect x="66" y="52" width="38" height="14" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
                  <rect x="20" y="66" width="130" height="50" rx="3" fill="#F472B6" stroke="#BE185D" strokeWidth="1.5" />
                  <rect x="18" y="63" width="134" height="4" fill="#FCE7F3" />
                  <path d="M30 75 Q36 70 42 75 L42 84 L30 84 Z" fill="#831843" />
                  <path d="M50 75 Q56 70 62 75 L62 84 L50 84 Z" fill="#831843" />
                  <path d="M78 72 Q85 66 92 72 L92 84 L78 84 Z" fill="#831843" />
                  <path d="M108 75 Q114 70 120 75 L120 84 L108 84 Z" fill="#831843" />
                  <path d="M128 75 Q134 70 140 75 L140 84 L128 84 Z" fill="#831843" />
                  <polygon points="70,116 100,116 112,145 58,145" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1" />
                  <line x1="68" y1="122" x2="102" y2="122" stroke="#DB2777" strokeWidth="1" />
                  <line x1="65" y1="129" x2="105" y2="129" stroke="#DB2777" strokeWidth="1" />
                  <line x1="62" y1="136" x2="108" y2="136" stroke="#DB2777" strokeWidth="1" />
                  <rect x="0" y="142" width="170" height="15" fill="#16A34A" />
                </svg>
              </div>
            </motion.div>

            {/* STICKER 4: SUNDARBANS & TIGER */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Royal Bengal Tiger & Sundarbans")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('tiger')}
              className="absolute left-[40%] bottom-1 z-30 cursor-pointer transform rotate-3 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 160 160" className="w-36 sm:w-42 h-36 sm:h-42 rounded-2xl bg-gradient-to-b from-[#14532D] via-[#166534] to-[#15803D]">
                  <circle cx="80" cy="45" r="25" fill="#FEF08A" opacity="0.3" />
                  <path d="M0 40 Q40 10 80 30 Q120 15 160 35 L160 80 L0 80 Z" fill="#052E16" opacity="0.8" />
                  <path d="M20 70 Q30 110 35 140 M45 75 Q40 110 50 140 M120 70 Q110 110 105 140 M140 75 Q145 110 135 140" stroke="#78350F" strokeWidth="3" fill="none" opacity="0.7" />
                  <path d="M0 130 Q80 120 160 130 L160 160 L0 160 Z" fill="#0284C7" />
                  <g transform="translate(45, 60)">
                    <circle cx="15" cy="18" r="10" fill="#EA580C" />
                    <circle cx="15" cy="18" r="6" fill="#FEF3C7" />
                    <circle cx="55" cy="18" r="10" fill="#EA580C" />
                    <circle cx="55" cy="18" r="6" fill="#FEF3C7" />
                    <path
                      d="M10 35 C10 18 60 18 60 35 C68 45 65 65 35 68 C5 65 2 45 10 35 Z"
                      fill="#F97316"
                    />
                    <ellipse cx="25" cy="55" rx="10" ry="7" fill="#FFFBEB" />
                    <ellipse cx="45" cy="55" rx="10" ry="7" fill="#FFFBEB" />
                    <ellipse cx="23" cy="38" rx="4.5" ry="3" fill="#FBBF24" />
                    <ellipse cx="23" cy="38" rx="2" ry="3" fill="#0F172A" />
                    <ellipse cx="47" cy="38" rx="4.5" ry="3" fill="#FBBF24" />
                    <ellipse cx="47" cy="38" rx="2" ry="3" fill="#0F172A" />
                    <path d="M35 22 L35 34 M28 25 L35 30 L42 25" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 38 L20 40 M11 48 L20 47 M58 38 L50 40 M59 48 L50 47" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="35,50 31,45 39,45" fill="#F43F5E" />
                    <path d="M35 50 L35 56 Q30 60 25 56 M35 56 Q40 60 45 56" stroke="#0F172A" strokeWidth="1.5" fill="none" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* STICKER 5: RIVERINE BENGAL BOAT */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Riverine Bengal Country Boat (Nouka)")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('nouka')}
              className="absolute left-[54%] bottom-4 z-20 cursor-pointer transform -rotate-2 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 160 145" className="w-36 sm:w-44 h-32 sm:h-38 rounded-2xl bg-gradient-to-b from-[#FDBA74] via-[#FBCFE8] to-[#93C5FD]">
                  <circle cx="80" cy="55" r="28" fill="#F59E0B" opacity="0.9" />
                  <path d="M25 35 Q30 32 35 35 Q40 32 45 35" stroke="#78350F" strokeWidth="1.5" fill="none" />
                  <path d="M115 40 Q120 37 125 40 Q130 37 135 40" stroke="#78350F" strokeWidth="1.5" fill="none" />
                  <path d="M0 95 Q40 90 80 95 T160 95 L160 145 L0 145 Z" fill="#0284C7" />
                  <path d="M0 108 Q40 104 80 108 T160 108" stroke="#38BDF8" strokeWidth="2" fill="none" />
                  <path
                    d="M15 95 Q35 120 80 120 Q125 120 145 95 Q100 104 80 104 Q40 104 15 95 Z"
                    fill="#451A03"
                    stroke="#1C1917"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 100 Q80 65 110 100 Z"
                    fill="#D97706"
                    stroke="#78350F"
                    strokeWidth="1.5"
                  />
                  <path d="M60 100 Q80 75 100 100" stroke="#FEF3C7" strokeWidth="1.5" fill="none" />
                  <path d="M70 100 Q80 82 90 100" stroke="#FEF3C7" strokeWidth="1.5" fill="none" />
                  <circle cx="120" cy="85" r="4.5" fill="#78350F" />
                  <line x1="120" y1="89" x2="118" y2="105" stroke="#78350F" strokeWidth="2.5" />
                  <line x1="116" y1="95" x2="135" y2="125" stroke="#451A03" strokeWidth="2" />
                  <polygon points="133,122 138,128 135,130 130,124" fill="#78350F" />
                </svg>
              </div>
            </motion.div>

            {/* STICKER 6: SREEMANGAL TEA ESTATES */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Sreemangal Tea Estates · Sylhet")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('tea')}
              className="absolute left-[66%] bottom-1 z-30 cursor-pointer transform rotate-1 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 150 150" className="w-34 sm:w-40 h-32 sm:h-38 rounded-2xl bg-gradient-to-b from-[#BAE6FD] via-[#FEF08A] to-[#86EFAC]">
                  <path d="M0 60 Q40 40 80 55 Q120 40 150 55 L150 150 L0 150 Z" fill="#15803D" />
                  <path d="M0 75 Q45 60 95 80 Q130 65 150 78 L150 150 L0 150 Z" fill="#16A34A" />
                  <path d="M0 95 Q60 80 110 100 Q135 90 150 96 L150 150 L0 150 Z" fill="#22C55E" />
                  <path d="M0 115 Q30 105 70 118 T150 115 L150 150 L0 150 Z" fill="#4ADE80" />
                  <line x1="115" y1="50" x2="115" y2="105" stroke="#78350F" strokeWidth="2.5" />
                  <ellipse cx="115" cy="45" rx="18" ry="12" fill="#166534" />
                  <g transform="translate(30, 95)">
                    <circle cx="20" cy="20" r="16" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
                    <path d="M20 28 L20 14" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 20 Q12 15 15 10 Q20 14 20 20 Z" fill="#22C55E" />
                    <path d="M20 18 Q28 13 25 8 Q20 12 20 18 Z" fill="#16A34A" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* STICKER 7: SHAHEED MINAR */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Central Shaheed Minar · Dhaka")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('minar')}
              className="absolute left-[78%] bottom-4 z-20 cursor-pointer transform -rotate-3 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 150 160" className="w-32 sm:w-38 h-36 sm:h-44 rounded-2xl bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
                  <circle cx="75" cy="80" r="32" fill="#DC2626" />
                  <circle cx="75" cy="80" r="36" fill="#EF4444" opacity="0.3" />
                  <path
                    d="M66 130 L66 45 Q75 35 84 45 L84 130 Z"
                    fill="#F8FAFC"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <path d="M66 45 Q75 35 84 45" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                  <path d="M48 130 L48 65 Q55 58 60 65 L60 130 Z" fill="#E2E8F0" />
                  <path d="M32 130 L32 80 Q38 75 42 80 L42 130 Z" fill="#CBD5E1" />
                  <path d="M90 130 L90 65 Q95 58 102 65 L102 130 Z" fill="#E2E8F0" />
                  <path d="M108 130 L108 80 Q112 75 118 80 L118 130 Z" fill="#CBD5E1" />
                  <rect x="15" y="130" width="120" height="20" rx="3" fill="#020617" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="35" cy="136" r="3" fill="#EF4444" />
                  <circle cx="55" cy="136" r="3.5" fill="#EF4444" />
                  <circle cx="75" cy="136" r="4" fill="#EF4444" />
                  <circle cx="95" cy="136" r="3.5" fill="#EF4444" />
                  <circle cx="115" cy="136" r="3" fill="#EF4444" />
                </svg>
              </div>
            </motion.div>

            {/* STICKER 8: COX'S BAZAR SEA BEACH */}
            <motion.div
              whileHover={{ scale: 1.15, y: -16, zIndex: 40 }}
              onHoverStart={() => setHoveredSticker("Cox's Bazar Sea Beach & Moon Boat (Sampan)")}
              onHoverEnd={() => setHoveredSticker(null)}
              onClick={() => triggerStickerClick('cox')}
              className="absolute left-[88%] bottom-2 z-30 cursor-pointer transform rotate-3 transition-transform"
            >
              <div className="p-1 rounded-3xl bg-white dark:bg-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_35px_rgba(0,0,0,0.6)] border-4 border-white dark:border-neutral-700">
                <svg viewBox="0 0 150 150" className="w-32 sm:w-38 h-32 sm:h-38 rounded-2xl bg-gradient-to-b from-[#38BDF8] via-[#60A5FA] to-[#FDE047]">
                  <circle cx="115" cy="35" r="18" fill="#FBBF24" />
                  <path d="M20 30 Q30 20 45 28 Q55 22 65 30 Z" fill="#FFFFFF" opacity="0.8" />
                  <path d="M0 70 Q40 60 80 70 T150 70 L150 120 L0 120 Z" fill="#0284C7" />
                  <path d="M0 85 Q40 75 80 85 T150 85 L150 135 L0 135 Z" fill="#0369A1" />
                  <path d="M0 110 Q50 95 100 105 T150 100 L150 150 L0 150 Z" fill="#FACC15" />
                  <g transform="translate(30, 85)">
                    <path
                      d="M5 25 Q15 0 25 15 Q45 25 65 15 Q75 0 85 25 Q45 32 5 25 Z"
                      fill="#78350F"
                      stroke="#451A03"
                      strokeWidth="2"
                    />
                    <path d="M25 18 Q45 24 65 18" stroke="#FDE047" strokeWidth="1.5" fill="none" />
                    <ellipse cx="45" cy="22" rx="10" ry="4" fill="#0D9488" opacity="0.8" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full text-center pt-8 pb-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-2 flex-wrap">
          <BrandLogo size={18} className="shrink-0" />
          <span>© 2026 {PERSONAL_INFO.fullName}. Crafted with pride in</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Bangladesh</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-600" title="Red Sun" />
          <span>· All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
